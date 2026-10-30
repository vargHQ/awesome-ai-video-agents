# Motion Creative Analytics MCP

Motion's read-only MCP: top ads by ROAS/CPA/CTR, creative transcripts, demographics, AI tags and competitor Inspo.

- **Type:** Models & tools · Ads
- **Status:** live
- **Publisher:** Motion
- **License:** proprietary
- **Source:** <https://help.motionapp.com/en/articles/14315735-motion-mcp>
- **Works in:** Claude Code, mcp, claude-ai
- **Tags:** `creative-analytics` `meta-ads` `mcp` `ad-library` `motion`
- **Full card, kept current:** <https://varg.ai/how-to/skills/motion-creative-analytics-mcp.md>

## Install

```bash
# Claude Code
claude mcp add --transport http motion https://projects.motionapp.com/mcp

# claude-ai
Settings → Connectors → Add custom connector → https://projects.motionapp.com/mcp

# mcp
https://projects.motionapp.com/mcp
```

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/motion-creative-analytics-mcp).
