# Image to Video

Animate stills into video: pick the right model, then prompt motion and camera moves that hold together.

- **Type:** Models & tools · Cinematic
- **Status:** live
- **Publisher:** inference.sh
- **License:** MIT
- **Source:** <https://github.com/inference-sh/skills/tree/main/tools/video/image-to-video>
- **Works in:** Claude Code, Codex, Cursor, Gemini CLI
- **Tags:** `image-to-video` `camera` `prompting`
- **Full card, kept current:** <https://varg.ai/how-to/skills/inference-sh-image-to-video.md>

## Install

```bash
# Claude Code
npx skills add inference-sh/skills --skill image-to-video -a claude-code

# Codex
npx skills add inference-sh/skills --skill image-to-video -a codex

# Cursor
npx skills add inference-sh/skills --skill image-to-video -a cursor

# Gemini CLI
npx skills add inference-sh/skills --skill image-to-video -a gemini-cli
```

## Example

Watch: <https://s3.varg.ai/how-to/previews/b6de4a604e87/inference-sh-image-to-video.mp4>

## Step-by-step tutorials that use it

- [How to animate a photo into a video with AI](../../how-to/animate-a-photo-into-a-video.md): A still photo brought to life: a subtle smile, blink, camera move or full scene motion.

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/inference-sh-image-to-video).
