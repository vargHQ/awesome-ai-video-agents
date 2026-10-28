# How to make a faceless YouTube video with AI

A narrated short or long video with no presenter: script, voiceover, visuals, captions, music.

**Full tutorial with the options to show the person, numbered steps and prices:** <https://varg.ai/how-to/make-a-faceless-youtube-video.md>

## Best skills for this

1. **[Krea Faceless Video](../skills/workflow/krea-faceless-video.md)** (`krea-faceless-video`, Krea, live) — Make narrated faceless explainers, documentaries and kids' stories as finished multi-scene films on Krea.
   - Claude Code: `/plugin marketplace add krea-ai/skills
/plugin install krea@krea`
   - Example: <https://s3.varg.ai/how-to/previews/531b427b9cdd/krea-faceless-video.mp4>
2. **[Plain-Sight Explainer](../skills/workflow/hyperframes-vox-explainer.md)** (`hyperframes-vox-explainer`, HeyGen, live) — 60–90 s collage explainers about everyday things, or mined from your documents and links, with numeric seam checks.
   - Claude Code: `npx skills add heygen-com/hyperframes-community-skills --skill vox-explainer -a claude-code`
   - Example: <https://s3.varg.ai/how-to/previews/ba6b4376e811/hyperframes-vox-explainer.mp4>
3. **[Higgsfield Video Explainer](../skills/workflow/higgsfield-video-explainer.md)** (`higgsfield-video-explainer`, Higgsfield, live) — Turn a topic or document into a narrated, stylized explainer assembled from 10-second voiced blocks.
   - Claude Code: `/plugin marketplace add higgsfield-ai/skills
/plugin install higgsfield@higgsfield`
   - Example: <https://s3.varg.ai/how-to/previews/34cfb11019a9/higgsfield-video-explainer.mp4>
4. **[Halftone Collage B-roll](../skills/style/gbro-collage-broll.md)** (`gbro-collage-broll`, pyang5166, beta) — Editorial halftone paper-collage B-roll from one line of script, with three approval gates before any video spend.
   - Codex: `git clone https://github.com/pyang5166/gbro-collage-broll.git ~/.agents/skills/gbro-collage-broll`
   - Example: <https://s3.varg.ai/how-to/previews/6788c34c9695/gbro-collage-broll.mp4>
5. **[Explainroo](../skills/workflow/explainroo.md)** (`explainroo`, Vincent Schmalbach, live) — Narrated explainer MP4s with a local voice (Kokoro), word timing (Whisper) and a canvas renderer; no API key needed.
   - Claude Code: `git clone https://github.com/vincentsch/explainroo.git && cd explainroo && npm install`
   - Example: <https://s3.varg.ai/how-to/previews/b0a4864ee2f0/explainroo.webp>
6. **[varg AI](../skills/model/varg-ai.md)** (`varg-ai`, varg, live) — The official varg skill: videos, images, speech and music through one API key, rendered in the cloud or locally.
   - Claude Code: `claude plugin marketplace add vargHQ/skills && claude plugin install varg@varg`
   - Example: <https://s3.varg.ai/how-to/previews/7df061df8dcb/varg-ai.mp4>
7. **[YouTube MCP](../skills/model/youtube-mcp.md)** (`youtube-mcp`, Zubeid Hendricks, live) — YouTube Data API over MCP: search, video and channel stats, transcripts.
   - mcp: `npx -y @smithery/cli install @ZubeidHendricks/youtube --client claude`

## Search it with the person's own words

```bash
curl -s "https://varg.ai/how-to/api/search?q=faceless%20channel"
```

Also searched as: *faceless channel* · *faceless video* · *faceless youtube* · *youtube automation* · *ai youtube channel* · *history shorts* · *reddit stories video* · *narrated video* · *кликбейтный канал без лица* · *канал без лица* · *ютуб автоматизация* · *озвучка и картинки видео* · *шортсы с озвучкой*

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Every page here is a short mirror; the page on varg.ai/how-to is the one agents should read.
