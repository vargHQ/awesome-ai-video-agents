# Character Keynote

One render call: a Soul character delivers a keynote-style ad line on a generated stage, voiced by Seedance 2.5.

- **Type:** Workflows · Talking Head
- **Status:** beta
- **Publisher:** varg
- **License:** MIT
- **Source:** <https://github.com/vargHQ/skills/tree/main/varg-character-keynote>
- **Works in:** claude-ai, Claude Code, Codex, Cursor, Gemini CLI, OpenClaw
- **Tags:** `ads` `ugc` `characters` `native-audio` `template` `seedance`
- **Full card, kept current:** <https://varg.ai/how-to/skills/varg-character-keynote.md>

## Install

```bash
# Claude Code
claude plugin marketplace add vargHQ/skills && claude plugin install varg@varg

# Codex
npx skills add vargHQ/skills --skill varg-character-keynote -a codex -y

# Cursor
npx skills add vargHQ/skills --skill varg-character-keynote -a cursor -y

# OpenClaw
npx clawhub@latest install varg-character-keynote

# Gemini CLI
npx skills add vargHQ/skills --skill varg-character-keynote -a gemini-cli -y
```

## Step-by-step tutorials that use it

- [How to make a talking avatar video with AI](../../how-to/make-a-talking-avatar-video.md): A person (from a headshot, or generated) speaks your script to camera with lip-sync, in any language.

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/varg-character-keynote).
