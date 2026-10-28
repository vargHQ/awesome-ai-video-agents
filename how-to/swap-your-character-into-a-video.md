# How to swap your character into a video with AI

Your character (or person) performs the exact motion of a trending video: dance, gesture, walk, ad performance — motion transfer.

**Full tutorial with the options to show the person, numbered steps and prices:** <https://varg.ai/how-to/swap-your-character-into-a-video.md>

## Best skills for this

1. **[varg AI](../skills/model/varg-ai.md)** (`varg-ai`, varg, live) — The official varg skill: videos, images, speech and music through one API key, rendered in the cloud or locally.
   - Claude Code: `claude plugin marketplace add vargHQ/skills && claude plugin install varg@varg`
   - Example: <https://s3.varg.ai/how-to/previews/7df061df8dcb/varg-ai.mp4>
2. **[Runway Studio Skills](../skills/model/runway-studio-skills.md)** (`runway-studio-skills`, Runway, live) — Run Runway's API from Python scripts: text, image and video-to-video, character performance, images, TTS.
   - Claude Code: `npx skills add runwayml/runway-studio-skills -a claude-code`
   - Example: <https://s3.varg.ai/how-to/previews/8996f9887878/runway-studio-skills.mp4>
3. **[Local-first video downloader: private, no subscription](../skills/model/media-download.md)** (`media-download`, varg, live) — Save any video by link (X, YouTube, Instagram, TikTok, 1800+ sites) or Pinterest images as references, locally, no key.
   - Claude Code: `claude plugin marketplace add vargHQ/skills && claude plugin install varg@varg`
   - Example: <https://s3.varg.ai/how-to/previews/547c697e5104/media-download.mp4>
4. **[Consistent Characters](../skills/workflow/varg-consistent-characters.md)** (`varg-consistent-characters`, varg, beta) — Multi-scene ads where the same actors, outfits and location hold in every cut: cards, composites, Kling v3 clips.
   - Claude Code: `claude plugin marketplace add vargHQ/skills && claude plugin install varg@varg`
   - Example: <https://s3.varg.ai/how-to/previews/fd12064dae3c/varg-consistent-characters.mp4>
5. **[Seedance 2.0 Prompt Guide](../skills/prompt/seedance-2-prompt-guide.md)** (`seedance-2-prompt-guide`, Dex Hünter, live) — Prompt guide for Seedance 2.0 multimodal video: the @ reference system, camera language and ready templates.
   - Claude Code: `npx skills add dexhunter/seedance2-skill`

## Search it with the person's own words

```bash
curl -s "https://varg.ai/how-to/api/search?q=motion%20transfer"
```

Also searched as: *motion transfer* · *motion control* · *character swap* · *make my character do this dance* · *replace person in video* · *ai influencer dance* · *kling motion control* · *copy the motion from this video* · *свап персонажа* · *перенос движения* · *мой персонаж танцует как в видео* · *заменить человека в видео*

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Every page here is a short mirror; the page on varg.ai/how-to is the one agents should read.
