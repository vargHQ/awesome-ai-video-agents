# ACE-Step 1.5 songs

Official skills for the open-source ACE-Step 1.5 music model: write the lyrics, then a full sung song made locally, such as a birthday song with a name.

- **Type:** Guides · Greetings
- **Status:** live
- **Publisher:** ace-step
- **License:** MIT
- **Source:** <https://github.com/ace-step/ACE-Step-1.5/tree/main/.claude/skills>
- **Works in:** Claude Code, Codex, Cursor, Gemini CLI
- **Tags:** `song` `lyrics` `birthday-song` `open-source` `local` `official`
- **Full card, kept current:** <https://varg.ai/how-to/skills/acestep-song-skills.md>

## Install

```bash
# Claude Code
npx skills add ace-step/ACE-Step-1.5 --skill acestep -a claude-code -y

# Codex
npx skills add ace-step/ACE-Step-1.5 --skill acestep -a codex -y

# Cursor
npx skills add ace-step/ACE-Step-1.5 --skill acestep -a cursor -y

# Gemini CLI
npx skills add ace-step/ACE-Step-1.5 --skill acestep -a gemini-cli -y
```

## Step-by-step tutorials that use it

- [How to make an AI birthday song with their name](../../how-to/make-a-birthday-song-with-a-name.md): An original song that sings their name on the chorus, with two or three true details, as an MP3 or a video over their photos or the lyrics.

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/acestep-song-skills).
