---
slug: character-lock

name: Keep one AI character identical across every shot

summary: Keeps one AI character identical across every shot of an ad: define the character once, carry the locked reference into every shot, and check each shot before delivery.

description: >
  A guide an agent reads before it generates or edits an AI video ad. It sets out the Character Lock method: brief, cast and lock, direct, and edit and QC, with client approval at each stage. The character is defined once, face, outfit and defining features, and that locked reference is carried into every shot, so the same character holds across a 3-minute brand film, a 60-second cut-down or a week of short clips. It covers the five checks before delivery: same face, same outfit, defining features still there, voice match, and honest labelling. It is NOT a shot-spec checker: for camera moves, framing and shot matching, use Shot QA. 
type: skill
shelf: guide
category: ads
tags: [character-consistency, ai-video-ads, character-lock, qc, labelling]
publisher: Hafiz Afaq
source:
  url: https://hafiz-afaq-portfolio.vercel.app/services/character-lock/
  license: All rights reserved
install:
  claude-code: curl -s https://hafiz-afaq-portfolio.vercel.app/services/character-lock/
  codex: curl -s https://hafiz-afaq-portfolio.vercel.app/services/character-lock/
  cursor: curl -s https://hafiz-afaq-portfolio.vercel.app/services/character-lock/
agents: [claude-code, codex, cursor]
requires: ["A video or image generation model that accepts a reference image", "The published guide at the source URL"]
cost: "Free to read. Video generation costs depend on the model used and must be quoted before generating."
useWhen:
  - An AI video ad or brand film must keep one character identical across more than one shot
  - A brief, cut-down or week of clips must hold the same face, outfit and defining features
notFor:
  - Checking camera moves, framing or shot matching against a shot spec (use Shot QA)
  - Generating a single standalone clip with no character to hold
example:
  url: https://youtu.be/Jzj5-1Chb-A
  credit: Hafiz Afaq
  note: ULTRA, a 3-minute AI brand film; one character holds across more than 25 clips
---

Note to the reviewer: tested on ULTRA, a 3-minute AI brand film where one character holds across more than 25 clips, and on Ehsaan, a short film where one actor plays six roles. The guide is a text guide, not installable software; the install commands fetch the published guide text so the agent can read it. The example is my own film, which I have the right to show. The guide text is my own work, all rights reserved; I can relicense it if the reviewers require it. The free Character Lock Kit PDF worksheet is linked from the source page.
