# Talking Head Production

Produce talking-head videos with AI avatars, lip-sync and voiceover, from portrait specs to final cut.

- **Type:** Workflows · Talking Head
- **Status:** live
- **Publisher:** inference.sh
- **License:** MIT
- **Source:** <https://github.com/inference-sh/skills/tree/main/guides/video/talking-head-production>
- **Works in:** Claude Code, Codex, Cursor, Gemini CLI
- **Tags:** `avatar` `lip-sync` `voiceover`
- **Full card, kept current:** <https://varg.ai/how-to/skills/inference-sh-talking-head-production.md>

## Install

```bash
# Claude Code
npx skills add inference-sh/skills --skill talking-head-production -a claude-code

# Codex
npx skills add inference-sh/skills --skill talking-head-production -a codex

# Cursor
npx skills add inference-sh/skills --skill talking-head-production -a cursor

# Gemini CLI
npx skills add inference-sh/skills --skill talking-head-production -a gemini-cli
```

## Example

Watch: <https://s3.varg.ai/how-to/previews/14ca1501855a/inference-sh-talking-head-production.mp4>

## Step-by-step tutorials that use it

- [How to make a talking avatar video with AI](../../how-to/make-a-talking-avatar-video.md): A person (from a headshot, or generated) speaks your script to camera with lip-sync, in any language.

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/inference-sh-talking-head-production).
