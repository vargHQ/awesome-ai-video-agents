# HyperFrames Reverse Any Video

Rebuilds a video you have rights to as an editable HyperFrames project, checked frame by frame against the original.

- **Type:** Guides · Tooling
- **Status:** live
- **Publisher:** HeyGen
- **License:** Apache-2.0
- **Source:** <https://github.com/heygen-com/hyperframes/tree/main/skills/reverse-any-video>
- **Works in:** Claude Code, Codex, Cursor, Gemini CLI
- **Tags:** `hyperframes` `remake` `reference-video` `html-to-video` `frame-diff` `editing`
- **Full card, kept current:** <https://varg.ai/how-to/skills/hyperframes-reverse-any-video.md>

## Install

```bash
# Claude Code
claude plugin marketplace add heygen-com/hyperframes
claude plugin install hyperframes@hyperframes

# Codex
npx skills add heygen-com/hyperframes --skill reverse-any-video -a codex

# Cursor
npx skills add heygen-com/hyperframes --skill reverse-any-video -a cursor

# Gemini CLI
npx skills add heygen-com/hyperframes --skill reverse-any-video -a gemini-cli
```

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/hyperframes-reverse-any-video).
