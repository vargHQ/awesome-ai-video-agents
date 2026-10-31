# How to prompt Kling 4 for cinematic AI video

Kling 4 without the AI-slop look: key frames from GPT Image 2.5, a short director's prompt, multi-shot with seconds, "no slow motion", and the fixes.

- **Type:** Prompts · Prompting
- **Status:** live
- **Publisher:** varg
- **License:** MIT
- **Source:** <https://github.com/vargHQ/skills/tree/main/kling-4-prompting>
- **Works in:** Claude Code, Codex, Cursor, Gemini CLI, OpenClaw
- **Tags:** `kling` `kling-4` `prompting` `reference-to-video` `multi-shot` `key-frames` `gpt-image` `cinematic` `native-audio` `official`
- **Full card, kept current:** <https://varg.ai/how-to/skills/kling-4-prompting.md>

## Install

```bash
# Claude Code
claude plugin marketplace add vargHQ/skills && claude plugin install varg@varg

# Codex
npx skills add vargHQ/skills --skill kling-4-prompting -a codex -y

# Cursor
npx skills add vargHQ/skills --skill kling-4-prompting -a cursor -y

# OpenClaw
npx clawhub@latest install kling-4-prompting

# Gemini CLI
npx skills add vargHQ/skills --skill kling-4-prompting -a gemini-cli -y
```

## Example

Watch: <https://s3.varg.ai/files/72c55813-c0fa-4cf2-9f64-ec4f7ed0e7ae/file_0665c41e46ff.mp4>

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/kling-4-prompting).
