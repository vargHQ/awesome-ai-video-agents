# ElevenLabs Plugin + Hosted MCP

Official ElevenLabs plugin on its hosted OAuth MCP: voiceovers, music, images and video via creative_* tools.

- **Type:** Models & tools · Ads
- **Status:** live
- **Publisher:** ElevenLabs
- **License:** unknown
- **Source:** <https://github.com/elevenlabs/plugin>
- **Works in:** Claude Code, Codex, mcp
- **Tags:** `voiceover` `music` `mcp` `official` `elevenlabs`
- **Full card, kept current:** <https://varg.ai/how-to/skills/elevenlabs-plugin-creative-studio.md>

## Install

```bash
# Claude Code
claude plugin marketplace add elevenlabs/plugin && claude plugin install elevenlabs@elevenlabs

# Codex
codex plugin marketplace add elevenlabs/plugin

# mcp
https://api.elevenlabs.io/v1/mcp
```

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/elevenlabs-plugin-creative-studio).
