# How to add voiceover and music to a video with AI

A professional voiceover and a fitting music bed added to your video or screen recording.

**Full tutorial with the options to show the person, numbered steps and prices:** <https://varg.ai/how-to/add-voiceover-and-music-to-a-video.md>

## Best skills for this

1. **[ElevenLabs Text to Speech](../skills/model/elevenlabs-text-to-speech.md)** (`elevenlabs-text-to-speech`, ElevenLabs, live) — Turn scripts into natural voiceover in 90+ languages with ElevenLabs voices, streaming and stitching.
   - Claude Code: `npx skills add elevenlabs/skills --skill text-to-speech -a claude-code`
   - Example: <https://s3.varg.ai/how-to/previews/93c5f4b65bdc/elevenlabs-text-to-speech.mp3>
2. **[ElevenLabs Music](../skills/model/elevenlabs-music.md)** (`elevenlabs-music`, ElevenLabs, live) — Compose songs, instrumentals, jingles and background tracks from a prompt or a section-by-section plan.
   - Claude Code: `npx skills add elevenlabs/skills --skill music -a claude-code`
   - Example: <https://s3.varg.ai/how-to/previews/de1f19f6d496/elevenlabs-music.mp3>
3. **[HyperFrames Media Use](../skills/guide/hyperframes-media-use.md)** (`hyperframes-media-use`, HeyGen, live) — Find or make every asset a video needs: music, SFX, voiceover, images, logos, avatars, transcripts, grades.
   - Claude Code: `claude plugin marketplace add heygen-com/hyperframes
claude plugin install hyperframes@hyperframes`
   - Example: <https://s3.varg.ai/how-to/previews/363b74fce211/hyperframes-media-use.mp4>
4. **[HyperFrames](../skills/guide/hyperframes.md)** (`hyperframes`, HeyGen, live) — Turn HTML, CSS and seekable animation into deterministic MP4s: launch films, explainers, captions, title cards.
   - Claude Code: `claude plugin marketplace add heygen-com/hyperframes
claude plugin install hyperframes@hyperframes`
   - Example: <https://s3.varg.ai/how-to/previews/400daa5dc577/hyperframes.mp4>
5. **[Splice AI clips into a video with FFmpeg](../skills/guide/varg-ffmpeg-mixing.md)** (`varg-ffmpeg-mixing`, varg, beta) — Splice generated clips into an original video with ffmpeg without A/V drift: absolute trims, one audio track.
   - Not installable on its own yet
6. **[varg AI](../skills/model/varg-ai.md)** (`varg-ai`, varg, live) — The official varg skill: videos, images, speech and music through one API key, rendered in the cloud or locally.
   - Claude Code: `claude plugin marketplace add vargHQ/skills && claude plugin install varg@varg`
   - Example: <https://s3.varg.ai/how-to/previews/7df061df8dcb/varg-ai.mp4>
7. **[ElevenLabs Speech to Text](../skills/model/elevenlabs-speech-to-text.md)** (`elevenlabs-speech-to-text`, ElevenLabs, live) — Transcribe audio and video with word timestamps, speaker labels and keyterms, ready for subtitles.
   - Claude Code: `npx skills add elevenlabs/skills --skill speech-to-text -a claude-code`

## Search it with the person's own words

```bash
curl -s "https://varg.ai/how-to/api/search?q=voiceover"
```

Also searched as: *voiceover* · *add voiceover* · *text to speech* · *background music* · *music for video* · *ai voice* · *озвучка* · *озвучить видео* · *добавить музыку* · *фоновая музыка* · *голос для видео* · *add music* · *soundtrack* · *sound effects* · *sfx* · *музыка к видео*

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Every page here is a short mirror; the page on varg.ai/how-to is the one agents should read.
