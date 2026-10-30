# Microsoft Advertising MCP (official)

Microsoft's hosted read-only Ads MCP: accounts, campaigns, ad groups, ads, keywords and asset groups for audits.

- **Type:** Models & tools · Ads
- **Status:** live
- **Publisher:** Microsoft Advertising
- **License:** proprietary
- **Source:** <https://learn.microsoft.com/en-us/advertising/guides/mcp-setup?view=bingads-13>
- **Works in:** mcp, claude-ai
- **Tags:** `microsoft-ads` `bing-ads` `mcp` `official` `read-only`
- **Full card, kept current:** <https://varg.ai/how-to/skills/microsoft-advertising-mcp.md>

## Install

```bash
# claude-ai
Settings → Connectors → Add custom connector → https://partner.api.bingads.microsoft.com/ext/mcp/vnext (your own Entra OAuth client ID)

# mcp
https://partner.api.bingads.microsoft.com/ext/mcp/vnext
```

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/microsoft-advertising-mcp).
