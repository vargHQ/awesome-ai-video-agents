# How to make an app launch video with AI

A launch video for your app from a real screen recording plus generated shots: about 30 s with a hook, one workflow and a call to action, voiceover and music.

**Full tutorial with the options to show the person, numbered steps and prices:** <https://varg.ai/how-to/make-an-app-launch-video.md>

## Best skills for this

1. **[HyperFrames](../skills/guide/hyperframes.md)** (`hyperframes`, HeyGen, live) — Turn HTML, CSS and seekable animation into deterministic MP4s: launch films, explainers, captions, title cards.
   - Claude Code: `claude plugin marketplace add heygen-com/hyperframes
claude plugin install hyperframes@hyperframes`
   - Example: <https://s3.varg.ai/how-to/previews/400daa5dc577/hyperframes.mp4>
2. **[Launch Clips in Remotion Reviewed by Four AI Critics](../skills/workflow/launch-clip-remotion-four-critics.md)** (`launch-clip-remotion-four-critics`, EveryInc, live) — Turn a launch brief and a screen recording into a 15-30 s social launch clip in Remotion, checked by four parallel critic agents.
   - Claude Code: `git clone https://github.com/EveryInc/product-launch-video.git && cd product-launch-video && npm install`
3. **[OpenMontage Screen Demo](../skills/workflow/openmontage-screen-demo.md)** (`openmontage-screen-demo`, Calesthio, live) — Polishes real screen captures into demos with callouts, zoom crops, subtitles and cleaned audio, or renders a synthetic 
   - Claude Code: `git clone https://github.com/calesthio/OpenMontage.git && cd OpenMontage && make setup`
4. **[Launch Films From the Product's Real UI With Click Checks](../skills/workflow/launch-film-real-ui-verified.md)** (`launch-film-real-ui-verified`, jammaru, live) — Launch film in Remotion that renders the product's real page or components, with a verify step that checks every click, zoom and frame.
   - Claude Code: `npx skills add jammaru/launch-video-craft`
   - Example: <https://github.com/jammaru/launch-video-craft/raw/main/assets/samples/emdash-preflight-preview.mp4>
5. **[varg AI](../skills/model/varg-ai.md)** (`varg-ai`, varg, live) — The official varg skill: videos, images, speech and music through one API key, rendered in the cloud or locally.
   - Claude Code: `claude plugin marketplace add vargHQ/skills && claude plugin install varg@varg`
   - Example: <https://s3.varg.ai/how-to/previews/7df061df8dcb/varg-ai.mp4>
6. **[Video Script](../skills/guide/video-script.md)** (`video-script`, varg, live) — Write the video script before anything is made: one promise, beats joined by but/therefore, every line sized to its seconds and checked by a script.
   - Claude Code: `claude plugin marketplace add vargHQ/skills && claude plugin install varg@varg`
   - Example: <https://s3.varg.ai/files/4325c578-378d-4c43-ae53-3cc3218df1ea/file_a09895414952.webp>
7. **[Video editing skills for Claude Code and AI agents](../skills/guide/varg-video-edit-library.md)** (`varg-video-edit-library`, varg, live) — 206 named edits with recipes for FFmpeg, HyperFrames, Remotion and CapCut: cuts, transitions, titles, UI, numbers.
   - Claude Code: `claude plugin marketplace add vargHQ/skills && claude plugin install varg@varg`
8. **[Video Sound](../skills/guide/video-sound.md)** (`video-sound`, varg, live) — Sound for any video: real AI voices picked from candidates, lines with pauses and breaths, effects on the frame, music cut to bars, a mix checked by script.
   - Claude Code: `claude plugin marketplace add vargHQ/skills && claude plugin install varg@varg`
   - Example: <https://s3.varg.ai/files/194b94d0-58ff-4e8b-91de-4f1959d04013/file_32cbafbd0791.mp4>

## Search it with the person's own words

```bash
curl -s "https://varg.ai/how-to/api/search?q=app%20launch%20video"
```

Also searched as: *app launch video* · *launch video for my app* · *make a launch video for my app* · *app launch video maker* · *mobile app launch video* · *ios app launch video* · *launch video from a screen recording* · *screen recording to launch video* · *product hunt launch video* · *app promo video* · *app announcement video* · *indie app launch video*

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Every page here is a short mirror; the page on varg.ai/how-to is the one agents should read.
