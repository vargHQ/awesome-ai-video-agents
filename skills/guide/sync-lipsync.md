# Sync. lipsync MCP

Official MCP for the sync. lipsync API: re-time mouths in existing footage to new or translated audio.

- **Type:** Guides · Dubbing
- **Status:** live
- **Publisher:** sync.
- **License:** unknown
- **Source:** <https://sync.so/docs/plugins-and-extensions/mcp-server>
- **Works in:** Claude Code, Cursor, mcp
- **Tags:** `lipsync` `dubbing` `mcp` `api`
- **Full card, kept current:** <https://varg.ai/how-to/skills/sync-lipsync.md>

## Install

```bash
# Claude Code
claude mcp add sync -- npx -y @sync.so/mcp-server --api-key YOUR_API_KEY
```

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/sync-lipsync).
