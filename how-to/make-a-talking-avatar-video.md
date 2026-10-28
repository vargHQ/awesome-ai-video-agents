# How to make a talking avatar video with AI

A person (from a headshot, or generated) speaks your script to camera with lip-sync, in any language.

**Full tutorial with the options to show the person, numbered steps and prices:** <https://varg.ai/how-to/make-a-talking-avatar-video.md>

## Best skills for this

1. **[AI Avatar Video](../skills/model/inference-sh-ai-avatar-video.md)** (`inference-sh-ai-avatar-video`, inference.sh, live) — Create talking-head avatar videos from a portrait and a script, with a lip-synced voice.
   - Claude Code: `npx skills add inference-sh/skills --skill ai-avatar-video -a claude-code`
   - Example: <https://s3.varg.ai/how-to/previews/f93c1e7bdc03/inference-sh-ai-avatar-video.mp4>
2. **[Talking Head Production](../skills/workflow/inference-sh-talking-head-production.md)** (`inference-sh-talking-head-production`, inference.sh, live) — Produce talking-head videos with AI avatars, lip-sync and voiceover, from portrait specs to final cut.
   - Claude Code: `npx skills add inference-sh/skills --skill talking-head-production -a claude-code`
   - Example: <https://s3.varg.ai/how-to/previews/14ca1501855a/inference-sh-talking-head-production.mp4>
3. **[Lanshu AI Presenter Video](../skills/workflow/lanshu-ai-presenter-video.md)** (`lanshu-ai-presenter-video`, Lanshu, live) — Publish-ready explainers led by an AI presenter from an authorized photo, or in one of twelve presenter-free styles.
   - Claude Code: `git clone https://github.com/cclank/lanshu-create-ai-presenter-video.git ~/.claude/skills/lanshu-create-ai-presenter-video`
   - Example: <https://s3.varg.ai/how-to/previews/e422196a7616/lanshu-ai-presenter-video.mp4>
4. **[Character Keynote](../skills/workflow/varg-character-keynote.md)** (`varg-character-keynote`, varg, beta) — One render call: a Soul character delivers a keynote-style ad line on a generated stage, voiced by Seedance 2.5.
   - Claude Code: `claude plugin marketplace add vargHQ/skills && claude plugin install varg@varg`
5. **[Turn a script into a two-person podcast video](../skills/workflow/varg-podcast-video.md)** (`varg-podcast-video`, varg, beta) — Two-character podcast or debate clips: one studio set, locked camera angles, MiniMax H3 Max with native audio.
   - Claude Code: `claude plugin marketplace add vargHQ/skills && claude plugin install varg@varg`
   - Example: <https://s3.varg.ai/how-to/previews/100daa58d70d/varg-podcast-video.mp4>
6. **[varg AI](../skills/model/varg-ai.md)** (`varg-ai`, varg, live) — The official varg skill: videos, images, speech and music through one API key, rendered in the cloud or locally.
   - Claude Code: `claude plugin marketplace add vargHQ/skills && claude plugin install varg@varg`
   - Example: <https://s3.varg.ai/how-to/previews/7df061df8dcb/varg-ai.mp4>
7. **[ElevenLabs Dubbing](../skills/model/elevenlabs-dubbing.md)** (`elevenlabs-dubbing`, ElevenLabs, live) — Dub video and audio into other languages while keeping each original speaker's voice.
   - Claude Code: `npx skills add elevenlabs/skills --skill dubbing -a claude-code`
   - Example: <https://s3.varg.ai/how-to/previews/5126f538d077/elevenlabs-dubbing.mp3>
8. **[ElevenLabs Speech to Text](../skills/model/elevenlabs-speech-to-text.md)** (`elevenlabs-speech-to-text`, ElevenLabs, live) — Transcribe audio and video with word timestamps, speaker labels and keyterms, ready for subtitles.
   - Claude Code: `npx skills add elevenlabs/skills --skill speech-to-text -a claude-code`
9. **[HyperFrames](../skills/guide/hyperframes.md)** (`hyperframes`, HeyGen, live) — Turn HTML, CSS and seekable animation into deterministic MP4s: launch films, explainers, captions, title cards.
   - Claude Code: `claude plugin marketplace add heygen-com/hyperframes
claude plugin install hyperframes@hyperframes`
   - Example: <https://s3.varg.ai/how-to/previews/400daa5dc577/hyperframes.mp4>

## Search it with the person's own words

```bash
curl -s "https://varg.ai/how-to/api/search?q=talking%20avatar"
```

Also searched as: *talking avatar* · *talking head* · *ai avatar* · *lip sync* · *ai presenter* · *heygen alternative* · *avatar from photo* · *spokesperson video* · *говорящая голова* · *аватар* · *липсинк* · *говорящий аватар из фото* · *ведущий для видео*

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Every page here is a short mirror; the page on varg.ai/how-to is the one agents should read.
