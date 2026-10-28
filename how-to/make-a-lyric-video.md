# How to make a lyric video with AI

Lyrics synced to the song: the sung line big and highlighted, karaoke-style, over art or a shader.

**Full tutorial with the options to show the person, numbered steps and prices:** <https://varg.ai/how-to/make-a-lyric-video.md>

## Best skills for this

1. **[HyperFrames](../skills/guide/hyperframes.md)** (`hyperframes`, HeyGen, live) — Turn HTML, CSS and seekable animation into deterministic MP4s: launch films, explainers, captions, title cards.
   - Claude Code: `claude plugin marketplace add heygen-com/hyperframes
claude plugin install hyperframes@hyperframes`
   - Example: <https://s3.varg.ai/how-to/previews/400daa5dc577/hyperframes.mp4>
2. **[Kinetic Typography](../skills/effect/iart-kinetic-typography.md)** (`iart-kinetic-typography`, iart.ai, live) — Kinetic type for web and video: line, word or char splits, mask and blur reveals, variable-font motion, frozen-frame QA.
   - Claude Code: `/plugin marketplace add iart-ai/kinetic-typography-skills
/plugin install kinetic-typography-skills`
   - Example: <https://s3.varg.ai/how-to/previews/219258f3ad0d/iart-kinetic-typography.mp4>
3. **[Remotion Captions](../skills/effect/remotion-captions.md)** (`remotion-captions`, Remotion, live) — Transcribe speech and burn in animated captions with Remotion, or import an existing SRT file.
   - Claude Code: `npx skills add remotion-dev/skills --skill remotion-captions -a claude-code`
   - Example: <https://s3.varg.ai/how-to/previews/3953d368f7d3/remotion-captions.mp4>
4. **[Turn a song into an AI music video](../skills/workflow/varg-music-video.md)** (`varg-music-video`, varg, beta) — Direct an AI music video the way top X creators do: song map, beat-grid storyboard, stills first, Seedance, lip-sync.
   - Claude Code: `claude plugin marketplace add vargHQ/skills && claude plugin install varg@varg`
5. **[Agent Caption](../skills/effect/agent-caption.md)** (`agent-caption`, Ali Hamza Kamboh, beta) — Local captions in any language: Whisper words, forced-aligned timing, SRT/VTT, burned styles or a GSAP captions.js.
   - Claude Code: `git clone https://github.com/ahkamboh/agent-caption && cd agent-caption && python setup.py`
   - Example: <https://s3.varg.ai/how-to/previews/8298d7a02531/agent-caption.mp4>
6. **[ElevenLabs Speech to Text](../skills/model/elevenlabs-speech-to-text.md)** (`elevenlabs-speech-to-text`, ElevenLabs, live) — Transcribe audio and video with word timestamps, speaker labels and keyterms, ready for subtitles.
   - Claude Code: `npx skills add elevenlabs/skills --skill speech-to-text -a claude-code`
7. **[varg AI](../skills/model/varg-ai.md)** (`varg-ai`, varg, live) — The official varg skill: videos, images, speech and music through one API key, rendered in the cloud or locally.
   - Claude Code: `claude plugin marketplace add vargHQ/skills && claude plugin install varg@varg`
   - Example: <https://s3.varg.ai/how-to/previews/7df061df8dcb/varg-ai.mp4>
8. **[ElevenLabs Voice Isolator](../skills/model/elevenlabs-voice-isolator.md)** (`elevenlabs-voice-isolator`, ElevenLabs, live) — Strip background noise and music from dialogue to get clean, isolated speech.
   - Claude Code: `npx skills add elevenlabs/skills --skill voice-isolator -a claude-code`
   - Example: <https://s3.varg.ai/how-to/previews/e95b08cb1189/elevenlabs-voice-isolator.mp3>

## Search it with the person's own words

```bash
curl -s "https://varg.ai/how-to/api/search?q=lyric%20video"
```

Also searched as: *lyric video* · *lyrics video* · *karaoke video* · *apple music lyrics* · *spotify lyrics style* · *лирик видео* · *видео с текстом песни* · *караоке видео*

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Every page here is a short mirror; the page on varg.ai/how-to is the one agents should read.
