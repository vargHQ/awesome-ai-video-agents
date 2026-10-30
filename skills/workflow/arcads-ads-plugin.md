# Arcads Ads Plugin

Official Arcads plugin: 17 ad skills (AI-actor UGC, hook clones, product swaps, static-to-video, ad spy).

- **Type:** Workflows · Ads
- **Status:** live
- **Publisher:** Arcads
- **License:** MIT
- **Source:** <https://github.com/arcads-ai/skills/tree/main/skills>
- **Works in:** Claude Code, mcp
- **Tags:** `ugc` `ai-actors` `hook-clone` `static-to-video` `ad-library` `arcads`
- **Full card, kept current:** <https://varg.ai/how-to/skills/arcads-ads-plugin.md>

## Install

```bash
# Claude Code
npx skills add arcads-ai/skills -a claude-code && claude mcp add --transport http arcads https://mcp.arcads.ai

# mcp
https://mcp.arcads.ai
```

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/arcads-ads-plugin).
