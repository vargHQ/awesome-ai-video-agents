# Tool Calls as Status Rows

Each tool call appears as a row with an icon and label that goes spinner → check, building a visible plan.

- **Type:** Effects · Agent Flows
- **Status:** live
- **Publisher:** Kapish Dima · remocn
- **License:** MIT
- **Source:** <https://remocn.dev/r/agent-run.json>
- **Works in:** Claude Code, claude-ai, Codex, Cursor, OpenClaw, Gemini CLI, mcp, varg Studio
- **Tags:** `agent` `tool calls` `steps` `trace` `hyperframes` `remotion` `capcut`
- **Full card, kept current:** <https://varg.ai/how-to/skills/tool-calls-status-rows.md>

## Install

```bash
# Claude Code
claude plugin marketplace add vargHQ/skills && claude plugin install varg@varg

# Codex
npx skills add vargHQ/skills --skill varg-video-edit-library -a codex -y

# Cursor
npx skills add vargHQ/skills --skill varg-video-edit-library -a cursor -y
```

## Example

Watch: <https://s3.varg.ai/how-to/previews/2fb8558b8450/lib-motion-primitives-text-shimmer.mp4>

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/tool-calls-status-rows).
