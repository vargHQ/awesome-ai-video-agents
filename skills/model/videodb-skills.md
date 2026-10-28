# VideoDB skills

Server-side video for agents: ingest, search moments, cut, reframe, subtitle and stream via skills or MCP.

- **Type:** Models & tools · Editing
- **Status:** live
- **Publisher:** VideoDB
- **License:** MIT
- **Source:** <https://github.com/video-db/skills>
- **Works in:** Claude Code, claude-ai, Cursor, Codex, mcp
- **Tags:** `api` `search` `clipping` `subtitles` `mcp` `skill` `editing`
- **Full card, kept current:** <https://varg.ai/how-to/skills/videodb-skills.md>

## Install

```bash
# Claude Code
npx skills add video-db/skills

# mcp
claude mcp add --transport http videodb https://mcp.videodb.io/mcp
```

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/videodb-skills).
