# Gemini Omni Flash

Generate and edit video with Gemini Omni 1.1 Flash: text-to-video, first/last frames, extensions, edits.

- **Type:** Models & tools · Cinematic
- **Status:** live
- **Publisher:** Google Gemini
- **License:** Apache-2.0
- **Source:** <https://github.com/google-gemini/gemini-skills/tree/main/skills/gemini-omni-flash-api>
- **Works in:** Claude Code, Codex, Cursor, Gemini CLI
- **Tags:** `video-editing` `text-to-video` `image-to-video` `video-extension`
- **Full card, kept current:** <https://varg.ai/how-to/skills/gemini-omni-flash-api.md>

## Install

```bash
# Claude Code
/plugin marketplace add google-gemini/gemini-skills
/plugin install gemini-skills@gemini-skills

# Codex
codex plugin marketplace add https://github.com/google-gemini/gemini-skills
codex plugin add gemini-skills@gemini-skills

# Cursor
npx skills add google-gemini/gemini-skills --skill gemini-omni-flash-api -a cursor

# Gemini CLI
npx skills add google-gemini/gemini-skills --skill gemini-omni-flash-api -a gemini-cli
```

## Example

Watch: <https://s3.varg.ai/how-to/previews/97e0e1533233/gemini-omni-flash-api.mp4>

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/gemini-omni-flash-api).
