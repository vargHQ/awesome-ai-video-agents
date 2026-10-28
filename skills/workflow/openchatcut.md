# OpenChatCut

Local-first chat video editor with a multi-track timeline that Codex and Claude Code can edit over MCP.

- **Type:** Workflows · Edit Agents
- **Status:** live
- **Publisher:** 0xsline
- **License:** AGPL-3.0
- **Source:** <https://github.com/0xsline/OpenChatCut>
- **Works in:** Claude Code, Codex, mcp
- **Tags:** `timeline` `mcp` `remotion` `local-first` `desktop` `edit-agents` `app`
- **Full card, kept current:** <https://varg.ai/how-to/skills/openchatcut.md>

## Install

```bash
# Claude Code
npx skills add 0xsline/OpenChatCut

# mcp
claude mcp add --transport http openchatcut http://localhost:5199/api/external-mcp/mcp
```

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/openchatcut).
