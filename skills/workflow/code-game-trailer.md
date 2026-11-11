# Turn a browser game into a cinematic trailer

Record the browser game your agent built frame-exact, script shots and cameras, then cut a 1080p trailer on the beat.

- **Type:** Workflows · 3d Scenes
- **Status:** live
- **Publisher:** varg
- **License:** MIT
- **Source:** <https://github.com/vargHQ/skills/tree/main/code-game-trailer>
- **Works in:** Claude Code, Codex, Cursor, Gemini CLI
- **Tags:** `game-trailer` `threejs` `webgl` `browser-game` `gameplay-video` `fable-5-2` `headless-chrome` `code-to-video`
- **Full card, kept current:** <https://varg.ai/how-to/skills/code-game-trailer.md>

## Install

```bash
# Claude Code
claude plugin marketplace add vargHQ/skills && claude plugin install varg@varg

# Codex
npx skills add vargHQ/skills --skill code-game-trailer -a codex -y

# Cursor
npx skills add vargHQ/skills --skill code-game-trailer -a cursor -y

# Gemini CLI
npx skills add vargHQ/skills --skill code-game-trailer -a gemini-cli -y
```

## Example

Watch: <https://s3.varg.ai/files/4325c578-378d-4c43-ae53-3cc3218df1ea/file_4d4fbf04e1cc.mp4>

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/code-game-trailer).
