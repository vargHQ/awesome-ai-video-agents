# Blender Lab MCP Server

Blender's official MCP server: query and edit open scenes with Blender Python, bundled API docs and screenshots.

- **Type:** Guides · 3d Scenes
- **Status:** live
- **Publisher:** Blender Foundation
- **License:** GPL-3.0-or-later
- **Source:** <https://www.blender.org/lab/mcp-server/>
- **Works in:** mcp
- **Tags:** `blender` `mcp` `official` `bpy` `scene-analysis` `local-llm` `3d`
- **Full card, kept current:** <https://varg.ai/how-to/skills/blender-lab-mcp.md>

## Install

```bash
# mcp
cd $HOME && git clone https://projects.blender.org/lab/blender_mcp.git
uv --directory $HOME/blender_mcp/mcp run blender-mcp
```

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/blender-lab-mcp).
