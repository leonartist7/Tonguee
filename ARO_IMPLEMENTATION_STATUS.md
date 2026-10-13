# ARO — Implementation Status Ledger

> **Status as of August 26, 2026.**
>
> This file answers one question unambiguously: **what exists, what has been verified, what is blocked, and what comes next?**
>
> Update this ledger in every package PR that changes program status. Do not rely on chat history for completion state. Use `ARO_CURRENT_STATE.md` for the concise current strategic snapshot and `ARO_CHANGELOG.md` for evolution history.

---

## 1. Executive status

### Program state

**ARO is in governed foundation / P1 pre-implementation baseline state.**

The master vision, product boundaries, architecture, migration strategy, trust/safety, money, growth, design, Shipathon scope and P1–P6 sequence have been recovered and preserved in GitHub.

The latest Living Opportunity OS experience direction and Seasons/AR strategy are also preserved as **strategic/spec-gated layers**, not as completed runtime features.

The existing Tonguee product provides a significant working vertical foundation. ARO does **not** restart from zero.

### Current gate

**ARO-SEC0 — Repository Secret Hygiene** is VERIFIED after the finalization PR merges. The founder classified the historical variables as browser-facing Supabase URL/anonymous-key categories, accepted the documented exposure, selected the Tonguee Supabase project, and chose no Git history rewrite.

### Next runtime package

**ARO-P1 — Capability and Goal Foundation**

P1 is **SPEC-READY** and is not yet IN-PROGRESS. The execution baseline is recorded in `specs/ARO-P1-BASELINE.md` and is currently **BLOCKED**: legacy lint errors, a Windows E2E harness `spawn npm ENOENT` failure, unavailable authenticated visual/a11y evidence without local credentials, and no approved safe Supabase development branch. `ARO_INFRASTRUCTURE.md` records the canonical GitHub/Vercel/Supabase targets, the quarantined secondary project, and human-only provider TODOs.

---

## 2. Status legend

- **VERIFIED** — package acceptance/evidence completed for its intended scope.
- **IMPLEMENTED** — working implementation exists, but may need targeted ARO regression verification.
- **IN-PROGRESS** — active branch/PR exists.
- **BLOCKED** — named unresolved gate prevents progression.
- **SPEC-REQUIRED** — direction exists but implementation specification is not yet approved.
- **EXPLORATORY** — future idea only.
- **VISION** — long-term direction only.
- **DEPRECATED** — retained for historical/compatibility context.

---

## 3. ARO program packages

| Package | Status | What exists | Verification / evidence | Next action |
|---|---|---|---|---|
| Recovery of deleted master vision | **VERIFIED** | `ARO_MASTER.md`, `ARO_RECOVERY_STATUS.md`; original strategic artifacts catalogued | recovery PR merged into director branch | keep synchronized with decisions |
| Current-state/changelog governance | **VERIFIED** | `ARO_CURRENT_STATE.md`, `ARO_CHANGELOG.md`, `AGENTS.md` sync rules | documentation contract exists | update on every material strategy/status PR |
| Living Opportunity OS experience direction | **SPEC-REQUIRED** | `ARO_EXPERIENCE_SYSTEM.md` | strategic doctrine preserved | adopt selectively inside package specs; validate accessibility/performance |
| ARO Seasons / real-life progression | **EXPLORATORY / SPEC-REQUIRED** | `ARO_SEASONS_AR.md` | strategy preserved | wait for reliable P5 Proof/Passport base, then specify lightweight progression |
| ARO AR / Beacons / Trails / Expeditions | **EXPLORATORY** | `ARO_SEASONS_AR.md` | strategy preserved | prove place/privacy/safety model before AR |
| P0 — Director reset | **VERIFIED** | ARO-first operating authority and migration direction | `ARO_P0_AUDIT.md` | none |
| P0.1 — Director Pack completion | **VERIFIED** | design, trust/safety, money, growth, Shipathon, decisions, executable playbook | governance-only scope preserved | none |
| SEC0 — secret hygiene | **VERIFIED** after finalization PR merge | branch `agent/aro-sec0-finalize`; `.env` removed; ignore rules hardened; founder decision recorded | `ARO_SEC0_REPORT.md` | keep deployment/local configuration outside Git |
| P1 — capability + goal foundation | **SPEC-READY / BLOCKED** | approved spec plus execution evidence in `specs/ARO-P1-BASELINE.md` | no runtime implementation; 61 unit tests pass and build passes, but migration/visual/E2E gates remain blocked | approve a safe Supabase branch; provide non-secret authenticated preview/test access; repair or authorize a scoped fix for baseline runners |
| P2 — explicit intent + demand signal | **SPEC-REQUIRED** | package definition and privacy principles | no ARO implementation | P1 verified; approve intent/aggregation/RLS spec |
| P3 — language opportunity suggestion | **SPEC-REQUIRED** | Catalyst/Opportunity Engine boundaries | no ARO implementation | P2 verified; AI/evaluation/Trust package spec |
| P4 — commitment + booking | **SPEC-REQUIRED** | commitment and money boundaries | existing Tonguee bookings are foundation, not P4 completion | P3 verified; approve state/money/concurrency spec |
| P5 — Proof + outcomes + Passport | **SPEC-REQUIRED** | Proof/Passport direction; existing Passport foundation | existing Passport is not full ARO Proof | P4 verified; approve outcome evidence spec |
| P6 — adjacent vertical | **SPEC-REQUIRED** | category-gated expansion direction | none | core loop proven + explicit category gate |

