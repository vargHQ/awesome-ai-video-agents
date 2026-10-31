# Motion energy check by Scenario

Measure if a video parks: % still frames, longest hold, motion, cuts per 10 s, plus 4K playback and loudness gates.

- **Type:** Guides · Tooling
- **Status:** live
- **Publisher:** Scenario
- **License:** Scenario: free download, no license file in the ZIP; fonts SIL OFL
- **Source:** <https://www.scenario.com/explorations/kinetic-film/>
- **Works in:** Claude Code, Codex, Cursor
- **Tags:** `qa` `pacing` `motion-analysis` `still-frames` `holds` `cuts-per-second` `frame-check` `4k` `h264-level` `loudness` `reference-analysis` `scenario`
- **Full card, kept current:** <https://varg.ai/how-to/skills/scenario-motion-energy-check.md>

## Install

```bash
# Claude Code
curl -fsSL -o /tmp/scenario-kinetic-film.zip "https://iieqkinwjorxrzjp.public.blob.vercel-storage.com/explorations/2217ab5dbd452185a5c3c1509994da46b1ac20d2ebeaa888536244372ce73ebf/scenario-kinetic-film-skill.zip?download=1" && unzip -oq /tmp/scenario-kinetic-film.zip -d ~/.claude/skills && claude mcp add --transport http scenario https://mcp.scenario.com/mcp

# Codex
curl -fsSL -o /tmp/scenario-kinetic-film.zip "https://iieqkinwjorxrzjp.public.blob.vercel-storage.com/explorations/2217ab5dbd452185a5c3c1509994da46b1ac20d2ebeaa888536244372ce73ebf/scenario-kinetic-film-skill.zip?download=1" && unzip -oq /tmp/scenario-kinetic-film.zip -d ~/.codex/skills && codex mcp add scenario --url https://mcp.scenario.com/mcp && codex mcp login scenario

# mcp
https://mcp.scenario.com/mcp
```

## Example

Watch: <https://s3.varg.ai/files/4325c578-378d-4c43-ae53-3cc3218df1ea/file_798ec5644f2c.mp4>

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/scenario-motion-energy-check).
