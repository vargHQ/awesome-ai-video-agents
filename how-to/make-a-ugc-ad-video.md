# How to make a UGC ad video with AI

A creator-style ad: a person talks to camera about your product, with b-roll, captions and an end card.

**Full tutorial with the options to show the person, numbered steps and prices:** <https://varg.ai/how-to/make-a-ugc-ad-video.md>

## Best skills for this

1. **[UGC Ad](../skills/workflow/varg-studio-ugc-ads.md)** (`varg-studio-ugc-ads`, varg, draft) — A creator-style ad shot like a friend's recommendation: 3 shots, voiceover, captions, end card, no presenter.
   - Not installable on its own yet
   - Example: <https://s3.varg.ai/how-to/previews/7446ec754170/varg-studio-ugc-ads.mp4>
2. **[fal UGC](../skills/workflow/fal-ugc.md)** (`fal-ugc`, fal, live) — Script and generate UGC-style creator ads: talking heads, demos, testimonials, unboxings and reactions.
   - Claude Code: `npx skills add fal-ai-community/skills --skill ugc -a claude-code`
   - Example: <https://s3.varg.ai/how-to/previews/414e4a210c1c/fal-ugc.mp4>
3. **[Marketing Video Production](../skills/workflow/marketingskills-video.md)** (`marketingskills-video`, Corey Haines, live) — Corey Haines' marketing video skill: pick code, a video model or an avatar, then script, prompt and repurpose.
   - Claude Code: `npx skills add coreyhaines31/marketingskills --skill video`
   - Example: <https://s3.varg.ai/how-to/previews/cb03ab790642/marketingskills-video.mp4>
4. **[AI Marketing Videos](../skills/workflow/inference-sh-ai-marketing-videos.md)** (`inference-sh-ai-marketing-videos`, inference.sh, live) — Make product demos, promos, testimonials and launch videos with Veo, Seedance, Wan, FLUX and Kokoro.
   - Claude Code: `npx skills add inference-sh/skills --skill ai-marketing-videos -a claude-code`
5. **[Consistent Characters](../skills/workflow/varg-consistent-characters.md)** (`varg-consistent-characters`, varg, beta) — Multi-scene ads where the same actors, outfits and location hold in every cut: cards, composites, Kling v3 clips.
   - Claude Code: `claude plugin marketplace add vargHQ/skills && claude plugin install varg@varg`
   - Example: <https://s3.varg.ai/how-to/previews/fd12064dae3c/varg-consistent-characters.mp4>
6. **[Turn a script into a two-person podcast video](../skills/workflow/varg-podcast-video.md)** (`varg-podcast-video`, varg, beta) — Two-character podcast or debate clips: one studio set, locked camera angles, MiniMax H3 Max with native audio.
   - Claude Code: `claude plugin marketplace add vargHQ/skills && claude plugin install varg@varg`
   - Example: <https://s3.varg.ai/how-to/previews/100daa58d70d/varg-podcast-video.mp4>
7. **[varg AI](../skills/model/varg-ai.md)** (`varg-ai`, varg, live) — The official varg skill: videos, images, speech and music through one API key, rendered in the cloud or locally.
   - Claude Code: `claude plugin marketplace add vargHQ/skills && claude plugin install varg@varg`
   - Example: <https://s3.varg.ai/how-to/previews/7df061df8dcb/varg-ai.mp4>
8. **[Caption Animation](../skills/effect/iart-caption-animation.md)** (`iart-caption-animation`, iart.ai, live) — Word-timed TikTok captions in Remotion or CSS: per-word pop, active-word highlight, 9:16 safe areas, sidecar SRT/VTT.
   - Claude Code: `npx skills add https://github.com/iart-ai/tiktok-video-skills --skill caption-animation`

## Search it with the person's own words

```bash
curl -s "https://varg.ai/how-to/api/search?q=ugc%20ad"
```

Also searched as: *ugc ad* · *ugc video* · *creator ad* · *tiktok ad* · *talking to camera ad* · *testimonial video* · *influencer style ad* · *product review video* · *ugc реклама* · *юджиси* · *реклама в стиле блогера* · *рекламный ролик с блогером* · *отзыв на камеру* · *тикток реклама*

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Every page here is a short mirror; the page on varg.ai/how-to is the one agents should read.
