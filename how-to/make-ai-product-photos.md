# How to make AI product photos and listing images

Marketplace listing images, lifestyle shots and packshots from one product photo.

**Full tutorial with the options to show the person, numbered steps and prices:** <https://varg.ai/how-to/make-ai-product-photos.md>

## Best skills for this

1. **[Higgsfield Marketplace Cards](../skills/workflow/higgsfield-marketplace-cards.md)** (`higgsfield-marketplace-cards`, Higgsfield, live) — Produce marketplace listing images: a compliant main image, secondary shots and A+ content modules.
   - Claude Code: `/plugin marketplace add higgsfield-ai/skills
/plugin install higgsfield@higgsfield`
2. **[Higgsfield Product Photoshoot](../skills/workflow/higgsfield-product-photoshoot.md)** (`higgsfield-product-photoshoot`, Higgsfield, live) — Shoot brand-quality product images in 10 modes: studio, lifestyle, hero banners, ad packs, try-on and more.
   - Claude Code: `/plugin marketplace add higgsfield-ai/skills
/plugin install higgsfield@higgsfield`
   - Example: <https://s3.varg.ai/how-to/previews/147da40e90b7/higgsfield-product-photoshoot.webp>
3. **[E-commerce Image Studio](../skills/workflow/ecom-image2.md)** (`ecom-image2`, buluslan, live) — 39 e-commerce image templates (main images, lifestyle, A+, sizes, GIFs) with one style lock across a campaign set.
   - Claude Code: `git clone https://github.com/buluslan/gpt-image2-ecommerce.git ~/.claude/skills/ecom-image2`
4. **[AI Product Photography](../skills/workflow/inference-sh-ai-product-photography.md)** (`inference-sh-ai-product-photography`, inference.sh, live) — Generate commercial product shots, lifestyle scenes and mockups with FLUX, Imagen 3, Grok and Seedream.
   - Claude Code: `npx skills add inference-sh/skills --skill ai-product-photography -a claude-code`
5. **[varg AI](../skills/model/varg-ai.md)** (`varg-ai`, varg, live) — The official varg skill: videos, images, speech and music through one API key, rendered in the cloud or locally.
   - Claude Code: `claude plugin marketplace add vargHQ/skills && claude plugin install varg@varg`
   - Example: <https://s3.varg.ai/how-to/previews/7df061df8dcb/varg-ai.mp4>

## Search it with the person's own words

```bash
curl -s "https://varg.ai/how-to/api/search?q=product%20photos"
```

Also searched as: *product photos* · *amazon listing images* · *product photography* · *packshot* · *ecommerce images* · *lifestyle product photo* · *карточки товара* · *фото для маркетплейса* · *инфографика для wildberries* · *предметная съемка*

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Every page here is a short mirror; the page on varg.ai/how-to is the one agents should read.
