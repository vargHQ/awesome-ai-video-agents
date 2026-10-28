# SmartCut (capcut-ai-editor)

MCP that reads CapCut auto-captions to cut silences and duplicate takes right inside your CapCut project.

- **Type:** Guides · Cuts
- **Status:** live
- **Publisher:** mrbuslov
- **License:** MIT
- **Source:** <https://github.com/mrbuslov/capcut-ai-editor>
- **Works in:** Claude Code, claude-ai, mcp
- **Tags:** `capcut` `silence-removal` `retakes` `talking-head` `cuts` `mcp`
- **Full card, kept current:** <https://varg.ai/how-to/skills/capcut-smartcut-mcp.md>

## Install

```bash
# mcp
pip install -e .  (inside the cloned repo), then add the venv python to your MCP config
```

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/capcut-smartcut-mcp).
