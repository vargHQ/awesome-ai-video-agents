# Motion Formats: VHS, pixel art, lyric and launch videos

Seven full formats with beat structures and presets: analog-horror trailer, VHS screensaver, pixel runner, wave wordmark, DAW one-shot, launch film, lyric video.

- **Type:** Workflows · Animation
- **Status:** live
- **Publisher:** varg
- **License:** MIT
- **Source:** <https://github.com/vargHQ/skills/tree/main/motion-formats>
- **Works in:** Claude Code, Codex, Cursor, Gemini CLI, OpenClaw, varg Studio
- **Tags:** `vhs` `analog-horror` `pixel-art` `lyric-video` `launch-video` `music-visualizer` `beat-sync` `presets` `hyperframes`
- **Full card, kept current:** <https://varg.ai/how-to/skills/motion-formats.md>

## Install

```bash
# Claude Code
claude plugin marketplace add vargHQ/skills && claude plugin install varg@varg

# Codex
npx skills add vargHQ/skills --skill motion-formats -a codex -y

# Cursor
npx skills add vargHQ/skills --skill motion-formats -a cursor -y

# OpenClaw
npx clawhub@latest install motion-formats

# Gemini CLI
npx skills add vargHQ/skills --skill motion-formats -a gemini-cli -y
```

## Example

Watch: <https://s3.varg.ai/files/72c55813-c0fa-4cf2-9f64-ec4f7ed0e7ae/file_7846529f1ac7.mp4>

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/motion-formats).
