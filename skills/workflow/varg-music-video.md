# Turn a song into an AI music video

Direct an AI music video the way top X creators do: song map, beat-grid storyboard, stills first, Seedance, lip-sync.

- **Type:** Workflows · Music
- **Status:** beta
- **Publisher:** varg
- **License:** MIT
- **Source:** <https://github.com/vargHQ/skills/tree/main/varg-music-video>
- **Works in:** claude-ai, Claude Code, Codex, Cursor, Gemini CLI, OpenClaw
- **Tags:** `lip-sync` `beat-grid` `lyrics` `storyboard` `editing` `characters` `captions` `seedance`
- **Full card, kept current:** <https://varg.ai/how-to/skills/varg-music-video.md>

## Install

```bash
# Claude Code
claude plugin marketplace add vargHQ/skills && claude plugin install varg@varg

# Codex
npx skills add vargHQ/skills --skill varg-music-video -a codex -y

# Cursor
npx skills add vargHQ/skills --skill varg-music-video -a cursor -y

# OpenClaw
npx clawhub@latest install varg-music-video

# Gemini CLI
npx skills add vargHQ/skills --skill varg-music-video -a gemini-cli -y
```

## Step-by-step tutorials that use it

- [How to make an AI music video](../../how-to/make-an-ai-music-video.md): A music video for your song: concept, a consistent lead character, shots cut on the beat, lip-sync on vocals.
- [How to make a lyric video with AI](../../how-to/make-a-lyric-video.md): Lyrics synced to the song: the sung line big and highlighted, karaoke-style, over art or a shader.

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/varg-music-video).
