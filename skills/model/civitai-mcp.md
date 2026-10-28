# Civitai MCP

Top AI images and videos with prompts and base models, plus model search.

- **Type:** Models & tools · Research
- **Status:** live
- **Publisher:** Civitai
- **License:** Apache-2.0
- **Source:** <https://github.com/civitai/civitai-mcp-server>
- **Works in:** Claude Code, claude-ai, Cursor, mcp
- **Tags:** `discover` `discover-ai`
- **Full card, kept current:** <https://varg.ai/how-to/skills/civitai-mcp.md>

## Install

```bash
# Claude Code
claude mcp add --transport http civitai https://mcp.civitai.com/mcp --header "Authorization: Bearer YOUR_CIVITAI_API_KEY"

# mcp
https://mcp.civitai.com/mcp
```

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/civitai-mcp).
