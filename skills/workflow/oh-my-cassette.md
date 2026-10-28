# Oh My Cassette

MCP bridge to the Cassette editing agent: import footage and music, brief a montage, revise and export.

- **Type:** Workflows · Edit Agents
- **Status:** live
- **Publisher:** Cassette
- **License:** MIT
- **Source:** <https://github.com/Cassette-Editor/oh-my-cassette>
- **Works in:** Claude Code, Codex, mcp
- **Tags:** `montage` `music` `mcp` `hosted` `edit-agents`
- **Full card, kept current:** <https://varg.ai/how-to/skills/oh-my-cassette.md>

## Install

```bash
# Claude Code
claude plugin marketplace add Cassette-Editor/oh-my-cassette && claude plugin install oh-my-cassette@cassette-editor

# mcp
uvx oh-my-cassette==0.6.0 login
```

## Example

Watch: <https://s3.varg.ai/how-to/previews/5d0490ec4868/oh-my-cassette.mp4>

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/oh-my-cassette).
