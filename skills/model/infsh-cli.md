# inference.sh CLI

Log in to inference.sh and run its catalog of AI apps — image, video, audio, LLMs, search — from one CLI.

- **Type:** Models & tools · Tooling
- **Status:** live
- **Publisher:** inference.sh
- **License:** MIT
- **Source:** <https://github.com/inference-sh/skills/tree/main/tools/infsh-cli>
- **Works in:** Claude Code, Codex, Cursor, Gemini CLI
- **Tags:** `cli` `model-runner` `image` `video` `audio`
- **Full card, kept current:** <https://varg.ai/how-to/skills/infsh-cli.md>

## Install

```bash
# Claude Code
npx skills add inference-sh/skills --skill infsh-cli -a claude-code

# Codex
npx skills add inference-sh/skills --skill infsh-cli -a codex

# Cursor
npx skills add inference-sh/skills --skill infsh-cli -a cursor

# Gemini CLI
npx skills add inference-sh/skills --skill infsh-cli -a gemini-cli
```

## Example

Watch: <https://s3.varg.ai/how-to/previews/87f9dcb7e365/infsh-cli.mp4>

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/infsh-cli).
