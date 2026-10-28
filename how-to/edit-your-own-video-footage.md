# How to edit your own video footage with AI

Cut silences and flubs, reframe 16:9 to 9:16, add captions and b-roll to footage you shot.

**Full tutorial with the options to show the person, numbered steps and prices:** <https://varg.ai/how-to/edit-your-own-video-footage.md>

## Best skills for this

1. **[Herk Edit Kit](../skills/workflow/herk-edit-kit.md)** (`herk-edit-kit`, Nate Herk, live) — Nate Herk's kit to edit talking-head videos, reels and Shorts: silence and flub cuts, storytelling, motion graphics.
   - Claude Code: `git clone https://github.com/nateherkai/herk-edit-kit.git`
   - Example: <https://s3.varg.ai/how-to/previews/bb31cdd5a172/herk-edit-kit.mp4>
2. **[Clipify](../skills/effect/clipify.md)** (`clipify`, Louise de Sadeleer, live) — Long videos into social clips: find funny lines or impact beats, cut, reframe to 9:16, burn word-by-word captions.
   - Claude Code: `git clone https://github.com/louisedesadeleer/clipify.git ~/.claude/skills/clipify`
   - Example: <https://s3.varg.ai/how-to/previews/76ea06e94e22/clipify.mp4>
3. **[FFmpeg Skill](../skills/model/ffmpeg-skill.md)** (`ffmpeg-skill`, Shogo Kajiyama, live) — Local video editor for agents: 42 FFmpeg tools with a machine-readable contract and an MCP server; no cloud, no keys.
   - Claude Code: `npx ffmpeg-skill`
   - Example: <https://s3.varg.ai/how-to/previews/564622beb60d/ffmpeg-skill.mp4>
4. **[Claude Code Video Toolkit](../skills/workflow/claude-code-video-toolkit.md)** (`claude-code-video-toolkit`, Digital Samba, live) — Open-source video workspace for Claude Code: script, voice, music, visuals and Remotion render on your own GPU account.
   - Claude Code: `git clone https://github.com/digitalsamba/claude-code-video-toolkit.git && cd claude-code-video-toolkit && claude`
   - Example: <https://s3.varg.ai/how-to/previews/f6aa7b236454/claude-code-video-toolkit.mp4>
5. **[Chengfeng Videocut](../skills/workflow/chengfeng-videocut.md)** (`chengfeng-videocut`, chengfeng, live) — Chinese talking-head editing: word-level transcript, five-pass flub sweep, human review in a Studio, subtitles, export.
   - Codex: `node bin/install.cjs install`
   - Example: <https://s3.varg.ai/how-to/previews/e62a09a47006/chengfeng-videocut.webp>
6. **[Splice AI clips into a video with FFmpeg](../skills/guide/varg-ffmpeg-mixing.md)** (`varg-ffmpeg-mixing`, varg, beta) — Splice generated clips into an original video with ffmpeg without A/V drift: absolute trims, one audio track.
   - Not installable on its own yet
7. **[Video Editing Best Practices](../skills/guide/varg-video-editing.md)** (`varg-video-editing`, varg, live) — Best practices for editing video with agents: which service for each edit, and the rules that keep cuts clean.
   - Claude Code: `claude plugin marketplace add vargHQ/skills && claude plugin install varg@varg`
8. **[ElevenLabs Voice Isolator](../skills/model/elevenlabs-voice-isolator.md)** (`elevenlabs-voice-isolator`, ElevenLabs, live) — Strip background noise and music from dialogue to get clean, isolated speech.
   - Claude Code: `npx skills add elevenlabs/skills --skill voice-isolator -a claude-code`
   - Example: <https://s3.varg.ai/how-to/previews/e95b08cb1189/elevenlabs-voice-isolator.mp3>
9. **[ElevenLabs Speech to Text](../skills/model/elevenlabs-speech-to-text.md)** (`elevenlabs-speech-to-text`, ElevenLabs, live) — Transcribe audio and video with word timestamps, speaker labels and keyterms, ready for subtitles.
   - Claude Code: `npx skills add elevenlabs/skills --skill speech-to-text -a claude-code`
10. **[HyperFrames](../skills/guide/hyperframes.md)** (`hyperframes`, HeyGen, live) — Turn HTML, CSS and seekable animation into deterministic MP4s: launch films, explainers, captions, title cards.
   - Claude Code: `claude plugin marketplace add heygen-com/hyperframes
claude plugin install hyperframes@hyperframes`
   - Example: <https://s3.varg.ai/how-to/previews/400daa5dc577/hyperframes.mp4>
11. **[ElevenLabs Sound Effects](../skills/model/elevenlabs-sound-effects.md)** (`elevenlabs-sound-effects`, ElevenLabs, live) — Generate sound effects and ambiences from a text description, including seamless loops.
   - Claude Code: `npx skills add elevenlabs/skills --skill sound-effects -a claude-code`
   - Example: <https://s3.varg.ai/how-to/previews/8caef6128d55/elevenlabs-sound-effects.mp3>

## Search it with the person's own words

```bash
curl -s "https://varg.ai/how-to/api/search?q=edit%20my%20video"
```

Also searched as: *edit my video* · *cut silences* · *remove pauses* · *jump cuts* · *reframe to vertical* · *16:9 to 9:16* · *video editing agent* · *смонтируй* · *вырежи паузы* · *перегони в вертикаль* · *монтаж видео* · *обрезать видео* · *talking head edit* · *recut talking head* · *punchy edit* · *raw footage edit* · *zooms and subtitles*

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Every page here is a short mirror; the page on varg.ai/how-to is the one agents should read.
