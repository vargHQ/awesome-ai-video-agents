# How to make an app demo video with AI

A polished demo of your app: device mockups, real screens, captions, music — for the App Store, ads or a landing page.

**Full tutorial with the options to show the person, numbered steps and prices:** <https://varg.ai/how-to/make-an-app-demo-video.md>

## Best skills for this

1. **[HyperFrames](../skills/guide/hyperframes.md)** (`hyperframes`, HeyGen, live) — Turn HTML, CSS and seekable animation into deterministic MP4s: launch films, explainers, captions, title cards.
   - Claude Code: `claude plugin marketplace add heygen-com/hyperframes
claude plugin install hyperframes@hyperframes`
   - Example: <https://s3.varg.ai/how-to/previews/400daa5dc577/hyperframes.mp4>
2. **[Duo Foldable Phone](../skills/effect/hyperframes-duo.md)** (`hyperframes-duo`, HeyGen, beta) — Two HTML screens composited into a photo of hands holding an open foldable phone, for side-by-side meme videos.
   - Claude Code: `npx skills add heygen-com/hyperframes-community-skills --skill duo -a claude-code`
   - Example: <https://s3.varg.ai/how-to/previews/606355b9f5cc/hyperframes-duo.mp4>
3. **[Guizang Product Video](../skills/workflow/guizang-product-video.md)** (`guizang-product-video`, Guizang, live) — Software promos and release-notes videos built from your real product components, with original music and SFX.
   - Claude Code: `npx skills add https://github.com/op7418/guizang-product-video-skill --skill guizang-product-video-skill`
   - Example: <https://s3.varg.ai/how-to/previews/ecf3504bb9c3/guizang-product-video.mp4>
4. **[fal UGC](../skills/workflow/fal-ugc.md)** (`fal-ugc`, fal, live) — Script and generate UGC-style creator ads: talking heads, demos, testimonials, unboxings and reactions.
   - Claude Code: `npx skills add fal-ai-community/skills --skill ugc -a claude-code`
   - Example: <https://s3.varg.ai/how-to/previews/414e4a210c1c/fal-ugc.mp4>
5. **[Video Shotcraft](../skills/prompt/video-shotcraft.md)** (`video-shotcraft`, Vincent Wei, live) — 124 shot recipe cards and a tested Remotion template for cinematic product promos built from real UI screenshots.
   - Claude Code: `npx skills add Vincentwei1021/video-shotcraft`
   - Example: <https://s3.varg.ai/how-to/previews/2debe3ea5ec0/video-shotcraft.mp4>
6. **[ASO App Store Screenshots](../skills/workflow/aso-appstore-screenshots.md)** (`aso-appstore-screenshots`, Adam Lyttle, live) — App Store screenshots from your codebase: finds the core benefits, pairs simulator shots, then composes and enhances.
   - Claude Code: `npx skills add adamlyttleapps/claude-skill-aso-appstore-screenshots`
   - Example: <https://s3.varg.ai/how-to/previews/2f0e09f9296a/aso-appstore-screenshots.webp>
7. **[varg AI](../skills/model/varg-ai.md)** (`varg-ai`, varg, live) — The official varg skill: videos, images, speech and music through one API key, rendered in the cloud or locally.
   - Claude Code: `claude plugin marketplace add vargHQ/skills && claude plugin install varg@varg`
   - Example: <https://s3.varg.ai/how-to/previews/7df061df8dcb/varg-ai.mp4>

## Search it with the person's own words

```bash
curl -s "https://varg.ai/how-to/api/search?q=app%20store%20video"
```

Also searched as: *app store video* · *app preview video* · *app demo video* · *app promo* · *phone mockup video* · *device mockup* · *видео для app store* · *демо приложения* · *промо приложения*

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Every page here is a short mirror; the page on varg.ai/how-to is the one agents should read.
