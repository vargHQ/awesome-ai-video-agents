# Runway Recipes

Integrate Runway's prebuilt multi-step image and video Recipes using the live Recipe guide.

- **Type:** Models & tools · Tooling
- **Status:** live
- **Publisher:** Runway
- **License:** MIT
- **Source:** <https://github.com/runwayml/skills/tree/main/skills/runway-dev-recipes>
- **Works in:** Claude Code, Codex, Cursor, Gemini CLI
- **Tags:** `api` `workflows` `video` `image`
- **Full card, kept current:** <https://varg.ai/how-to/skills/runway-dev-recipes.md>

## Install

```bash
# Claude Code
claude plugin marketplace add runwayml/skills
claude plugin install runway-api@runway-dev

# Codex
npx skills add runwayml/skills --skill runway-dev-recipes -a codex

# Cursor
npx skills add runwayml/skills --skill runway-dev-recipes -a cursor

# Gemini CLI
npx skills add runwayml/skills --skill runway-dev-recipes -a gemini-cli
```

## Example

Watch: <https://s3.varg.ai/how-to/previews/1caab3a3cb1b/runway-dev-recipes.mp4>

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/runway-dev-recipes).
