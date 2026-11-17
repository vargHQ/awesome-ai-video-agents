---
slug: edit-video-with-valmera
name: Edit uploaded footage into a reviewed MP4 with Valmera
summary: Edits uploaded footage through authenticated MCP, reviews a versioned preview, and exports the approved MP4 with cuts, captions, framing and sound shaped to the brief.
description: >
  Valmera's official editing skill guides an assistant from an uploaded recording and creative brief
  to a reviewed MP4. It discovers the current editing tools, reads source evidence, applies focused
  changes, checks a representative preview and follows the final export job for the approved version.
  The instructions distinguish source time from output time and explain scope, cost expectations
  and unfinished jobs. The skill is MIT-licensed Markdown; the editor is a commercial hosted service.
type: skill
shelf: workflow
category: editing
tags: [video-editing, mcp, uploaded-footage, captions, reframing, mp4]
publisher: Valmera
source:
  url: https://github.com/ABO3SKRALMASAOODI/valmera-mcp/tree/v1.0.1/skills/edit-video-with-valmera
  license: MIT
install:
  claude-code: npx skills@1.7.6 add ABO3SKRALMASAOODI/valmera-mcp@61812b0a066b102f58d0266931799a1269583d45 --skill edit-video-with-valmera -a claude-code
  codex: npx skills@1.7.6 add ABO3SKRALMASAOODI/valmera-mcp@61812b0a066b102f58d0266931799a1269583d45 --skill edit-video-with-valmera -a codex
  cursor: npx skills@1.7.6 add ABO3SKRALMASAOODI/valmera-mcp@61812b0a066b102f58d0266931799a1269583d45 --skill edit-video-with-valmera -a cursor
agents: [claude-code, codex, cursor]
requires:
  - Node.js 22.20 or later for the pinned Skills CLI
  - A client connected to https://valmera.io/mcp/server and authenticated to Valmera
  - An eligible paid Valmera editing plan and approved source footage
cost: >
  The skill is free. Account creation and uploads are free; editing requires a paid Valmera plan
  (https://valmera.io/subscribe). There is no fixed per-edit quote in this skill. It requires scope
  and cost expectations before billable work, an available account estimate when exposed, or approval
  for a bounded preview when an exact quote is unavailable; it does not buy credits or upgrade plans.
useWhen:
  - An assistant should edit an uploaded recording and return a reviewed final MP4
  - A creator needs source-informed cuts, caption treatment, reframing or sound changes on a chosen project
notFor:
  - Selecting several standalone stories from one long recording; use the companion turn-long-video-into-shorts skill
  - Recording a new website walkthrough; use the companion website-demo-video skill
example:
  url: https://valmera.io/examples/trim-and-reframe/valmera-final.mp4
  credit: Valmera — original motion-graphic demonstration
  note: >
    Actual 720x720 export: three selected source ranges form a 12-second square edit, followed by
    the historical five-second Valmera ending. Silent, 17 seconds total. Demonstrates cuts and crop only.
  sha256: 49dbb2fa51bbf53057cba9cc39a586f7da204ca67a1ce332c4696bfa7e50b847
---

Submitted by an AI assistant on behalf of Valmera, the commercial service and skill publisher.
This is an official vendor submission, not an independent endorsement.

The example's [source, edit decisions and verification notes](https://valmera.io/examples/trim-and-reframe)
identify the footage as an original motion graphic created for this demonstration. Valmera authorizes
linking and displaying this example for the catalog submission; the media remains Valmera's property
and is not included under the skill's MIT license. No media is bundled in this PR.
The example was made before this skill revision, with MCP cuts/crop and a Studio final export;
it is not a claim that the new skill was run end to end for this submission.

The skill instructions and both plugin manifests were released as `v1.0.1`; the install commands pin
that release's full commit and Skills CLI 1.7.6. Installing the Markdown does not connect MCP or perform
paid editing. Connect and authenticate separately using the [setup guide](https://valmera.io/mcp/setup).

Cost-review note: Valmera's public catalog does not currently expose a dedicated estimate-cost tool.
The skill does not invent a quote: it states the uncertainty and requires a bounded-preview approval
when no account estimate is available. Please review this explicit fallback against your cost-gate standard.
