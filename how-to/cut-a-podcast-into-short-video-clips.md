# How to cut a podcast into short video clips with AI

Find the best moments in a long video, cut them, reframe to 9:16 and burn captions.

**Full tutorial with the options to show the person, numbered steps and prices:** <https://varg.ai/how-to/cut-a-podcast-into-short-video-clips.md>

## Best skills for this

1. **[Clipify](../skills/effect/clipify.md)** (`clipify`, Louise de Sadeleer, live) — Long videos into social clips: find funny lines or impact beats, cut, reframe to 9:16, burn word-by-word captions.
   - Claude Code: `git clone https://github.com/louisedesadeleer/clipify.git ~/.claude/skills/clipify`
   - Example: <https://s3.varg.ai/how-to/previews/76ea06e94e22/clipify.mp4>
2. **[Herk Edit Kit](../skills/workflow/herk-edit-kit.md)** (`herk-edit-kit`, Nate Herk, live) — Nate Herk's kit to edit talking-head videos, reels and Shorts: silence and flub cuts, storytelling, motion graphics.
   - Claude Code: `git clone https://github.com/nateherkai/herk-edit-kit.git`
   - Example: <https://s3.varg.ai/how-to/previews/bb31cdd5a172/herk-edit-kit.mp4>
3. **[Claude Code Video Toolkit](../skills/workflow/claude-code-video-toolkit.md)** (`claude-code-video-toolkit`, Digital Samba, live) — Open-source video workspace for Claude Code: script, voice, music, visuals and Remotion render on your own GPU account.
   - Claude Code: `git clone https://github.com/digitalsamba/claude-code-video-toolkit.git && cd claude-code-video-toolkit && claude`
   - Example: <https://s3.varg.ai/how-to/previews/f6aa7b236454/claude-code-video-toolkit.mp4>
4. **[OpenMontage](../skills/workflow/openmontage.md)** (`openmontage`, Calesthio, live) — Open-source agentic video studio: 12 pipelines (8 edit your footage), 100+ tools, ~140 skills. Run your agent in it.
   - Claude Code: `git clone https://github.com/calesthio/OpenMontage.git`
   - Example: <https://s3.varg.ai/how-to/previews/d1a56fafe3a7/openmontage.mp4>
5. **[Local-first video downloader: private, no subscription](../skills/model/media-download.md)** (`media-download`, varg, live) — Save any video by link (X, YouTube, Instagram, TikTok, 1800+ sites) or Pinterest images as references, locally, no key.
   - Claude Code: `claude plugin marketplace add vargHQ/skills && claude plugin install varg@varg`
   - Example: <https://s3.varg.ai/how-to/previews/547c697e5104/media-download.mp4>
6. **[ElevenLabs Speech to Text](../skills/model/elevenlabs-speech-to-text.md)** (`elevenlabs-speech-to-text`, ElevenLabs, live) — Transcribe audio and video with word timestamps, speaker labels and keyterms, ready for subtitles.
   - Claude Code: `npx skills add elevenlabs/skills --skill speech-to-text -a claude-code`

## Search it with the person's own words

```bash
curl -s "https://varg.ai/how-to/api/search?q=clips%20from%20podcast"
```

Also searched as: *clips from podcast* · *podcast to shorts* · *long video to shorts* · *repurpose video* · *highlights* · *opus clip alternative* · *cut into reels* · *youtube to tiktok* · *нарезка подкаста* · *нарезать шортсы* · *клипы из видео* · *из длинного видео в рилсы* · *вертикальные нарезки*

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Every page here is a short mirror; the page on varg.ai/how-to is the one agents should read.
