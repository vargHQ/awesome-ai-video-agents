# ElevenLabs Voice Changer (inference.sh)

Re-voice a recording into another voice while keeping words and emotion, via inference.sh.

- **Type:** Models & tools · Audio
- **Status:** live
- **Publisher:** inference.sh
- **License:** MIT
- **Source:** <https://github.com/inference-sh/skills/tree/main/tools/audio/elevenlabs-voice-changer>
- **Works in:** Claude Code, Codex, Cursor, Gemini CLI
- **Tags:** `elevenlabs` `speech-to-speech`
- **Full card, kept current:** <https://varg.ai/how-to/skills/inference-sh-elevenlabs-voice-changer.md>

## Install

```bash
# Claude Code
npx skills add inference-sh/skills --skill elevenlabs-voice-changer -a claude-code

# Codex
npx skills add inference-sh/skills --skill elevenlabs-voice-changer -a codex

# Cursor
npx skills add inference-sh/skills --skill elevenlabs-voice-changer -a cursor

# Gemini CLI
npx skills add inference-sh/skills --skill elevenlabs-voice-changer -a gemini-cli
```

## Example

![ElevenLabs Voice Changer (inference.sh) example](https://s3.varg.ai/how-to/previews/b5b0e4ebdc6c/inference-sh-elevenlabs-voice-changer.mp3)

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/inference-sh-elevenlabs-voice-changer).
