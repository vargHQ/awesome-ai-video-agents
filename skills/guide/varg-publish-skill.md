# Turn your agent skill into a varg how to listing

Publish your agent skill to varg how to in the one card format: checked, shown to you, sent for review.

- **Type:** Guides · Tooling
- **Status:** live
- **Publisher:** varg
- **License:** MIT
- **Source:** <https://github.com/vargHQ/skills/tree/main/varg-publish-skill>
- **Works in:** Claude Code, Codex, Cursor, OpenClaw, claude-ai, chatgpt, mcp
- **Tags:** `publish` `listing` `agent skills` `skill.md` `mcp` `catalog card` `free` `official`
- **Full card, kept current:** <https://varg.ai/how-to/skills/varg-publish-skill.md>

## Install

```bash
# Claude Code
claude plugin marketplace add vargHQ/skills && claude plugin install varg@varg

# Codex
npx skills add vargHQ/skills --skill varg-publish-skill -a codex -y

# Cursor
npx skills add vargHQ/skills --skill varg-publish-skill -a cursor -y
```

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/varg-publish-skill).
