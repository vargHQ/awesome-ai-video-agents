# FLUX Image

Generate and restyle images with FLUX Dev LoRA and FLUX.2 Klein, including custom LoRA styles.

- **Type:** Models & tools · Image
- **Status:** live
- **Publisher:** inference.sh
- **License:** MIT
- **Source:** <https://github.com/inference-sh/skills/tree/main/tools/image/flux-image>
- **Works in:** Claude Code, Codex, Cursor, Gemini CLI
- **Tags:** `flux` `lora` `text-to-image` `image-to-image`
- **Full card, kept current:** <https://varg.ai/how-to/skills/inference-sh-flux-image.md>

## Install

```bash
# Claude Code
npx skills add inference-sh/skills --skill flux-image -a claude-code

# Codex
npx skills add inference-sh/skills --skill flux-image -a codex

# Cursor
npx skills add inference-sh/skills --skill flux-image -a cursor

# Gemini CLI
npx skills add inference-sh/skills --skill flux-image -a gemini-cli
```

## Example

![FLUX Image example](https://s3.varg.ai/how-to/previews/67d29dcda656/inference-sh-flux-image.webp)

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/inference-sh-flux-image).
