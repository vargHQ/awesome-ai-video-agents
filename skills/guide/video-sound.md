# Video Sound

Sound for any video: real AI voices picked from candidates, lines with pauses and breaths, effects on the frame, music cut to bars, a mix checked by script.

- **Type:** Guides · Audio
- **Status:** live
- **Publisher:** varg
- **License:** MIT
- **Source:** <https://github.com/vargHQ/skills/tree/main/video-sound>
- **Works in:** Claude Code, Codex, Cursor, Gemini CLI
- **Tags:** `sound-design` `voiceover` `dialogue` `sfx` `music` `mixing` `loudness` `ai-voice`
- **Full card, kept current:** <https://varg.ai/how-to/skills/video-sound.md>

## Install

```bash
# Claude Code
claude plugin marketplace add vargHQ/skills && claude plugin install varg@varg

# Codex
npx skills add vargHQ/skills --skill video-sound -a codex -y

# Cursor
npx skills add vargHQ/skills --skill video-sound -a cursor -y

# Gemini CLI
npx skills add vargHQ/skills --skill video-sound -a gemini-cli -y
```

## Example

Watch: <https://s3.varg.ai/files/194b94d0-58ff-4e8b-91de-4f1959d04013/file_32cbafbd0791.mp4>

## Step-by-step tutorials that use it

- [How to make an app launch video with AI](../../how-to/make-an-app-launch-video.md): A launch video for your app from a real screen recording plus generated shots: about 30 s with a hook, one workflow and a call to action, voiceover and music.

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/video-sound).
