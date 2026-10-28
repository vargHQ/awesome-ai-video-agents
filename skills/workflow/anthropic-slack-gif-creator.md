# Slack GIF Creator

Make animated GIFs that pass Slack's limits: 128×128 emoji or 480×480 message GIFs, validated on export.

- **Type:** Workflows · Image
- **Status:** live
- **Publisher:** Anthropic
- **License:** Apache-2.0
- **Source:** <https://github.com/anthropics/skills/tree/main/skills/slack-gif-creator>
- **Works in:** Claude Code, claude-ai, Codex, Cursor, Gemini CLI
- **Tags:** `gif` `animation` `emoji` `slack`
- **Full card, kept current:** <https://varg.ai/how-to/skills/anthropic-slack-gif-creator.md>

## Install

```bash
# Claude Code
/plugin marketplace add anthropics/skills
/plugin install example-skills@anthropic-agent-skills

# Codex
npx skills add anthropics/skills --skill slack-gif-creator -a codex

# Cursor
npx skills add anthropics/skills --skill slack-gif-creator -a cursor

# Gemini CLI
npx skills add anthropics/skills --skill slack-gif-creator -a gemini-cli
```

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/anthropic-slack-gif-creator).
