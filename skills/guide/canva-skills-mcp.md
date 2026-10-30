# Canva Skills + MCP (official)

Official Canva plugin: resize a design to every social format, bulk-create from CSV, brand-check, edit via Canva MCP.

- **Type:** Guides · Ads
- **Status:** live
- **Publisher:** Canva
- **License:** Apache-2.0
- **Source:** <https://github.com/canva-sdks/canva-skills/tree/main/plugins/canva/skills>
- **Works in:** Claude Code, Codex, Cursor, mcp
- **Tags:** `static-ads` `resize` `bulk-create` `brand-check` `canva`
- **Full card, kept current:** <https://varg.ai/how-to/skills/canva-skills-mcp.md>

## Install

```bash
# Claude Code
claude plugin marketplace add canva-sdks/canva-skills && claude plugin install canva@canva-skills

# Codex
codex plugin marketplace add canva-sdks/canva-skills && codex plugin add canva@canva-skills && codex mcp login canva

# Cursor
npx skills add canva-sdks/canva-skills -a cursor

# mcp
https://mcp.canva.com/mcp
```

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/canva-skills-mcp).
