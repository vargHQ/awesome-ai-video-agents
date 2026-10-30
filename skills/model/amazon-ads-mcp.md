# Amazon Ads MCP (official)

Amazon's hosted Ads MCP: Sponsored Products campaigns, reports, budgets, accounts and AMC queries from chat.

- **Type:** Models & tools · Ads
- **Status:** live
- **Publisher:** Amazon Ads
- **License:** proprietary
- **Source:** <https://advertising.amazon.com/API/docs/en-us/mcp/mcp-overview>
- **Works in:** Claude Code, mcp, claude-ai
- **Tags:** `amazon-ads` `mcp` `official` `sponsored-products` `reporting`
- **Full card, kept current:** <https://varg.ai/how-to/skills/amazon-ads-mcp.md>

## Install

```bash
# Claude Code
claude mcp add --transport http amzn-ads-mcp https://advertising-ai.amazon.com/mcp --client-id <your-client-id> --callback-port <your-callback-port>

# claude-ai
Settings → Connectors → Add custom connector → https://advertising-ai.amazon.com/mcp

# mcp
https://advertising-ai.amazon.com/mcp
```

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/amazon-ads-mcp).
