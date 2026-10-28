# JSON2Video

Video editing API that renders JSON scenes; official CLI installs a local MCP server for Claude.

- **Type:** Models & tools · Editing
- **Status:** live
- **Publisher:** JSON2Video
- **License:** unknown
- **Source:** <https://json2video.com/claude-video/video-mcp-servers/>
- **Works in:** Claude Code, mcp
- **Tags:** `api` `json` `mcp` `subtitles` `editing`
- **Full card, kept current:** <https://varg.ai/how-to/skills/json2video.md>

## Install

```bash
# Claude Code
npm i -g @json2video/cli && json2video auth && json2video mcp install claude
```

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/json2video).
