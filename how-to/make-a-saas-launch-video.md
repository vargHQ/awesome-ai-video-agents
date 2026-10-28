# How to make a SaaS launch video with AI

A polished launch film for an app or website: UI cards, device mockups, kinetic type, music.

**Full tutorial with the options to show the person, numbered steps and prices:** <https://varg.ai/how-to/make-a-saas-launch-video.md>

## Best skills for this

1. **[HyperFrames](../skills/guide/hyperframes.md)** (`hyperframes`, HeyGen, live) — Turn HTML, CSS and seekable animation into deterministic MP4s: launch films, explainers, captions, title cards.
   - Claude Code: `claude plugin marketplace add heygen-com/hyperframes
claude plugin install hyperframes@hyperframes`
   - Example: <https://s3.varg.ai/how-to/previews/400daa5dc577/hyperframes.mp4>
2. **[Guizang Product Video](../skills/workflow/guizang-product-video.md)** (`guizang-product-video`, Guizang, live) — Software promos and release-notes videos built from your real product components, with original music and SFX.
   - Claude Code: `npx skills add https://github.com/op7418/guizang-product-video-skill --skill guizang-product-video-skill`
   - Example: <https://s3.varg.ai/how-to/previews/ecf3504bb9c3/guizang-product-video.mp4>
3. **[Onetake](../skills/workflow/onetake.md)** (`onetake`, Patrick, live) — Launch films that never cut to the next slide: one continuous camera, measured moves, motion blur, a slideshow oracle.
   - Claude Code: `git clone https://github.com/feitangyuan/onetake.git ~/.claude/skills/onetake`
   - Example: <https://s3.varg.ai/how-to/previews/0a731928c282/onetake.mp4>
4. **[Remotion Best Practices](../skills/guide/remotion-best-practices.md)** (`remotion-best-practices`, Remotion, live) — Make videos in React with Remotion: the router that loads the right Remotion skill for each step.
   - Claude Code: `npx skills add remotion-dev/skills --skill remotion-best-practices -a claude-code`
   - Example: <https://s3.varg.ai/how-to/previews/04200edf541b/remotion-best-practices.mp4>
5. **[Herk Edit Kit](../skills/workflow/herk-edit-kit.md)** (`herk-edit-kit`, Nate Herk, live) — Nate Herk's kit to edit talking-head videos, reels and Shorts: silence and flub cuts, storytelling, motion graphics.
   - Claude Code: `git clone https://github.com/nateherkai/herk-edit-kit.git`
   - Example: <https://s3.varg.ai/how-to/previews/bb31cdd5a172/herk-edit-kit.mp4>
6. **[HyperFrames Registry](../skills/guide/hyperframes-registry.md)** (`hyperframes-registry`, HeyGen, live) — Pull any of ~450 ready-made blocks into a video as editable source: transitions, titles, captions, charts, 3D.
   - Claude Code: `claude plugin marketplace add heygen-com/hyperframes
claude plugin install hyperframes@hyperframes`
   - Example: <https://s3.varg.ai/how-to/previews/e45347961f24/hyperframes-registry.mp4>
7. **[varg AI](../skills/model/varg-ai.md)** (`varg-ai`, varg, live) — The official varg skill: videos, images, speech and music through one API key, rendered in the cloud or locally.
   - Claude Code: `claude plugin marketplace add vargHQ/skills && claude plugin install varg@varg`
   - Example: <https://s3.varg.ai/how-to/previews/7df061df8dcb/varg-ai.mp4>
8. **[Kinetic Typography](../skills/effect/iart-kinetic-typography.md)** (`iart-kinetic-typography`, iart.ai, live) — Kinetic type for web and video: line, word or char splits, mask and blur reveals, variable-font motion, frozen-frame QA.
   - Claude Code: `/plugin marketplace add iart-ai/kinetic-typography-skills
/plugin install kinetic-typography-skills`
   - Example: <https://s3.varg.ai/how-to/previews/219258f3ad0d/iart-kinetic-typography.mp4>
9. **[Video Shotcraft](../skills/prompt/video-shotcraft.md)** (`video-shotcraft`, Vincent Wei, live) — 124 shot recipe cards and a tested Remotion template for cinematic product promos built from real UI screenshots.
   - Claude Code: `npx skills add Vincentwei1021/video-shotcraft`
   - Example: <https://s3.varg.ai/how-to/previews/2debe3ea5ec0/video-shotcraft.mp4>

## Search it with the person's own words

```bash
curl -s "https://varg.ai/how-to/api/search?q=launch%20video"
```

Also searched as: *launch video* · *product launch video* · *saas promo* · *app promo video* · *product hunt video* · *website to video* · *promo from website* · *apple style promo* · *linear style video* · *промо для saas* · *видео запуска* · *промо приложения* · *видео для продакт ханта*

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Every page here is a short mirror; the page on varg.ai/how-to is the one agents should read.
