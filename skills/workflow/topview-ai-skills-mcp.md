# Topview AI Skills + MCP

Topview's official skills and MCP: talking avatars, product-avatar shots, voices, TikTok Shop and Amazon research.

- **Type:** Workflows · Ads
- **Status:** live
- **Publisher:** Topview AI
- **License:** Apache-2.0
- **Source:** <https://github.com/topviewai/skill>
- **Works in:** Claude Code, Codex, Cursor, mcp
- **Tags:** `talking-avatar` `product-avatar` `tiktok-shop` `mcp` `topview`
- **Full card, kept current:** <https://varg.ai/how-to/skills/topview-ai-skills-mcp.md>

## Install

```bash
# Claude Code
npx skills add topviewai/skill -a claude-code && claude mcp add --transport http topview-mcp https://mcp.topview.ai/mcp

# Codex
npx skills add topviewai/skill -a codex && codex mcp add topview-mcp --url https://mcp.topview.ai/mcp

# Cursor
npx skills add topviewai/skill -a cursor

# mcp
https://mcp.topview.ai/mcp
```

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/topview-ai-skills-mcp).
