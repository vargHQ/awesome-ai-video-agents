# Turn two model runs into a side-by-side comparison

Two runs of one prompt as one video: names, measured time and cost under each, side by side or stacked, blind reveal.

- **Type:** Effects · Editing
- **Status:** live
- **Publisher:** varg
- **License:** MIT
- **Source:** <https://github.com/vargHQ/skills/tree/main/model-split-screen>
- **Works in:** Claude Code, Codex, Cursor, Gemini CLI
- **Tags:** `comparison` `split-screen` `fable-5-2` `opus-5-5` `a-b-test` `ffmpeg` `blind-test`
- **Full card, kept current:** <https://varg.ai/how-to/skills/model-split-screen.md>

## Install

```bash
# Claude Code
claude plugin marketplace add vargHQ/skills && claude plugin install varg@varg

# Codex
npx skills add vargHQ/skills --skill model-split-screen -a codex -y

# Cursor
npx skills add vargHQ/skills --skill model-split-screen -a cursor -y

# Gemini CLI
npx skills add vargHQ/skills --skill model-split-screen -a gemini-cli -y
```

## Example

Watch: <https://s3.varg.ai/files/4325c578-378d-4c43-ae53-3cc3218df1ea/file_6ec5fe8a03ff.mp4>

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/model-split-screen).
