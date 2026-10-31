# How to bring old photos to life with AI

Restore old family photos, add color if the family wants it, then a gentle motion per photo (a smile, a turn of the head), cut to music for a birthday, an anniversary or a memorial.

**Full tutorial with the options to show the person, numbered steps and prices:** <https://varg.ai/how-to/bring-old-photos-to-life.md>

## Best skills for this

1. **[Turn photos into an AI invitation, holiday greeting or tribute video](../skills/guide/varg-occasion-video.md)** (`varg-occasion-video`, varg, live) — Invitations and save-the-dates that print the names right, Christmas, Diwali and Eid greetings, old photos brought to life and calm tributes; tested on varg.
   - Claude Code: `claude plugin marketplace add vargHQ/skills && claude plugin install varg@varg`
   - Example: <https://s3.varg.ai/files/72c55813-c0fa-4cf2-9f64-ec4f7ed0e7ae/file_e1ac8b0f8d63.mp4>
2. **[varg AI](../skills/model/varg-ai.md)** (`varg-ai`, varg, live) — The official varg skill: videos, images, speech and music through one API key, rendered in the cloud or locally.
   - Claude Code: `claude plugin marketplace add vargHQ/skills && claude plugin install varg@varg`
   - Example: <https://s3.varg.ai/how-to/previews/7df061df8dcb/varg-ai.mp4>
3. **[HyperFrames](../skills/guide/hyperframes.md)** (`hyperframes`, HeyGen, live) — Turn HTML, CSS and seekable animation into deterministic MP4s: launch films, explainers, captions, title cards.
   - Claude Code: `claude plugin marketplace add heygen-com/hyperframes
claude plugin install hyperframes@hyperframes`
   - Example: <https://s3.varg.ai/how-to/previews/400daa5dc577/hyperframes.mp4>
4. **[Eachlabs Photo Restoration](../skills/model/eachlabs-photo-restoration.md)** (`eachlabs-photo-restoration`, eachlabs, live) — Repair scratches, tears and fading, restore faces and colorize black-and-white family photos before you animate them.
   - Claude Code: `npx skills add eachlabs/skills --skill photo-restoration -a claude-code -y`
5. **[FLUX 3 Archival Formats](../skills/style/flux-3-archival-formats.md)** (`flux-3-archival-formats`, Black Forest Labs, live) — Give FLUX 3 video a period look by naming the recording format and its artifacts, not a mood.
   - Claude Code: `/plugin marketplace add black-forest-labs/skills
/plugin install flux-3-video@black-forest-labs`
   - Example: <https://s3.varg.ai/how-to/previews/0f57a7e83417/flux-3-archival-formats.mp4>

## Search it with the person's own words

```bash
curl -s "https://varg.ai/how-to/api/search?q=animate%20old%20photos"
```

Also searched as: *animate old photos* · *bring old photos to life* · *old photo to video ai* · *how to animate old photos* · *restore and animate old photos* · *animate old photos free* · *colorize and animate old photos* · *animate old family photos*

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Every page here is a short mirror; the page on varg.ai/how-to is the one agents should read.
