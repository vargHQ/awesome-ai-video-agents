# OpenShorts

Open-source OpusClip alternative (MIT): long video in, 9:16 clips with face tracking and captions out. MCP, API.

- **Type:** Guides · Shorts
- **Status:** live
- **Publisher:** Juan Carlos Cavero (mutonby)
- **License:** MIT
- **Source:** <https://github.com/mutonby/openshorts>
- **Works in:** Claude Code, claude-ai, chatgpt, Cursor, OpenClaw, mcp
- **Tags:** `clipping` `opus-clip-alternative` `self-host` `mcp` `captions` `reframe` `editing` `ads` `api`
- **Full card, kept current:** <https://varg.ai/how-to/skills/openshorts.md>

## Install

```bash
# Claude Code
claude mcp add --transport http openshorts https://mcp.openshorts.app/mcp --header "Authorization: Bearer osk_..."

# OpenClaw
openclaw skills install @mutonby/openshorts
```

## Example

![OpenShorts example](https://raw.githubusercontent.com/mutonby/openshorts/main/screenshots/clip-results.png)

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/openshorts).
