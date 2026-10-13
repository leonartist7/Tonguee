# ARO — Canonical Spec Index

> **Purpose:** make ARO spec-driven, traceable, and resistant to product drift. This file is the registry for what is vision, what is approved, what is implemented, what is verified, and what remains blocked or exploratory.
>
> This registry does **not** override `AGENTS.md`, `ARO_BUILD_PLAYBOOK.md`, package-specific specs, or specialist security/data/trust/money rules. It tells every agent where authority lives and what state each package is in.

---

## 1. Spec-driven rule

No ARO runtime, schema, RLS, auth, AI, payment, trust, privacy, analytics, AR, location, progression, reward, sponsorship or user-facing feature work begins from a chat request alone.

Every implementation must resolve to:

`Vision → Durable decision → Governing spec → Package spec → Implementation → Tests → Evidence → Status update`

If any link is missing, the implementation is not ready.

### Status vocabulary

Use only these states:

- **VISION** — strategic direction; not implementation authority.
- **EXPLORATORY** — intentionally preserved idea requiring product/director approval before specification.
- **SPEC-REQUIRED** — approved direction exists but package-level implementation details are not yet complete.
- **SPEC-READY** — package spec is complete enough to implement and has required reviews.
- **IN-PROGRESS** — implementation branch exists and work is active.
- **BLOCKED** — a named gate must be resolved before work continues.
- **IMPLEMENTED** — code/data/config exists, but package verification may still be incomplete.
- **VERIFIED** — acceptance criteria and required evidence passed.
- **SHIPPED** — verified and released to the intended environment/users.
- **DEPRECATED** — preserved only for history/compatibility.

Never use “done” without identifying whether it means IMPLEMENTED, VERIFIED, or SHIPPED.

---

## 2. Authority map

| Concern | Canonical source |
|---|---|
| Agent behavior / conflict rules | `AGENTS.md` |
| Current truth snapshot | `ARO_CURRENT_STATE.md` |
| Infrastructure, environments and provider targets | `ARO_INFRASTRUCTURE.md` |
| Package order, gates, acceptance criteria | `ARO_BUILD_PLAYBOOK.md` |
| Master recovered product map | `ARO_MASTER.md` |
| Current implementation/resume status | `ARO_IMPLEMENTATION_STATUS.md` |
| Latest experience / visual / mobile direction | `ARO_EXPERIENCE_SYSTEM.md` + approved package spec when implementing |
| Seasons / quests / AR / Beacons strategy | `ARO_SEASONS_AR.md` + approved package spec when implementing |
| Durable accepted decisions | `DECISIONS.md` |
| Vision | `ARO_VISION.md` |
| Product scope | `ARO_PRODUCT.md` |
| Architecture | `ARO_ARCHITECTURE.md` |
| Domain/data concepts | `ARO_DATA_MODEL.md` |
| Opportunity intelligence | `ARO_OPPORTUNITY_ENGINE.md` |
| Design/UX | `ARO_DESIGN_SYSTEM.md` + `ARO_EXPERIENCE_SYSTEM.md` |
| Trust/safety/category risk | `ARO_TRUST_SAFETY.md` |
| Money/subscriptions/payments | `ARO_MONEY.md` + approved package payment addendum |
| Growth/density | `ARO_GROWTH.md` |
| Shipathon | `ARO_SHIPATON.md` |
| Tonguee → ARO evolution | `ARO_MIGRATION.md` |
| Product/architecture evolution history | `ARO_CHANGELOG.md` |
| Recovery provenance | `ARO_RECOVERY_STATUS.md` |
| New package format | `specs/PACKAGE_TEMPLATE.md` |

`ARO_CURRENT_STATE.md` is the concise current snapshot. It does not silently override narrower specialist requirements. When two documents appear to conflict, follow `AGENTS.md`: the narrower specialist rule and the more restrictive security/privacy/trust/legal/money rule win until director resolution.

---

