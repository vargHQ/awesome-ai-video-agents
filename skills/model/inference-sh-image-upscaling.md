# Image Upscaling

Upscale and enhance low-resolution images with Real-ESRGAN, Thera, Topaz or the FLUX upscaler.

- **Type:** Models & tools · Image
- **Status:** live
- **Publisher:** inference.sh
- **License:** MIT
- **Source:** <https://github.com/inference-sh/skills/tree/main/tools/image/image-upscaling>
- **Works in:** Claude Code, Codex, Cursor, Gemini CLI
- **Tags:** `upscale` `enhance` `restoration`
- **Full card, kept current:** <https://varg.ai/how-to/skills/inference-sh-image-upscaling.md>

## Install

```bash
# Claude Code
npx skills add inference-sh/skills --skill image-upscaling -a claude-code

# Codex
npx skills add inference-sh/skills --skill image-upscaling -a codex

# Cursor
npx skills add inference-sh/skills --skill image-upscaling -a cursor

# Gemini CLI
npx skills add inference-sh/skills --skill image-upscaling -a gemini-cli
```

## Example

![Image Upscaling example](https://s3.varg.ai/how-to/previews/c68597e6a0d6/inference-sh-image-upscaling.webp)

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/inference-sh-image-upscaling).
