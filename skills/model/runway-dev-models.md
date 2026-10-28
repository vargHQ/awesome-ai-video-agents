# Runway Dev Models

Add a direct Runway model endpoint to your app for image, video or audio, following the live contract.

- **Type:** Models & tools · Tooling
- **Status:** live
- **Publisher:** Runway
- **License:** MIT
- **Source:** <https://github.com/runwayml/skills/tree/main/skills/runway-dev-models>
- **Works in:** Claude Code, Codex, Cursor, Gemini CLI
- **Tags:** `api` `video` `image` `audio`
- **Full card, kept current:** <https://varg.ai/how-to/skills/runway-dev-models.md>

## Install

```bash
# Claude Code
claude plugin marketplace add runwayml/skills
claude plugin install runway-api@runway-dev

# Codex
npx skills add runwayml/skills --skill runway-dev-models -a codex

# Cursor
npx skills add runwayml/skills --skill runway-dev-models -a cursor

# Gemini CLI
npx skills add runwayml/skills --skill runway-dev-models -a gemini-cli
```

## Example

Watch: <https://s3.varg.ai/how-to/previews/0ed62e35b84a/runway-dev-models.mp4>

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/runway-dev-models).
