# Triple Whale MCP (official)

Triple Whale's read-only MCP: revenue, ROAS, spend and attribution by channel for DTC brands, in any agent.

- **Type:** Models & tools · Ads
- **Status:** live
- **Publisher:** Triple Whale
- **License:** proprietary
- **Source:** <https://kb.triplewhale.com/en/articles/15656798-triple-whale-mcp>
- **Works in:** Claude Code, mcp, claude-ai
- **Tags:** `attribution` `dtc` `roas` `mcp` `triple-whale`
- **Full card, kept current:** <https://varg.ai/how-to/skills/triple-whale-mcp.md>

## Install

```bash
# Claude Code
claude mcp add --transport http triple-whale https://mcp.triplewhale.com/v1/mcp

# claude-ai
Settings → Connectors → Add custom connector → https://mcp.triplewhale.com/v1/mcp

# mcp
https://mcp.triplewhale.com/v1/mcp
```

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/triple-whale-mcp).