## 3. Current program status

| Package / capability | Status | Authority / evidence | Next gate |
|---|---|---|---|
| ARO recovery + master synthesis | **VERIFIED** as documentation recovery | `ARO_MASTER.md`, `ARO_RECOVERY_STATUS.md` | keep synchronized with durable decisions |
| Always-current state + changelog protocol | **VERIFIED** as governance/documentation | `ARO_CURRENT_STATE.md`, `ARO_CHANGELOG.md`, `AGENTS.md` | update on every material strategy/status PR |
| Infrastructure/environment registry | **VERIFIED** as documentation snapshot | `ARO_INFRASTRUCTURE.md` | complete founder Vercel/project-dependency checks; update on every target/config decision |
| Living Opportunity OS experience direction | **SPEC-REQUIRED** | `ARO_EXPERIENCE_SYSTEM.md` | adopt selectively in package specs; validate accessibility/performance |
| ARO Seasons / real-life progression | **EXPLORATORY / SPEC-REQUIRED** | `ARO_SEASONS_AR.md` | core Proof loop first; later progression spec |
| ARO AR / Beacons / Trails / Expeditions | **EXPLORATORY** | `ARO_SEASONS_AR.md` | location/privacy/safety/place layer proven before AR |
| P0 / P0.1 Director Pack | **VERIFIED** as governance/documentation | ARO Director Pack + `ARO_P0_AUDIT.md` | none for documentation |
| ARO-SEC0 repository secret hygiene | **VERIFIED** after finalization PR merge | `ARO_SEC0_REPORT.md`, branch `agent/aro-sec0-finalize`; active tree removes `.env` | keep local/deployment configuration outside Git; continue RLS review in P1 baseline |
| P1 Capability + Goal Foundation | **SPEC-READY / BLOCKED** | `specs/ARO-P1-CAPABILITY-GOAL.md`, `specs/ARO-P1-BASELINE.md` | execution evidence is recorded; obtain approved safe migration branch plus authenticated visual/a11y and working E2E evidence before opening implementation |
| P2 Explicit Intent + Demand Signal | **SPEC-REQUIRED** | `ARO_BUILD_PLAYBOOK.md` | P1 verified + privacy/aggregation spec |
| P3 Language Opportunity Suggestion | **SPEC-REQUIRED** | `ARO_BUILD_PLAYBOOK.md`, `ARO_OPPORTUNITY_ENGINE.md` | P2 verified + AI/evaluation/trust spec |
| P4 Commitment + Booking + minimum viability | **SPEC-REQUIRED** | `ARO_BUILD_PLAYBOOK.md`, `ARO_MONEY.md` | P3 verified + money/cancellation/concurrency specs |
| P5 Proof + Outcomes + Passport | **SPEC-REQUIRED** | `ARO_BUILD_PLAYBOOK.md`, `ARO_DESIGN_SYSTEM.md`, `ARO_EXPERIENCE_SYSTEM.md` | P4 verified + outcome-evidence spec |
| P6 adjacent vertical pilot | **SPEC-REQUIRED** | `ARO_BUILD_PLAYBOOK.md`, `ARO_TRUST_SAFETY.md` | core loop reliable + category gate |
| Wallet / stablecoin rails / yield integrations | **EXPLORATORY** | recovered strategy only + `ARO_MONEY.md` boundaries | separate legal/security/money approval |
| Generic Bounties | **EXPLORATORY** | `ARO_MASTER.md` | product/data/trust/economics spec |
| Generic ARO Teams | **EXPLORATORY** | `ARO_MASTER.md`, GUILD precursor | product/trust/economics spec |
| Travel Mode | **EXPLORATORY** | `ARO_MASTER.md`, `ARO_SEASONS_AR.md` | privacy/location/trust/product spec |
| ARO Beacons | **EXPLORATORY** | `ARO_SEASONS_AR.md` | Spaces/place model + business/privacy/safety spec |
| ARO Season+ | **EXPLORATORY** | `ARO_SEASONS_AR.md` | progression value proven + money/legal spec |
| Sponsored Quests | **EXPLORATORY** | `ARO_SEASONS_AR.md` | sponsorship disclosure + safety + economics spec |
| Personal Life Map | **EXPLORATORY** | `ARO_EXPERIENCE_SYSTEM.md`, `ARO_SEASONS_AR.md` | Proof/Passport + privacy/location spec |
| Agent-to-agent commerce | **VISION** | `ARO_MASTER.md`, `DECISIONS.md` human approval boundary | far-future architecture + legal/security review |

