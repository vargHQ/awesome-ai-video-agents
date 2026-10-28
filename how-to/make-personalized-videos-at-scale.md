# How to make personalized videos at scale with AI

One template, many versions: each lead's name, company and website in the video, optionally in a cloned voice.

**Full tutorial with the options to show the person, numbered steps and prices:** <https://varg.ai/how-to/make-personalized-videos-at-scale.md>

## Best skills for this

1. **[HyperFrames](../skills/guide/hyperframes.md)** (`hyperframes`, HeyGen, live) — Turn HTML, CSS and seekable animation into deterministic MP4s: launch films, explainers, captions, title cards.
   - Claude Code: `claude plugin marketplace add heygen-com/hyperframes
claude plugin install hyperframes@hyperframes`
   - Example: <https://s3.varg.ai/how-to/previews/400daa5dc577/hyperframes.mp4>
2. **[Remotion Best Practices](../skills/guide/remotion-best-practices.md)** (`remotion-best-practices`, Remotion, live) — Make videos in React with Remotion: the router that loads the right Remotion skill for each step.
   - Claude Code: `npx skills add remotion-dev/skills --skill remotion-best-practices -a claude-code`
   - Example: <https://s3.varg.ai/how-to/previews/04200edf541b/remotion-best-practices.mp4>
3. **[varg AI](../skills/model/varg-ai.md)** (`varg-ai`, varg, live) — The official varg skill: videos, images, speech and music through one API key, rendered in the cloud or locally.
   - Claude Code: `claude plugin marketplace add vargHQ/skills && claude plugin install varg@varg`
   - Example: <https://s3.varg.ai/how-to/previews/7df061df8dcb/varg-ai.mp4>
4. **[ElevenLabs Text to Speech](../skills/model/elevenlabs-text-to-speech.md)** (`elevenlabs-text-to-speech`, ElevenLabs, live) — Turn scripts into natural voiceover in 90+ languages with ElevenLabs voices, streaming and stitching.
   - Claude Code: `npx skills add elevenlabs/skills --skill text-to-speech -a claude-code`
   - Example: <https://s3.varg.ai/how-to/previews/93c5f4b65bdc/elevenlabs-text-to-speech.mp3>
5. **[HyperFrames CLI](../skills/guide/hyperframes-cli.md)** (`hyperframes-cli`, HeyGen, live) — Drive the HyperFrames CLI: scaffold, check, preview, snapshot, edit the timeline, render locally or in the cloud.
   - Claude Code: `claude plugin marketplace add heygen-com/hyperframes
claude plugin install hyperframes@hyperframes`
   - Example: <https://s3.varg.ai/how-to/previews/2ce1446e01bd/hyperframes-cli.mp4>

## Search it with the person's own words

```bash
curl -s "https://varg.ai/how-to/api/search?q=personalized%20videos"
```

Also searched as: *personalized videos* · *personalized outreach video* · *video for each lead* · *video per customer* · *mail merge video* · *персонализированные видео* · *видео для каждого клиента*

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Every page here is a short mirror; the page on varg.ai/how-to is the one agents should read.
