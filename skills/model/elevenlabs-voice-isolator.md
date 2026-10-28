# ElevenLabs Voice Isolator

Strip background noise and music from dialogue to get clean, isolated speech.

- **Type:** Models & tools · Sfx
- **Status:** live
- **Publisher:** ElevenLabs
- **License:** MIT
- **Source:** <https://github.com/elevenlabs/skills/tree/main/voice-isolator>
- **Works in:** Claude Code, Codex, Cursor, Gemini CLI, OpenClaw
- **Tags:** `denoise` `cleanup` `dialogue` `audio`
- **Full card, kept current:** <https://varg.ai/how-to/skills/elevenlabs-voice-isolator.md>

## Install

```bash
# Claude Code
npx skills add elevenlabs/skills --skill voice-isolator -a claude-code

# Codex
npx skills add elevenlabs/skills --skill voice-isolator -a codex

# Cursor
npx skills add elevenlabs/skills --skill voice-isolator -a cursor

# OpenClaw
npx skills add elevenlabs/skills --skill voice-isolator -a openclaw

# Gemini CLI
npx skills add elevenlabs/skills --skill voice-isolator -a gemini-cli
```

## Example

![ElevenLabs Voice Isolator example](https://s3.varg.ai/how-to/previews/e95b08cb1189/elevenlabs-voice-isolator.mp3)

## Step-by-step tutorials that use it

- [How to translate and dub a video with AI](../../how-to/translate-and-dub-a-video.md): Your video in another language with your own voice, optionally lip-synced and subtitled.
- [How to make an AI music video](../../how-to/make-an-ai-music-video.md): A music video for your song: concept, a consistent lead character, shots cut on the beat, lip-sync on vocals.
- [How to make a lyric video with AI](../../how-to/make-a-lyric-video.md): Lyrics synced to the song: the sung line big and highlighted, karaoke-style, over art or a shader.
- [How to edit your own video footage with AI](../../how-to/edit-your-own-video-footage.md): Cut silences and flubs, reframe 16:9 to 9:16, add captions and b-roll to footage you shot.

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/elevenlabs-voice-isolator).