---

## 4. Existing Tonguee foundation to preserve and re-verify

These are not “future ARO ideas”; they are existing implementation assets that ARO deliberately evolves rather than replaces.

| Foundation | Current classification | ARO rule |
|---|---|---|
| React/Vite/Tailwind application shell | **IMPLEMENTED** | preserve unless a package authorizes platform change |
| Supabase Auth + Postgres | **IMPLEMENTED** | preserve server/RLS authority |
| Trust Engine + verified-only publishing | **IMPLEMENTED** | must remain enforced; regression test before dependent packages |
| Teacher applications/documents | **IMPLEMENTED** | generalize only through approved migration |
| Admin panel + audit log | **IMPLEMENTED** | preserve least privilege and auditability |
| Experiences/bookings/reviews | **IMPLEMENTED** | first vertical domain foundation |
| Passport | **IMPLEMENTED** | evolve toward durable real-world evidence |
| Dark mode | **IMPLEMENTED** | every new surface must support it |
| i18n | **IMPLEMENTED** | every new user-facing string follows existing pattern |
| Vitest + Playwright | **IMPLEMENTED** | every package adds/updates relevant coverage |
| Mobile-responsive primitives | **IMPLEMENTED** | mobile-first remains mandatory |

“IMPLEMENTED” here does not mean every legacy path is production-certified under the new ARO architecture. Before a package relies on one of these systems, perform a targeted regression audit and record evidence.

---

## 5. Required package spec sections

Every new package spec must be created from `specs/PACKAGE_TEMPLATE.md` and include, at minimum:

1. **Package ID, owner, status, dependencies, authority.**
2. **Problem and user outcome.**
3. **Goals and explicit non-goals.**
4. **Locked decisions and invariants.**
5. **User journeys and state machine.**
6. **Data model / migration / retention / deletion implications.**
7. **Authorization and RLS matrix.**
8. **Trust/safety/category implications.**
9. **Money implications.**
10. **AI inputs/outputs/evaluation/approval boundaries when applicable.**
11. **UI states:** loading, empty, populated, validation, success, error, retry, offline/timeout where relevant.
12. **Responsive + accessibility requirements.**
13. **Performance budgets.**
14. **Analytics and measurement definitions.**
15. **Threat/failure-mode analysis.**
16. **Test matrix.**
17. **Acceptance criteria mapped to evidence.**
18. **Rollout, migration, rollback and observability.**
19. **Required reviewers/sign-offs.**
20. **Definition of Done.**

If a package includes **Seasons, quests, rewards, AR, precise location, Beacons, sponsorships or public city metrics**, it must additionally specify:

- engagement/anti-dark-pattern guardrails;
- accessibility alternatives;
- location precision/privacy tiers;
- physical safety implications;
- fraud/anti-gaming controls;
- reward economics and disclosures;
- sponsorship disclosures when applicable;
- battery/device/performance budgets for spatial features.

A package missing a consequential section stays **SPEC-REQUIRED**.

---

## 6. Traceability contract

Every package must maintain a small traceability table:

| Requirement | Implementation | Test | Evidence | Status |
|---|---|---|---|---|
| `REQ-001` | file/function/migration | test name | screenshot/log/query | PASS/FAIL |

Rules:

