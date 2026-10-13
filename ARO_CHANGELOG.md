# ARO — Product & Architecture Changelog

> **Purpose:** append-only record of meaningful ARO evolution. This is not implementation authority by itself; it records when the current direction changed and points to the documents that now define it.
>
> Do not rewrite history to make the project look cleaner. Add a new dated entry when a strategic, architectural, implementation-status, design, Trust, privacy, money or sequencing decision materially changes.

---

## 2026-08-25 — Living Opportunity OS + Seasons / AR strategic expansion

### Why this changed

The initial recovered mobile/UI concepts were judged too visually generic and too close to a polished marketplace/event application. ARO needs an experience language that communicates its unique product thesis: opportunity **forming around a person**, not listings being served to them.

### Added

- `ARO_EXPERIENCE_SYSTEM.md`
- `ARO_SEASONS_AR.md`
- `ARO_CURRENT_STATE.md`
- `ARO_CHANGELOG.md`

### Experience direction

ARO is now explicitly framed as a **Living Opportunity OS**.

New signature concepts preserved as current strategic direction:

- ARO Field;
- Orbit;
- Portal;
- Path;
- Constellation;
- Opportunity Radar;
- Commitment Orbit;
- Circle formation;
- Passport constellation / Life Map;
- generative ARO Director surface;
- warm mineral/editorial visual identity rather than generic AI-purple UI.

### Visual-brand direction

Primary direction:

- Living Red / Vermilion;
- Bone / Warm Ivory;
- Ink / Near Black;
- Saffron / Warm Gold;
- Moss / Mineral Green;
- Clay / Terracotta;
- Night Plum;
- Mineral Sky Blue.

The O in ARO becomes a core visual primitive that can represent possibility, gathering, threshold, Circle and completion.

### Engagement direction

ARO should be emotionally compelling because it increases real-world possibility, not because it traps users in the screen.

Desired statement:

> “I keep opening ARO because my life gets more interesting.”

Explicit anti-patterns include endless feeds, punitive streaks, fake scarcity, paid randomness, pay-to-win Trust and manipulative notification loops.

### Seasons / game layer

Added strategic direction for:

- ARO Seasons;
- Personal Sparks;
- Weekly Quests;
- Opportunity Quests;
- Community Quests;
- Big Quests;
- Expeditions;
- ARO Sparks collectibles tied to real outcomes;
- future optional Season+ value layer.

Core idea:

> **Your city becomes the game board. Your life becomes the progression system.**

### AR / place layer

Added strategic direction for:

- ARO Beacons;
- Opportunity Trails;
- Travel Mode Expeditions;
- private Personal Life Map;
- future camera AR overlays for approved public opportunities/places.

AR is explicitly an amplifier after the 2D opportunity/place/privacy system works, not a prerequisite for the core loop.

### Monetization direction

Preserved potential future revenue layers:

- Season+;
- Host Pro;
- marketplace/service fees;
- Business Beacons;
- disclosed Sponsored Quests;
- premium Expeditions;
- creator Season revenue sharing;
- partner rewards;
- city/tourism programs.

Money remains governed by `ARO_MONEY.md` and future approved specs. No native speculative token is required.

### Shipathon narrative

The preferred demo is now a single complete loop:

`demand → composition → opportunity → commitment orbit → real-world Circle → Proof → Passport → Season progress`

with the memorable formation moment:

> **The Circle is real.**
>
> **It’s happening.**

### Status

These additions are **approved strategic direction** but remain **SPEC-REQUIRED / EXPLORATORY** for runtime work. They do not bypass SEC0 or the P1–P6 build sequence.

---

## 2026-08-25 — Spec-driven operating system added

ARO added a canonical spec/status vocabulary and package template so implementation no longer begins from chat instructions or brainstorm documents.

Key files:

- `ARO_SPEC_INDEX.md`
- `ARO_IMPLEMENTATION_STATUS.md`
- `specs/PACKAGE_TEMPLATE.md`

