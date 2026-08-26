# Codex local setup for ARO

The repository now contains the project-side autonomy contract, Skills, preflight, verification, and visual-evidence tooling. A few settings live on the developer machine/account and therefore must **not** be committed with personal paths or credentials.

## 1. Open the repository in Codex

Use the Codex app, IDE extension, or CLI with the Tonguee repository as the workspace.

Authenticate with your existing ChatGPT/Codex account.

Verify the existing Supabase MCP connection from Codex before a package that needs database work.

## 2. Enable low-friction safe approvals

Open your Codex user `config.toml` and enable the automatic approval reviewer:

```toml
approvals_reviewer = "auto_review"

# Keep credentials in the OS keychain.
cli_auth_credentials_store = "keyring"
mcp_oauth_credentials_store = "keyring"

# Add the real absolute path to your local Tonguee checkout.
sandbox_workspace_write.writable_roots = ["<ABSOLUTE_PATH_TO_TONGUEE>"]
```

Do not commit your actual home path, workspace ID, tokens, or credentials to this repository.

Keep Codex inside read-only/workspace-write sandbox modes for normal package work. Do not broadly disable the sandbox just to avoid prompts.

## 3. Verify MCP and repository harness

From the repository root:

```bash
npm run aro:preflight
```

The current project intentionally reports `.env` tracking as an SEC0 blocker until the approved SEC0 remediation/founder decision is completed. The command does not read the secret file.

Then, on a branch/worktree where normal checks are expected to pass:

```bash
npm run aro:verify:quick
```

The E2E harness now uses an explicit `E2E_CHROME` path when provided, the hosted Chromium path when it exists, and otherwise Playwright's normal local Chromium resolution. If Chromium has not been installed on the workstation yet, run once:

```bash
npx playwright install chromium
```

For a user-facing package, test evidence capture on one route:

```bash
npm run aro:evidence -- --package SETUP-CHECK --routes /
```

The screenshots are written under `artifacts/codex-evidence/` and are ignored by Git.

## Normal director command

Once the harness branch is merged and local approvals/MCP are ready, the routine instruction can be:

> Execute the next legal ARO package end-to-end. Own all authorized implementation, Supabase/backend work, tests, browser QA, screenshots/evidence, debugging, self-review, status updates, and PR preparation. Do not stop between phases. Finish everything you safely can and return only genuine director actions at the end.

The `aro-package-owner` Skill and `ARO_CODEX_AUTONOMY.md` provide the detailed execution contract automatically.

## Actions that should still stop for the director

Keep human approval for consequential or environment-specific actions such as:

- provider credential rotation/restriction;
- destructive production database changes;
- production secrets;
- unapproved schema/RLS/auth/privacy/Trust/money changes;
- external consequential actions not already authorized by package/user approval semantics;
- force pushes/history rewrites;
- direct production release when the package does not explicitly authorize it.

The objective is not `no approvals`. It is **no unnecessary approvals**.
