# ARO — Codex Autonomous Execution Harness

> Purpose: make Codex own an approved ARO work package end-to-end with the least possible founder intervention while preserving the authority, safety, privacy, Trust, money, and package gates in `AGENTS.md`.
>
> This document controls **execution behavior only**. It does not authorize product scope, schema, RLS, auth, money, Trust, privacy, AI authority, location, rewards, or other consequential behavior that is not already authorized by an approved package specification.

---

## 1. Operating model

When the director says any equivalent of:

- `execute the next legal ARO package`;
- `run package <ID> end-to-end`;
- `continue the current package autonomously`;
- `finish everything you can and leave only real blockers for me`;

Codex becomes the **package owner** for that run.

The package owner is responsible for reaching the package's authorized success state, not merely for completing the next obvious coding step.

The default loop is:

`resolve authority → baseline → implement → verify → inspect → fix → re-verify → hostile review → evidence → status sync → handoff`

Finishing one phase is never, by itself, a reason to return control to the director.

---

## 2. Resolve the legal next action first

Before changing runtime code, configuration, schema, or data:

1. Read `AGENTS.md` fully.
2. Read `ARO_CURRENT_STATE.md`.
3. Read `ARO_SPEC_INDEX.md`.
4. Read `ARO_IMPLEMENTATION_STATUS.md`.
5. Read `ARO_BUILD_PLAYBOOK.md`.
6. Run `npm run aro:preflight` and inspect its findings.
7. Resolve the assigned/current package and its dependency gates.
8. Read the package spec and every specialist document it names.
9. Confirm the package is `SPEC-READY` or that the requested task is a governance/tooling task that does not alter governed runtime behavior.
10. For architecture/dependency questions, use the Graphify skill when available before broad repository exploration.

If a higher-priority package is blocked by a founder/provider decision, do **not** silently jump ahead to a blocked later package. Complete only independent work that is already authorized and does not violate sequencing.

---

## 3. Autonomous continuation contract

Once an approved package is executable, continue without asking whether to proceed through every applicable activity below:

- inspect the affected code paths and existing tests;
- establish a baseline for behavior/performance the package depends on;
- make a concise implementation plan tied to acceptance criteria;
- implement frontend behavior;
- implement authorized server/backend logic;
- implement authorized Supabase changes through the established migration/RLS patterns;
- add or update unit/integration/E2E coverage;
- run targeted tests while iterating;
- run lint and production build checks;
- launch the application for user-facing work;
- inspect behavior in-browser rather than assuming compilation equals correctness;
- verify relevant desktop, tablet, and mobile breakpoints;
- verify light/dark themes where applicable;
- capture visual evidence for user-facing acceptance criteria;
- verify loading, empty, populated, validation, pending, success, failure, retry, timeout/offline states where applicable;
- inspect console/page errors;
- verify accessibility basics required by the package;
- verify Trust/RLS/security behavior with server/data-level evidence when applicable;
- compare measured performance against the package budget when a performance claim is in scope;
- fix defects discovered by testing or visual inspection;
- repeat affected verification after every fix;
- inspect `git diff --stat`, `git diff --check`, and the final diff;
- run the ARO full verification gate before delivery;
- perform a fresh hostile review against the package spec;
- update the traceability/evidence rows;
- update `ARO_IMPLEMENTATION_STATUS.md` and `ARO_SPEC_INDEX.md` when status changes;
- update `ARO_CURRENT_STATE.md` and append `ARO_CHANGELOG.md` when the existing always-current rules require it;
- prepare the branch/PR delivery report.

Do not ask the director routine questions such as:

- `Should I continue?`
- `Should I do phase 2?`
- `Should I implement the backend?`
- `Should I run the tests?`
- `Should I check mobile?`
- `Should I take screenshots?`
- `Should I fix the test failures I introduced?`

Those are package-owner responsibilities when they are applicable and authorized.

---

## 4. Progress before questions

When a real blocker appears:

1. record the blocker precisely;
2. determine which tasks are independent of it;
3. complete every safe independent task that remains in scope;
4. gather the smallest amount of evidence the director needs to decide;
5. ask only for the decision, credential, access, or approval that cannot be resolved from repository authority.

Do not stop the entire package because one branch of work is blocked if other approved work can continue safely.

---

## 5. Director stop conditions

Stop and request director input only when at least one of these is true:

