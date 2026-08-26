import { spawn, spawnSync } from 'node:child_process';
import { setTimeout as sleep } from 'node:timers/promises';
import { BASE } from './harness.mjs';
import journeys from './journeys.mjs';
import sweep from './sweep.mjs';
import responsive from './responsive.mjs';
import darkMode from './darkmode.mjs';

/**
 * Runs the end-to-end suite against a dev server.
 *
 * Starts one itself unless something is already listening on BASE, so the
 * suite works both locally (server already up) and in CI (cold).
 */

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

const waitForServer = async (attempts = 40) => {
  for (let i = 0; i < attempts; i++) {
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
      `E2E_BASE ${BASE} is unavailable. Auto-start is only supported for local HTTP URLs; start the configured server before running the suite.`
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

if (await isUp()) {
  console.log(`Using the dev server already running at ${BASE}`);
} else {
  console.log(`Starting a dev server for ${BASE}`);
  server = startLocalDevServer();

  if (!(await waitForServer())) {
    console.error(`Dev server never came up at ${BASE}`);
    stopServer(server);
    process.exit(1);
  }
}

const suites = [
  ['journeys', journeys],
  ['sweep', sweep],
  ['responsive', responsive],
  ['dark mode', darkMode],
];

let failed = 0;
let passed = 0;

try {
  for (const [name, suite] of suites) {
    console.log(`\n=== ${name} ===`);
    const run = await suite();
    passed += run.passed;
    failed += run.failures.length;

    if (run.pageErrors.length) {
      console.log(`\n  uncaught page errors during ${name}: ${run.pageErrors.length}`);
      run.pageErrors.slice(0, 8).forEach((error) => console.log(`    ${error}`));
      failed += run.pageErrors.length;
    }
  }
} finally {
  stopServer(server);
}

console.log(`\n${'='.repeat(48)}`);
console.log(failed === 0 ? `All e2e checks passed (${passed})` : `${failed} failed, ${passed} passed`);
process.exit(failed === 0 ? 0 : 1);
