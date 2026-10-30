# HeyGen Avatar Video Skills

Official HeyGen skills: create your avatar, make presenter videos with the v3 Video Agent, translate with lip-sync.

- **Type:** Workflows · Ads
- **Status:** live
- **Publisher:** HeyGen
- **License:** MIT
- **Source:** <https://github.com/heygen-com/skills>
- **Works in:** Claude Code, Codex, Cursor, Gemini CLI
- **Tags:** `avatar` `presenter` `translation` `lip-sync` `heygen`
- **Full card, kept current:** <https://varg.ai/how-to/skills/heygen-avatar-video-skills.md>

## Install

```bash
# Claude Code
npx skills add heygen-com/skills -a claude-code && claude mcp add --transport http heygen https://mcp.heygen.com/mcp/v1/

# Codex
npx skills add heygen-com/skills -a codex

# Cursor
npx skills add heygen-com/skills -a cursor

# Gemini CLI
npx skills add heygen-com/skills -a gemini-cli
```

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/heygen-avatar-video-skills).