- `AGENTS.md` explicitly requires director approval;
- required package authority/specification is missing or contradictory;
- continuing would add a dependency or alter the approved stack/brand/design language without authorization;
- a schema/RLS/auth/privacy/Trust/money/location/AI-authority change is not literally authorized by the package;
- destructive production data action would be required;
- credential rotation, secret disclosure, or provider-console action is required;
- an external consequential action would be performed without explicit package authorization and user approval semantics;
- a required service/account/MCP credential is unavailable;
- a security, money, legal, privacy, physical-safety, or Trust conflict cannot be resolved from governing documents;
- the requested result requires expanding package scope rather than repairing implementation inside the approved behavior;
- an unrecoverable technical blocker remains after reasonable debugging attempts and the best available fallback/evidence has been collected.

A test failure, lint error, TypeScript/JavaScript bug, broken layout, mobile regression, missing screenshot, or implementation defect is **not** a director stop condition. Debug it.

---

## 6. Evidence contract

No criterion becomes `PASS` because Codex believes the code looks correct.

### User-facing behavior

Use the browser and capture evidence at package-relevant routes. Unless the package specifies different breakpoints, prefer:

- mobile: `390x844`;
- tablet: `768x1024`;
- desktop: `1440x900`.

For surfaces that support both themes, verify light and dark. Use `npm run aro:evidence -- --package <ID> --routes <comma-separated-routes>` as a baseline capture mechanism, then inspect the rendered output.

### Backend/data behavior

Use automated tests, request/response evidence, database queries, migration output, or other server-level evidence. A screenshot is not evidence that authorization or persistence is correct.

### RLS/Trust/security

Verify at the enforcement boundary. Record the policy/trigger/server behavior and relevant positive/negative tests. Never mark a security criterion PASS from client behavior alone.

### Performance

Record an actual measurement and compare it to the package budget/baseline. Avoid qualitative claims such as `fast` or `optimized` without evidence.

---

## 7. Verification gates

Use the smallest useful feedback loop while implementing, then run the full gate before delivery.

### Iteration gate

```bash
npm run aro:verify:quick
```

### Delivery gate

```bash
npm run aro:verify
```

The delivery gate includes repository diff checks, lint, tests, production build, and the existing E2E suite. Package-specific checks still apply in addition to it.

If a gate fails because of the current package, fix it and rerun. If it exposes a clearly pre-existing unrelated failure, prove that with baseline evidence and report it without silently rewriting unrelated code.

---

## 8. Multi-agent / parallel work rule

Codex may use isolated agents/worktrees when available for independent work, but one **package owner** remains responsible for convergence.

Useful delegated roles:

- implementation/research worker;
- browser/visual QA worker;
- security/RLS review worker;
- fresh-context final reviewer.

Delegated agents do not gain new authority. Each must obey `AGENTS.md`, package scope, and specialist constraints. Parallelism is for independent work only; do not create competing migrations, schema edits, or overlapping writes that require ordered coordination.

---

## 9. Cost/context discipline

Autonomy should reduce work, not create agent theater.

- Prefer repository search/Graphify over rereading the entire repository.
- Read only specialist documents relevant to the active package after the required top-level read order.
- Reuse existing primitives and tests rather than generating replacements.
- Use targeted tests during iteration and the full gate only at meaningful convergence points.
- Delegate only independent or review work that benefits from fresh context.
- Do not spawn multiple agents to solve the same task unless comparing approaches is explicitly useful.
- Keep stable project truth in repository documents, not chat memory.

---

## 10. Required final handoff

Do not end with a vague progress update. End in one of two states.

### A. Package ready for director review

Report:

1. package ID + spec version/status;
2. acceptance criteria implemented/verified;
3. files/migrations materially changed;
4. exact validation commands and results;
5. visual evidence paths/screenshots for user-facing work;
6. RLS/security/Trust evidence when applicable;
7. performance measurements when applicable;
8. known deviations or pre-existing failures;
9. branch/PR state;
10. **Director actions remaining: none** or a minimal explicit list.

### B. Blocked on director action

Report everything above that was completed, then provide a final section named:

`Director actions remaining`

Each item must contain:

- the exact decision/action needed;
- why Codex cannot safely perform it;
- where to do it (provider console, credential store, approval, etc.);
- the minimum acceptable choice/input;
- what Codex can resume immediately afterward.

Do not mix optional suggestions into the required founder-action list.

---

## 11. One-line director command

The normal director prompt should be able to stay this short:

> **Execute the next legal ARO package end-to-end. Own all authorized implementation, Supabase/backend work, tests, browser QA, screenshots/evidence, debugging, self-review, status updates, and PR preparation. Do not stop between phases. Finish everything you safely can and return only genuine director actions at the end.**

Everything else should come from the repository contract and the active package.
