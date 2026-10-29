# Turn product photos into an AI ASMR unboxing video

Hands-only ASMR unboxing from a box and a product photo: timed VISUAL / ACTION / SOUND blocks on Seedance 2.5 with native sound, no music.

- **Type:** Guides · Product
- **Status:** live
- **Publisher:** varg
- **License:** MIT
- **Source:** <https://github.com/vargHQ/skills/tree/main/varg-unboxing-video>
- **Works in:** Claude Code, Codex, Cursor, Gemini CLI, OpenClaw
- **Tags:** `unboxing` `asmr` `seedance` `product-video` `tiktok-shop` `ecommerce` `9:16` `native-audio` `official`
- **Full card, kept current:** <https://varg.ai/how-to/skills/ai-unboxing-video.md>

## Install

```bash
# Claude Code
claude plugin marketplace add vargHQ/skills && claude plugin install varg@varg

# Codex
npx skills add vargHQ/skills --skill varg-unboxing-video -a codex -y

# Cursor
npx skills add vargHQ/skills --skill varg-unboxing-video -a cursor -y

# OpenClaw
npx clawhub@latest install varg-unboxing-video

# Gemini CLI
npx skills add vargHQ/skills --skill varg-unboxing-video -a gemini-cli -y
```

## Example

Watch: <https://s3.varg.ai/files/194b94d0-58ff-4e8b-91de-4f1959d04013/file_942e9a6efa1c.mp4>

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/ai-unboxing-video).
