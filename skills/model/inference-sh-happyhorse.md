# HappyHorse

Generate and edit video with Alibaba HappyHorse 1.0: text, image and reference-to-video plus video edits.

- **Type:** Models & tools · Cinematic
- **Status:** live
- **Publisher:** inference.sh
- **License:** MIT
- **Source:** <https://github.com/inference-sh/skills/tree/main/tools/video/happyhorse>
- **Works in:** Claude Code, Codex, Cursor, Gemini CLI
- **Tags:** `happy-horse` `video-editing` `reference-to-video`
- **Full card, kept current:** <https://varg.ai/how-to/skills/inference-sh-happyhorse.md>

## Install

```bash
# Claude Code
npx skills add inference-sh/skills --skill happyhorse -a claude-code

# Codex
npx skills add inference-sh/skills --skill happyhorse -a codex

# Cursor
npx skills add inference-sh/skills --skill happyhorse -a cursor

# Gemini CLI
npx skills add inference-sh/skills --skill happyhorse -a gemini-cli
```

## Example

Watch: <https://s3.varg.ai/how-to/previews/ec3fb30d7af0/inference-sh-happyhorse.mp4>

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/inference-sh-happyhorse).
