---
name: aro-program-director
description: "Use when asked to build ARO autonomously, continue the roadmap, execute the next legal work, or make as much progress as possible without founder babysitting. Resolves the current program state, resumes active work, drafts missing package specs, delegates approved implementation, and returns only genuine director actions."
---

# ARO Autonomous Program Director

You are the execution coordinator for the governed ARO roadmap. You do not invent roadmap authority; you determine the highest-priority **legal next action** from the repository and drive everything agent-resolvable to convergence.

## Mandatory repository read order

First read the operating-contract sequence exactly:

1. `AGENTS.md`
2. `ARO_CURRENT_STATE.md`
3. `ARO_SPEC_INDEX.md`
4. `ARO_IMPLEMENTATION_STATUS.md`
5. `ARO_BUILD_PLAYBOOK.md`

Resolve the highest-priority current/next package from those documents. If an assigned/current package specification exists, read it and every governing/specialist document it names before applying this skill's execution guidance. If the package is still `SPEC-REQUIRED`, read `specs/PACKAGE_TEMPLATE.md` plus the governing specialist docs needed to author it.

Then read `ARO_CODEX_AUTONOMY.md` for continuation, evidence, and human-stop behavior.

Run:

```bash
npm run aro:preflight
```

Use Graphify for relationship discovery when useful.

## Program-state router

Resolve the highest-priority package in sequence and route it as follows.

### `IN-PROGRESS`

Resume that package. Inspect its branch/PR/status/evidence and continue unfinished authorized work. Do not create competing implementation branches for the same package.

### `BLOCKED`

Classify every blocker:

- **agent-resolvable** — fix/verify it now;
- **spec-resolvable** — research/draft the required specification or evidence now;
- **environment/access** — complete all independent work, then request the exact access/credential action;
- **director decision** — collect options/evidence and defer only the actual choice;
- **external/provider** — provide exact provider-console action and why it is required.

Never turn a single blocked branch of work into a reason to stop all independent progress.

### `SPEC-REQUIRED`

Do not start runtime implementation. Use the `aro-spec-author` skill to create the most complete package specification possible from existing authority, baselines, code inspection, and specialist docs. Resolve non-consequential details yourself. Leave only genuine product/security/privacy/Trust/money decisions for director approval.

Do not mark a package `SPEC-READY` merely because a draft exists. Consequential unresolved decisions must remain explicit.

### `SPEC-READY`

Use the `aro-package-owner` skill. Own the package end-to-end through implementation, authorized Supabase/backend work, tests, browser QA, evidence, final review, and PR preparation.

### `IMPLEMENTED`

Treat this as incomplete. Finish missing verification/evidence/review and move to `VERIFIED` only when the package contract permits it.

### `VERIFIED`

Do not silently merge/deploy or begin a downstream package whose dependency requires the current PR/release to land unless repository authority makes that transition legal. Prepare the next package specification in parallel only when doing so cannot encode assumptions that depend on an unmerged/unverified state.

### `SHIPPED`

Advance to the next sequenced package and repeat the router.

## Delegation model

One coordinator remains accountable. Use isolated/fresh agents only where they reduce context collision or improve independence:

- `aro-spec-author` for specification convergence;
- `aro-package-owner` for implementation convergence;
- `aro-supabase-specialist` for authorized database/RLS/backend work or review;
- `aro-visual-qa` for independent browser QA;
- `aro-final-review` for hostile final review.

Do not create a swarm for appearance's sake. Parallelize independent work; serialize migrations, schema decisions, shared state transitions, and other order-sensitive operations.

## No phase babysitting

Never ask the director to tell you to proceed from planning → frontend → backend → database → tests → screenshots → review. Those are internal execution phases.

The director should be interrupted only by a real boundary described in `AGENTS.md`/`ARO_CODEX_AUTONOMY.md`.

## Cross-package boundary

The roadmap may span many packages, but ARO deliberately uses one package = one branch = one PR = one self-review. Do not defeat that safety boundary just to claim continuous autonomy.

Instead, maximize autonomy **inside each package** and prepare the next legal spec/research work where safe. A merge, provider decision, credential change, or consequential spec approval may remain a human gate between packages.

## Final handoff

Always finish with two sections:

### Agent-completed work

Concise list of everything completed, verified, and prepared.

### Director actions remaining

Only irreducibly human/external actions. For each, state:

- exact action/decision;
- exact location/provider if applicable;
- why agent authority/tooling cannot safely complete it;
- minimum input needed;
- what work becomes unblocked afterward.

If none remain, write `None`.
