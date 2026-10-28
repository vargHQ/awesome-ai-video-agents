# How to make AI b-roll for your video

Cutaway footage for every mention in a voiceover or interview: generated clips, collage or stock-style shots, cut in on time.

**Full tutorial with the options to show the person, numbered steps and prices:** <https://varg.ai/how-to/make-ai-b-roll-for-your-video.md>

## Best skills for this

1. **[varg AI](../skills/model/varg-ai.md)** (`varg-ai`, varg, live) — The official varg skill: videos, images, speech and music through one API key, rendered in the cloud or locally.
   - Claude Code: `claude plugin marketplace add vargHQ/skills && claude plugin install varg@varg`
   - Example: <https://s3.varg.ai/how-to/previews/7df061df8dcb/varg-ai.mp4>
2. **[Remotion Create](../skills/guide/remotion-create.md)** (`remotion-create`, Remotion, live) — Scaffold a new Remotion project and lay the video out as clips or scenes before writing any frames.
   - Claude Code: `npx skills add remotion-dev/skills --skill remotion-create -a claude-code`
   - Example: <https://s3.varg.ai/how-to/previews/d9d5eb0885c9/remotion-create.mp4>
3. **[Halftone Collage B-roll](../skills/style/gbro-collage-broll.md)** (`gbro-collage-broll`, pyang5166, beta) — Editorial halftone paper-collage B-roll from one line of script, with three approval gates before any video spend.
   - Codex: `git clone https://github.com/pyang5166/gbro-collage-broll.git ~/.agents/skills/gbro-collage-broll`
   - Example: <https://s3.varg.ai/how-to/previews/6788c34c9695/gbro-collage-broll.mp4>
4. **[HyperFrames Media Use](../skills/guide/hyperframes-media-use.md)** (`hyperframes-media-use`, HeyGen, live) — Find or make every asset a video needs: music, SFX, voiceover, images, logos, avatars, transcripts, grades.
   - Claude Code: `claude plugin marketplace add heygen-com/hyperframes
claude plugin install hyperframes@hyperframes`
   - Example: <https://s3.varg.ai/how-to/previews/363b74fce211/hyperframes-media-use.mp4>
5. **[Watch (video analysis)](../skills/model/claude-video-watch.md)** (`claude-video-watch`, Brad Bonanno, live) — Gives the agent eyes on any video: download, scene-aware frames, timestamped transcript.
   - Claude Code: `/plugin marketplace add bradautomates/claude-video
/plugin install watch@claude-video`
6. **[Splice AI clips into a video with FFmpeg](../skills/guide/varg-ffmpeg-mixing.md)** (`varg-ffmpeg-mixing`, varg, beta) — Splice generated clips into an original video with ffmpeg without A/V drift: absolute trims, one audio track.
   - Not installable on its own yet
7. **[ElevenLabs Speech to Text](../skills/model/elevenlabs-speech-to-text.md)** (`elevenlabs-speech-to-text`, ElevenLabs, live) — Transcribe audio and video with word timestamps, speaker labels and keyterms, ready for subtitles.
   - Claude Code: `npx skills add elevenlabs/skills --skill speech-to-text -a claude-code`
8. **[Color Grade AI](../skills/style/color-grade-ai.md)** (`color-grade-ai`, Isaac Rowntree, beta) — Measures a frame or clip and writes .cube 3D LUTs for DaVinci Resolve and Premiere: fixes, shot matching, presets.
   - Claude Code: `git clone https://github.com/isaacrowntree/color-grade-ai.git ~/.claude/skills/color-grade`

## Search it with the person's own words

```bash
curl -s "https://varg.ai/how-to/api/search?q=b-roll"
```

Also searched as: *b-roll* · *broll* · *cutaways* · *footage for my voiceover* · *add visuals to talking head* · *stock footage* · *би-ролл* · *перебивки* · *нарезка для перебивок* · *добавь футажи*

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Every page here is a short mirror; the page on varg.ai/how-to is the one agents should read.
