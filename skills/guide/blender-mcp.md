# Blender MCP by Siddharth Ahuja

Lets your agent drive a live Blender: build scenes in Blender Python, check its own renders, pull Poly Haven assets.

- **Type:** Guides · 3d Scenes
- **Status:** live
- **Publisher:** Siddharth Ahuja
- **License:** MIT
- **Source:** <https://github.com/ahujasid/mcp-for-blender>
- **Works in:** Claude Code, Codex, Cursor, mcp
- **Tags:** `blender` `mcp` `3d` `bpy` `python` `poly-haven` `3d-generation` `code-to-video`
- **Full card, kept current:** <https://varg.ai/how-to/skills/blender-mcp.md>

## Install

```bash
# Claude Code
claude mcp add blender uvx mcp-for-blender && uvx mcp-for-blender install-addon

# Codex
codex mcp add blender -- uvx mcp-for-blender && uvx mcp-for-blender install-addon

# Cursor
uvx mcp-for-blender setup

# mcp
uvx mcp-for-blender setup
```

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/blender-mcp).