Required chain:

`Vision → durable decision → governing spec → package spec → implementation → tests → evidence → status update`

---

## 2026-08-25 — Obsidian + Graphify project brain added

ARO added two repository-only knowledge layers:

- Obsidian for human-readable linked specs/decisions;
- Graphify for machine-queryable relationships across code/docs/SQL/config.

Neither graph is implementation authority.

Key files:

- `ARO_HOME.md`
- `.obsidian/`
- `.agents/skills/graphify/SKILL.md`
- `tools/knowledge/`
- `specs/ARO-KNOWLEDGE-TOOLS.md`

---

## 2026-08-24/25 — Deleted-master recovery consolidated

The missing ARO vision was reconstructed from surviving generated artifacts, project context and the existing repository Director Pack.

Recovered/preserved areas include:

- Human Opportunity Network thesis;
- five universal primitives;
- original 12-system model;
- 40-point defensibility/evolution vision;
- economic flywheel;
- Personal Opportunity Agent;
- Passport;
- Human Composability / GUILD → ARO Teams lineage;
- Trust architecture;
- Shipathon loop;
- Tonguee as first ARO vertical;
- P0–P6 migration sequence.

Key files:

- `ARO_MASTER.md`
- `ARO_RECOVERY_STATUS.md`

---


## 2026-08-26 — SEC0 repository secret hygiene verified

### Decision

The founder confirmed that the historical environment file contained only browser-facing Supabase project URL and anonymous client key categories. No Stripe or Google configuration was present. The Tonguee Supabase project remains the canonical backend for the ARO migration.

### Repository remediation

- Removed `.env` from the active Git tree.
- Hardened `.gitignore` for `.env.*` while preserving `.env.example`.
- Recorded the classification and decision in `ARO_SEC0_REPORT.md`.
- Preserved Vercel deployment configuration outside Git.

### Risk decision

The founder accepted the documented historical exposure and chose no Git history rewrite. No rotation is required solely for the classified browser-facing categories. RLS and API exposure remain mandatory P1 baseline review items.

### Status transition

- ARO-SEC0: **BLOCKED / IN-PROGRESS → VERIFIED** after finalization PR merge.
- ARO-P1: **BLOCKED → SPEC-REQUIRED**.
- Next gate: approve the P1 private data/RLS/retention package spec and capture baselines before runtime implementation.

---


## 2026-08-26 — P1 capability and goal specification approved

### Decision

ARO-P1 is now **SPEC-READY**. The package contract defines one private language-learning goal plus bounded, self-declared language capabilities for an authenticated adult. It does not authorize P2 intent, public demand, matching, AI, location, money, Google, Stripe, new verticals or a broad redesign.

### Data and privacy direction

- New P1 data belongs in dedicated owner-private tables rather than publicly readable profiles.
- Self-declared capability remains separate from verified teacher evidence.
- No automatic backfill from local Zustand state or legacy profile fields is allowed.
- Anon and other users receive no access; admins receive no default access.
- Exact RLS, grants, retention, deletion and regression requirements are locked in the package spec.

### Repository discovery

The current learner experience persists onboarding/profile state primarily through a local Zustand player store with best-effort profile mirroring. The connected Tonguee Supabase project remains the canonical backend and reports an existing RLS-enabled marketplace foundation but no recorded migration history through the connector. Repository Trust SQL exists; the execution baseline must verify which Trust controls are applied live.

### Added

- specs/ARO-P1-CAPABILITY-GOAL.md
- specs/ARO-P1-BASELINE.md

### Status transition

- ARO-P1: **SPEC-REQUIRED → SPEC-READY**.
- Runtime: not IN-PROGRESS.
- Next gate: capture the exact pre-code Git, test, build, visual, accessibility, performance and Supabase baseline, then open one P1 implementation branch.

---


