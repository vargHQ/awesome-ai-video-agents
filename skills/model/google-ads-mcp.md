# Google Ads MCP (official)

Google's open-source Google Ads MCP: list accounts, look up fields, run GAQL reports, including YouTube campaigns.

- **Type:** Models & tools · Ads
- **Status:** live
- **Publisher:** Google Ads API team
- **License:** Apache-2.0
- **Source:** <https://github.com/googleads/google-ads-mcp>
- **Works in:** Claude Code
- **Tags:** `google-ads` `youtube-ads` `mcp` `official` `reporting`
- **Full card, kept current:** <https://varg.ai/how-to/skills/google-ads-mcp.md>

## Install

```bash
# Claude Code
claude mcp add google-ads-mcp -e GOOGLE_PROJECT_ID=<project> -e GOOGLE_ADS_DEVELOPER_TOKEN=<token> -- pipx run --spec git+https://github.com/googleads/google-ads-mcp.git google-ads-mcp
```

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/google-ads-mcp).
