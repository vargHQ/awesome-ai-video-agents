# ElevenLabs Dubbing (inference.sh)

Dub audio or video into 29 languages while keeping the speaker's voice, via inference.sh.

- **Type:** Models & tools · Dubbing
- **Status:** live
- **Publisher:** inference.sh
- **License:** MIT
- **Source:** <https://github.com/inference-sh/skills/tree/main/tools/audio/elevenlabs-dubbing>
- **Works in:** Claude Code, Codex, Cursor, Gemini CLI
- **Tags:** `elevenlabs` `dubbing` `localization` `audio`
- **Full card, kept current:** <https://varg.ai/how-to/skills/inference-sh-elevenlabs-dubbing.md>

## Install

```bash
# Claude Code
npx skills add inference-sh/skills --skill elevenlabs-dubbing -a claude-code

# Codex
npx skills add inference-sh/skills --skill elevenlabs-dubbing -a codex

# Cursor
npx skills add inference-sh/skills --skill elevenlabs-dubbing -a cursor

# Gemini CLI
npx skills add inference-sh/skills --skill elevenlabs-dubbing -a gemini-cli
```

## Example

Watch: <https://s3.varg.ai/how-to/previews/23b6476cc76e/inference-sh-elevenlabs-dubbing.mp4>

## Step-by-step tutorials that use it

- [How to translate and dub a video with AI](../../how-to/translate-and-dub-a-video.md): Your video in another language with your own voice, optionally lip-synced and subtitled.

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/inference-sh-elevenlabs-dubbing).
