# Video Skills Finder

Finds the right skill for any AI video, image, voice or music job here and shows you the visual options.

- **Type:** Models & tools · Research
- **Status:** live
- **Publisher:** varg
- **License:** MIT
- **Source:** <https://github.com/vargHQ/skills/tree/main/video-skills>
- **Works in:** Claude Code, Codex, Cursor, OpenClaw
- **Tags:** `finder` `search` `catalog` `video` `official`
- **Full card, kept current:** <https://varg.ai/how-to/skills/video-skills.md>

## Install

```bash
# Claude Code
claude plugin marketplace add vargHQ/skills && claude plugin install varg@varg

# Codex
npx skills add vargHQ/skills --skill video-skills -a codex -y

# Cursor
npx skills add vargHQ/skills --skill video-skills -a cursor -y

# OpenClaw
npx clawhub@latest install video-skills

# Gemini CLI
npx skills add vargHQ/skills --skill video-skills -a gemini-cli -y
```

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/video-skills).
