# Open-Source Desktop AI Short Drama Maker That Keeps Data Local

LocalMiniDrama: synopsis to multi-episode script, characters, scenes, storyboard, shot videos and merged episode, all stored locally.

- **Type:** Workflows · Story
- **Status:** live
- **Publisher:** xuanyustudio
- **Source:** <https://github.com/xuanyustudio/LocalMiniDrama>
- **Works in:** Claude Code
- **Tags:** `short-drama` `manju` `local-first` `electron` `storyboard` `character-consistency` `kling` `jimeng` `seedance` `mit`
- **Full card, kept current:** <https://varg.ai/how-to/skills/localminidrama-desktop-short-drama.md>

## Install

```bash
# Claude Code
git clone https://github.com/xuanyustudio/LocalMiniDrama.git
cd LocalMiniDrama
cd backend-node && npm install
cp configs/config.example.yaml configs/config.yaml
npm run migrate && npm start
```

## Example

Watch: <https://github.com/xuanyustudio/LocalMiniDrama/raw/main/%E9%A1%B9%E7%9B%AE%E6%88%AA%E5%9B%BE/1.mp4>

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/localminidrama-desktop-short-drama).
