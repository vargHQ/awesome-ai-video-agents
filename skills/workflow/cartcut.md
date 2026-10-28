# CartCut

Layer-based video editor built for AI agents, with a Claude Code plugin, skill and MCP server.

- **Type:** Workflows · Edit Agents
- **Status:** live
- **Publisher:** Cartesian
- **License:** MIT
- **Source:** <https://github.com/cartesiancs/cartcut>
- **Works in:** Claude Code, mcp
- **Tags:** `editor` `mcp` `layers` `motion` `edit-agents` `app`
- **Full card, kept current:** <https://varg.ai/how-to/skills/cartcut.md>

## Install

```bash
# Claude Code
/plugin marketplace add cartesiancs/cartcut  then  /plugin install cartcut-editing@cartcut

# mcp
npx -y @cartesiancs/cartcut-mcp
```

## Example

![CartCut example](https://s3.varg.ai/how-to/previews/773a8450ea91/cartcut.webp)

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/cartcut).
