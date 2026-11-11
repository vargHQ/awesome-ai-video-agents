# Music Video Generator by Marco van Hylckama Vlieg

A full music video from a song: beat-grid analysis, archive.org or your footage, optional AI performers, GPU overlays.

- **Type:** Workflows · Music
- **Status:** beta
- **Publisher:** Marco van Hylckama Vlieg
- **License:** MIT
- **Source:** <https://github.com/TheMarco/claude-music-video/tree/main/plugins/music-video-generator/skills/music-video>
- **Works in:** Claude Code
- **Tags:** `music-video` `beat-sync` `lyric-video` `archive-footage` `shaders` `visualizer` `ffmpeg` `claude-code-plugin`
- **Full card, kept current:** <https://varg.ai/how-to/skills/claude-music-video.md>

## Install

```bash
# Claude Code
claude plugin marketplace add TheMarco/claude-music-video
claude plugin install music-video-generator@music-video
```

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/claude-music-video).
