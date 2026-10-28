# Creatomate

Template-based video rendering API with an official remote MCP endpoint for Claude and other agents.

- **Type:** Models & tools · Editing
- **Status:** live
- **Publisher:** Creatomate
- **License:** unknown
- **Source:** <https://creatomate.com/docs/fundamentals/getting-started/mcp-integration>
- **Works in:** Claude Code, claude-ai, mcp
- **Tags:** `api` `templates` `mcp` `captions` `editing`
- **Full card, kept current:** <https://varg.ai/how-to/skills/creatomate.md>

## Install

```bash
# Claude Code
claude mcp add creatomate --transport http https://api.creatomate.com/mcp
```

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/creatomate).
