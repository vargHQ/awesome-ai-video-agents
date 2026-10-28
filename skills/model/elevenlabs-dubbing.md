# ElevenLabs Dubbing

Dub video and audio into other languages while keeping each original speaker's voice.

- **Type:** Models & tools · Dubbing
- **Status:** live
- **Publisher:** ElevenLabs
- **License:** MIT
- **Source:** <https://github.com/elevenlabs/skills/tree/main/dubbing>
- **Works in:** Claude Code, Codex, Cursor, Gemini CLI, OpenClaw
- **Tags:** `dubbing` `localization` `video` `translation` `audio`
- **Full card, kept current:** <https://varg.ai/how-to/skills/elevenlabs-dubbing.md>

## Install

```bash
# Claude Code
npx skills add elevenlabs/skills --skill dubbing -a claude-code

# Codex
npx skills add elevenlabs/skills --skill dubbing -a codex

# Cursor
npx skills add elevenlabs/skills --skill dubbing -a cursor

# OpenClaw
npx skills add elevenlabs/skills --skill dubbing -a openclaw

# Gemini CLI
npx skills add elevenlabs/skills --skill dubbing -a gemini-cli
```

## Example

![ElevenLabs Dubbing example](https://s3.varg.ai/how-to/previews/5126f538d077/elevenlabs-dubbing.mp3)

## Step-by-step tutorials that use it

- [How to make a talking avatar video with AI](../../how-to/make-a-talking-avatar-video.md): A person (from a headshot, or generated) speaks your script to camera with lip-sync, in any language.
- [How to translate and dub a video with AI](../../how-to/translate-and-dub-a-video.md): Your video in another language with your own voice, optionally lip-synced and subtitled.

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/elevenlabs-dubbing).
