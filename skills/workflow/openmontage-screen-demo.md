# OpenMontage Screen Demo

Polishes real screen captures into demos with callouts, zoom crops, subtitles and cleaned audio, or renders a synthetic 

- **Type:** Workflows · Edit Agents
- **Status:** live
- **Publisher:** Calesthio
- **License:** AGPL-3.0
- **Source:** <https://github.com/calesthio/OpenMontage/tree/main/skills/pipelines/screen-demo/>
- **Works in:** Claude Code, Codex, Cursor, OpenClaw
- **Tags:** `openmontage` `pipeline` `edit-agents` `skill`
- **Full card, kept current:** <https://varg.ai/how-to/skills/openmontage-screen-demo.md>

## Install

```bash
# Claude Code
git clone https://github.com/calesthio/OpenMontage.git && cd OpenMontage && make setup
```

## Step-by-step tutorials that use it

- [How to make an app launch video with AI](../../how-to/make-an-app-launch-video.md): A launch video for your app from a real screen recording plus generated shots: about 30 s with a hook, one workflow and a call to action, voiceover and music.

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/openmontage-screen-demo).
