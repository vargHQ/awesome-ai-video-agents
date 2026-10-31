# Turn Novel Chapters into Subtitled AI Episodes on an Agent Canvas

TapCanvas: agents read your canvas and turn a chapter into reusable cast and sets, a shot plan, chained clips and a subtitled cut.

- **Type:** Workflows · Story
- **Status:** live
- **Publisher:** anymouschina
- **Source:** <https://github.com/anymouschina/TapCanvas>
- **Works in:** Claude Code
- **Tags:** `novel-to-video` `infinite-canvas` `agents` `storyboard` `character-consistency` `subtitles` `hyperframes` `mcp` `self-hosted` `mit`
- **Full card, kept current:** <https://varg.ai/how-to/skills/tapcanvas-novel-chapter-to-episode.md>

## Install

```bash
# Claude Code
git clone https://github.com/anymouschina/TapCanvas.git
cd TapCanvas
./scripts/dev.sh docker
```

## Example

Watch: <https://github.com/anymouschina/TapCanvas/raw/main/assets/showcases/full-story-subtitled/video.mp4>

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/tapcanvas-novel-chapter-to-episode).
