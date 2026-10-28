# HyperFrames CLI

Drive the HyperFrames CLI: scaffold, check, preview, snapshot, edit the timeline, render locally or in the cloud.

- **Type:** Guides · Tooling
- **Status:** live
- **Publisher:** HeyGen
- **License:** Apache-2.0
- **Source:** <https://github.com/heygen-com/hyperframes/tree/main/skills/hyperframes-cli>
- **Works in:** Claude Code, Codex, Cursor, Gemini CLI
- **Tags:** `render` `preview` `lint` `cloud-render` `hyperframes`
- **Full card, kept current:** <https://varg.ai/how-to/skills/hyperframes-cli.md>

## Install

```bash
# Claude Code
claude plugin marketplace add heygen-com/hyperframes
claude plugin install hyperframes@hyperframes

# Codex
npx skills add heygen-com/hyperframes --skill hyperframes-cli -a codex

# Cursor
npx skills add heygen-com/hyperframes --skill hyperframes-cli -a cursor

# Gemini CLI
npx skills add heygen-com/hyperframes --skill hyperframes-cli -a gemini-cli
```

## Example

Watch: <https://s3.varg.ai/how-to/previews/2ce1446e01bd/hyperframes-cli.mp4>

## Step-by-step tutorials that use it

- [How to make personalized videos at scale with AI](../../how-to/make-personalized-videos-at-scale.md): One template, many versions: each lead's name, company and website in the video, optionally in a cloned voice.

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/hyperframes-cli).
