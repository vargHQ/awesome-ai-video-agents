# Seedance 2.0

Make 4–15 s videos with synced audio in Seedance 2.0: text, image or reference-to-video up to 1080p.

- **Type:** Models & tools · Cinematic
- **Status:** live
- **Publisher:** inference.sh
- **License:** MIT
- **Source:** <https://github.com/inference-sh/skills/tree/main/tools/video/seedance>
- **Works in:** Claude Code, Codex, Cursor, Gemini CLI
- **Tags:** `seedance` `video-with-audio` `reference-to-video`
- **Full card, kept current:** <https://varg.ai/how-to/skills/inference-sh-seedance.md>

## Install

```bash
# Claude Code
npx skills add inference-sh/skills --skill seedance -a claude-code

# Codex
npx skills add inference-sh/skills --skill seedance -a codex

# Cursor
npx skills add inference-sh/skills --skill seedance -a cursor

# Gemini CLI
npx skills add inference-sh/skills --skill seedance -a gemini-cli
```

## Example

Watch: <https://s3.varg.ai/how-to/previews/8fcbe88cd691/inference-sh-seedance.mp4>

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/inference-sh-seedance).