## 2026-08-26 — Infrastructure and environment registry added

### Why

GitHub, Vercel, environment-variable and Supabase decisions were distributed across security reports, PRs and chat context. Agents need one no-secret operational map before changing providers, branches or production state.

### Added

- ARO_INFRASTRUCTURE.md
- agent read-order and authority-map links
- ADR-025 for the secondary Supabase project quarantine
- founder-only and agent-only TODO checklists

### Locked operational state

- leonartist7/Tonguee remains the repository.
- main remains the current production/default branch.
- feat/aro-p0-director-reset remains the governed ARO integration branch.
- Vercel remains connected to the Tonguee repository; its exact Production/Preview environment mapping requires founder dashboard confirmation.
- Supabase Tonguee ref ybhecubqnhukgpvchjay remains the canonical ARO backend.
- Supabase aro-platform ref jjgccfrwjkwknyjtbtxa is **QUARANTINED — KEEP** because five auth accounts remain, despite empty public-table estimates and no storage objects.
- Stripe and Google provider configuration remain out of scope.
- No provider, deployment, schema, auth or runtime state changed in this documentation package.

### Next gate

Complete the human Vercel/Supabase dependency checks in ARO_INFRASTRUCTURE.md, while the program proceeds only to the documented P1 pre-code execution baseline.

---


## 2026-08-26 — Main/ARO branch topology verified

A post-merge comparison reports main and feat/aro-p0-director-reset as diverged. The governed ARO branch is three commits ahead and one commit behind. The main-only commit ce291193 is an empty documentation-promotion commit: its comparison with parent 931f2614 contains no changed files.

This is a Git ancestry difference, not missing runtime or documentation content. The P1 execution baseline must record it and may reconcile ancestry safely if needed, but must not overwrite newer SEC0, P1 or infrastructure governance.

---

## 2026-08-26 — P1 execution baseline captured; implementation blocked

### Evidence captured

- Confirmed `leonartist7/Tonguee`, `main` at `ce291193`, the governed ARO branch at `9394cb7`, and SEC0 as VERIFIED.
- `npm test` passed (61 tests); production build passed in 17.57 s with a 228.76 kB gzip main JavaScript chunk.
- The live read-only Tonguee Supabase audit reconfirmed that legacy `profiles` is publicly readable and cannot hold P1 private data; dedicated owner-private P1 tables remain mandatory.
- `aro-platform` remained quarantined and untouched. No key rotation, history rewrite, Vercel change, production schema change, Stripe, or Google scope was introduced.

### Blockers

- Legacy lint baseline has 23 errors and 9 warnings.
- The Windows E2E runner fails before journeys with `spawn npm ENOENT`.
- SEC0 correctly leaves no local credentials, so the local app renders blank with missing Supabase variables; authenticated mobile/desktop/light/dark and meaningful accessibility evidence remains unavailable.
- The canonical Supabase project has no development branches. A safe branch costs USD 0.01344/hour and needs founder confirmation; production experiments are prohibited.

### Status transition

- ARO-P1: **SPEC-READY → SPEC-READY / BLOCKED**.
- Runtime implementation did not start. `specs/ARO-P1-BASELINE.md`, `ARO_CURRENT_STATE.md`, `ARO_IMPLEMENTATION_STATUS.md`, and `ARO_SPEC_INDEX.md` record the evidence and required next gate.

---

## Changelog rule

For future entries include, when relevant:

- **why** the change happened;
- what was added/removed/deprecated;
- status transition (`VISION`, `EXPLORATORY`, `SPEC-REQUIRED`, `SPEC-READY`, `IN-PROGRESS`, `IMPLEMENTED`, `VERIFIED`, `SHIPPED`);
- affected canonical documents;
- migration or compatibility implication;
- security/Trust/privacy/money consequence;
- next gate.

This file is append-only evidence of evolution; `ARO_CURRENT_STATE.md` remains the concise answer to what is true now.
