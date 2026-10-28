# How to turn a product photo into a video with AI

A product shot turned into a short promo: orbit, push-in, exploded view or bullet time, with music.

**Full tutorial with the options to show the person, numbered steps and prices:** <https://varg.ai/how-to/turn-a-product-photo-into-a-video.md>

## Best skills for this

1. **[Krea Motion](../skills/effect/krea-motion.md)** (`krea-motion`, Krea, live) — Animate products, renders and logos into reveal films and web loops with Seedance 2.5 on Krea.
   - Claude Code: `/plugin marketplace add krea-ai/skills
/plugin install krea@krea`
   - Example: <https://s3.varg.ai/how-to/previews/6f59f44ce20a/krea-motion.mp4>
2. **[fal Commercial](../skills/workflow/fal-commercial.md)** (`fal-commercial`, fal, live) — Plan and run product photography, e-commerce batches, product reveal videos and lifestyle commercials.
   - Claude Code: `npx skills add fal-ai-community/skills --skill commercial -a claude-code`
   - Example: <https://s3.varg.ai/how-to/previews/1653b02a7961/fal-commercial.mp4>
3. **[FLUX 3 Product Ads](../skills/workflow/flux-3-product-ads.md)** (`flux-3-product-ads`, Black Forest Labs, live) — Build a finished product ad with FLUX 3: shot design, voiceover sync, deterministic assembly, QC gates.
   - Claude Code: `/plugin marketplace add black-forest-labs/skills
/plugin install flux-3-video@black-forest-labs`
   - Example: <https://s3.varg.ai/how-to/previews/49a0bfd6f70b/flux-3-product-ads.mp4>
4. **[Product Ad](../skills/workflow/varg-studio-product.md)** (`varg-studio-product`, varg, draft) — The product itself: a 360° spin, in hand and a texture close-up, with a voiceover and an end card.
   - Not installable on its own yet
   - Example: <https://s3.varg.ai/how-to/previews/48a31d44ce9c/varg-studio-product.mp4>
5. **[Previz to Seedance](../skills/workflow/varg-previz.md)** (`varg-previz`, varg, beta) — Plan multi-shot AI video before paying: story, anchor sheets, a three.js grey-box previz, then a Seedance v2v pack.
   - Claude Code: `claude plugin marketplace add vargHQ/skills && claude plugin install varg@varg`
   - Example: <https://s3.varg.ai/how-to/previews/2f5f2d60dd84/varg-previz.mp4>
6. **[fal UGC](../skills/workflow/fal-ugc.md)** (`fal-ugc`, fal, live) — Script and generate UGC-style creator ads: talking heads, demos, testimonials, unboxings and reactions.
   - Claude Code: `npx skills add fal-ai-community/skills --skill ugc -a claude-code`
   - Example: <https://s3.varg.ai/how-to/previews/414e4a210c1c/fal-ugc.mp4>
7. **[varg AI](../skills/model/varg-ai.md)** (`varg-ai`, varg, live) — The official varg skill: videos, images, speech and music through one API key, rendered in the cloud or locally.
   - Claude Code: `claude plugin marketplace add vargHQ/skills && claude plugin install varg@varg`
   - Example: <https://s3.varg.ai/how-to/previews/7df061df8dcb/varg-ai.mp4>

## Search it with the person's own words

```bash
curl -s "https://varg.ai/how-to/api/search?q=product%20video"
```

Also searched as: *product video* · *product promo* · *packshot video* · *product from photo* · *rotating product* · *360 product* · *ecommerce video* · *product ad* · *promo video for product* · *видео товара* · *промо товара* · *товар из фотки* · *крутится товар* · *рилс для товара* · *видео для маркетплейса*

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Every page here is a short mirror; the page on varg.ai/how-to is the one agents should read.
