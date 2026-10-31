# Turn photos into an AI invitation, holiday greeting or tribute video

Invitations and save-the-dates that print the names right, Christmas, Diwali and Eid greetings, old photos brought to life and calm tributes; tested on varg.

- **Type:** Guides · Greetings
- **Status:** live
- **Publisher:** varg
- **License:** MIT
- **Source:** <https://github.com/vargHQ/skills/tree/main/varg-occasion-video>
- **Works in:** Claude Code, Codex, Cursor, Gemini CLI, OpenClaw
- **Tags:** `invitation` `save-the-date` `wedding` `christmas` `diwali` `old-photos` `memorial` `greetings` `seedance` `official`
- **Full card, kept current:** <https://varg.ai/how-to/skills/varg-occasion-video.md>

## Install

```bash
# Claude Code
claude plugin marketplace add vargHQ/skills && claude plugin install varg@varg

# Codex
npx skills add vargHQ/skills --skill varg-occasion-video -a codex -y

# Cursor
npx skills add vargHQ/skills --skill varg-occasion-video -a cursor -y

# OpenClaw
npx clawhub@latest install varg-occasion-video

# Gemini CLI
npx skills add vargHQ/skills --skill varg-occasion-video -a gemini-cli -y
```

## Example

Watch: <https://s3.varg.ai/files/72c55813-c0fa-4cf2-9f64-ec4f7ed0e7ae/file_e1ac8b0f8d63.mp4>

## Step-by-step tutorials that use it

- [How to make a wedding or birthday invitation video with AI](../../how-to/make-an-invitation-video.md): An invitation or save-the-date that opens (a pop-up card, an envelope, a 3D venue) onto the names, date and place, printed without a wrong letter, for WhatsApp.
- [How to make a Christmas or holiday greeting video with AI](../../how-to/make-a-holiday-greeting-video.md): A greeting the family forwards: an animated illustrated card, a snow globe, a lamp-lit Diwali or Lunar New Year story, or the family's photo as a cozy holiday still, with the greeting set as real type.
- [How to bring old photos to life with AI](../../how-to/bring-old-photos-to-life.md): Restore old family photos, add color if the family wants it, then a gentle motion per photo (a smile, a turn of the head), cut to music for a birthday, an anniversary or a memorial.
- [How to make a memorial or tribute video with AI](../../how-to/make-a-memorial-tribute-video.md): A calm tribute for a funeral, a celebration of life or a retirement: restored photos with gentle motion, words from the family or friends, and music, made with the family's agreement.

## Run it on varg

Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the `varg-ai` skill (`npx skills add vargHQ/skills --skill varg-ai`) or the MCP server `https://mcp.varg.ai/mcp`. Quote the cost first with `estimate_cost`. 1 credit = $0.01, free plan, no card.

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Found a problem with this card? [Open an issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new/choose) or fix it at the source and [tell varg how to](https://varg.ai/how-to/skills/varg-occasion-video).
