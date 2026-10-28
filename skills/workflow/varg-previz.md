# Previz to Seedance

Plan multi-shot AI video before paying: story, anchor sheets, a three.js grey-box previz, then a Seedance v2v pack.

- **Type:** Workflows · Cinematic
- **Status:** beta
- **Publisher:** varg
- **License:** MIT
- **Source:** <https://github.com/vargHQ/skills/tree/main/varg-previz>
- **Works in:** Claude Code
- **Tags:** `camera` `editing` `characters` `storyboard` `previz` `three-js` `video-to-video` `music`
- **Full card, kept current:** <https://varg.ai/how-to/skills/varg-previz.md>

## Install

```bash
# Claude Code
claude plugin marketplace add vargHQ/skills && claude plugin install varg@varg

# Codex
npx skills add vargHQ/skills --skill varg-previz -a codex -y

# Cursor
npx skills add vargHQ/skills --skill varg-previz -a cursor -y

# OpenClaw
npx clawhub@latest install varg-previz

# Gemini CLI
npx skills add vargHQ/skills --skill varg-previz -a gemini-cli -y
```

## Example

Watch: <https://s3.varg.ai/how-to/previews/2f5f2d60dd84/varg-previz.mp4>

## Step-by-step tutorials that use it

- [How to turn a product photo into a video with AI](../../how-to/turn-a-product-photo-into-a-video.md): A product shot turned into a short promo: orbit, push-in, exploded view or bullet time, with music.
- [How to make an AI short film](../../how-to/make-an-ai-short-film.md): A multi-shot story with consistent characters: script, storyboard, previz, shots, edit.
- [How to remake a reference video with AI](../../how-to/remake-a-reference-video.md): Take a reel or ad you like, break it down shot by shot, and remake the format for your brand.

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/varg-previz).
