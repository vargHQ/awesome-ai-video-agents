# Transcribe Anything

Transcribe hours of audio or video with whisper, whisperX or cloud STT: word timestamps, speaker labels, SRT/VTT.

- **Type:** Guides · Captions
- **Status:** live
- **Publisher:** Shawn Wang (swyx)
- **License:** MIT
- **Source:** <https://github.com/swyxio/skills/tree/main/transcribe-anything>
- **Works in:** Claude Code, Codex, Cursor
- **Tags:** `code-to-video` `whisper` `whisperx` `word-timestamps` `srt` `diarization`
- **Full card, kept current:** <https://varg.ai/how-to/skills/swyx-transcribe-anything.md>

## Install

```bash
# Claude Code
npx skills add https://github.com/swyxio/skills --skill transcribe-anything

# Codex
npx skills add https://github.com/swyxio/skills --skill transcribe-anything

# Cursor
npx skills add https://github.com/swyxio/skills --skill transcribe-anything
```

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/swyx-transcribe-anything).
