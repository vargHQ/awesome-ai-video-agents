# Turn an AI video ad into a TikTok Shop and Meta compliance report

Checks an AI ad against TikTok Shop, Meta, YouTube, FTC, New York and EU AI Act rules: pass / fix / block per claim with sources.

- **Type:** Guides · Ads
- **Status:** live
- **Publisher:** varg
- **License:** MIT
- **Source:** <https://github.com/vargHQ/skills/tree/main/ai-ad-compliance-check>
- **Works in:** Claude Code, Codex, Cursor, Gemini CLI, OpenClaw
- **Tags:** `compliance` `tiktok-shop` `meta-ads` `ftc` `ai-label` `eu-ai-act` `c2pa` `ugc` `official`
- **Full card, kept current:** <https://varg.ai/how-to/skills/tiktok-shop-ad-compliance-check.md>

## Install

```bash
# Claude Code
claude plugin marketplace add vargHQ/skills && claude plugin install varg@varg

# Codex
npx skills add vargHQ/skills --skill ai-ad-compliance-check -a codex -y

# Cursor
npx skills add vargHQ/skills --skill ai-ad-compliance-check -a cursor -y

# OpenClaw
npx clawhub@latest install ai-ad-compliance-check

# Gemini CLI
npx skills add vargHQ/skills --skill ai-ad-compliance-check -a gemini-cli -y
```

## Example

Watch: <https://s3.varg.ai/files/194b94d0-58ff-4e8b-91de-4f1959d04013/file_d45406f8d0db.mp4>

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/tiktok-shop-ad-compliance-check).
