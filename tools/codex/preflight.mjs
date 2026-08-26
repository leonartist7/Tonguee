import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { spawnSync } from 'node:child_process';

const strict = process.argv.includes('--strict');

const required = [
  'AGENTS.md',
  'ARO_CODEX_AUTONOMY.md',
  'ARO_CURRENT_STATE.md',
  'ARO_SPEC_INDEX.md',
  'ARO_IMPLEMENTATION_STATUS.md',
  'ARO_BUILD_PLAYBOOK.md',
  'specs/PACKAGE_TEMPLATE.md',
];

const failures = [];
const warnings = [];

const run = (command, args) =>
  spawnSync(command, args, { encoding: 'utf8', shell: process.platform === 'win32' });

console.log('\nARO Codex preflight');
console.log('='.repeat(64));

for (const file of required) {
  if (existsSync(file)) {
    console.log(`ok   ${file}`);
  } else {
    console.log(`FAIL ${file} missing`);
    failures.push(`${file} missing`);
  }
}

const branchResult = run('git', ['branch', '--show-current']);
const branch = branchResult.status === 0 ? branchResult.stdout.trim() : '';
if (branch) console.log(`\nbranch: ${branch}`);
if (branch === 'main' || branch === 'master') {
  warnings.push('Package implementation should occur on a dedicated package branch/worktree, not directly on the default branch.');
}

// Never read .env. Only ask Git whether the path is tracked.
const trackedEnv = run('git', ['ls-files', '--error-unmatch', '.env']);
if (trackedEnv.status === 0) {
  failures.push('.env is tracked by Git; ARO-SEC0 remains a repository secret-hygiene blocker until the approved remediation/decision is completed.');
} else {
  console.log('ok   .env is not tracked');
}

if (existsSync('ARO_SPEC_INDEX.md')) {
  const index = readFileSync('ARO_SPEC_INDEX.md', 'utf8');
  const rows = index
    .split(/\r?\n/)
    .filter((line) => /^\|/.test(line))
    .map((line) => line.split('|').slice(1, -1).map((cell) => cell.trim()))
    .filter((cells) => cells.length >= 3)
    .filter((cells) => /\*\*(?:BLOCKED|IN-PROGRESS|SPEC-READY)/.test(cells[1] || ''));

  console.log('\nprogram candidates / gates from ARO_SPEC_INDEX.md:');
  if (rows.length === 0) {
    console.log('  none detected mechanically; resolve current work from the governing docs.');
  } else {
    for (const [name, status, authority, gate] of rows) {
      console.log(`  - ${name}: ${status.replaceAll('**', '')}`);
      if (authority) console.log(`      authority: ${authority.replaceAll('`', '')}`);
      if (gate) console.log(`      next gate: ${gate.replaceAll('`', '')}`);
    }
  }
}

if (existsSync('specs')) {
  const specs = readdirSync('specs').filter((name) => name.endsWith('.md')).sort();
  console.log(`\nspec files: ${specs.length}`);
  for (const name of specs.slice(0, 12)) console.log(`  - specs/${name}`);
  if (specs.length > 12) console.log(`  ... ${specs.length - 12} more`);
}

if (warnings.length) {
  console.log('\nWARNINGS');
  for (const warning of warnings) console.log(`  - ${warning}`);
}

if (failures.length) {
  console.log('\nBLOCKERS / FAILED PREFLIGHT CHECKS');
  for (const failure of failures) console.log(`  - ${failure}`);
  console.log('\nResolve authority from AGENTS.md/ARO_CURRENT_STATE.md before runtime implementation.');
  if (strict) process.exit(1);
} else {
  console.log('\nPreflight has no mechanical blockers. Governing package/spec gates still apply.');
}
