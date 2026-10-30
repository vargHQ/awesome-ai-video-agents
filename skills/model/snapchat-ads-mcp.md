# Snapchat Ads MCP (official)

Snap's hosted read-only Ads MCP: agents read Snapchat campaigns, ad squads, ads and stats with your own permissions.

- **Type:** Models & tools · Ads
- **Status:** live
- **Publisher:** Snap Inc.
- **License:** proprietary
- **Source:** <https://developers.snap.com/marketing-api/Ads-MCP/Introduction>
- **Works in:** Claude Code, Codex, Gemini CLI, mcp, claude-ai
- **Tags:** `snapchat-ads` `mcp` `official` `reporting` `read-only`
- **Full card, kept current:** <https://varg.ai/how-to/skills/snapchat-ads-mcp.md>

## Install

```bash
# Claude Code
claude mcp add --transport http --client-id claude-snap-ads snap-ads https://mcp.snapchat.com/ads && claude mcp login snap-ads

# claude-ai
Settings → Connectors → Add custom connector → https://mcp.snapchat.com/ads

# Codex
codex mcp add snap-ads --url https://mcp.snapchat.com/ads --oauth-client-id codex-snap-ads && codex mcp login snap-ads

# Gemini CLI
gemini mcp add --transport http snap-ads https://mcp.snapchat.com/ads

# mcp
https://mcp.snapchat.com/ads
```

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/snapchat-ads-mcp).
