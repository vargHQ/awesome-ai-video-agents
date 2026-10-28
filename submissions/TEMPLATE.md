---
# Copy this file to submissions/<slug>.md. Keep the keys; delete the comments if you like.
slug: my-video-skill                # kebab-case, unique, ≤ 64 chars; names the task, not the container
name: Turn a podcast into short video clips
summary: Finds the best moments in a long video, cuts them, reframes to 9:16 and burns word-timed captions.   # ≤ 200 chars, input → output
description: >
  Longer description in third person: what it makes, the pipeline (transcribe → pick moments → crop → captions → render),
  the specs (9:16, 1080×1920, MP4, SRT), and what it is NOT for (name the neighbouring skill).
type: skill                         # skill | ref-pack
shelf: workflow                     # workflow | prompt | effect | style | guide | model
category: shorts                    # one of the categories in skills/README.md
tags: [podcast, shorts, captions, ffmpeg, whisper]
publisher: Your name or company
source:
  url: https://github.com/you/your-skill
  license: MIT
install:
  claude-code: npx skills add you/your-skill --skill my-video-skill -a claude-code
  codex: npx skills add you/your-skill --skill my-video-skill -a codex
  cursor: npx skills add you/your-skill --skill my-video-skill -a cursor
agents: [claude-code, codex, cursor]
requires: ["ffmpeg", "a varg account or OPENAI_API_KEY for Whisper"]
cost: "About 5–40 credits per clip on varg; FFmpeg steps are free"
useWhen:
  - A long talk, interview or podcast must become several vertical clips with captions
notFor:
  - Making video from a text brief (use a text-to-video workflow)
example:
  url: https://s3.varg.ai/…/clip.mp4        # a real output you have the right to show
  credit: Your name
  note: What the clip shows, 1 line
---

Anything below the frontmatter is a note to the reviewer: how you tested it, what agents you ran it in, anything the card should say.
