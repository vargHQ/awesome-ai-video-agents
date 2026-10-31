# Turn raw product footage into a TikTok ad with FFmpeg

Footage into a 9:16 ad: hook at second 0, no dead air, text hook, CTA, -14 LUFS, one MP4 per hook.

- **Type:** Guides · Editing
- **Status:** live
- **Publisher:** varg
- **License:** MIT
- **Source:** <https://github.com/vargHQ/skills/tree/main/ecommerce-video-edit>
- **Works in:** Claude Code, Codex, Cursor, OpenClaw
- **Tags:** `ffmpeg` `recut` `hooks` `captions` `9:16` `tiktok` `reels` `free` `ecommerce` `official`
- **Full card, kept current:** <https://varg.ai/how-to/skills/ecommerce-video-edit.md>

## Install

```bash
# Claude Code
claude plugin marketplace add vargHQ/skills && claude plugin install varg@varg

# Codex
npx skills add vargHQ/skills --skill ecommerce-video-edit -a codex -y

# Cursor
npx skills add vargHQ/skills --skill ecommerce-video-edit -a cursor -y
```

## Example

![Turn raw product footage into a TikTok ad with FFmpeg example](https://s3.varg.ai/files/4325c578-378d-4c43-ae53-3cc3218df1ea/file_cc1fb0a271cb.webp)

## Step-by-step tutorials that use it

- [How to make viral ecommerce videos for TikTok and Reels](../../how-to/make-viral-ecommerce-videos.md): Product videos that sell on TikTok, TikTok Shop, Instagram Reels and Meta ads: the angle, the hook, the format, the person on camera, the rules and the variants.
- [How to make a TikTok Shop video with AI](../../how-to/make-a-tiktok-shop-video.md): A shoppable or affiliate TikTok Shop video that sells and stays compliant: product in frame from the first second, a real presenter, one number, a cart CTA.
- [How to edit a product video for TikTok and Reels with AI](../../how-to/edit-a-product-video-for-tiktok.md): Raw product footage (a creator clip, an unboxing, last month's winning ad) recut into a 9:16 ad: hook at second 0, no dead air, captions, one CTA, one file per hook.

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/ecommerce-video-edit).
