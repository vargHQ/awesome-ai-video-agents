# AI Content Pipeline

Chain image, video, voice and music models into one pipeline: generate, animate, voice over, merge.

- **Type:** Workflows · Tooling
- **Status:** live
- **Publisher:** inference.sh
- **License:** MIT
- **Source:** <https://github.com/inference-sh/skills/tree/main/guides/content/ai-content-pipeline>
- **Works in:** Claude Code, Codex, Cursor, Gemini CLI
- **Tags:** `pipeline` `video` `voiceover` `social`
- **Full card, kept current:** <https://varg.ai/how-to/skills/inference-sh-ai-content-pipeline.md>

## Install

```bash
# Claude Code
npx skills add inference-sh/skills --skill ai-content-pipeline -a claude-code

# Codex
npx skills add inference-sh/skills --skill ai-content-pipeline -a codex

# Cursor
npx skills add inference-sh/skills --skill ai-content-pipeline -a cursor

# Gemini CLI
npx skills add inference-sh/skills --skill ai-content-pipeline -a gemini-cli
```

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/inference-sh-ai-content-pipeline).
