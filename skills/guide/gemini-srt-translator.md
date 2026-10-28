# Subtitle Translator

Agent-translated SRT/ASS subtitles in resumable batches that keep cue count, timing and ASS styling tags intact.

- **Type:** Guides · Captions
- **Status:** live
- **Publisher:** Matheus Castro
- **License:** MIT
- **Source:** <https://github.com/MaKTaiL/gemini-srt-translator/tree/main/skills/subtitle-translator>
- **Works in:** Claude Code, Codex, Cursor
- **Tags:** `subtitles` `translation` `srt` `ass` `pysubs2`
- **Full card, kept current:** <https://varg.ai/how-to/skills/gemini-srt-translator.md>

## Install

```bash
# Claude Code
pip install gemini-srt-translator && gst skill install --target claude

# Codex
pip install gemini-srt-translator && gst skill install --global
```

## Step-by-step tutorials that use it

- [How to translate and dub a video with AI](../../how-to/translate-and-dub-a-video.md): Your video in another language with your own voice, optionally lip-synced and subtitled.

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/gemini-srt-translator).
