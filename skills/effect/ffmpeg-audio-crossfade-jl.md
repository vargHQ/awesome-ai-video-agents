# Audio Crossfades, J and L in FFmpeg

Crossfade audio with acrossfade, or build J/L-cuts by delaying one track with adelay and mixing with amix.

- **Type:** Effects · Cuts
- **Status:** live
- **Publisher:** varg
- **License:** MIT
- **Source:** <https://github.com/vargHQ/skills/blob/main/varg-video-edit-library/references/cuts.md#ffmpeg-audio-crossfade-jl>
- **Works in:** Claude Code, claude-ai, Codex, Cursor, OpenClaw, Gemini CLI, mcp, varg Studio
- **Tags:** `ffmpeg` `audio` `j-cut` `l-cut` `crossfade`
- **Full card, kept current:** <https://varg.ai/how-to/skills/ffmpeg-audio-crossfade-jl.md>

## Install

```bash
# Claude Code
claude plugin marketplace add vargHQ/skills && claude plugin install varg@varg

# Codex
npx skills add vargHQ/skills --skill varg-video-edit-library -a codex -y

# Cursor
npx skills add vargHQ/skills --skill varg-video-edit-library -a cursor -y
```

## Example

Watch: <https://s3.varg.ai/how-to/previews/96126c63b093/take-ffmpeg-audio-crossfade-jl.mp4>

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/ffmpeg-audio-crossfade-jl).
