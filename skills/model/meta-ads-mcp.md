# Meta Ads MCP (official)

Meta's own hosted ads MCP: reporting, ad creation, catalogs, A/B tests, conversion lift, signals and activity logs.

- **Type:** Models & tools · Ads
- **Status:** live
- **Publisher:** Meta
- **License:** proprietary
- **Source:** <https://developers.facebook.com/documentation/ads-commerce/ads-ai-connectors/ads-mcp-server/ads-mcp-server-overview>
- **Works in:** Claude Code, mcp
- **Tags:** `meta-ads` `mcp` `official` `reporting` `ab-tests`
- **Full card, kept current:** <https://varg.ai/how-to/skills/meta-ads-mcp.md>

## Install

```bash
# Claude Code
claude mcp add --transport http --client-id <META_APP_ID> meta-ads https://mcp.facebook.com/ads

# mcp
https://mcp.facebook.com/ads
```

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/meta-ads-mcp).
