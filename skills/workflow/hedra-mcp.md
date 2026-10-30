# Hedra MCP (official)

Hedra's hosted MCP: talking-avatar video, images, speech, music and SFX from Claude Code, Codex, Cursor or ChatGPT.

- **Type:** Workflows · Ads
- **Status:** live
- **Publisher:** Hedra
- **License:** proprietary
- **Source:** <https://www.hedra.com/docs/pages/developer/v3/mcp>
- **Works in:** Claude Code, Codex, mcp
- **Tags:** `talking-avatar` `voice` `mcp` `hedra`
- **Full card, kept current:** <https://varg.ai/how-to/skills/hedra-mcp.md>

## Install

```bash
# Claude Code
claude mcp add --transport http hedra https://mcp.hedra.com

# Codex
codex mcp add hedra --url https://mcp.hedra.com

# mcp
https://mcp.hedra.com
```

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/hedra-mcp).
