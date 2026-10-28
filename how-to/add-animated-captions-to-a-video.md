# How to add animated captions to a video with AI

TikTok-style subtitles burned into an existing video: word highlight, pop words, or designed editorial captions.

**Full tutorial with the options to show the person, numbered steps and prices:** <https://varg.ai/how-to/add-animated-captions-to-a-video.md>

## Best skills for this

1. **[Remotion Captions](../skills/effect/remotion-captions.md)** (`remotion-captions`, Remotion, live) — Transcribe speech and burn in animated captions with Remotion, or import an existing SRT file.
   - Claude Code: `npx skills add remotion-dev/skills --skill remotion-captions -a claude-code`
   - Example: <https://s3.varg.ai/how-to/previews/3953d368f7d3/remotion-captions.mp4>
2. **[Caption Animation](../skills/effect/iart-caption-animation.md)** (`iart-caption-animation`, iart.ai, live) — Word-timed TikTok captions in Remotion or CSS: per-word pop, active-word highlight, 9:16 safe areas, sidecar SRT/VTT.
   - Claude Code: `npx skills add https://github.com/iart-ai/tiktok-video-skills --skill caption-animation`
3. **[Agent Caption](../skills/effect/agent-caption.md)** (`agent-caption`, Ali Hamza Kamboh, beta) — Local captions in any language: Whisper words, forced-aligned timing, SRT/VTT, burned styles or a GSAP captions.js.
   - Claude Code: `git clone https://github.com/ahkamboh/agent-caption && cd agent-caption && python setup.py`
   - Example: <https://s3.varg.ai/how-to/previews/8298d7a02531/agent-caption.mp4>
4. **[3D Camera Captions](../skills/effect/hyperframes-camera-3d-captions.md)** (`hyperframes-camera-3d-captions`, HeyGen, live) — Captions that live in 3D around a talking head: the camera flies through the words, heroes pass behind the speaker.
   - Claude Code: `npx skills add heygen-com/hyperframes-community-skills --skill camera-3d-captions -a claude-code`
   - Example: <https://s3.varg.ai/how-to/previews/1fc0866a8618/hyperframes-camera-3d-captions.mp4>
5. **[Cinematic Caption](../skills/effect/cinematic-caption-audrey.md)** (`cinematic-caption-audrey`, Audrey, beta) — Designed editorial captions for HyperFrames: scored hero words, subject-aware depth, glass type — not a subtitle strip.
   - Claude Code: `git clone https://github.com/audrey-560/hyperframes-cinematic-caption.git ~/.claude/skills/cinematic-caption`
6. **[ElevenLabs Speech to Text](../skills/model/elevenlabs-speech-to-text.md)** (`elevenlabs-speech-to-text`, ElevenLabs, live) — Transcribe audio and video with word timestamps, speaker labels and keyterms, ready for subtitles.
   - Claude Code: `npx skills add elevenlabs/skills --skill speech-to-text -a claude-code`

## Search it with the person's own words

```bash
curl -s "https://varg.ai/how-to/api/search?q=captions"
```

Also searched as: *captions* · *subtitles* · *tiktok captions* · *animated subtitles* · *karaoke captions* · *word highlight* · *burn subtitles* · *auto captions* · *субтитры* · *титры* · *субтитры как в тикток* · *подсветка слов* · *наложить субтитры*

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Every page here is a short mirror; the page on varg.ai/how-to is the one agents should read.
