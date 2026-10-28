# OpenMontage Talking Head

Takes raw footage of a person speaking, transcribes it, makes edit decisions (fillers, dead air, pacing), adds subtitles

- **Type:** Workflows · Edit Agents
- **Status:** live
- **Publisher:** Calesthio
- **License:** AGPL-3.0
- **Source:** <https://github.com/calesthio/OpenMontage/tree/main/skills/pipelines/talking-head/>
- **Works in:** Claude Code, Codex, Cursor, OpenClaw
- **Tags:** `openmontage` `pipeline` `edit-agents` `skill`
- **Full card, kept current:** <https://varg.ai/how-to/skills/openmontage-talking-head.md>

## Install

```bash
# Claude Code
git clone https://github.com/calesthio/OpenMontage.git && cd OpenMontage && make setup
```

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/openmontage-talking-head).
