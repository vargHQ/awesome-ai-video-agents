# Submagic API

Caption-styled shorts API with an MCP server: AI captions, Magic Clips from long videos, B-roll, publishing.

- **Type:** Models & tools · Captions
- **Status:** live
- **Publisher:** Submagic
- **License:** unknown
- **Source:** <https://docs.submagic.co/mcp-server>
- **Works in:** Claude Code, claude-ai, Cursor, mcp
- **Tags:** `captions` `shorts` `clipping` `api` `mcp` `publishing`
- **Full card, kept current:** <https://varg.ai/how-to/skills/submagic.md>

## Install

```bash
# Claude Code
claude mcp add --transport http submagic https://api.submagic.co/mcp --header "Authorization: Bearer $SUBMAGIC_API_KEY"
```

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/submagic).
