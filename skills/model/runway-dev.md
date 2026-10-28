# Runway Dev

Build Runway's image, video and audio models into your app: live API contracts, SDK and server-side keys.

- **Type:** Models & tools · Tooling
- **Status:** live
- **Publisher:** Runway
- **License:** MIT
- **Source:** <https://github.com/runwayml/skills/tree/main/skills/runway-dev>
- **Works in:** Claude Code, Codex, Cursor, Gemini CLI
- **Tags:** `api` `sdk` `video` `image` `audio`
- **Full card, kept current:** <https://varg.ai/how-to/skills/runway-dev.md>

## Install

```bash
# Claude Code
claude plugin marketplace add runwayml/skills
claude plugin install runway-api@runway-dev

# Codex
npx skills add runwayml/skills --skill runway-dev -a codex

# Cursor
npx skills add runwayml/skills --skill runway-dev -a cursor

# Gemini CLI
npx skills add runwayml/skills --skill runway-dev -a gemini-cli
```

## Example

Watch: <https://s3.varg.ai/how-to/previews/b4d7720c6d08/runway-dev.mp4>

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/runway-dev).
