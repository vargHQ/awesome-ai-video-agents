# MakeUGC MCP (official)

MakeUGC's hosted MCP: AI-actor UGC ads, product-in-hand, ad remakes and video/image models from your agent.

- **Type:** Workflows · Ads
- **Status:** live
- **Publisher:** MakeUGC
- **License:** proprietary
- **Source:** <https://makeugc.ai/docs/api/v1/mcp>
- **Works in:** Claude Code, mcp, claude-ai
- **Tags:** `ugc` `ai-actors` `product-in-hand` `mcp` `makeugc`
- **Full card, kept current:** <https://varg.ai/how-to/skills/makeugc-mcp.md>

## Install

```bash
# Claude Code
claude mcp add --transport http makeugc https://mcp.makeugc.ai --header "X-API-Key: YOUR_MAKEUGC_API_KEY"

# claude-ai
Settings → Connectors → Add custom connector → https://mcp.makeugc.ai

# mcp
https://mcp.makeugc.ai
```

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/makeugc-mcp).
