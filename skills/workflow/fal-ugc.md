# fal UGC

Script and generate UGC-style creator ads: talking heads, demos, testimonials, unboxings and reactions.

- **Type:** Workflows · Ads
- **Status:** live
- **Publisher:** fal
- **License:** MIT
- **Source:** <https://github.com/fal-ai-community/skills/tree/main/skills/ugc>
- **Works in:** Claude Code, Codex, Cursor, Gemini CLI
- **Tags:** `ugc` `talking-head` `testimonial` `vertical-video` `fal`
- **Full card, kept current:** <https://varg.ai/how-to/skills/fal-ugc.md>

## Install

```bash
# Claude Code
npx skills add fal-ai-community/skills --skill ugc -a claude-code

# Codex
npx skills add fal-ai-community/skills --skill ugc -a codex

# Cursor
npx skills add fal-ai-community/skills --skill ugc -a cursor

# Gemini CLI
npx skills add fal-ai-community/skills --skill ugc -a gemini-cli
```

## Example

Watch: <https://s3.varg.ai/how-to/previews/414e4a210c1c/fal-ugc.mp4>

## Step-by-step tutorials that use it

- [How to make a UGC ad video with AI](../../how-to/make-a-ugc-ad-video.md): A creator-style ad: a person talks to camera about your product, with b-roll, captions and an end card.
- [How to turn a product photo into a video with AI](../../how-to/turn-a-product-photo-into-a-video.md): A product shot turned into a short promo: orbit, push-in, exploded view or bullet time, with music.
- [How to make an app demo video with AI](../../how-to/make-an-app-demo-video.md): A polished demo of your app: device mockups, real screens, captions, music — for the App Store, ads or a landing page.

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/fal-ugc).
