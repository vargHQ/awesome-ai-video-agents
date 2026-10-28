# Video Editing Best Practices

Best practices for editing video with agents: which service for each edit, and the rules that keep cuts clean.

- **Type:** Guides · Edit Services
- **Status:** live
- **Publisher:** varg
- **License:** MIT
- **Source:** <https://github.com/vargHQ/skills/tree/main/varg-video-editing>
- **Works in:** Claude Code, Codex, Cursor, OpenClaw, mcp
- **Tags:** `editing` `edit-services` `ffmpeg` `captions` `dubbing` `lip-sync` `upscale` `clips` `transcript` `v2v` `resolve` `otio` `official`
- **Full card, kept current:** <https://varg.ai/how-to/skills/varg-video-editing.md>

## Install

```bash
# Claude Code
claude plugin marketplace add vargHQ/skills && claude plugin install varg@varg

# Codex
npx skills add vargHQ/skills --skill varg-video-editing -a codex -y

# Cursor
npx skills add vargHQ/skills --skill varg-video-editing -a cursor -y
```

## Step-by-step tutorials that use it

- [How to edit your own video footage with AI](../../how-to/edit-your-own-video-footage.md): Cut silences and flubs, reframe 16:9 to 9:16, add captions and b-roll to footage you shot.
- [How to change something inside a video with AI](../../how-to/change-something-inside-a-video.md): Swap a product, restyle a scene, change lighting or the look of an existing clip while keeping the motion.

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/varg-video-editing).
