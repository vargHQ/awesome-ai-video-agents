# Caption Animation

Word-timed TikTok captions in Remotion or CSS: per-word pop, active-word highlight, 9:16 safe areas, sidecar SRT/VTT.

- **Type:** Effects · Captions
- **Status:** live
- **Publisher:** iart.ai
- **License:** MIT
- **Source:** <https://github.com/iart-ai/tiktok-video-skills/tree/main/skills/caption-animation>
- **Works in:** Claude Code, Cursor, Codex
- **Tags:** `code-to-video` `remotion` `karaoke` `tiktok` `subtitles` `whisper`
- **Full card, kept current:** <https://varg.ai/how-to/skills/iart-caption-animation.md>

## Install

```bash
# Claude Code
npx skills add https://github.com/iart-ai/tiktok-video-skills --skill caption-animation

# Codex
npx skills add https://github.com/iart-ai/tiktok-video-skills --skill caption-animation

# Cursor
npx skills add https://github.com/iart-ai/tiktok-video-skills --skill caption-animation
```

## Step-by-step tutorials that use it

- [How to make a UGC ad video with AI](../../how-to/make-a-ugc-ad-video.md): A creator-style ad: a person talks to camera about your product, with b-roll, captions and an end card.
- [How to edit a product video for TikTok and Reels with AI](../../how-to/edit-a-product-video-for-tiktok.md): Raw product footage (a creator clip, an unboxing, last month's winning ad) recut into a 9:16 ad: hook at second 0, no dead air, captions, one CTA, one file per hook.
- [How to add animated captions to a video with AI](../../how-to/add-animated-captions-to-a-video.md): TikTok-style subtitles burned into an existing video: word highlight, pop words, or designed editorial captions.

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/iart-caption-animation).
