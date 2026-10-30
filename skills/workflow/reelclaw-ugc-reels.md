# ReelClaw UGC Reels

App UGC reels from real creator reactions plus your demo: hooks, 7 templates, safe-zone captions, local render.

- **Type:** Workflows · Ads
- **Status:** live
- **Publisher:** DansUGC
- **License:** unknown
- **Source:** <https://github.com/dansugc/reelclaw/tree/main/plugins/reelclaw>
- **Works in:** Claude Code, Codex
- **Tags:** `app-ads` `ugc` `reaction` `safe-zones` `reels`
- **Full card, kept current:** <https://varg.ai/how-to/skills/reelclaw-ugc-reels.md>

## Install

```bash
# Claude Code
claude plugin marketplace add dansugc/reelclaw && claude plugin install reelclaw@dansugc

# Codex
codex plugin marketplace add dansugc/reelclaw && codex plugin add reelclaw@dansugc && codex mcp login dansugc
```

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/reelclaw-ugc-reels).
