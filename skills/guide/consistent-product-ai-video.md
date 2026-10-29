# Turn product photos into AI video that keeps the logo and shape

Stops logos, labels and shapes from warping in AI product video: lock sheet, multi-angle references, camera-risk ladder, drift check.

- **Type:** Guides · Product
- **Status:** live
- **Publisher:** varg
- **License:** MIT
- **Source:** <https://github.com/vargHQ/skills/tree/main/varg-product-lock>
- **Works in:** Claude Code, Codex, Cursor, Gemini CLI, OpenClaw
- **Tags:** `product-consistency` `seedance` `kling` `reference-images` `ecommerce` `logo` `qa` `official`
- **Full card, kept current:** <https://varg.ai/how-to/skills/consistent-product-ai-video.md>

## Install

```bash
# Claude Code
claude plugin marketplace add vargHQ/skills && claude plugin install varg@varg

# Codex
npx skills add vargHQ/skills --skill varg-product-lock -a codex -y

# Cursor
npx skills add vargHQ/skills --skill varg-product-lock -a cursor -y

# OpenClaw
npx clawhub@latest install varg-product-lock

# Gemini CLI
npx skills add vargHQ/skills --skill varg-product-lock -a gemini-cli -y
```

## Example

Watch: <https://s3.varg.ai/files/194b94d0-58ff-4e8b-91de-4f1959d04013/file_332df2a110a0.mp4>

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/consistent-product-ai-video).
