# Turn circles on a picture into exact edits

Circle what to change, name each colour, and GPT Image 2.6 edits only the marked spots. Script draws the marks.

- **Type:** Workflows · Image
- **Status:** live
- **Publisher:** varg
- **License:** MIT
- **Source:** <https://github.com/vargHQ/skills/tree/main/gpt-image-markup-edit>
- **Works in:** Claude Code, Codex, Cursor, Gemini CLI
- **Tags:** `image-editing` `markup` `inpainting` `gpt-image-2-6` `circle-to-edit` `mask`
- **Full card, kept current:** <https://varg.ai/how-to/skills/gpt-image-markup-edit.md>

## Install

```bash
# Claude Code
claude plugin marketplace add vargHQ/skills && claude plugin install varg@varg

# Codex
npx skills add vargHQ/skills --skill gpt-image-markup-edit -a codex -y

# Cursor
npx skills add vargHQ/skills --skill gpt-image-markup-edit -a cursor -y

# Gemini CLI
npx skills add vargHQ/skills --skill gpt-image-markup-edit -a gemini-cli -y
```

## Example

Watch: <https://s3.varg.ai/files/194b94d0-58ff-4e8b-91de-4f1959d04013/file_9819f61a5ef8.mp4>

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/gpt-image-markup-edit).