---

## 4. Existing Tonguee implementation foundation

The following implementation predates the new ARO package sequence and is intentionally reused. Classify it as **IMPLEMENTED foundation** until its dependent ARO package performs targeted regression verification.

### Product and platform

- **React/Vite/Tailwind application:** IMPLEMENTED.
- **Routing and reusable UI primitives:** IMPLEMENTED.
- **Supabase Auth/Postgres/Storage patterns:** IMPLEMENTED.
- **Persisted player/product state patterns:** IMPLEMENTED.
- **Responsive/mobile experience:** IMPLEMENTED baseline.

### Trust and administration

- **Teacher application and verification workflow:** IMPLEMENTED.
- **Private teacher documents/storage foundation:** IMPLEMENTED.
- **Verified-only publishing protection:** IMPLEMENTED and architecturally mandatory.
- **Admin role/protected routes:** IMPLEMENTED.
- **Admin application review tooling:** IMPLEMENTED.
- **Admin users/teachers/experiences/bookings/reviews tooling:** IMPLEMENTED.
- **Audit-log foundation:** IMPLEMENTED.
- **Admin analytics/revenue tooling:** IMPLEMENTED foundation.

### Marketplace and experience loop

- **Teacher/host profiles:** IMPLEMENTED in language vertical.
- **Experiences catalogue/detail:** IMPLEMENTED.
- **Booking flow:** IMPLEMENTED foundation.
- **Reviews:** IMPLEMENTED.
- **Favourite/chat/supporting marketplace journeys:** IMPLEMENTED foundation.

### Identity, progress and gamification

- **Passport:** IMPLEMENTED language-vertical foundation.
- **Points/streak/badges/player state:** IMPLEMENTED legacy foundation.
- **Shop/loadout/gamification loop:** IMPLEMENTED legacy foundation.
- **Review/couple/badge reachability fixes:** IMPLEMENTED.

Important: legacy gamification does **not** equal ARO Seasons implementation. Any future ARO progression system must follow the ethical engagement and real-world verification direction in `ARO_EXPERIENCE_SYSTEM.md` / `ARO_SEASONS_AR.md` and an approved package spec.

### Quality baseline

- **Dark mode:** IMPLEMENTED with regression checks.
- **i18n:** IMPLEMENTED foundation.
- **Vitest:** IMPLEMENTED.
- **Playwright E2E:** IMPLEMENTED.
- **Mobile overflow/regression testing patterns:** IMPLEMENTED.

### Important qualification

These statements mean the assets exist in the repository and were part of prior verified development. They do **not** certify every legacy flow for production under future ARO requirements. Every ARO package must re-test the foundations it depends on and record evidence.

