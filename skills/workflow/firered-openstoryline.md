# FireRed-OpenStoryline

Conversational editing agent: finds media, writes the storyline, beat-syncs music and refines the cut by chat.

- **Type:** Workflows · Edit Agents
- **Status:** live
- **Publisher:** FireRed Team
- **License:** Apache-2.0
- **Source:** <https://github.com/FireRedTeam/FireRed-OpenStoryline>
- **Works in:** OpenClaw, Codex, Claude Code
- **Tags:** `conversational-editing` `rough-cut` `beat-sync` `storyline` `chinese` `edit-agents` `app`
- **Full card, kept current:** <https://varg.ai/how-to/skills/firered-openstoryline.md>

## Install

```bash
# Codex
npx skills add FireRedTeam/FireRed-OpenStoryline --skill openstoryline-use --agent codex

# OpenClaw
npx clawhub install openstoryline-use
```

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/firered-openstoryline).
