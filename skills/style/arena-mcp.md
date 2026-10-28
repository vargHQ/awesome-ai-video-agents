# Are.na MCP

Build and read Are.na moodboard channels from your agent.

- **Type:** Styles · Style Refs
- **Status:** live
- **Publisher:** Are.na
- **License:** unknown
- **Source:** <https://github.com/aredotna/mcp>
- **Works in:** Claude Code, claude-ai, Codex, Cursor, mcp
- **Tags:** `discover` `discover-film` `discover-music` `research`
- **Full card, kept current:** <https://varg.ai/how-to/skills/arena-mcp.md>

## Install

```bash
# Claude Code
claude mcp add --transport http --scope user arena https://mcp.are.na/mcp

# Codex
codex mcp add arena --url https://mcp.are.na/mcp
codex mcp login arena

# mcp
https://mcp.are.na/mcp
```

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/arena-mcp).
