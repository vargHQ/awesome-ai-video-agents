# Trends MCP

Live Google Trends plus growth data from TikTok, YouTube, Amazon, Reddit and 30+ sources.

- **Type:** Models & tools · Research
- **Status:** live
- **Publisher:** Trends MCP
- **License:** MIT
- **Source:** <https://github.com/trendsmcp-ai/google-trends-mcp>
- **Works in:** Claude Code, Cursor, mcp
- **Tags:** `discover` `discover-social`
- **Full card, kept current:** <https://varg.ai/how-to/skills/trends-mcp.md>

## Install

```bash
# Claude Code
claude mcp add --scope user --transport http trends-mcp https://api.trendsmcp.ai/mcp --header "Authorization: Bearer YOUR_API_KEY"
```

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/trends-mcp).
