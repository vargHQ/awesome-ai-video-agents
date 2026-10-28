# Runway Dev Workflows

Call a Workflow published in the Runway app from your application through the Dev API.

- **Type:** Models & tools · Tooling
- **Status:** live
- **Publisher:** Runway
- **License:** MIT
- **Source:** <https://github.com/runwayml/skills/tree/main/skills/runway-dev-workflows>
- **Works in:** Claude Code, Codex, Cursor, Gemini CLI
- **Tags:** `api` `workflows`
- **Full card, kept current:** <https://varg.ai/how-to/skills/runway-dev-workflows.md>

## Install

```bash
# Claude Code
claude plugin marketplace add runwayml/skills
claude plugin install runway-api@runway-dev

# Codex
npx skills add runwayml/skills --skill runway-dev-workflows -a codex

# Cursor
npx skills add runwayml/skills --skill runway-dev-workflows -a cursor

# Gemini CLI
npx skills add runwayml/skills --skill runway-dev-workflows -a gemini-cli
```

## Example

![Runway Dev Workflows example](https://s3.varg.ai/how-to/previews/00187208d6d5/runway-dev-workflows.webp)

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/runway-dev-workflows).