---

## 5. Master-plan capability status

This table prevents the recovered/current long-term vision from being mistaken for current implementation.

| Capability | Current state |
|---|---|
| Intent Graph | P1/P2 foundation pending |
| Capability Graph | P1 foundation pending |
| Demand Ledger / Demand Signals | P2 pending |
| Opportunity Compiler / ARO Catalyst | P3 pending |
| Pre-Commit Markets / ARO Commit | P4 pending |
| Commitment Orbit visual/interaction language | strategic direction; P4 package must specify |
| Proof of Outcome / ARO Proof | P5 pending |
| Contextual Trust Graph | partial vertical foundation exists; platform generalization pending |
| Human Composability | exploratory after core loop |
| Business Capacity Graph / Spaces | exploratory after core loop/category/business specs |
| Personal Opportunity Agent | vision/architecture; no autonomous consequential action |
| Life Passport | Tonguee Passport implemented; platform expansion pending P5+ |
| Passport constellation / Life Map | exploratory after Proof/Passport + privacy specification |
| City Intelligence | strategic/growth direction; not implemented as general engine |
| Wish Markets | exploratory |
| Opportunity Unlocks | exploratory mechanism; commitment foundation first |
| Bounties | exploratory |
| ARO Teams | exploratory; GUILD concept preserved |
| Travel Mode | exploratory |
| ARO Seasons | exploratory/spec-required after Proof loop is reliable |
| Season+ | exploratory; no monetization package approved |
| Quests / Big Quests / Expeditions | exploratory |
| ARO Sparks | exploratory memory/progression object |
| ARO Beacons | exploratory place/business primitive |
| Opportunity Trails | exploratory |
| AR opportunity overlays | exploratory; location/privacy/safety layer not yet specified |
| Community Mode | exploratory/business-capacity future |
| Creator Guild Leaders / Creator Seasons | growth vision |
| Brand-funded opportunities / Sponsored Quests | growth vision with disclosure/trust constraints |
| ARO Wallet | exploratory/future regulated infrastructure only |
| Stablecoin rails | exploratory infrastructure only |
| Agent-to-agent commerce | long-term vision only; human approval invariant locked |

---

## 6. Required verification before P1 implementation

Before P1 code begins:

1. **Satisfied:** SEC0 provider/history risk is classified, accepted, documented and remediated in the active tree.
2. Confirm P1 package spec exists and is marked SPEC-READY.
3. Audit current auth/profile/public-profile/RLS behavior that P1 will touch.
4. Define the exact private data model, retention/deletion behavior and provenance for goal/capability records.
5. Produce the owner/other-user/admin RLS matrix.
6. Establish current mobile/desktop/light/dark baseline screenshots for affected journeys.
7. Run relevant existing unit/E2E suites and record baseline failures separately from package regressions.
8. Set measurable performance/accessibility budgets for the affected surfaces.
9. Decide which portions of `ARO_EXPERIENCE_SYSTEM.md` are explicitly adopted by the P1 package; do not implement unrelated future visual mechanics by implication.

Only then move P1 to **IN-PROGRESS**.

---

## 7. Package completion ledger format

Every completed package appends a record like this:

```text
Package: ARO-P1
Status: VERIFIED
Branch/PR: ...
Spec version: ...
Migrations: ...
Acceptance: 12/12 PASS
Unit: PASS
E2E: PASS
RLS matrix: PASS
A11y: PASS
Mobile/Desktop: PASS
Light/Dark: PASS
Performance: PASS against package budget
Security/Privacy reviewer: approved
Known follow-ups: ...
Released: no/yes + environment
```

Do not delete older records; status history is useful operational evidence.

---

## 8. Immediate next sequence

`P1 spec (SPEC-READY) → P1 execution baseline → P1 implementation → P1 verification → P2 spec`

Do not parallelize downstream packages in a way that invents schema or assumptions P1/P2 are supposed to establish.

Do not move Seasons/AR into runtime simply because the strategic direction is now documented. The fastest path is not maximum simultaneous coding. It is **maximum parallelism inside a stable specification boundary**.
