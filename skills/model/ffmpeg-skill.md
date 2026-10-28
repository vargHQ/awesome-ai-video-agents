# FFmpeg Skill

Local video editor for agents: 42 FFmpeg tools with a machine-readable contract and an MCP server; no cloud, no keys.

- **Type:** Models & tools · Edit Services
- **Status:** live
- **Publisher:** Shogo Kajiyama
- **License:** MIT
- **Source:** <https://github.com/kajisho5/ffmpeg-skill>
- **Works in:** Claude Code, Cursor, Codex, mcp
- **Tags:** `ffmpeg` `editing` `captions` `reframe` `loudness` `mcp` `tooling`
- **Full card, kept current:** <https://varg.ai/how-to/skills/ffmpeg-skill.md>

## Install

```bash
# Claude Code
npx ffmpeg-skill

# Codex
npx ffmpeg-skill --codex

# Cursor
npx ffmpeg-skill --cursor
```

## Example

Watch: <https://s3.varg.ai/how-to/previews/564622beb60d/ffmpeg-skill.mp4>

## Step-by-step tutorials that use it

- [How to edit your own video footage with AI](../../how-to/edit-your-own-video-footage.md): Cut silences and flubs, reframe 16:9 to 9:16, add captions and b-roll to footage you shot.

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/ffmpeg-skill).
