# Storyboard Creation

Storyboard a video before generating: shot types, angles, moves, the 180-degree rule, annotated panels.

- **Type:** Guides · Camera
- **Status:** live
- **Publisher:** inference.sh
- **License:** MIT
- **Source:** <https://github.com/inference-sh/skills/tree/main/guides/video/storyboard-creation>
- **Works in:** Claude Code, Codex, Cursor, Gemini CLI
- **Tags:** `storyboard` `shot-list` `continuity`
- **Full card, kept current:** <https://varg.ai/how-to/skills/inference-sh-storyboard-creation.md>

## Install

```bash
# Claude Code
npx skills add inference-sh/skills --skill storyboard-creation -a claude-code

# Codex
npx skills add inference-sh/skills --skill storyboard-creation -a codex

# Cursor
npx skills add inference-sh/skills --skill storyboard-creation -a cursor

# Gemini CLI
npx skills add inference-sh/skills --skill storyboard-creation -a gemini-cli
```

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/inference-sh-storyboard-creation).
