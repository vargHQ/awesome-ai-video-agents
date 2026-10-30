# Magnific Plugin (formerly Freepik)

Official Magnific plugin: video-ad, ad-campaign and product-imagery skills on the hosted Magnific MCP.

- **Type:** Workflows · Ads
- **Status:** live
- **Publisher:** Magnific (formerly Freepik)
- **License:** MIT
- **Source:** <https://github.com/freepik-company/magnific-plugin/tree/main/skills>
- **Works in:** Claude Code, Gemini CLI, Codex, mcp
- **Tags:** `video-ad` `ad-campaign` `product-imagery` `magnific` `freepik`
- **Full card, kept current:** <https://varg.ai/how-to/skills/magnific-plugin.md>

## Install

```bash
# Claude Code
claude plugin marketplace add freepik-company/magnific-plugin && claude plugin install magnific@magnific

# Codex
git clone https://github.com/freepik-company/magnific-plugin && cp -R magnific-plugin/skills/* ~/.codex/skills/

# Gemini CLI
gemini extensions install https://github.com/freepik-company/magnific-plugin

# mcp
https://mcp.magnific.com/mcp
```

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/magnific-plugin).
