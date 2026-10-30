# TikTok for Business MCP (official)

TikTok's hosted Ads MCP: about 400 tools for campaigns, Smart+ ads, audiences, creative ops and reports.

- **Type:** Models & tools · Ads
- **Status:** live
- **Publisher:** TikTok for Business
- **License:** proprietary
- **Source:** <https://ads.tiktok.com/resources/help/article/about-tiktok-for-business-mcp-server?lang=en>
- **Works in:** Claude Code, mcp, claude-ai
- **Tags:** `tiktok-ads` `mcp` `official` `smart-plus` `reporting`
- **Full card, kept current:** <https://varg.ai/how-to/skills/tiktok-ads-mcp.md>

## Install

```bash
# Claude Code
claude mcp add --transport http tiktok-ads https://business-api.tiktok.com/open_mcp/tt-ads-mcp-flat

# claude-ai
Settings → Connectors → Browse → TikTok for Business (Claude's connector directory)

# mcp
https://business-api.tiktok.com/open_mcp/tt-ads-mcp-flat
```

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/tiktok-ads-mcp).
