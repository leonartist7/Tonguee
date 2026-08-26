---
name: aro-visual-qa
description: "Use for ARO user-facing package verification, browser inspection, responsive QA, dark-mode checks, screenshot evidence, accessibility smoke checks, and visual regression follow-up."
---

# ARO Visual QA

Visual QA is an implementation gate, not decoration. A user-facing package is not verified merely because it builds or because screenshots were captured.

## Mandatory repository read order

Before inspecting or changing package code, preserve the operating-contract sequence:

1. `AGENTS.md`
2. `ARO_CURRENT_STATE.md`
3. `ARO_SPEC_INDEX.md`
4. `ARO_IMPLEMENTATION_STATUS.md`
5. `ARO_BUILD_PLAYBOOK.md`
6. active package specification
7. every governing design/experience/specialist document named by the package
8. `ARO_CODEX_AUTONOMY.md` for evidence/continuation behavior

## Baseline capture

Use the repository evidence runner for package-relevant routes:

```bash
npm run aro:evidence -- --package <PACKAGE_ID> --routes /route-a,/route-b
```

Defaults cover:

- mobile `390x844`;
- tablet `768x1024`;
- desktop `1440x900`;
- light and dark themes.

Override routes/viewports/themes only when the package requires something different.

## Inspect, do not merely capture

Review every relevant screenshot/render and the evidence manifest for:

- clipping, overflow, unexpected empty space, or overlapping content;
- incorrect stacking/layering/z-index;
- broken typography hierarchy or unreadable text;
- dark-mode surfaces/contrast regressions;
- context-driven theme state disagreeing with rendered theme;
- unintended horizontal scrolling;
- missing/loading/error/empty/success states where applicable;
- obvious keyboard/focus/touch-target/accessibility regressions;
- motion or animation that obscures state or causes layout instability;
- missing assets, broken images, console/page/request failures;
- mobile layouts that merely shrink desktop instead of remaining usable;
- Trust, price, commitment, privacy, or safety information being visually obscured.

If a defect is found, fix it if it is inside the approved package, then recapture and re-inspect the affected evidence.

## Browser checks

Use the existing E2E suite in addition to screenshots:

```bash
npm run test:e2e
```

The suite already checks journeys, route sweeps, responsive overflow, and dark mode. Add package-specific coverage when the package introduces behavior not covered by the generic suite.

## Evidence naming

Evidence produced by `aro:evidence` is stored under:

`artifacts/codex-evidence/<package>/<timestamp>/`

The directory is intentionally ignored by Git. Reference relevant paths in the delivery report or attach the screenshots to the PR/task through the available Codex/GitHub surface.

## Result

Report concrete pass/fail observations. Do not use `looks good` as evidence. If inspection is impossible in the current environment, state why and identify the exact missing capability rather than claiming visual verification.
