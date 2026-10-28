# Background Removal

Cut subjects out of photos into clean transparent PNGs with BiRefNet.

- **Type:** Models & tools · Image
- **Status:** live
- **Publisher:** inference.sh
- **License:** MIT
- **Source:** <https://github.com/inference-sh/skills/tree/main/tools/image/background-removal>
- **Works in:** Claude Code, Codex, Cursor, Gemini CLI
- **Tags:** `cutout` `transparent-png` `product`
- **Full card, kept current:** <https://varg.ai/how-to/skills/inference-sh-background-removal.md>

## Install

```bash
# Claude Code
npx skills add inference-sh/skills --skill background-removal -a claude-code

# Codex
npx skills add inference-sh/skills --skill background-removal -a codex

# Cursor
npx skills add inference-sh/skills --skill background-removal -a cursor

# Gemini CLI
npx skills add inference-sh/skills --skill background-removal -a gemini-cli
```

## Example

![Background Removal example](https://s3.varg.ai/how-to/previews/5d7a501e451b/inference-sh-background-removal.webp)

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/inference-sh-background-removal).
