# Turn a Novel into Character-Consistent AI Drama Episodes

ArcReel: novels or screenplays become character, scene and prop assets, storyboards, video shots and finished episodes; agent skill plus remote MCP.

- **Type:** Workflows · Story
- **Status:** live
- **Publisher:** ArcReel
- **Source:** <https://github.com/ArcReel/ArcReel>
- **Works in:** Claude Code
- **Tags:** `novel-to-video` `animated-comic` `short-drama` `storyboard` `mcp` `agent-skill` `self-hosted` `cost-tracking`
- **Full card, kept current:** <https://varg.ai/how-to/skills/novel-to-ai-drama-episodes.md>

## Install

```bash
# Claude Code
git clone https://github.com/ArcReel/ArcReel.git
cd ArcReel/deploy
cp .env.example .env
docker compose up -d
```

## Example

![Turn a Novel into Character-Consistent AI Drama Episodes example](https://github.com/user-attachments/assets/fcc4ceb2-64dd-44a0-a32c-e0c00b2f9796)

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/novel-to-ai-drama-episodes).
