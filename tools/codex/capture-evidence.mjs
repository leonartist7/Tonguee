import { mkdirSync, writeFileSync } from 'node:fs';
import { spawn, spawnSync } from 'node:child_process';
import { setTimeout as sleep } from 'node:timers/promises';
import { join } from 'node:path';
import { BASE, launch, seedPlayer } from '../../e2e/harness.mjs';

const args = process.argv.slice(2);
const value = (name, fallback) => {
  const index = args.indexOf(`--${name}`);
  return index >= 0 && args[index + 1] ? args[index + 1] : fallback;
};

const packageId = value('package', 'manual').replace(/[^a-zA-Z0-9._-]+/g, '-');
const routes = value('routes', '/').split(',').map((route) => route.trim()).filter(Boolean);
const themes = value('themes', 'light,dark').split(',').map((theme) => theme.trim()).filter(Boolean);
const viewports = value('viewports', '390x844,768x1024,1440x900')
  .split(',')
  .map((item) => item.trim())
  .filter(Boolean)
  .map((item) => {
    const [width, height] = item.split('x').map(Number);
    if (!Number.isFinite(width) || !Number.isFinite(height)) throw new Error(`Invalid viewport: ${item}`);
    return { width, height };
  });

const baseUrl = new URL(BASE);
const localHosts = new Set(['localhost', '127.0.0.1', '::1']);

const isUp = async () => {
  try {
    const response = await fetch(BASE, { signal: AbortSignal.timeout(1500) });
    return response.ok;
  } catch {
    return false;
  }
};

const waitForServer = async (attempts = 50) => {
  for (let index = 0; index < attempts; index++) {
    if (await isUp()) return true;
    await sleep(500);
  }
  return false;
};

const stopServer = (child) => {
  if (!child?.pid) return;

  try {
    if (process.platform === 'win32') {
      spawnSync('taskkill', ['/pid', String(child.pid), '/T', '/F'], { stdio: 'ignore' });
    } else {
      process.kill(-child.pid, 'SIGTERM');
    }
  } catch {
    try {
      child.kill('SIGTERM');
    } catch {
      // Already gone.
    }
  }
};

const startLocalDevServer = () => {
  if (baseUrl.protocol !== 'http:' || !localHosts.has(baseUrl.hostname)) {
    throw new Error(
      `E2E_BASE ${BASE} is unavailable. Auto-start is only supported for local HTTP URLs; start the configured server before running evidence capture.`
    );
  }

  const port = baseUrl.port || '80';
  const npm = process.platform === 'win32' ? 'npm.cmd' : 'npm';
  return spawn(
    npm,
    ['run', 'dev', '--', '--host', baseUrl.hostname, '--port', port, '--strictPort'],
    {
      stdio: 'ignore',
      detached: process.platform !== 'win32',
    }
  );
};

let server = null;
if (!(await isUp())) {
  console.log(`Starting dev server for evidence capture at ${BASE}`);
  server = startLocalDevServer();
  if (!(await waitForServer())) {
    stopServer(server);
    throw new Error(`Dev server never became available at ${BASE}`);
  }
}

const stamp = new Date().toISOString().replace(/[:.]/g, '-');
const outDir = join('artifacts', 'codex-evidence', packageId, stamp);
mkdirSync(outDir, { recursive: true });

const manifest = {
  package: packageId,
  base: BASE,
  createdAt: new Date().toISOString(),
  routes,
  themes,
  viewports,
  screenshots: [],
  pageErrors: [],
  consoleErrors: [],
  requestFailures: [],
  responseFailures: [],
};

const safeRoute = (route) => (route === '/' ? 'home' : route.replace(/^\/+/, '').replace(/[^a-zA-Z0-9._-]+/g, '-'));
let browser = null;

try {
  browser = await launch();

  for (const viewport of viewports) {
    for (const theme of themes) {
      const context = await browser.newContext({ viewport });
      const page = await context.newPage();
      let activeRoute = '/';

      page.on('pageerror', (error) => {
        manifest.pageErrors.push({ route: activeRoute, message: String(error).slice(0, 500) });
      });
      page.on('console', (message) => {
        if (message.type() === 'error') {
          manifest.consoleErrors.push({ route: activeRoute, message: message.text().slice(0, 500) });
        }
      });
      page.on('requestfailed', (request) => {
        manifest.requestFailures.push({
          route: activeRoute,
          url: request.url(),
          method: request.method(),
          failure: request.failure()?.errorText ?? 'unknown request failure',
        });
      });
      page.on('response', (response) => {
        if (response.status() >= 500) {
          manifest.responseFailures.push({
            route: activeRoute,
            url: response.url(),
            status: response.status(),
          });
        }
      });

      // Establish a real origin before touching localStorage; opaque about:blank
      // documents may reject storage access on some browsers/platforms.
      await page.goto(BASE, { waitUntil: 'domcontentloaded' });
      await page.evaluate(({ playerData, selectedTheme }) => {
        localStorage.setItem('conversa-player', JSON.stringify(playerData));
        localStorage.setItem('theme', selectedTheme);
      }, { playerData: seedPlayer({ bookings: [], badges: [] }), selectedTheme: theme });

      for (const route of routes) {
        activeRoute = route;
        await page.goto(BASE + route, { waitUntil: 'domcontentloaded' });
        await page.waitForTimeout(1500);

        const appliedTheme = await page.evaluate(() => ({
          stored: localStorage.getItem('theme'),
          darkClass: document.documentElement.classList.contains('dark'),
        }));
        if (appliedTheme.stored !== theme || appliedTheme.darkClass !== (theme === 'dark')) {
          manifest.pageErrors.push({
            route,
            message: `ThemeProvider mismatch: requested=${theme} stored=${appliedTheme.stored} darkClass=${appliedTheme.darkClass}`,
          });
        }

        const filename = `${safeRoute(route)}__${viewport.width}x${viewport.height}__${theme}.png`;
        const path = join(outDir, filename);
        await page.screenshot({ path, fullPage: true });
        manifest.screenshots.push({ route, theme, viewport, path });
        console.log(`captured ${path}`);
      }

      await context.close();
    }
  }
} finally {
  if (browser) {
    try {
      await browser.close();
    } catch {
      // Browser already gone.
    }
  }
  stopServer(server);
}

writeFileSync(join(outDir, 'manifest.json'), JSON.stringify(manifest, null, 2));

console.log(`\nEvidence manifest: ${join(outDir, 'manifest.json')}`);
const failures = [
  ...manifest.pageErrors.map((item) => `page: ${item.route} :: ${item.message}`),
  ...manifest.consoleErrors.map((item) => `console: ${item.route} :: ${item.message}`),
  ...manifest.requestFailures.map((item) => `request: ${item.route} :: ${item.method} ${item.url} :: ${item.failure}`),
  ...manifest.responseFailures.map((item) => `response: ${item.route} :: ${item.status} ${item.url}`),
];

if (failures.length) {
  console.log(`Browser failures captured: ${failures.length}`);
  for (const failure of failures.slice(0, 12)) console.log(`  - ${failure}`);
  process.exitCode = 1;
}
