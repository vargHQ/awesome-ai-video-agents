# Meshy 3D Generation

Meshy's official skill: text or image to a textured 3D model, then remesh, rig, animate and export it as GLB or FBX.

- **Type:** Models & tools · 3d Scenes
- **Status:** live
- **Publisher:** Meshy
- **License:** MIT
- **Source:** <https://github.com/meshy-dev/meshy-3d-agent/tree/main/skills/meshy-3d-generation>
- **Works in:** Claude Code, Codex, Cursor, Gemini CLI, OpenClaw
- **Tags:** `meshy` `image-to-3d` `text-to-3d` `rigging` `3d-animation` `glb` `game-assets` `characters`
- **Full card, kept current:** <https://varg.ai/how-to/skills/meshy-3d-agent.md>

## Install

```bash
# Claude Code
npx -y skills add meshy-dev/meshy-3d-agent --skill meshy-3d-generation -a claude-code -g -y

# Codex
npx -y skills add meshy-dev/meshy-3d-agent --skill meshy-3d-generation -a codex -g -y

# Cursor
npx -y skills add meshy-dev/meshy-3d-agent --skill meshy-3d-generation -a cursor -g -y

# OpenClaw
openclaw skills install @arlieeee/meshy-3d-agent

# Gemini CLI
npx -y skills add meshy-dev/meshy-3d-agent --skill meshy-3d-generation -a gemini-cli -g -y
```

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/meshy-3d-agent).
