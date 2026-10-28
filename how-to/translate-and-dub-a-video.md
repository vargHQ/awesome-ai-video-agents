# How to translate and dub a video with AI

Your video in another language with your own voice, optionally lip-synced and subtitled.

**Full tutorial with the options to show the person, numbered steps and prices:** <https://varg.ai/how-to/translate-and-dub-a-video.md>

## Best skills for this

1. **[ElevenLabs Dubbing](../skills/model/elevenlabs-dubbing.md)** (`elevenlabs-dubbing`, ElevenLabs, live) — Dub video and audio into other languages while keeping each original speaker's voice.
   - Claude Code: `npx skills add elevenlabs/skills --skill dubbing -a claude-code`
   - Example: <https://s3.varg.ai/how-to/previews/5126f538d077/elevenlabs-dubbing.mp3>
2. **[ElevenLabs Dubbing (inference.sh)](../skills/model/inference-sh-elevenlabs-dubbing.md)** (`inference-sh-elevenlabs-dubbing`, inference.sh, live) — Dub audio or video into 29 languages while keeping the speaker's voice, via inference.sh.
   - Claude Code: `npx skills add inference-sh/skills --skill elevenlabs-dubbing -a claude-code`
   - Example: <https://s3.varg.ai/how-to/previews/23b6476cc76e/inference-sh-elevenlabs-dubbing.mp4>
3. **[Local-first video downloader: private, no subscription](../skills/model/media-download.md)** (`media-download`, varg, live) — Save any video by link (X, YouTube, Instagram, TikTok, 1800+ sites) or Pinterest images as references, locally, no key.
   - Claude Code: `claude plugin marketplace add vargHQ/skills && claude plugin install varg@varg`
   - Example: <https://s3.varg.ai/how-to/previews/547c697e5104/media-download.mp4>
4. **[Subtitle Translator](../skills/guide/gemini-srt-translator.md)** (`gemini-srt-translator`, Matheus Castro, live) — Agent-translated SRT/ASS subtitles in resumable batches that keep cue count, timing and ASS styling tags intact.
   - Claude Code: `pip install gemini-srt-translator && gst skill install --target claude`
5. **[varg AI](../skills/model/varg-ai.md)** (`varg-ai`, varg, live) — The official varg skill: videos, images, speech and music through one API key, rendered in the cloud or locally.
   - Claude Code: `claude plugin marketplace add vargHQ/skills && claude plugin install varg@varg`
   - Example: <https://s3.varg.ai/how-to/previews/7df061df8dcb/varg-ai.mp4>
6. **[ElevenLabs Voice Isolator](../skills/model/elevenlabs-voice-isolator.md)** (`elevenlabs-voice-isolator`, ElevenLabs, live) — Strip background noise and music from dialogue to get clean, isolated speech.
   - Claude Code: `npx skills add elevenlabs/skills --skill voice-isolator -a claude-code`
   - Example: <https://s3.varg.ai/how-to/previews/e95b08cb1189/elevenlabs-voice-isolator.mp3>

## Search it with the person's own words

```bash
curl -s "https://varg.ai/how-to/api/search?q=dubbing"
```

Also searched as: *dubbing* · *dub video* · *translate video* · *voice translation* · *lip sync translation* · *localize video* · *перевести видео* · *дубляж* · *озвучка на другом языке* · *перевод с сохранением голоса*

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Every page here is a short mirror; the page on varg.ai/how-to is the one agents should read.
