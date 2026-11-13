# AutoClip

Free MIT desktop app, CLI and MCP: a link or long video in, platform-ready clips with covers and post copy out.

- **Type:** Guides · Shorts
- **Status:** live
- **Publisher:** zhouxiaoka
- **License:** MIT
- **Source:** <https://github.com/zhouxiaoka/autoclip>
- **Works in:** Claude Code, Codex, Cursor, mcp
- **Tags:** `clipping` `podcast` `desktop-app` `mcp` `captions` `douyin` `xiaohongshu` `editing` `self-host`
- **Full card, kept current:** <https://varg.ai/how-to/skills/autoclip.md>

## Install

```bash
# Claude Code
claude mcp add-json autoclip '{"command":"uvx","args":["autoclip-mcp"],"env":{"AUTOCLIP_API_KEY":"${AUTOCLIP_API_KEY}"}}'
```

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/autoclip).
