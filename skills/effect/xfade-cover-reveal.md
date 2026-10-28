# Cover and Reveal

B slides in over a still A (cover), or A slides away to uncover B (reveal). Variants: cover*/reveal* in four directions.

- **Type:** Effects · Transitions
- **Status:** live
- **Publisher:** HeyGen
- **License:** Apache-2.0
- **Source:** <https://github.com/heygen-com/hyperframes/tree/main/registry/blocks/transitions-cover>
- **Works in:** Claude Code, claude-ai, Codex, Cursor, OpenClaw, Gemini CLI, mcp, varg Studio
- **Tags:** `xfade` `ffmpeg` `hyperframes` `capcut`
- **Full card, kept current:** <https://varg.ai/how-to/skills/xfade-cover-reveal.md>

## Install

```bash
# Claude Code
claude plugin marketplace add vargHQ/skills && claude plugin install varg@varg

# Codex
npx skills add vargHQ/skills --skill varg-video-edit-library -a codex -y

# Cursor
npx skills add vargHQ/skills --skill varg-video-edit-library -a cursor -y
```

## Example

Watch: <https://s3.varg.ai/how-to/previews/023d8a23fd09/take-xfade-cover-reveal.mp4>

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/xfade-cover-reveal).
