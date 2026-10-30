# Adobe Firefly Run Workflow

Adobe plugin for Firefly Creative Production workflows: product banners at scale, retargeting, localization.

- **Type:** Guides · Ads
- **Status:** live
- **Publisher:** Adobe
- **License:** Apache-2.0
- **Source:** <https://github.com/adobe/skills/tree/main/plugins/creative-cloud/run-workflow>
- **Works in:** Claude Code, Codex, mcp
- **Tags:** `banners` `localization` `retargeting` `firefly` `adobe`
- **Full card, kept current:** <https://varg.ai/how-to/skills/adobe-firefly-run-workflow.md>

## Install

```bash
# Claude Code
claude plugin marketplace add adobe/skills && claude plugin install run-workflow@adobe-skills

# Codex
npx skills add adobe/skills --skill run-workflow -a codex

# mcp
https://run-workflow.adobe.io/mcp
```

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/adobe-firefly-run-workflow).
