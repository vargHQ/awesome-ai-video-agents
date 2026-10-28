# Agent Caption

Local captions in any language: Whisper words, forced-aligned timing, SRT/VTT, burned styles or a GSAP captions.js.

- **Type:** Effects · Captions
- **Status:** beta
- **Publisher:** Ali Hamza Kamboh
- **License:** MIT
- **Source:** <https://github.com/ahkamboh/agent-caption>
- **Works in:** Claude Code, Cursor, Codex
- **Tags:** `code-to-video` `forced-alignment` `whisperx` `subtitles` `karaoke` `translation`
- **Full card, kept current:** <https://varg.ai/how-to/skills/agent-caption.md>

## Install

```bash
# Claude Code
git clone https://github.com/ahkamboh/agent-caption && cd agent-caption && python setup.py

# Codex
git clone https://github.com/ahkamboh/agent-caption && cd agent-caption && python setup.py

# Cursor
git clone https://github.com/ahkamboh/agent-caption && cd agent-caption && python setup.py
```

## Example

Watch: <https://s3.varg.ai/how-to/previews/8298d7a02531/agent-caption.mp4>

## Step-by-step tutorials that use it

- [How to add animated captions to a video with AI](../../how-to/add-animated-captions-to-a-video.md): TikTok-style subtitles burned into an existing video: word highlight, pop words, or designed editorial captions.
- [How to make a lyric video with AI](../../how-to/make-a-lyric-video.md): Lyrics synced to the song: the sung line big and highlighted, karaoke-style, over art or a shader.

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/agent-caption).
