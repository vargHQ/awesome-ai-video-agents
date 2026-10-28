# Turn a script into a two-person podcast video

Two-character podcast or debate clips: one studio set, locked camera angles, MiniMax H3 Max with native audio.

- **Type:** Workflows · Talking Head
- **Status:** beta
- **Publisher:** varg
- **License:** MIT
- **Source:** <https://github.com/vargHQ/skills/tree/main/varg-podcast-video>
- **Works in:** Claude Code, Codex, Cursor, Gemini CLI, OpenClaw
- **Tags:** `podcast` `dialogue` `characters` `native-audio` `education`
- **Full card, kept current:** <https://varg.ai/how-to/skills/varg-podcast-video.md>

## Install

```bash
# Claude Code
claude plugin marketplace add vargHQ/skills && claude plugin install varg@varg

# Codex
npx skills add vargHQ/skills --skill varg-podcast-video -a codex -y

# Cursor
npx skills add vargHQ/skills --skill varg-podcast-video -a cursor -y

# OpenClaw
npx clawhub@latest install varg-podcast-video

# Gemini CLI
npx skills add vargHQ/skills --skill varg-podcast-video -a gemini-cli -y
```

## Example

Watch: <https://s3.varg.ai/how-to/previews/100daa58d70d/varg-podcast-video.mp4>

## Step-by-step tutorials that use it

- [How to make a UGC ad video with AI](../../how-to/make-a-ugc-ad-video.md): A creator-style ad: a person talks to camera about your product, with b-roll, captions and an end card.
- [How to make a talking avatar video with AI](../../how-to/make-a-talking-avatar-video.md): A person (from a headshot, or generated) speaks your script to camera with lip-sync, in any language.

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/varg-podcast-video).
