# video-use

Drop raw takes in a folder, chat with your agent, get final.mp4: transcript-first cuts, grade, subtitles, overlays.

- **Type:** Workflows · Edit Agents
- **Status:** live
- **Publisher:** Browser Use
- **License:** MIT
- **Source:** <https://github.com/browser-use/video-use>
- **Works in:** Claude Code, Codex, OpenClaw
- **Tags:** `transcript-first` `edl` `ffmpeg` `subtitles` `color-grade` `talking-head` `edit-agents` `skill`
- **Full card, kept current:** <https://varg.ai/how-to/skills/video-use.md>

## Install

```bash
# Claude Code
git clone https://github.com/browser-use/video-use ~/Developer/video-use && ln -sfn ~/Developer/video-use ~/.claude/skills/video-use

# Codex
ln -sfn ~/Developer/video-use ~/.codex/skills/video-use
```

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/video-use).
