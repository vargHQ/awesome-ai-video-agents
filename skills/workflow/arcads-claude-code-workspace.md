# Arcads Ad Campaign Workspace

Arcads API workspace for Claude Code/Cursor: video and image ads, ad clones, captions, Meta upload, swipe file.

- **Type:** Workflows · Ads
- **Status:** live
- **Publisher:** Caleb 'Mr. Paid Social' (Kruse Media)
- **License:** MIT
- **Source:** <https://github.com/krusemediallc/arcads-claude-code/tree/main/skills>
- **Works in:** Claude Code, Cursor
- **Tags:** `ugc` `arcads` `ad-variants` `captions` `meta-ads`
- **Full card, kept current:** <https://varg.ai/how-to/skills/arcads-claude-code-workspace.md>

## Install

```bash
# Claude Code
git clone https://github.com/krusemediallc/arcads-claude-code.git && cd arcads-claude-code && ./scripts/setup.sh

# Cursor
git clone https://github.com/krusemediallc/arcads-claude-code.git && cd arcads-claude-code && ./scripts/setup.sh
```

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/arcads-claude-code-workspace).
