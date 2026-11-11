# cc-blender-skill by Rob Lee

30 chain-loaded Blender skills: plain-language requests become Blender Python over the official or community MCP.

- **Type:** Guides · 3d Scenes
- **Status:** live
- **Publisher:** Rob Lee
- **License:** MIT
- **Source:** <https://github.com/RobLe3/cc-blender-skill/tree/main/plugin/skills>
- **Works in:** Codex, Claude Code
- **Tags:** `blender` `blender-mcp` `reference-to-3d` `modeling` `lighting` `rendering` `validation` `codex`
- **Full card, kept current:** <https://varg.ai/how-to/skills/cc-blender-skill.md>

## Install

```bash
# Codex
git clone git@github.com:RobLe3/cc-blender-skill.git
cd cc-blender-skill
mkdir -p "$HOME/.agents/skills"
for skill in plugin/skills/*/; do
    name=$(basename "$skill")
    test ! -e "$HOME/.agents/skills/$name" && test ! -L "$HOME/.agents/skills/$name" || {
        echo "Refusing to replace $name" >&2; exit 1;
    }
done
for skill in plugin/skills/*/; do
    name=$(basename "$skill")
    ln -s "$(pwd)/$skill" "$HOME/.agents/skills/$name"
done
```

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/cc-blender-skill).
