# SupoClip

Self-hostable OpusClip alternative: long video in, captioned vertical clips out, no watermark.

- **Type:** Guides · Editing
- **Status:** live
- **Publisher:** FujiwaraChoki
- **License:** AGPL-3.0
- **Source:** <https://github.com/FujiwaraChoki/supoclip>
- **Works in:** Claude Code, Codex
- **Tags:** `shorts` `clipping` `self-host` `api` `editing` `app`
- **Full card, kept current:** <https://varg.ai/how-to/skills/supoclip.md>

## Install

```bash
# Claude Code
git clone https://github.com/FujiwaraChoki/supoclip.git  then docker-compose up (see docs/setup.md)
```

## Example

![SupoClip example](https://s3.varg.ai/how-to/previews/6d686f612b5b/supoclip.webp)

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/supoclip).
