# Short-form FFmpeg cookbook: copyable commands for Reels

Footage into a 9:16 MP4 with FFmpeg: crop to vertical, burn captions, trim and join, music under the voice.

- **Type:** Guides · Editing
- **Status:** live
- **Publisher:** varg
- **License:** MIT
- **Source:** <https://github.com/vargHQ/skills/tree/main/short-form-ffmpeg-cookbook>
- **Works in:** Claude Code, Codex, Cursor, OpenClaw
- **Tags:** `ffmpeg` `captions` `subtitles` `9:16` `vertical` `reels` `tiktok` `shorts` `crop` `trim` `music` `free` `official`
- **Full card, kept current:** <https://varg.ai/how-to/skills/short-form-ffmpeg-cookbook.md>

## Install

```bash
# Claude Code
claude plugin marketplace add vargHQ/skills && claude plugin install varg@varg

# Codex
npx skills add vargHQ/skills --skill short-form-ffmpeg-cookbook -a codex -y

# Cursor
npx skills add vargHQ/skills --skill short-form-ffmpeg-cookbook -a cursor -y
```

## Step-by-step tutorials that use it

- [How to edit a product video for TikTok and Reels with AI](../../how-to/edit-a-product-video-for-tiktok.md): Raw product footage (a creator clip, an unboxing, last month's winning ad) recut into a 9:16 ad: hook at second 0, no dead air, captions, one CTA, one file per hook.

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/short-form-ffmpeg-cookbook).
