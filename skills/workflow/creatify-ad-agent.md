# Creatify Ad Agent

Official Creatify plugin: product URL to a finished AI video ad, judged shot by shot, shipped as MP4.

- **Type:** Workflows · Ads
- **Status:** live
- **Publisher:** Creatify
- **License:** MIT
- **Source:** <https://github.com/creatify-ai/creatify-ad-agent-skill/tree/main/ad-agent>
- **Works in:** Claude Code, Codex
- **Tags:** `product-video` `url-to-video` `creatify` `ad-agent`
- **Full card, kept current:** <https://varg.ai/how-to/skills/creatify-ad-agent.md>

## Install

```bash
# Claude Code
claude plugin marketplace add creatify-ai/creatify-ad-agent-skill && claude plugin install creatify-ad-agent@creatify-ad-agent

# Codex
codex plugin marketplace add https://github.com/creatify-ai/creatify-ad-agent-skill.git --ref main && codex plugin add creatify-ad-agent@creatify-ad-agent
```

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/creatify-ad-agent).
