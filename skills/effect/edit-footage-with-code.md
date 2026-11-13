# Edit Footage with Code

Raw talking takes become a reviewed edit list and a clean cut between words, then captions, B-roll and sound, checked by numbers.

- **Type:** Effects · Editing
- **Status:** live
- **Publisher:** varg
- **License:** MIT
- **Source:** <https://github.com/vargHQ/skills/tree/main/edit-footage-with-code>
- **Works in:** Claude Code, Codex, Cursor, Gemini CLI
- **Tags:** `editing` `rough-cut` `dead-air` `talking-head` `podcast` `ffmpeg` `hyperframes` `remotion`
- **Full card, kept current:** <https://varg.ai/how-to/skills/edit-footage-with-code.md>

## Install

```bash
# Claude Code
claude plugin marketplace add vargHQ/skills && claude plugin install varg@varg

# Codex
npx skills add vargHQ/skills --skill edit-footage-with-code -a codex -y

# Cursor
npx skills add vargHQ/skills --skill edit-footage-with-code -a cursor -y

# Gemini CLI
npx skills add vargHQ/skills --skill edit-footage-with-code -a gemini-cli -y
```

## Example

![Edit Footage with Code example](https://s3.varg.ai/files/4325c578-378d-4c43-ae53-3cc3218df1ea/file_e6872632eb3f.jpg)

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/edit-footage-with-code).
