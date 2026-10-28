# Gemini API Dev

Write current Gemini API code, including Nano Banana image generation, Omni video and Gemini TTS.

- **Type:** Models & tools · Tooling
- **Status:** live
- **Publisher:** Google Gemini
- **License:** Apache-2.0
- **Source:** <https://github.com/google-gemini/gemini-skills/tree/main/skills/gemini-api-dev>
- **Works in:** Claude Code, Codex, Cursor, Gemini CLI
- **Tags:** `image` `audio` `nano-banana` `tts` `video` `sdk`
- **Full card, kept current:** <https://varg.ai/how-to/skills/gemini-api-dev.md>

## Install

```bash
# Claude Code
/plugin marketplace add google-gemini/gemini-skills
/plugin install gemini-skills@gemini-skills

# Codex
codex plugin marketplace add https://github.com/google-gemini/gemini-skills
codex plugin add gemini-skills@gemini-skills

# Cursor
npx skills add google-gemini/gemini-skills --skill gemini-api-dev -a cursor

# Gemini CLI
npx skills add google-gemini/gemini-skills --skill gemini-api-dev -a gemini-cli
```

## Example

![Gemini API Dev example](https://s3.varg.ai/how-to/previews/42eea857cf74/gemini-api-dev.webp)

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/gemini-api-dev).
