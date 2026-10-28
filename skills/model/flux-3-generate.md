# FLUX 3 Generate

Submit, poll and validate FLUX 3 video jobs, including cheap drafts before the final render.

- **Type:** Models & tools · Tooling
- **Status:** live
- **Publisher:** Black Forest Labs
- **License:** MIT
- **Source:** <https://github.com/black-forest-labs/skills/tree/master/skills/flux-3-generate>
- **Works in:** Claude Code, Codex, Cursor, Gemini CLI
- **Tags:** `flux` `video` `api` `drafts`
- **Full card, kept current:** <https://varg.ai/how-to/skills/flux-3-generate.md>

## Install

```bash
# Claude Code
/plugin marketplace add black-forest-labs/skills
/plugin install flux-3-video@black-forest-labs

# Codex
npx skills add black-forest-labs/skills --skill flux-3-generate -a codex

# Cursor
npx skills add black-forest-labs/skills --skill flux-3-generate -a cursor

# Gemini CLI
npx skills add black-forest-labs/skills --skill flux-3-generate -a gemini-cli
```

## Example

Watch: <https://s3.varg.ai/how-to/previews/2efa44a0527a/flux-3-generate.mp4>

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/flux-3-generate).
