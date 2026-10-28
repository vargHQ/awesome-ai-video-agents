# Video editing skills for Claude Code and AI agents

206 named edits with recipes for FFmpeg, HyperFrames, Remotion and CapCut: cuts, transitions, titles, UI, numbers.

- **Type:** Guides · Edit Services
- **Status:** live
- **Publisher:** varg
- **License:** MIT
- **Source:** <https://github.com/vargHQ/skills/tree/main/varg-video-edit-library>
- **Works in:** Claude Code, Codex, Cursor, OpenClaw, mcp
- **Tags:** `editing` `cuts` `transitions` `titles` `lower-thirds` `cta` `ui` `cursors` `devices` `code` `agent-flows` `charts` `logos` `backgrounds` `ffmpeg` `hyperframes` `remotion` `capcut` `official`
- **Full card, kept current:** <https://varg.ai/how-to/skills/varg-video-edit-library.md>

## Install

```bash
# Claude Code
claude plugin marketplace add vargHQ/skills && claude plugin install varg@varg

# Codex
npx skills add vargHQ/skills --skill varg-video-edit-library -a codex -y

# Cursor
npx skills add vargHQ/skills --skill varg-video-edit-library -a cursor -y
```

## Step-by-step tutorials that use it

- [How to edit a product video for TikTok and Reels with AI](../../how-to/edit-a-product-video-for-tiktok.md): Raw product footage (a creator clip, an unboxing, last month's winning ad) recut into a 9:16 ad: hook at second 0, no dead air, captions, one CTA, one file per hook.

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/varg-video-edit-library).
