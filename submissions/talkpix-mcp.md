---
slug: talkpix-mcp
name: TalkPix MCP (official)
summary: Turns a portrait and script into a lip-synced talking-photo video or a product photo and brief into a short presenter-led ad, with a credit quote before rendering.
description: >
  TalkPix is a hosted MCP connector that renders talking-photo videos and presenter-led product ads.
  For a talking photo, give the assistant a portrait you have permission to animate and a short script.
  Choose 720p or 1080p, review the credit quote, and confirm before the assistant starts a render.
  The finished MP4 is available from the generation result. You can set a per-video and a daily credit budget in TalkPix.
type: skill
shelf: workflow
category: ads
tags: [mcp, talking-avatar, lip-sync, image-to-video, product-ads]
publisher: TalkPix AI
source:
  url: https://github.com/TalkPix-AI/talkpix-mcp
  license: proprietary
install:
  claude-code: claude mcp add --transport http talkpix https://www.talkpix.ai/api/mcp
  codex: codex mcp add talkpix --url https://www.talkpix.ai/api/mcp
agents: [claude-code, codex]
requires:
  - TalkPix account with OAuth 2.1 sign-in and prepaid TalkPix credits for renders
  - Permission to use the portrait or product photo
cost: "Pay as you go with 50 credits for $5 USD at entry. A 10-second talking photo costs 10 credits at 720p or 20 credits at 1080p. Review the quote before confirming."
useWhen:
  - Turn a portrait and short script into a lip-synced talking clip.
  - Make a presenter-led ad from a product photo and brief.
notFor:
  - Timeline editing or publishing a finished ad to a social platform.
example:
  url: https://www.talkpix.ai/assets/assistant-demos/chatgpt-talking-photo.mp4
  credit: TalkPix AI
  note: A talking photo rendered from a portrait and script in ChatGPT at 720p for 10 credits.
---

Disclosure. I represent TalkPix AI. This card covers the official hosted Streamable HTTP MCP connector, following the catalog's Hedra MCP format. The source repository contains the endpoint documentation and registry manifest. It ships no local package or `SKILL.md`. The built-in MCP client connects directly to the hosted endpoint. Sign in to TalkPix and approve access when prompted.

The [official MCP manifest](https://registry.modelcontextprotocol.io/v0.1/servers?search=io.github.talkpixai%2Ftalkpix) lists the connector. The [ChatGPT setup and demo](https://www.talkpix.ai/chatgpt), [Claude setup](https://www.talkpix.ai/claude) and [credit packs](https://www.talkpix.ai/pricing) provide setup, example and pricing details.
