# ElevenLabs Dialogue

Generate a whole multi-voice conversation as one audio file with ElevenLabs, from a script.

- **Type:** Models & tools · Audio
- **Status:** live
- **Publisher:** inference.sh
- **License:** MIT
- **Source:** <https://github.com/inference-sh/skills/tree/main/tools/audio/elevenlabs-dialogue>
- **Works in:** Claude Code, Codex, Cursor, Gemini CLI
- **Tags:** `elevenlabs` `dialogue` `multi-speaker`
- **Full card, kept current:** <https://varg.ai/how-to/skills/inference-sh-elevenlabs-dialogue.md>

## Install

```bash
# Claude Code
npx skills add inference-sh/skills --skill elevenlabs-dialogue -a claude-code

# Codex
npx skills add inference-sh/skills --skill elevenlabs-dialogue -a codex

# Cursor
npx skills add inference-sh/skills --skill elevenlabs-dialogue -a cursor

# Gemini CLI
npx skills add inference-sh/skills --skill elevenlabs-dialogue -a gemini-cli
```

## Example

![ElevenLabs Dialogue example](https://s3.varg.ai/how-to/previews/af080259a781/inference-sh-elevenlabs-dialogue.mp3)

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/inference-sh-elevenlabs-dialogue).
