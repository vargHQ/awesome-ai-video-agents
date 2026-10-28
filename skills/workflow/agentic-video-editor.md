# Agentic Video Editor (ave)

CLI where Gemini agents pick shots, trim, render with FFmpeg and score the result until a brief is met.

- **Type:** Workflows · Edit Agents
- **Status:** live
- **Publisher:** poseljacob
- **License:** MIT
- **Source:** <https://github.com/poseljacob/agentic-video-editor>
- **Works in:** Claude Code, Codex, Cursor
- **Tags:** `ads` `gemini` `edit-plan` `reviewer-loop` `ffmpeg` `edit-agents` `cli`
- **Full card, kept current:** <https://varg.ai/how-to/skills/agentic-video-editor.md>

## Install

```bash
# Claude Code
git clone https://github.com/poseljacob/agentic-video-editor.git && cd agentic-video-editor && pip install -e ".[dev]"
```

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/agentic-video-editor).
