# PhotoCraft MCP (agent-driven photo editor)

Open-source Photoshop-class editor in Rust; its built-in MCP server lets an agent run all 500+ commands on your images.

- **Type:** Guides · Image
- **Status:** live
- **Publisher:** ArtCraft (storytold)
- **License:** MIT OR Apache-2.0
- **Source:** <https://github.com/storytold/photocraft>
- **Works in:** Claude Code, Codex, Cursor, mcp
- **Tags:** `photo-editing` `mcp` `layers` `psd` `open-source`
- **Full card, kept current:** <https://varg.ai/how-to/skills/photocraft-mcp.md>

## Install

```bash
# Claude Code
claude mcp add photocraft -- photocraft-cli mcp --automation-read-root <dir> --automation-write-root <dir>

# Codex
codex mcp add photocraft -- photocraft-cli mcp --automation-read-root <dir> --automation-write-root <dir>
```

## Example

![PhotoCraft MCP (agent-driven photo editor) example](https://raw.githubusercontent.com/storytold/photocraft/main/docs/images/photocraft-demo.jpg)

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/photocraft-mcp).
