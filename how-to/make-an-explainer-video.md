# How to make an explainer video with AI

A narrated explainer about a product, a topic or a document, with motion graphics or AI visuals.

**Full tutorial with the options to show the person, numbered steps and prices:** <https://varg.ai/how-to/make-an-explainer-video.md>

## Best skills for this

1. **[HyperFrames](../skills/guide/hyperframes.md)** (`hyperframes`, HeyGen, live) — Turn HTML, CSS and seekable animation into deterministic MP4s: launch films, explainers, captions, title cards.
   - Claude Code: `claude plugin marketplace add heygen-com/hyperframes
claude plugin install hyperframes@hyperframes`
   - Example: <https://s3.varg.ai/how-to/previews/400daa5dc577/hyperframes.mp4>
2. **[Plain-Sight Explainer](../skills/workflow/hyperframes-vox-explainer.md)** (`hyperframes-vox-explainer`, HeyGen, live) — 60–90 s collage explainers about everyday things, or mined from your documents and links, with numeric seam checks.
   - Claude Code: `npx skills add heygen-com/hyperframes-community-skills --skill vox-explainer -a claude-code`
   - Example: <https://s3.varg.ai/how-to/previews/ba6b4376e811/hyperframes-vox-explainer.mp4>
3. **[Manim Skills (3Blue1Brown Style)](../skills/workflow/manim-skill.md)** (`manim-skill`, Adithya S K, live) — Plan and code 3Blue1Brown-style math animations: a scene composer plus ManimCE and ManimGL best practices.
   - Claude Code: `npx skills add adithya-s-k/manim_skill`
   - Example: <https://s3.varg.ai/how-to/previews/50441be821bb/manim-skill.mp4>
4. **[Higgsfield Video Explainer](../skills/workflow/higgsfield-video-explainer.md)** (`higgsfield-video-explainer`, Higgsfield, live) — Turn a topic or document into a narrated, stylized explainer assembled from 10-second voiced blocks.
   - Claude Code: `/plugin marketplace add higgsfield-ai/skills
/plugin install higgsfield@higgsfield`
   - Example: <https://s3.varg.ai/how-to/previews/34cfb11019a9/higgsfield-video-explainer.mp4>
5. **[Explainroo](../skills/workflow/explainroo.md)** (`explainroo`, Vincent Schmalbach, live) — Narrated explainer MP4s with a local voice (Kokoro), word timing (Whisper) and a canvas renderer; no API key needed.
   - Claude Code: `git clone https://github.com/vincentsch/explainroo.git && cd explainroo && npm install`
   - Example: <https://s3.varg.ai/how-to/previews/b0a4864ee2f0/explainroo.webp>
6. **[Explainer Video Guide](../skills/guide/inference-sh-explainer-video-guide.md)** (`inference-sh-explainer-video-guide`, inference.sh, live) — Plan explainer videos end to end: script formulas, pacing, scene planning, voiceover and assembly.
   - Claude Code: `npx skills add inference-sh/skills --skill explainer-video-guide -a claude-code`
7. **[varg AI](../skills/model/varg-ai.md)** (`varg-ai`, varg, live) — The official varg skill: videos, images, speech and music through one API key, rendered in the cloud or locally.
   - Claude Code: `claude plugin marketplace add vargHQ/skills && claude plugin install varg@varg`
   - Example: <https://s3.varg.ai/how-to/previews/7df061df8dcb/varg-ai.mp4>
8. **[Anatomy Isometric Figures](../skills/style/anatomy-isometric.md)** (`anatomy-isometric`, Ryan, live) — Detailed interactive isometric SVG figures that explain a technical idea as a physical object, with optional WebGL.
   - Claude Code: `npx skills add wheresryan22/anatomy -g -a claude-code`
   - Example: <https://s3.varg.ai/how-to/previews/1fb6f4c25856/anatomy-isometric.webp>

## Search it with the person's own words

```bash
curl -s "https://varg.ai/how-to/api/search?q=explainer%20video"
```

Also searched as: *explainer video* · *explain my product* · *animated explainer* · *whiteboard video* · *how it works video* · *educational video* · *видео-объяснение* · *эксплейнер* · *анимированное объяснение*

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Every page here is a short mirror; the page on varg.ai/how-to is the one agents should read.
