# Kinocut

Guardrailed local video editing MCP (formerly mcp-video): ~200 FFmpeg tools, quality gates, Shorts repurposing.

- **Type:** Guides · Editing
- **Status:** live
- **Publisher:** Kyanite Labs
- **License:** Apache-2.0
- **Source:** <https://github.com/KyaniteLabs/kinocut>
- **Works in:** Claude Code, Cursor, Codex, mcp
- **Tags:** `ffmpeg` `mcp` `cli` `repurpose` `quality-gates` `editing`
- **Full card, kept current:** <https://varg.ai/how-to/skills/kinocut.md>

## Install

```bash
# Claude Code
claude mcp add kinocut -- uvx --from kinocut kino --mcp
```

## Example

![Kinocut example](https://s3.varg.ai/how-to/previews/c53d4e7e420f/kinocut.webp)

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/kinocut).
