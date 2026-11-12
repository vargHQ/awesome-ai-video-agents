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
- [How to cut silences and add zooms to a video with AI](../../how-to/cut-silences-and-add-zooms.md): A talking video in, a tighter cut out: every pause over 0.55 s removed and a punch-in zoom on every other cut, in one FFmpeg run on your machine.
- [How to make an app launch video with AI](../../how-to/make-an-app-launch-video.md): A launch video for your app from a real screen recording plus generated shots: about 30 s with a hook, one workflow and a call to action, voiceover and music.

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/varg-video-edit-library).
