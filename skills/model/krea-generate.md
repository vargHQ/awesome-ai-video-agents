# Krea Generate

Pick the right Krea model and prompt for any image, video, edit or upscale before you generate.

- **Type:** Models & tools · Image
- **Status:** live
- **Publisher:** Krea
- **License:** MIT
- **Source:** <https://github.com/krea-ai/skills/tree/main/krea-generate>
- **Works in:** Claude Code, Codex, Cursor, Gemini CLI
- **Tags:** `video` `editing` `upscale` `model-selection`
- **Full card, kept current:** <https://varg.ai/how-to/skills/krea-generate.md>

## Install

```bash
# Claude Code
/plugin marketplace add krea-ai/skills
/plugin install krea@krea

# Codex
npx skills add krea-ai/skills --skill krea-generate -a codex

# Cursor
npx skills add krea-ai/skills --skill krea-generate -a cursor

# Gemini CLI
npx skills add krea-ai/skills --skill krea-generate -a gemini-cli
```

## Example

![Krea Generate example](https://s3.varg.ai/how-to/previews/de5f78e55f2a/krea-generate.webp)

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/krea-generate).
