# How to remake a reference video with AI

Take a reel or ad you like, break it down shot by shot, and remake the format for your brand.

**Full tutorial with the options to show the person, numbered steps and prices:** <https://varg.ai/how-to/remake-a-reference-video.md>

## Best skills for this

1. **[Local-first video downloader: private, no subscription](../skills/model/media-download.md)** (`media-download`, varg, live) — Save any video by link (X, YouTube, Instagram, TikTok, 1800+ sites) or Pinterest images as references, locally, no key.
   - Claude Code: `claude plugin marketplace add vargHQ/skills && claude plugin install varg@varg`
   - Example: <https://s3.varg.ai/how-to/previews/547c697e5104/media-download.mp4>
2. **[Watch (video analysis)](../skills/model/claude-video-watch.md)** (`claude-video-watch`, Brad Bonanno, live) — Gives the agent eyes on any video: download, scene-aware frames, timestamped transcript.
   - Claude Code: `/plugin marketplace add bradautomates/claude-video
/plugin install watch@claude-video`
3. **[Reference Breakdown](../skills/prompt/craft-reference-breakdown.md)** (`craft-reference-breakdown`, varg, draft) — Turn a frame you have rights to into a shot spec — size, angle, lens, light, palette — plus prompt variants.
   - Not installable on its own yet
   - Example: <https://s3.varg.ai/how-to/previews/6893190ffb88/craft-reference-breakdown.webp>
4. **[varg AI](../skills/model/varg-ai.md)** (`varg-ai`, varg, live) — The official varg skill: videos, images, speech and music through one API key, rendered in the cloud or locally.
   - Claude Code: `claude plugin marketplace add vargHQ/skills && claude plugin install varg@varg`
   - Example: <https://s3.varg.ai/how-to/previews/7df061df8dcb/varg-ai.mp4>
5. **[Previz to Seedance](../skills/workflow/varg-previz.md)** (`varg-previz`, varg, beta) — Plan multi-shot AI video before paying: story, anchor sheets, a three.js grey-box previz, then a Seedance v2v pack.
   - Claude Code: `claude plugin marketplace add vargHQ/skills && claude plugin install varg@varg`
   - Example: <https://s3.varg.ai/how-to/previews/2f5f2d60dd84/varg-previz.mp4>
6. **[Seedance 2.0 Prompt Guide](../skills/prompt/seedance-2-prompt-guide.md)** (`seedance-2-prompt-guide`, Dex Hünter, live) — Prompt guide for Seedance 2.0 multimodal video: the @ reference system, camera language and ready templates.
   - Claude Code: `npx skills add dexhunter/seedance2-skill`
7. **[HyperFrames](../skills/guide/hyperframes.md)** (`hyperframes`, HeyGen, live) — Turn HTML, CSS and seekable animation into deterministic MP4s: launch films, explainers, captions, title cards.
   - Claude Code: `claude plugin marketplace add heygen-com/hyperframes
claude plugin install hyperframes@hyperframes`
   - Example: <https://s3.varg.ai/how-to/previews/400daa5dc577/hyperframes.mp4>

## Search it with the person's own words

```bash
curl -s "https://varg.ai/how-to/api/search?q=remake%20this%20video"
```

Also searched as: *remake this video* · *make a video like this* · *copy this reel format* · *recreate this ad* · *video like this link* · *сделай похожий ролик* · *сделай как в этом рилсе* · *повтори формат* · *по референсу*

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Every page here is a short mirror; the page on varg.ai/how-to is the one agents should read.
