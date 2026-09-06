# How /goal works for overnight autonomous runs

## Syntax and core mechanics

- `/goal <condition>` sets a completion condition; Claude keeps working toward it between your prompts.
- `/goal` with no arguments checks the current status, showing condition, elapsed time, turn count, token spend, and evaluator's most recent reason.
- `/goal clear` removes an active goal; aliases are `stop`, `off`, `reset`, `none`, `cancel`.
- Setting a new goal replaces the previous one; one goal per session maximum.
- Goal starts immediately with the condition text itself as the directive — no separate prompt needed.

## How evaluation works

- After each turn, a small fast model (Haiku by default; configurable via `ANTHROPIC_DEFAULT_HAIKU_MODEL`) receives the condition and conversation so far.
- The evaluator returns one of three verdicts: (1) **Not yet met** — Claude continues to next turn with the reason as guidance, (2) **Met** — goal clears, achieved entry recorded, (3) **Impossible** — evaluator judged it unsatisfiable, goal clears, failed entry recorded.
- The evaluator is a session-scoped prompt-based Stop hook that runs after every turn.
- Evaluation tokens are typically negligible compared to main-turn spend.

## Looping behavior and "Ralph loop"

- `/goal` **does automatically loop** per the session-scoped Stop hook mechanic.
- It is **not** a built-in "Ralph loop" (that term appears in a third-party marketplace plugin).
- If Claude stops answering the evaluator without making progress (no tool use for several turns), Claude Code stops the loop, prints a warning, returns control, and leaves the goal active for your next prompt.

## Character and iteration limits

- Goal condition text: **4,000 character maximum** (confirmed in official docs).
- No hard time limit; include a turn or time clause in the condition text to bound execution, e.g. `or stop after 20 turns`.
- Background work defers evaluation: evaluations skip if subagents or background shell commands are running; evaluation resumes after the next turn with no background work.

## Check-in behavior for long-running goals

- After background work has kept the goal waiting 30 minutes, a check-in is due (configurable via `CLAUDE_CODE_GOAL_CHECKIN_MINUTES` env var; set to `0` to disable).
- In interactive sessions, Claude Code may start idle check-ins on its own — up to three per goal between your prompts.
- After first check-in: wait 1 hour, then every 2 hours, up to 4 times the original interval.
- Check-in asks Claude to read running task output, keep waiting if progressing, or fix/stop stuck tasks.
- Requires Claude Code v2.1.234 or later (check-ins themselves); idle check-ins require v2.1.236+.

## Errors that clear the goal

- Authentication failure (when Claude Code manages credentials; not when host manages them).
- Exhausted credit balance.
- Context overflow auto-compaction could not resolve.
- Model unavailable.
- Transient errors (rate limits, server overload) **do not** clear the goal; it stays active.
- When cleared by an unrecoverable error, rerun `/goal <condition>` to continue.

## Context compaction across long runs

- `/goal` works with Claude Code's auto-compaction mechanism.
- When context fills up, older messages summarize; recent messages and recently read files are kept in full.
- Compaction is tuned per model (Sonnet 5 ~967K tokens, Sonnet 4.6 / Opus 4.6 at 200K boundary by default).
- Set `CLAUDE_CODE_AUTO_COMPACT_WINDOW` env var or `/autocompact` command to control threshold.
- Prompt cache (if enabled) is preserved across compaction.

## Permissions and auto mode interaction

- A goal does **not** change permission mode; set `/goal` in auto mode to run turns unattended, or in Manual mode to prompt per tool call.
- Narrow allow rules such as `Bash(npm test)` stay active in auto mode; broad rules like `Bash(*)` are suspended.
- Set `autoMode.classifyAllShell: true` to route every shell command through the classifier (adds latency for coverage).
- Auto mode removes per-tool prompts; `/goal` removes per-turn prompts — both are complementary for overnight runs.

## Stopping and resuming a goal

- Interrupt a non-interactive goal run (`claude -p "/goal condition"`) with Ctrl+C.
- Interactive: press nothing to let it continue, or send a new prompt to interrupt and get control back.
- `/goal clear` clears before resolution.
- Resume a session with an active goal: Claude Code restores the condition but resets turn count, timer, and token-spend baseline.
- Goal is available under the same workspace trust rule as hooks in settings files.

