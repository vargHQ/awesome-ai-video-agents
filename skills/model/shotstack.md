# Shotstack

Cloud video editing API with an official MCP server, CLI and Claude Code skill built around Edit JSON.

- **Type:** Models & tools · Editing
- **Status:** live
- **Publisher:** Shotstack
- **License:** unknown
- **Source:** <https://shotstack.io/docs/guide/agents/mcp-server/>
- **Works in:** Claude Code, claude-ai, chatgpt, Codex, Cursor, Gemini CLI, mcp
- **Tags:** `api` `json-timeline` `mcp` `templates` `cloud-render` `editing`
- **Full card, kept current:** <https://varg.ai/how-to/skills/shotstack.md>

## Install

```bash
# Claude Code
claude mcp add --transport http shotstack https://mcp.shotstack.io

# Codex
codex mcp add shotstack --url https://mcp.shotstack.io
```

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/shotstack).
