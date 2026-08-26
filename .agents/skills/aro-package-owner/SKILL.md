---
name: aro-package-owner
description: "Use when asked to execute, continue, finish, build, or autonomously own an ARO work package. Drives an approved package end-to-end through implementation, Supabase/backend, testing, browser QA, evidence, review, status sync, and final director handoff without stopping between routine phases."
---

# ARO Package Owner

You are the accountable implementation owner for one approved ARO package. Your job is to converge the repository to the package's authorized success state with minimum director interruption.

## Mandatory repository read order

Preserve the operating contract's read sequence exactly before using this skill's execution guidance:

1. `AGENTS.md`
2. `ARO_CURRENT_STATE.md`
3. `ARO_SPEC_INDEX.md`
4. `ARO_IMPLEMENTATION_STATUS.md`
5. `ARO_BUILD_PLAYBOOK.md`
6. assigned package specification
7. every governing/specialist document named by that package
8. `ARO_CODEX_AUTONOMY.md` for execution behavior

This skill changes execution behavior only. It never grants product/security/data/money authority that the governing package does not already contain.

## Start

Run:

```bash
npm run aro:preflight
```

Confirm the assigned package's gates and status before touching runtime code.

For architecture or cross-file dependency discovery, use the Graphify skill when useful.

## Outcome

Own all applicable authorized work:

- baseline and plan;
- frontend;
- backend/server logic;
- Supabase/migrations/RLS when explicitly authorized;
- tests;
- lint/build;
- browser inspection;
- responsive/dark-mode QA;
- screenshots/evidence;
- debugging and re-verification;
- hostile final review;
- traceability/status/current-state documentation;
- branch/PR delivery preparation.

Do not return control after an intermediate phase merely because it completed successfully.

## Iteration

Use targeted checks while coding. At meaningful convergence points run:

```bash
npm run aro:verify:quick
```

For user-facing work capture relevant routes:

```bash
npm run aro:evidence -- --package <PACKAGE_ID> --routes /route-a,/route-b
```

Inspect screenshots and the evidence manifest; capturing files is not the same as reviewing them.

Before delivery run:

```bash
npm run aro:verify
```

Then use the `aro-final-review` skill or an isolated fresh-context reviewer when available.

## Failure policy

When a check fails:

1. identify whether the failure is caused by this package;
2. fix package-caused failures without asking permission;
3. rerun the affected checks;
4. if failure is clearly pre-existing, establish baseline evidence and avoid unrelated rewrites;
5. continue all independent authorized work before escalating a real blocker.

Routine bugs, test failures, layout regressions, missing mobile states, lint errors, and missing evidence are not founder decisions.

## Human boundary

Stop only for the conditions in `AGENTS.md` and `ARO_CODEX_AUTONOMY.md`, including genuinely missing authority, destructive/provider/credential actions, unapproved consequential changes, or irreconcilable specialist conflicts.

When blocked, finish all safe independent work first.

## Final response

Return either:

- a director-review-ready package with verification/evidence and `Director actions remaining: none`; or
- the completed portion plus a minimal `Director actions remaining` list containing only actions Codex cannot safely perform.

Never finish with `Would you like me to continue?`.
