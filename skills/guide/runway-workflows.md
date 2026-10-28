# Runway Workflows

Author, validate and run multi-step Runway workflow graphs from chat through Runway's MCP tools.

- **Type:** Guides · Tooling
- **Status:** live
- **Publisher:** Runway
- **License:** MIT
- **Source:** <https://github.com/runwayml/runway-mcp-plugin/tree/main/skills/runway-workflows>
- **Works in:** Claude Code, Codex, Cursor, Gemini CLI
- **Tags:** `mcp` `pipeline` `node-graph`
- **Full card, kept current:** <https://varg.ai/how-to/skills/runway-workflows.md>

## Install

```bash
# Claude Code
npx skills add runwayml/runway-mcp-plugin --skill runway-workflows -a claude-code

# Codex
npx skills add runwayml/runway-mcp-plugin --skill runway-workflows -a codex

# Cursor
npx skills add runwayml/runway-mcp-plugin --skill runway-workflows -a cursor

# Gemini CLI
npx skills add runwayml/runway-mcp-plugin --skill runway-workflows -a gemini-cli
```

## Example

Watch: <https://s3.varg.ai/how-to/previews/b337a652cbd8/runway-workflows.mp4>

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/runway-workflows).
