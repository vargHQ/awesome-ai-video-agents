# Turn Novel Text into a Voiced AI Motion Comic

Alibaba LumenX Studio: script analysis, art direction, character turnarounds, I2V/R2V shots, CosyVoice dialogue and FFmpeg export.

- **Type:** Workflows · Story
- **Status:** live
- **Publisher:** alibaba
- **Source:** <https://github.com/alibaba/lumenx>
- **Works in:** Claude Code
- **Tags:** `motion-comic` `manju` `novel-to-video` `storyboard` `character-turnaround` `wan` `seedance` `kling` `cosyvoice` `alibaba` `mit`
- **Full card, kept current:** <https://varg.ai/how-to/skills/lumenx-novel-to-motion-comic.md>

## Install

```bash
# Claude Code
git clone https://github.com/alibaba/lumenx.git
cd lumenx
cp .env.example .env
npm run dev
```

## Example

![Turn Novel Text into a Voiced AI Motion Comic example](https://github.com/alibaba/lumenx/raw/main/docs/images/studio-storyboard.jpg)

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/lumenx-novel-to-motion-comic).
