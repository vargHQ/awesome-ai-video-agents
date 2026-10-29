# Opus 5.5 Motion Studio Harness

Eight .md files that turn Claude Code + Remotion into a launch-film studio: brief, style, storyboard, motion, sound, render.

- **Type:** Guides · Launch
- **Status:** live
- **Publisher:** beamnxw
- **License:** MIT
- **Source:** <https://github.com/beamnxw/my_works/blob/main/opus55-motion-studio-harness.zip>
- **Works in:** Claude Code
- **Tags:** `remotion` `claude-code` `launch-film` `product-video` `storyboard` `motion-design` `harness`
- **Full card, kept current:** <https://varg.ai/how-to/skills/opus-5-5-motion-studio-harness.md>

## Install

```bash
# Claude Code
npx create-video --yes --blank motion-studio && cd motion-studio && npx remotion skills add && curl -sL -o harness.zip https://github.com/beamnxw/my_works/raw/main/opus55-motion-studio-harness.zip && unzip -n harness.zip && claude --model claude-opus-5-5
```

## Example

Watch: <https://s3.varg.ai/files/60c50c05-1e93-46b9-ae75-47be786b4ff0/file_8ff2737684d5.mp4>

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/opus-5-5-motion-studio-harness).
