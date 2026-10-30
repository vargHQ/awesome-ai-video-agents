# Agent Video Style Kit

Cut30's title and caption style kit for 9:16 and 16:9: JSON your agent reads plus an HTML preview. Runnable in varg's code2video templates.

- **Type:** Effects · Captions
- **Status:** live
- **Publisher:** Cut30
- **License:** Cut30 terms: use and customize for personal or commercial videos, keep Cut30 attribution on the kit page
- **Source:** <https://cut30.co/guides/agent-video-style-kit>
- **Works in:** Claude Code, Codex, Cursor
- **Tags:** `style-guide` `captions` `titles` `subtitles` `short-form` `safe-zones` `9:16` `16:9` `brand-kit` `agent-context` `code2video` `cut30` `free`
- **Full card, kept current:** <https://varg.ai/how-to/skills/cut30-agent-video-style-kit.md>

## Install

```bash
# Claude Code
git clone --depth 1 https://github.com/vargHQ/code2video-templates ~/code2video-templates && ln -s ~/code2video-templates/agent-video-style-kit ~/.claude/skills/agent-video-style-kit

# setup-prompt
Paste Cut30's setup prompt from https://cut30.co/guides/agent-video-style-kit into your agent (downloads https://cut30.co/agent-video-style-kit/agent-video-style-kit.zip and verifies its SHA-256).
```

## Example

Watch: <https://s3.varg.ai/files/194b94d0-58ff-4e8b-91de-4f1959d04013/file_8eb82edbc04b.mp4>

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/cut30-agent-video-style-kit).
