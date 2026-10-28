# ElevenLabs Speech to Text

Transcribe audio and video with word timestamps, speaker labels and keyterms, ready for subtitles.

- **Type:** Models & tools · Captions
- **Status:** live
- **Publisher:** ElevenLabs
- **License:** MIT
- **Source:** <https://github.com/elevenlabs/skills/tree/main/speech-to-text>
- **Works in:** Claude Code, Codex, Cursor, Gemini CLI, OpenClaw
- **Tags:** `audio` `transcription` `subtitles` `diarization`
- **Full card, kept current:** <https://varg.ai/how-to/skills/elevenlabs-speech-to-text.md>

## Install

```bash
# Claude Code
npx skills add elevenlabs/skills --skill speech-to-text -a claude-code

# Codex
npx skills add elevenlabs/skills --skill speech-to-text -a codex

# Cursor
npx skills add elevenlabs/skills --skill speech-to-text -a cursor

# OpenClaw
npx skills add elevenlabs/skills --skill speech-to-text -a openclaw

# Gemini CLI
npx skills add elevenlabs/skills --skill speech-to-text -a gemini-cli
```

## Step-by-step tutorials that use it

- [How to cut a podcast into short video clips with AI](../../how-to/cut-a-podcast-into-short-video-clips.md): Find the best moments in a long video, cut them, reframe to 9:16 and burn captions.
- [How to add animated captions to a video with AI](../../how-to/add-animated-captions-to-a-video.md): TikTok-style subtitles burned into an existing video: word highlight, pop words, or designed editorial captions.
- [How to make a talking avatar video with AI](../../how-to/make-a-talking-avatar-video.md): A person (from a headshot, or generated) speaks your script to camera with lip-sync, in any language.
- [How to make an AI music video](../../how-to/make-an-ai-music-video.md): A music video for your song: concept, a consistent lead character, shots cut on the beat, lip-sync on vocals.
- [How to make a lyric video with AI](../../how-to/make-a-lyric-video.md): Lyrics synced to the song: the sung line big and highlighted, karaoke-style, over art or a shader.
- [How to edit your own video footage with AI](../../how-to/edit-your-own-video-footage.md): Cut silences and flubs, reframe 16:9 to 9:16, add captions and b-roll to footage you shot.
- [How to add voiceover and music to a video with AI](../../how-to/add-voiceover-and-music-to-a-video.md): A professional voiceover and a fitting music bed added to your video or screen recording.
- [How to make AI b-roll for your video](../../how-to/make-ai-b-roll-for-your-video.md): Cutaway footage for every mention in a voiceover or interview: generated clips, collage or stock-style shots, cut in on time.

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/elevenlabs-speech-to-text).
