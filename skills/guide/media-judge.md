# Media Judge

A finished video, image or track becomes a list of timed, measured defects with evidence frames, and takes ranked by defects.

- **Type:** Guides · Tooling
- **Status:** live
- **Publisher:** varg
- **License:** MIT
- **Source:** <https://github.com/vargHQ/skills/tree/main/media-judge>
- **Works in:** Claude Code, Codex, Cursor, Gemini CLI
- **Tags:** `qa` `review` `video-quality` `llm-judge` `take-ranking` `banding` `ocr` `ffmpeg`
- **Full card, kept current:** <https://varg.ai/how-to/skills/media-judge.md>

## Install

```bash
# Claude Code
claude plugin marketplace add vargHQ/skills && claude plugin install varg@varg

# Codex
npx skills add vargHQ/skills --skill media-judge -a codex -y

# Cursor
npx skills add vargHQ/skills --skill media-judge -a cursor -y

# Gemini CLI
npx skills add vargHQ/skills --skill media-judge -a gemini-cli -y
```

## Example

![Media Judge example](https://s3.varg.ai/files/4325c578-378d-4c43-ae53-3cc3218df1ea/file_cee9681521af.jpg)

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/media-judge).
