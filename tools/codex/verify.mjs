import { existsSync, readFileSync } from 'node:fs';
import { extname } from 'node:path';
import { spawnSync } from 'node:child_process';

const quick = process.argv.includes('--quick');
const results = [];

const spawn = (command, args, options = {}) =>
  spawnSync(command, args, {
    encoding: options.capture ? 'utf8' : undefined,
    stdio: options.capture ? 'pipe' : 'inherit',
    shell: process.platform === 'win32',
  });

const run = (label, command, args) => {
  console.log(`\n=== ${label} ===`);
  const result = spawn(command, args);
  const ok = result.status === 0;
  results.push({ label, ok, status: result.status });
  if (!ok) console.error(`FAILED: ${label} (exit ${result.status ?? 'unknown'})`);
  return ok;
};

const capture = (command, args) => {
  const result = spawn(command, args, { capture: true });
  return result.status === 0 ? result.stdout.trim() : '';
};

let baseCommit = capture('git', ['merge-base', 'HEAD', 'origin/main']);
if (!baseCommit) baseCommit = capture('git', ['merge-base', 'HEAD', 'main']);

const changedFiles = () => {
  const names = new Set();
  const add = (output) => output.split(/\r?\n/).filter(Boolean).forEach((name) => names.add(name));

  if (baseCommit) add(capture('git', ['diff', '--name-only', `${baseCommit}...HEAD`]));
  add(capture('git', ['diff', '--name-only']));
  add(capture('git', ['diff', '--cached', '--name-only']));
  add(capture('git', ['ls-files', '--others', '--exclude-standard']));
  return [...names];
};

const sourceExtensions = new Set(['.js', '.jsx', '.ts', '.tsx', '.mjs', '.cjs']);
const hygieneOffenders = [];

for (const file of changedFiles()) {
  if (!existsSync(file)) continue;
  if (!sourceExtensions.has(extname(file))) continue;
  if (file.startsWith('tools/codex/') || file.startsWith('e2e/')) continue;

  const content = readFileSync(file, 'utf8');
  const problems = [];
  if (/\bTODO\b|\bFIXME\b/.test(content)) problems.push('TODO/FIXME');
  if (/\bconsole\.log\s*\(/.test(content)) problems.push('console.log');
  if (problems.length) hygieneOffenders.push(`${file}: ${problems.join(', ')}`);
}

console.log(`\nARO verification gate (${quick ? 'quick' : 'full'})`);
console.log('='.repeat(64));

if (baseCommit) run('committed branch diff --check', 'git', ['diff', '--check', `${baseCommit}...HEAD`]);
run('staged diff --check', 'git', ['diff', '--cached', '--check']);
run('working tree diff --check', 'git', ['diff', '--check']);
run('lint', 'npm', ['run', 'lint']);
run('unit/integration tests', 'npm', ['test']);
run('production build', 'npm', ['run', 'build']);

if (!quick) {
  run('end-to-end / responsive / dark-mode suite', 'npm', ['run', 'test:e2e']);
}

if (hygieneOffenders.length) {
  console.log('\n=== changed-source hygiene ===');
  for (const offender of hygieneOffenders) console.error(`FAILED: ${offender}`);
  results.push({ label: 'changed-source hygiene', ok: false, status: 1 });
} else {
  console.log('\n=== changed-source hygiene ===');
  console.log('ok   no TODO/FIXME or console.log in changed product source files, including untracked additions');
  results.push({ label: 'changed-source hygiene', ok: true, status: 0 });
}

console.log('\n' + '='.repeat(64));
for (const result of results) console.log(`${result.ok ? 'PASS' : 'FAIL'} ${result.label}`);

const failed = results.filter((result) => !result.ok);
if (failed.length) {
  console.error(`\n${failed.length} verification gate(s) failed.`);
  process.exit(1);
}

console.log(`\nAll ${quick ? 'quick' : 'full'} verification gates passed.`);
