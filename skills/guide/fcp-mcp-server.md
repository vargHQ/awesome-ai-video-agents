# FCP MCP Server (FCPXML)

Read, edit and generate real Final Cut Pro timelines as FCPXML: cut detection, markers, roles, transcript edits.

- **Type:** Guides · Editing
- **Status:** live
- **Publisher:** DareDev256
- **License:** MIT
- **Source:** <https://github.com/DareDev256/fcp-mcp-server>
- **Works in:** Claude Code, Cursor, Codex, mcp
- **Tags:** `final-cut-pro` `fcpxml` `timeline` `markers` `editing` `mcp`
- **Full card, kept current:** <https://varg.ai/how-to/skills/fcp-mcp-server.md>

## Install

```bash
# Claude Code
claude mcp add fcpxml -e FCP_PROJECTS_DIR=~/Movies -- uvx fcp-mcp-server
```

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/fcp-mcp-server).
