# OpusClip skills and API

Official OpusClip skill and MCP: clip long videos into shorts, copy a video's style, post to social.

- **Type:** Models & tools · Editing
- **Status:** live
- **Publisher:** OpusClip
- **License:** MIT
- **Source:** <https://help.opus.pro/api-reference/skill>
- **Works in:** Claude Code, claude-ai, Codex, OpenClaw, mcp
- **Tags:** `clipping` `shorts` `api` `skill` `mcp` `editing`
- **Full card, kept current:** <https://varg.ai/how-to/skills/opusclip.md>

## Install

```bash
# Claude Code
/plugin marketplace add opus-pro/opus-skills  then  /plugin install opusclip@opus-skills

# Codex
codex plugin marketplace add opus-pro/opus-skills

# mcp
claude mcp add --transport http --scope user opusclip https://mcp.opus.pro/mcp
```

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/opusclip).
