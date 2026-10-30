# Pika UGC Ads

15-second jump-cut selfie UGC ad from a product URL: hook, three cuts, outro, spoken dialogue with native lip-sync.

- **Type:** Workflows · Ads
- **Status:** live
- **Publisher:** Pika
- **License:** Apache-2.0
- **Source:** <https://github.com/Pika-Labs/Pika-Plugins/tree/main/skills/ugc-ads>
- **Works in:** Claude Code, Codex
- **Tags:** `ugc` `selfie` `jump-cut` `lip-sync` `pika`
- **Full card, kept current:** <https://varg.ai/how-to/skills/pika-ugc-ads.md>

## Install

```bash
# Claude Code
claude plugin marketplace add Pika-Labs/Pika-Plugins && claude plugin install pika@pika-plugins

# Codex
codex mcp add pika --url https://mcp.pika.me/api/mcp && npx skills add Pika-Labs/Pika-Plugins --skill ugc-ads -a codex
```

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/pika-ugc-ads).
