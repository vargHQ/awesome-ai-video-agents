# Turn a flat-lay photo into an AI virtual try-on video

Clothing flat-lay to a model wearing it and a fit-check video: Bria virtual try-on still, Kling 4 motion, honest size captions.

- **Type:** Guides · Product
- **Status:** live
- **Publisher:** varg
- **License:** MIT
- **Source:** <https://github.com/vargHQ/skills/tree/main/varg-tryon-video>
- **Works in:** Claude Code, Codex, Cursor, Gemini CLI, OpenClaw
- **Tags:** `virtual-try-on` `fashion` `apparel` `bria` `kling` `fit-check` `ecommerce` `official`
- **Full card, kept current:** <https://varg.ai/how-to/skills/ai-virtual-try-on-video.md>

## Install

```bash
# Claude Code
claude plugin marketplace add vargHQ/skills && claude plugin install varg@varg

# Codex
npx skills add vargHQ/skills --skill varg-tryon-video -a codex -y

# Cursor
npx skills add vargHQ/skills --skill varg-tryon-video -a cursor -y

# OpenClaw
npx clawhub@latest install varg-tryon-video

# Gemini CLI
npx skills add vargHQ/skills --skill varg-tryon-video -a gemini-cli -y
```

## Example

Watch: <https://s3.varg.ai/files/194b94d0-58ff-4e8b-91de-4f1959d04013/file_1213e32adbda.mp4>

## Step-by-step tutorials that use it

- [How to make AI fashion model and try-on videos](../../how-to/make-ai-fashion-model-try-on-videos.md): Your clothes on an AI model: on-model listing photos and a try-on or fit-check video, from a flat-lay, hanger or mannequin photo.

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/ai-virtual-try-on-video).
