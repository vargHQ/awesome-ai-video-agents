# Cinematic Prompt Design and ComfyUI Storyboards

Camera, lens, lighting and film-preset prompt builder with LLM enhancement, plus per-shot ComfyUI storyboards and a gallery.

- **Type:** Workflows · Cinematic
- **Status:** live
- **Publisher:** NickPittas
- **Source:** <https://github.com/NickPittas/DirectorsConsole>
- **Works in:** Claude Code
- **Tags:** `comfyui` `storyboard` `prompt-builder` `camera` `lens` `lighting` `film-presets` `live-action` `animation`
- **Full card, kept current:** <https://varg.ai/how-to/skills/directors-console.md>

## Install

```bash
# local
git clone https://github.com/NickPittas/DirectorsConsole.git
cd DirectorsConsole
python start.py --setup
python start.py
```

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/directors-console).
