# Consistent Characters

Multi-scene ads where the same actors, outfits and location hold in every cut: cards, composites, Kling v3 clips.

- **Type:** Workflows · Characters
- **Status:** beta
- **Publisher:** varg
- **License:** MIT
- **Source:** <https://github.com/vargHQ/skills/tree/main/varg-consistent-characters>
- **Works in:** Claude Code, Codex, Cursor, Gemini CLI, OpenClaw
- **Tags:** `ads` `talking-head` `captions` `qa` `native-audio` `kling` `reference-video`
- **Full card, kept current:** <https://varg.ai/how-to/skills/varg-consistent-characters.md>

## Install

```bash
# Claude Code
claude plugin marketplace add vargHQ/skills && claude plugin install varg@varg

# Codex
npx skills add vargHQ/skills --skill varg-consistent-characters -a codex -y

# Cursor
npx skills add vargHQ/skills --skill varg-consistent-characters -a cursor -y

# OpenClaw
npx clawhub@latest install varg-consistent-characters

# Gemini CLI
npx skills add vargHQ/skills --skill varg-consistent-characters -a gemini-cli -y
```

## Example

Watch: <https://s3.varg.ai/how-to/previews/fd12064dae3c/varg-consistent-characters.mp4>

## Step-by-step tutorials that use it

- [How to make a UGC ad video with AI](../../how-to/make-a-ugc-ad-video.md): A creator-style ad: a person talks to camera about your product, with b-roll, captions and an end card.
- [How to make a text message story video with AI](../../how-to/make-a-text-message-story-video.md): A viral iMessage-style chat drama: bubbles appear with typing, sounds and a cliffhanger.
- [How to make an AI music video](../../how-to/make-an-ai-music-video.md): A music video for your song: concept, a consistent lead character, shots cut on the beat, lip-sync on vocals.
- [How to make an AI short film](../../how-to/make-an-ai-short-film.md): A multi-shot story with consistent characters: script, storyboard, previz, shots, edit.
- [How to keep a character consistent in AI video](../../how-to/keep-a-character-consistent-in-ai-video.md): One mascot, trainer or actor that looks identical across many images and clips.
- [How to make an AI influencer video](../../how-to/make-an-ai-influencer-video.md): A recurring AI character with one look and one format, posting as a creator or a brand face.
- [How to make exercise demo video loops with AI](../../how-to/make-exercise-demo-video-loops.md): Looping exercise demos for a fitness app: one trainer, many exercises, clean background.
- [How to swap your character into a video with AI](../../how-to/swap-your-character-into-a-video.md): Your character (or person) performs the exact motion of a trending video: dance, gesture, walk, ad performance — motion transfer.

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/varg-consistent-characters).
