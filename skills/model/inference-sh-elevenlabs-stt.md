# ElevenLabs Speech to Text (inference.sh)

Transcribe audio with ElevenLabs Scribe, speaker diarization and forced alignment, via inference.sh.

- **Type:** Models & tools · Captions
- **Status:** live
- **Publisher:** inference.sh
- **License:** MIT
- **Source:** <https://github.com/inference-sh/skills/tree/main/tools/audio/elevenlabs-stt>
- **Works in:** Claude Code, Codex, Cursor, Gemini CLI
- **Tags:** `elevenlabs` `transcription` `forced-alignment` `subtitles`
- **Full card, kept current:** <https://varg.ai/how-to/skills/inference-sh-elevenlabs-stt.md>

## Install

```bash
# Claude Code
npx skills add inference-sh/skills --skill elevenlabs-stt -a claude-code

# Codex
npx skills add inference-sh/skills --skill elevenlabs-stt -a codex

# Cursor
npx skills add inference-sh/skills --skill elevenlabs-stt -a cursor

# Gemini CLI
npx skills add inference-sh/skills --skill elevenlabs-stt -a gemini-cli
```

## Example

Watch: <https://s3.varg.ai/how-to/previews/7a00617f0a93/inference-sh-elevenlabs-stt.mp4>

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/inference-sh-elevenlabs-stt).
