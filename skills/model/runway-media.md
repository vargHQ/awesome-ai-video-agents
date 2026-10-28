# Runway Media

Generate and edit images, video, music, speech and sound effects from chat with Runway's MCP tools.

- **Type:** Models & tools · Cinematic
- **Status:** live
- **Publisher:** Runway
- **License:** MIT
- **Source:** <https://github.com/runwayml/runway-mcp-plugin/tree/main/skills/runway-media>
- **Works in:** Claude Code, Codex, Cursor, Gemini CLI
- **Tags:** `image` `video` `audio` `mcp` `editing`
- **Full card, kept current:** <https://varg.ai/how-to/skills/runway-media.md>

## Install

```bash
# Claude Code
npx skills add runwayml/runway-mcp-plugin --skill runway-media -a claude-code

# Codex
npx skills add runwayml/runway-mcp-plugin --skill runway-media -a codex

# Cursor
npx skills add runwayml/runway-mcp-plugin --skill runway-media -a cursor

# Gemini CLI
npx skills add runwayml/runway-mcp-plugin --skill runway-media -a gemini-cli
```

## Example

Watch: <https://s3.varg.ai/how-to/previews/410709b26c13/runway-media.mp4>

## Step-by-step tutorials that use it

- [How to change something inside a video with AI](../../how-to/change-something-inside-a-video.md): Swap a product, restyle a scene, change lighting or the look of an existing clip while keeping the motion.

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/runway-media).
