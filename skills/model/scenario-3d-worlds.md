# Scenario 3D Worlds

Walkable 3D worlds as Gaussian splats from text, a photo, a panorama or a video: Marble, HY World and TripoSplat.

- **Type:** Models & tools · 3d Scenes
- **Status:** live
- **Publisher:** Scenario
- **License:** MIT
- **Source:** <https://github.com/scenario-labs/skills/tree/main/skills/scenario-3d-worlds>
- **Works in:** Claude Code, Codex, Cursor, Gemini CLI, mcp
- **Tags:** `gaussian-splats` `world-models` `marble` `hunyuan-world` `skybox` `3dgs` `locations` `scenario`
- **Full card, kept current:** <https://varg.ai/how-to/skills/scenario-3d-worlds.md>

## Install

```bash
# Claude Code
npx skills add scenario-labs/skills --skill scenario scenario-3d-worlds -a claude-code && claude mcp add --transport http scenario https://mcp.scenario.com/mcp

# Codex
npx skills add scenario-labs/skills --skill scenario scenario-3d-worlds -a codex

# Cursor
npx skills add scenario-labs/skills --skill scenario scenario-3d-worlds -a cursor

# Gemini CLI
npx skills add scenario-labs/skills --skill scenario scenario-3d-worlds -a gemini-cli

# mcp
https://mcp.scenario.com/mcp
```

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/scenario-3d-worlds).
