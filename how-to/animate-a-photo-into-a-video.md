# How to animate a photo into a video with AI

A still photo brought to life: a subtle smile, blink, camera move or full scene motion.

**Full tutorial with the options to show the person, numbered steps and prices:** <https://varg.ai/how-to/animate-a-photo-into-a-video.md>

## Best skills for this

1. **[varg AI](../skills/model/varg-ai.md)** (`varg-ai`, varg, live) — The official varg skill: videos, images, speech and music through one API key, rendered in the cloud or locally.
   - Claude Code: `claude plugin marketplace add vargHQ/skills && claude plugin install varg@varg`
   - Example: <https://s3.varg.ai/how-to/previews/7df061df8dcb/varg-ai.mp4>
2. **[Image to Video](../skills/model/inference-sh-image-to-video.md)** (`inference-sh-image-to-video`, inference.sh, live) — Animate stills into video: pick the right model, then prompt motion and camera moves that hold together.
   - Claude Code: `npx skills add inference-sh/skills --skill image-to-video -a claude-code`
   - Example: <https://s3.varg.ai/how-to/previews/b6de4a604e87/inference-sh-image-to-video.mp4>
3. **[FLUX 3 Archival Formats](../skills/style/flux-3-archival-formats.md)** (`flux-3-archival-formats`, Black Forest Labs, live) — Give FLUX 3 video a period look by naming the recording format and its artifacts, not a mood.
   - Claude Code: `/plugin marketplace add black-forest-labs/skills
/plugin install flux-3-video@black-forest-labs`
   - Example: <https://s3.varg.ai/how-to/previews/0f57a7e83417/flux-3-archival-formats.mp4>
4. **[Replicate Prompt Videos](../skills/prompt/replicate-prompt-videos.md)** (`replicate-prompt-videos`, Replicate, live) — Prompt video models like a director: shots, camera motion, four audio layers, dialogue, time-coded beats.
   - Claude Code: `npx skills add replicate/skills --skill prompt-videos -a claude-code`
   - Example: <https://s3.varg.ai/how-to/previews/ba56e406f770/replicate-prompt-videos.mp4>

## Search it with the person's own words

```bash
curl -s "https://varg.ai/how-to/api/search?q=animate%20photo"
```

Also searched as: *animate photo* · *photo to video* · *image to video* · *bring photo to life* · *old photo animation* · *оживить фото* · *оживи фотографию* · *фото в видео* · *анимировать картинку*

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Every page here is a short mirror; the page on varg.ai/how-to is the one agents should read.
