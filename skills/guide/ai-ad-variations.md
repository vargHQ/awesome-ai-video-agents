# Turn one winning video ad into 20 AI ad variations

Scales a winning video ad into 20 Andromeda-safe variants: new concepts plus single-variable hook swaps, with a tested FFmpeg script and a test plan.

- **Type:** Guides · Ads
- **Status:** live
- **Publisher:** varg
- **License:** MIT
- **Source:** <https://github.com/vargHQ/skills/tree/main/varg-ad-variants>
- **Works in:** Claude Code, Codex, Cursor, Gemini CLI, OpenClaw
- **Tags:** `ad-variants` `hooks` `meta-ads` `andromeda` `ffmpeg` `creative-testing` `elevenlabs` `official`
- **Full card, kept current:** <https://varg.ai/how-to/skills/ai-ad-variations.md>

## Install

```bash
# Claude Code
claude plugin marketplace add vargHQ/skills && claude plugin install varg@varg

# Codex
npx skills add vargHQ/skills --skill varg-ad-variants -a codex -y

# Cursor
npx skills add vargHQ/skills --skill varg-ad-variants -a cursor -y

# OpenClaw
npx clawhub@latest install varg-ad-variants

# Gemini CLI
npx skills add vargHQ/skills --skill varg-ad-variants -a gemini-cli -y
```

## Example

Watch: <https://s3.varg.ai/files/194b94d0-58ff-4e8b-91de-4f1959d04013/file_565f31d99f3a.mp4>

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/ai-ad-variations).