## Writing effective conditions

- **One measurable end state**: test exit code, build result, file count, empty queue, specific file contents.
- **A stated check**: how Claude should prove it, e.g. "`npm test` exits 0" or "`git status` is clean"`.
- **Constraints that matter**: what must not change on the way, e.g. "no other test file modified".
- **Include turn/time clauses**: `or stop after 20 turns` or `or stop after 3 hours` to bound execution.
- Condition is evaluated against what Claude has **surfaced in conversation** — not independently run commands or file reads.
- ✅ Works: "All tests in test/auth pass and the lint step is clean" (Claude runs tests; result lands in transcript).
- ❌ Won't work: conditions requiring Claude Code to independently verify files not surfaced in the transcript.
- Example: "CHANGELOG.md has an entry for every PR merged this week" (Claude must explicitly check and report it).

## Related features for overnight autonomous runs

- **`/loop`**: runs a prompt on a time interval (`/loop 5m`) instead of toward a condition; use when polling is better than condition-based looping.
- **Effort levels**: `xhigh` and `max` enable deeper reasoning at higher token cost; use for complex autonomous tasks.
- **Auto mode**: pre-approves tool calls matching allow rules; eliminates per-tool prompts during goal turns.
- **`/compact` and `/autocompact`**: manage context within a session; auto-compaction runs automatically.
- **`/rewind`**: checkpoint-based undo of code and conversation; useful if goal fails midway and you want to restart from an earlier point.
- **Subagents and background Bash**: run parallel tasks; their completion defers evaluation and triggers idle check-ins.
- **Hooks**: pre/post command and error handlers; can log goal progress or trigger alerts.
- **Sessions and branching**: `/branch` to try alternative approaches without losing the main goal path.

## External file references in goals

- The evaluator judges the condition **against what Claude has surfaced in the conversation**, not by independently reading files.
- Directly referencing external docs (e.g. "read docs/requirements.md and verify X") does **not work** — the evaluator doesn't run commands or access files.
- **Recommended pattern**: include a setup prompt in your `/goal` session that reads or summarizes the requirements file, then condition the goal on observable transcript evidence, e.g. "Claude has explicitly confirmed all requirements are met" or "the test output shows the checklist passing".
- File references in goals **are not supported as a first-class feature**; use the conversation to surface them.

## Non-interactive and cloud usage

- `claude -p "/goal condition"` runs the goal loop to completion in one invocation (nothing prints until done; add `--verbose --output-format stream-json` to see progress).
- No output until loop resolves; can appear stuck on long runs.
- Interrupt with Ctrl+C.
- `/goal` is unavailable if `disableAllHooks` is `true` in effective settings, or if `allowManagedHooksOnly` is set in managed settings.
- Exit codes: 0 if condition met, 1 if below threshold or unmet, 2 if partial (cost ceiling hit or auth failed), 130 if interrupted, 143 if terminated.

## Documentation sources

- https://code.claude.com/docs/en/goal.md — full `/goal` reference, evaluation, errors, requirements
- https://code.claude.com/docs/en/scheduled-tasks.md — `/loop`, comparison of `/goal` vs `/loop` vs hooks
- https://code.claude.com/docs/en/auto-mode-config.md — auto mode interaction, permission rules
- https://code.claude.com/docs/en/model-config.md — effort levels, context compaction, auto-compact settings
- https://code.claude.com/docs/en/sessions.md — session resumption, checkpoints, context management
- https://code.claude.com/docs/en/checkpointing.md — `/rewind`, checkpoints, summarization

## Unverified/not found in official docs

- No official reference to `/goal` automatically retrying failed turns (stops and waits for user prompt).
- "Ralph loop" is a marketplace plugin, not a `/goal` built-in feature.
- No guidance on scaling to 100+ turn runs or multi-day goals (docs focus on typical overnight/day-long tasks).
- MCP server interactions with `/goal` evaluation not explicitly documented; treat as transparent to the evaluator.
