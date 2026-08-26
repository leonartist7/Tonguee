---
name: aro-final-review
description: "Use at the end of an ARO package before delivery/PR review. Performs fresh-context hostile review of the diff, acceptance criteria, tests, evidence, security/Trust implications, and documentation/status synchronization."
---

# ARO Final Review

Act as an independent hostile reviewer. Do not defend the implementation merely because another agent wrote it.

## Mandatory repository read order

Preserve the operating-contract sequence before judging package correctness:

1. `AGENTS.md`
2. `ARO_CURRENT_STATE.md`
3. `ARO_SPEC_INDEX.md`
4. `ARO_IMPLEMENTATION_STATUS.md`
5. `ARO_BUILD_PLAYBOOK.md`
6. active package specification
7. every governing/specialist document named by the package
8. `ARO_CODEX_AUTONOMY.md` for evidence/continuation behavior
9. final diff and changed-file list
10. verification output and visual/backend evidence

## Review questions

### Scope and authority

- Does every consequential change trace to an approved requirement?
- Did the implementation silently expand scope, alter terminology, add a dependency, or redesign behavior?
- Are migrations append-only and ordered correctly?

### Correctness

- Are happy path, failure path, retries, pending states, and edge cases handled?
- Is persistence/authorization enforced at the correct boundary rather than trusted to the client?
- Are race conditions, duplicate writes, stale state, or idempotency risks introduced?

### Security / privacy / Trust / money

- Is RLS still the enforcement boundary?
- Are secrets/service-role credentials server-only?
- Is private/sensitive data visibility unchanged except where explicitly authorized?
- Are Trust eligibility and verified-only publishing preserved?
- Does any UI or client code calculate/authorize consequential money behavior?
- Did any AI action gain authority not explicitly granted by spec?

### UX / accessibility / performance

- Are required states present and usable on mobile and desktop?
- Is dark mode/reduced motion/keyboard/focus behavior preserved where applicable?
- Do screenshots show clipping, overflow, bad hierarchy, or hidden consequential information?
- Does the evidence manifest contain console/page/request failures?
- Are performance claims supported by measurements?

### Verification quality

- Does every PASS criterion have real evidence?
- Were package-relevant tests added rather than relying only on generic tests?
- Was `npm run aro:verify` run after the final fixes?
- Were visual defects fixed and then re-captured?

### Repository hygiene

- Is the diff minimal and package-scoped?
- Any TODO/FIXME, filler, dead UI, debug logging, generated artifacts, or unrelated formatting?
- Do status/current-state/changelog documents reflect the exact new state when required?

## Disposition

Return one of:

- `APPROVE FOR DIRECTOR REVIEW` — no material package defect remains;
- `REQUEST CHANGES` — list concrete defects ordered by severity and send them back to the package owner;
- `BLOCKED ON DIRECTOR` — only when the remaining issue is genuinely outside agent authority.

A reviewer finding is not a reason to stop if the package owner can fix it. Route fixable findings back to implementation, then review again.
