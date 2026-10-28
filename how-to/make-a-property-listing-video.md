# How to make a property listing video with AI

A listing reel from property photos: gentle camera motion through rooms, captions with price and features, music.

**Full tutorial with the options to show the person, numbered steps and prices:** <https://varg.ai/how-to/make-a-property-listing-video.md>

## Best skills for this

1. **[varg AI](../skills/model/varg-ai.md)** (`varg-ai`, varg, live) — The official varg skill: videos, images, speech and music through one API key, rendered in the cloud or locally.
   - Claude Code: `claude plugin marketplace add vargHQ/skills && claude plugin install varg@varg`
   - Example: <https://s3.varg.ai/how-to/previews/7df061df8dcb/varg-ai.mp4>
2. **[HyperFrames](../skills/guide/hyperframes.md)** (`hyperframes`, HeyGen, live) — Turn HTML, CSS and seekable animation into deterministic MP4s: launch films, explainers, captions, title cards.
   - Claude Code: `claude plugin marketplace add heygen-com/hyperframes
claude plugin install hyperframes@hyperframes`
   - Example: <https://s3.varg.ai/how-to/previews/400daa5dc577/hyperframes.mp4>
3. **[Renovation Time-Lapse from One Photo](../skills/wanted/want-renovation-time-lapse.md)** (`want-renovation-time-lapse`, David Roberts, wanted) — One photo of a finished build, reverse-engineered into stages and animated as a construction time-lapse.
   - Not installable on its own yet
   - Example: <https://s3.varg.ai/how-to/previews/d3c5ca72346e/want-renovation-time-lapse.mp4>
4. **[Camera Moves](../skills/prompt/craft-camera-moves.md)** (`craft-camera-moves`, varg, beta) — 47 camera moves with direction, speed and an end frame — dolly in to car mount — in six models' syntax.
   - Not installable on its own yet
   - Example: <https://s3.varg.ai/how-to/previews/b6912b876f91/craft-camera-moves.mp4>

## Search it with the person's own words

```bash
curl -s "https://varg.ai/how-to/api/search?q=real%20estate%20video"
```

Also searched as: *real estate video* · *listing video* · *property tour* · *house tour from photos* · *apartment video* · *видео недвижимости* · *видео квартиры* · *презентация квартиры* · *обзор дома по фото*

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Every page here is a short mirror; the page on varg.ai/how-to is the one agents should read.
