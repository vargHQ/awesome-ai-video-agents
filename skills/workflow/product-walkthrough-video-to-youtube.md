# Turn a Product Page Into a Narrated YouTube Walkthrough

Product or feature page to a 45-60 s narrated walkthrough: Playwright screenshots, Remotion, OpenAI TTS voiceover, YouTube upload and page embed.

- **Type:** Workflows · Launch
- **Status:** live
- **Publisher:** vood
- **Source:** <https://github.com/vood/claude-launch-video-skill/tree/main/launch-video>
- **Works in:** Claude Code
- **Tags:** `remotion` `playwright` `openai-tts` `voiceover` `youtube` `walkthrough` `product-launch` `16:9`
- **Full card, kept current:** <https://varg.ai/how-to/skills/product-walkthrough-video-to-youtube.md>

## Install

```bash
# Claude Code
cp -r launch-video /path/to/your/project/.claude/skills/
```

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/product-walkthrough-video-to-youtube).
