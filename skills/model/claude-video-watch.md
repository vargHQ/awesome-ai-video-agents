# Watch (video analysis)

Gives the agent eyes on any video: download, scene-aware frames, timestamped transcript.

- **Type:** Models & tools · Research
- **Status:** live
- **Publisher:** Brad Bonanno
- **License:** MIT
- **Source:** <https://github.com/bradautomates/claude-video>
- **Works in:** Claude Code, Codex
- **Tags:** `discover` `discover-social` `discover-film` `discover-music` `discover-teardown`
- **Full card, kept current:** <https://varg.ai/how-to/skills/claude-video-watch.md>

## Install

```bash
# Claude Code
/plugin marketplace add bradautomates/claude-video
/plugin install watch@claude-video

# Codex
npx skills add bradautomates/claude-video -g --skill watch
```

## Step-by-step tutorials that use it

- [How to remake a reference video with AI](../../how-to/remake-a-reference-video.md): Take a reel or ad you like, break it down shot by shot, and remake the format for your brand.
- [How to make AI b-roll for your video](../../how-to/make-ai-b-roll-for-your-video.md): Cutaway footage for every mention in a voiceover or interview: generated clips, collage or stock-style shots, cut in on time.

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/claude-video-watch).
