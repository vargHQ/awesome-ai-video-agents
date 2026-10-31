# How to turn photos into a slideshow video with AI

Your photos cut to music, with motion, transitions on the beat and titles.

**Full tutorial with the options to show the person, numbered steps and prices:** <https://varg.ai/how-to/turn-photos-into-a-slideshow-video.md>

## Best skills for this

1. **[HyperFrames](../skills/guide/hyperframes.md)** (`hyperframes`, HeyGen, live) — Turn HTML, CSS and seekable animation into deterministic MP4s: launch films, explainers, captions, title cards.
   - Claude Code: `claude plugin marketplace add heygen-com/hyperframes
claude plugin install hyperframes@hyperframes`
   - Example: <https://s3.varg.ai/how-to/previews/400daa5dc577/hyperframes.mp4>
2. **[Remotion Best Practices](../skills/guide/remotion-best-practices.md)** (`remotion-best-practices`, Remotion, live) — Make videos in React with Remotion: the router that loads the right Remotion skill for each step.
   - Claude Code: `npx skills add remotion-dev/skills --skill remotion-best-practices -a claude-code`
   - Example: <https://s3.varg.ai/how-to/previews/04200edf541b/remotion-best-practices.mp4>
3. **[Editing & Transitions](../skills/effect/craft-editing-transitions.md)** (`craft-editing-transitions`, varg, draft) — Cuts, match cuts, J/L cuts, whips and speed ramps — multi-shot prompt syntax per model, ffmpeg when needed.
   - Not installable on its own yet
   - Example: <https://s3.varg.ai/how-to/previews/061cde0f9ca7/craft-editing-transitions.mp4>
4. **[varg AI](../skills/model/varg-ai.md)** (`varg-ai`, varg, live) — The official varg skill: videos, images, speech and music through one API key, rendered in the cloud or locally.
   - Claude Code: `claude plugin marketplace add vargHQ/skills && claude plugin install varg@varg`
   - Example: <https://s3.varg.ai/how-to/previews/7df061df8dcb/varg-ai.mp4>
5. **[Color Looks & LUTs](../skills/style/craft-color-looks.md)** (`craft-color-looks`, varg, draft) — Name a look, get prompt words plus an ffmpeg grade: LUT at partial strength, then moving grain.
   - Not installable on its own yet
   - Example: <https://s3.varg.ai/how-to/previews/ab14fd5718b2/craft-color-looks.mp4>

## Search it with the person's own words

```bash
curl -s "https://varg.ai/how-to/api/search?q=slideshow"
```

Also searched as: *slideshow* · *photo slideshow* · *photos to video* · *travel video from photos* · *montage from photos* · *beat sync slideshow* · *слайдшоу* · *видео из фото* · *фото под музыку* · *монтаж из фотографий* · *birthday slideshow* · *birthday slideshow maker* · *birthday slideshow with music*

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Every page here is a short mirror; the page on varg.ai/how-to is the one agents should read.
