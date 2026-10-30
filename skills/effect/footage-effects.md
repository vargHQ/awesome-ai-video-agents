# Footage Effects: glow, glitch, CRT and VHS on real video

Eight effects for footage you already have as ffmpeg filter chains and WebGL presets: glow, glitch, CRT, chromatic, halftone, photocopy, zoom blur, heat haze.

- **Type:** Effects · Editing
- **Status:** live
- **Publisher:** varg
- **License:** MIT
- **Source:** <https://github.com/vargHQ/skills/tree/main/footage-effects>
- **Works in:** Claude Code, Codex, Cursor, Gemini CLI, OpenClaw, varg Studio
- **Tags:** `glitch` `glow` `bloom` `crt` `vhs` `halftone` `chromatic-aberration` `ffmpeg` `vfx` `presets`
- **Full card, kept current:** <https://varg.ai/how-to/skills/footage-effects.md>

## Install

```bash
# Claude Code
claude plugin marketplace add vargHQ/skills && claude plugin install varg@varg

# Codex
npx skills add vargHQ/skills --skill footage-effects -a codex -y

# Cursor
npx skills add vargHQ/skills --skill footage-effects -a cursor -y

# OpenClaw
npx clawhub@latest install footage-effects

# Gemini CLI
npx skills add vargHQ/skills --skill footage-effects -a gemini-cli -y
```

## Example

Watch: <https://s3.varg.ai/files/72c55813-c0fa-4cf2-9f64-ec4f7ed0e7ae/file_4c5a3702ba3d.mp4>

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/footage-effects).
