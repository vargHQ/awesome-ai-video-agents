# fal Model Routing

Pick default fal endpoints per job: premium stills, fast drafts, edits, video, lip-sync and campaign work.

- **Type:** Models & tools · Tooling
- **Status:** live
- **Publisher:** fal
- **License:** MIT
- **Source:** <https://github.com/fal-ai-community/skills/tree/main/skills/model-routing>
- **Works in:** Claude Code, Codex, Cursor, Gemini CLI
- **Tags:** `model-selection` `image` `video` `lip-sync` `fal`
- **Full card, kept current:** <https://varg.ai/how-to/skills/fal-model-routing.md>

## Install

```bash
# Claude Code
npx skills add fal-ai-community/skills --skill model-routing -a claude-code

# Codex
npx skills add fal-ai-community/skills --skill model-routing -a codex

# Cursor
npx skills add fal-ai-community/skills --skill model-routing -a cursor

# Gemini CLI
npx skills add fal-ai-community/skills --skill model-routing -a gemini-cli
```

## Example

![fal Model Routing example](https://s3.varg.ai/how-to/previews/8b678dde4c31/fal-model-routing.webp)

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/fal-model-routing).
