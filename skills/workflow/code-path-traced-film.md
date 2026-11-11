# Turn a story into a path-traced film where the renderer is code too

A story becomes a short film from a path tracer the agent writes itself: SDF characters, analytic grass, a numpy score, no assets.

- **Type:** Workflows · 3d Scenes
- **Status:** live
- **Publisher:** varg
- **License:** MIT
- **Source:** <https://github.com/vargHQ/skills/tree/main/code-path-traced-film>
- **Works in:** Claude Code, Codex, Cursor, Gemini CLI
- **Tags:** `path-tracer` `webgl` `glsl` `sdf` `code-to-video` `fable-5-2` `3d` `short-film`
- **Full card, kept current:** <https://varg.ai/how-to/skills/code-path-traced-film.md>

## Install

```bash
# Claude Code
claude plugin marketplace add vargHQ/skills && claude plugin install varg@varg

# Codex
npx skills add vargHQ/skills --skill code-path-traced-film -a codex -y

# Cursor
npx skills add vargHQ/skills --skill code-path-traced-film -a cursor -y

# Gemini CLI
npx skills add vargHQ/skills --skill code-path-traced-film -a gemini-cli -y
```

## Example

Watch: <https://s3.varg.ai/files/194b94d0-58ff-4e8b-91de-4f1959d04013/file_a23b3faa8632.mp4>

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/code-path-traced-film).