- No acceptance criterion may exist without at least one verification method.
- No consequential code path may be declared complete only because it renders visually.
- Security/RLS/money acceptance criteria require server/data-level evidence, not screenshots.
- User-facing UI criteria require visual evidence at specified breakpoints and themes.
- Performance claims require measurements, not adjectives.
- Real-world progression claims require defined verification semantics, not arbitrary client-side increments.

---

## 7. Optimization doctrine

“Optimized” in ARO means the system improves the real product without hiding costs or weakening correctness.

Optimize in this order:

1. **Correctness and safety** — no bypasses, race conditions, misleading states, physical-safety regressions or trust regressions.
2. **User outcome** — fewer steps to meaningful real-world value.
3. **Clarity** — obvious state, next action, terms, privacy and consequences.
4. **Reliability** — idempotency, retries, recoverable errors, observability.
5. **Performance** — fast interaction, bounded network/data work, mobile efficiency.
6. **Accessibility** — keyboard, screen reader, contrast, motion, touch target and non-AR alternatives.
7. **Maintainability** — reuse, typed/validated boundaries, minimal duplication, explicit invariants.
8. **Cost efficiency** — bounded AI/API use, caching where safe, no unnecessary vendors.
9. **Delight** — motion/visual polish after the above are protected.

Never trade Trust, privacy, truthful economics, physical safety, accessibility or data integrity for perceived speed, engagement or visual novelty.

---

## 8. Performance and quality budgets

Package specs must set concrete budgets appropriate to the surface. Unless a package justifies stricter/different values, use these as planning defaults—not automatic pass criteria:

- mobile-first interaction design;
- avoid unnecessary blocking work on initial route;
- no avoidable layout shifts from late UI state;
- lazy-load route/feature code and heavy media where it does not delay the primary action;
- prevent duplicate network requests and uncontrolled subscriptions;
- paginate or window unbounded collections;
- reduced-motion path for nonessential animation;
- no client-side secrets or privileged service credentials;
- every mutation has explicit pending/success/failure behavior;
- every retryable external side effect has an idempotency/recovery strategy where applicable;
- maps/AR must have explicit battery, thermal, network and fallback budgets before shipping;
- no visual effect may obscure Trust, price, cancellation, safety or commitment truth.

Exact Core Web Vitals, bundle, image, AI latency/cost, query latency, memory and AR/device budgets belong in the package spec after measuring the current baseline.

---

## 9. Always-current documentation contract

Every PR that materially changes any of the following must update `ARO_CURRENT_STATE.md` and append `ARO_CHANGELOG.md`:

- product definition;
- strategic direction;
- active package/blocker;
- implementation status;
- design/brand doctrine;
- package sequencing;
- Trust/privacy/safety rules;
- money/monetization direction;
- AI authority;
- location/AR direction;
- major capability status.

When status changes, also update `ARO_SPEC_INDEX.md` and `ARO_IMPLEMENTATION_STATUS.md`.

When a durable decision changes, update `DECISIONS.md` and the relevant specialist document.

This is the mechanism that keeps ARO current without relying on chat history.

---

## 10. Change control

A spec change is required when implementation would alter any of the following:

- product outcome or user promise;
- package scope/non-goals;
- schema, RLS, auth or retention;
- Trust/safety eligibility;
- money, pricing, fee, refund, payout, reward or entitlement behavior;
- AI decision authority or external action;
- public/private data visibility;
- location precision or place visibility;
- new dependency/provider;
- performance budget materially;
- analytics definitions used for public/product decisions;
- rollout or migration risk;
- progression/quest semantics that alter user incentives.

Implementation agents may improve code structure inside approved behavior, but may not silently redesign behavior to “optimize” it.

---

## 11. Definition of a spec-driven ARO package

A package is truly complete only when:

`approved spec + implementation + automated verification + visual/operational evidence + security/privacy/trust review where applicable + status registry update + current-state/changelog update when material`

Anything less remains work in progress.
