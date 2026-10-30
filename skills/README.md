# 768 AI video skills for Claude Code, Codex, Cursor, Gemini CLI and OpenClaw

Every card has its install command per agent, its source, license and an example. Click a shelf.

| Shelf | Cards | What it holds |
|---|---:|---|
| [Workflows](#workflow) | 115 | End-to-end pipelines: brief in, finished video out. |
| [Prompts](#prompt) | 71 | Prompt packs for video and image models: camera moves, shot sizes, lighting, characters, hooks. |
| [Effects](#effect) | 241 | Transitions, captions, titles, device mockups, shaders and every named edit, with the code that makes it. |
| [Styles](#style) | 18 | Looks, LUTs, fonts and art directions a model or a render can follow. |
| [Guides](#guide) | 144 | Best practices and references agents read before they generate or edit. |
| [Models & tools](#model) | 137 | Model and tool skills: the services that generate, edit, transcribe or render. |
| [Wanted](#wanted) | 42 | Formats people ask for that no skill makes yet. Build one and submit it. |

## Workflows

End-to-end pipelines: brief in, finished video out. On varg how to: <https://varg.ai/how-to/workflows.md>

### 3d Scenes

| Skill | What it does | By | Install |
|---|---|---|---|
| [Procedural 3D Story](workflow/karpathy-3d-story.md) | Turn a myth or book into a seeded, multi-chapter procedural three.js film in one scene.html, audited frame by frame. | chencheng (云谦) | Claude Code |

### Ads

| Skill | What it does | By | Install |
|---|---|---|---|
| [AI Marketing Videos](workflow/inference-sh-ai-marketing-videos.md) | Make product demos, promos, testimonials and launch videos with Veo, Seedance, Wan, FLUX and Kokoro. | inference.sh | Claude Code, Codex, Cursor, Gemini CLI |
| [Arcads Ad Campaign Workspace](workflow/arcads-claude-code-workspace.md) | Arcads API workspace for Claude Code/Cursor: video and image ads, ad clones, captions, Meta upload, swipe file. | Caleb 'Mr. Paid Social' (Kruse Media) | Claude Code, Cursor |
| [Arcads Ads Plugin](workflow/arcads-ads-plugin.md) | Official Arcads plugin: 17 ad skills (AI-actor UGC, hook clones, product swaps, static-to-video, ad spy). | Arcads | Claude Code, mcp |
| [Before & After Ad](workflow/varg-studio-before-after.md) | A routine before and after with no invented results: morning and night shots, voiceover, captions, end card. | varg | — |
| [Business Motion Film](workflow/business-motion-film.md) | Premium short commercials for real businesses: storyboard first, HTML/GSAP motion and an independent-critic loop. | echris6 | Claude Code |
| [Cinematic Ad](workflow/varg-studio-cinematic.md) | Moody, high-polish shots that sell the feeling: wide establishing shot, slow push-in, close-up, end card. | varg | — |
| [ClipForge Product Video Ads](workflow/clipforge-product-video-ads.md) | One product photo to a shoppable short video: selling points, script, locked product shots, voiceover, captions, BGM. | xixihhhh | Claude Code, Codex, Cursor |
| [Creatify Ad Agent](workflow/creatify-ad-agent.md) | Official Creatify plugin: product URL to a finished AI video ad, judged shot by shot, shipped as MP4. | Creatify | Claude Code, Codex |
| [Creative Ad Agent](workflow/creative-ad-agent-static-meta-ads.md) | Multi-agent Meta/Instagram static ad generator on the Claude Agent SDK and a Nano Banana MCP. | DV0x | Claude Code |
| [Ecommerce video ad skills for Claude Code and AI agents](workflow/ecommerce-video-ads.md) | Product videos that sell on TikTok, TikTok Shop, Reels and Meta: angle, hook, format, script, rules, variants. | varg | Claude Code, Codex, Cursor |
| [fal Marketing](workflow/fal-marketing.md) | Produce campaign asset matrices: launch kits, paid-social variants, banners and channel deliverables. | fal | Claude Code, Codex, Cursor, Gemini CLI |
| [fal UGC](workflow/fal-ugc.md) | Script and generate UGC-style creator ads: talking heads, demos, testimonials, unboxings and reactions. | fal | Claude Code, Codex, Cursor, Gemini CLI |
| [FLUX 3 Product Ads](workflow/flux-3-product-ads.md) | Build a finished product ad with FLUX 3: shot design, voiceover sync, deterministic assembly, QC gates. | Black Forest Labs | Claude Code, Codex, Cursor, Gemini CLI |
| [GooseWorks Static Ads](workflow/gooseworks-static-ads.md) | Static image ads from your brand's real facts: concept board before any render, prompts, review, copy and rejected-ad fixes. | GooseWorks | Claude Code, claude-ai, Codex, Cursor, mcp |
| [Hedra MCP (official)](workflow/hedra-mcp.md) | Hedra's hosted MCP: talking-avatar video, images, speech, music and SFX from Claude Code, Codex, Cursor or ChatGPT. | Hedra | Claude Code, Codex, mcp |
| [HeyGen Avatar Video Skills](workflow/heygen-avatar-video-skills.md) | Official HeyGen skills: create your avatar, make presenter videos with the v3 Video Agent, translate with lip-sync. | HeyGen | Claude Code, Codex, Cursor, Gemini CLI |
| [Krea Marketing](workflow/krea-marketing.md) | Make performance marketing creative on Krea: packshots, marketplace cards, UGC and video ads, Meta Ads. | Krea | Claude Code, Codex, Cursor, Gemini CLI |
| [Magnific Plugin (formerly Freepik)](workflow/magnific-plugin.md) | Official Magnific plugin: video-ad, ad-campaign and product-imagery skills on the hosted Magnific MCP. | Magnific (formerly Freepik) | Claude Code, Codex, Gemini CLI, mcp |
| [MakeUGC MCP (official)](workflow/makeugc-mcp.md) | MakeUGC's hosted MCP: AI-actor UGC ads, product-in-hand, ad remakes and video/image models from your agent. | MakeUGC | Claude Code, claude-ai, mcp |
| [Marketing Video Production](workflow/marketingskills-video.md) | Corey Haines' marketing video skill: pick code, a video model or an avatar, then script, prompt and repurpose. | Corey Haines | Claude Code, Codex |
| [Meme Ad](workflow/varg-studio-memes.md) | A familiar meme format with your product as the punchline: setup shot, punchline shot, voiceover, captions. | varg | — |
| [Open-source alternative to Arcads: AI UGC ads](workflow/ai-ugc-ad-video.md) | AI UGC ads with an AI actor holding your real product: face, voice and label locked, labelled. | varg | Claude Code, Codex, Cursor |
| [Pika UGC Ads](workflow/pika-ugc-ads.md) | 15-second jump-cut selfie UGC ad from a product URL: hook, three cuts, outro, spoken dialogue with native lip-sync. | Pika | Claude Code, Codex |
| [ReelClaw UGC Reels](workflow/reelclaw-ugc-reels.md) | App UGC reels from real creator reactions plus your demo: hooks, 7 templates, safe-zone captions, local render. | DansUGC | Claude Code, Codex |
| [Scenario Video Ads & UGC](workflow/scenario-video-ads-ugc.md) | Official Scenario skills: product-shot video ads, phone-shot UGC testimonials and hook/CTA variants via its MCP. | Scenario | Claude Code, Codex, Cursor, Gemini CLI, mcp |
| [Social Overlays: CTAs, reviews and live badges that convert](workflow/social-overlays.md) | CTA pills, follow and subscribe prompts, review cards, LIVE badges and counters in one 9:16 safe box, timed after the payoff, real data only. | varg | Claude Code, Codex, Cursor, OpenClaw, Gemini CLI |
| [Social Proof Ad](workflow/varg-studio-social-proof.md) | A real review from your brand kit, read over the product: quote card, product in hand, voiceover, end card. | varg | — |
| [Take One](workflow/take-one.md) | One-line request to a finished launch video or ad: a 12-role studio (strategist to editor) rendered from code. | Tal Siach | Claude Code |
| [Topview AI Skills + MCP](workflow/topview-ai-skills-mcp.md) | Topview's official skills and MCP: talking avatars, product-avatar shots, voices, TikTok Shop and Amazon research. | Topview AI | Claude Code, Codex, Cursor, mcp |
| [Turn a product into a dropshipping guide reel](workflow/varg-dropship-reel.md) | The faceless "comment GUIDE" reel: product hook, a marker pointing at cost and price on a laptop, a skyline ending. | varg | Claude Code, Codex, Cursor, OpenClaw, Gemini CLI |
| [Turn a product into scroll-stopping video hooks](workflow/product-video-hooks.md) | The first 3 seconds of a product video: frame, line and text that agree, from a 70-line hook bank. | varg | Claude Code, Codex, Cursor |
| [Turn product photos into a viral product hook](workflow/varg-product-hook.md) | Find a hook that already sells, then remake it with your product as phone or security-cam footage on Seedance 2.5. | varg | Claude Code, Codex, Cursor, OpenClaw, Gemini CLI |
| [UGC Ad](workflow/varg-studio-ugc-ads.md) | A creator-style ad shot like a friend's recommendation: 3 shots, voiceover, captions, end card, no presenter. | varg | — |
| [UGC Factory](workflow/ugc-factory.md) | Interview-driven UGC ad factory: consistent AI creator and product (Higgsfield), Seedance 2.0 clips, stitched ad. | Charlie (charlieautomates) | Claude Code |
| [Us vs Them Ad](workflow/varg-studio-us-vs-them.md) | Your product next to the usual alternative: split frame, product hero, voiceover, captions, end card. | varg | — |
| [Vox Director (collage ads)](workflow/vox-director-collage-ads.md) | One topic or product photo to a Vox-style paper-collage explainer or ad with voiceover, music and captions. | Alisa0808 | Claude Code, Codex |

### Animation

| Skill | What it does | By | Install |
|---|---|---|---|
| [Day in My Life](workflow/hyperframes-day-in-my-life.md) | A 60–75 s hand-drawn ink film of your agent's day with you, built from local Claude Code history, scored for strings. | HeyGen | Claude Code |
| [Higgsfield Code-Based Films](workflow/higgsfield-code-based-films.md) | Short animated films drawn entirely by code and rendered by Higgsfield's own WebGPU path tracer on your GPU. | Higgsfield | Claude Code, Codex, Cursor |
| [Motion Formats: VHS, pixel art, lyric and launch videos](workflow/motion-formats.md) | Seven full formats with beat structures and presets: analog-horror trailer, VHS screensaver, pixel runner, wave wordmark, DAW one-shot, launch film, lyric video. | varg | Claude Code, Codex, Cursor, OpenClaw, Gemini CLI |
| [Session Story](workflow/hyperframes-session-story.md) | A 40–70 s watercolor film of a typical session with your agent, told in your real messages, with its own score. | HeyGen | Claude Code, Codex, Cursor, Gemini CLI |
| [Story to Hand-drawn Video](workflow/story-to-handdrawn-video.md) | Chinese stories or ordered images into silent hand-drawn diary-comic animations, with a curated 30-style menu. | gnipbao | Claude Code, Codex |

### Audio

| Skill | What it does | By | Install |
|---|---|---|---|
| [AI Podcast Creation](workflow/inference-sh-ai-podcast-creation.md) | Produce audio podcasts and audiobooks with multi-voice TTS, music beds, intros, outros and ffmpeg. | inference.sh | Claude Code, Codex, Cursor, Gemini CLI |

### Brand Motion

| Skill | What it does | By | Install |
|---|---|---|---|
| [HyperFrames Figma](workflow/hyperframes-figma.md) | Turn a Figma link into video: rendered assets, brand tokens, components and storyboard frames rebuilt as motion. | HeyGen | Claude Code, Codex, Cursor, Gemini CLI |

### Characters

| Skill | What it does | By | Install |
|---|---|---|---|
| [Consistent Characters](workflow/varg-consistent-characters.md) | Multi-scene ads where the same actors, outfits and location hold in every cut: cards, composites, Kling v3 clips. | varg | Claude Code, Codex, Cursor, OpenClaw, Gemini CLI |

### Cinematic

| Skill | What it does | By | Install |
|---|---|---|---|
| [fal Recipes](workflow/fal-recipes.md) | Follow proven multi-step fal pipelines for commercials, product shots, characters, lip-sync and try-on. | fal | Claude Code, Codex, Cursor, Gemini CLI |
| [Previz to Seedance](workflow/varg-previz.md) | Plan multi-shot AI video before paying: story, anchor sheets, a three.js grey-box previz, then a Seedance v2v pack. | varg | Claude Code, Codex, Cursor, OpenClaw, Gemini CLI |

### Edit Agents

| Skill | What it does | By | Install |
|---|---|---|---|
| [Agentic Video Editor (ave)](workflow/agentic-video-editor.md) | CLI where Gemini agents pick shots, trim, render with FFmpeg and score the result until a brief is met. | poseljacob | Claude Code |
| [BaoCut](workflow/baocut.md) | Desktop AI video agent that transcribes, subtitles, translates, dubs, cuts and animates into an editable timeline. | Jim Liu | — |
| [ButterCut](workflow/buttercut.md) | Claude Code builds selects, scenes and rough cuts from your footage library and exports XML for FCP, Premiere, Resolve. | TubeSalt (barefootford) | Claude Code |
| [CartCut](workflow/cartcut.md) | Layer-based video editor built for AI agents, with a Claude Code plugin, skill and MCP server. | Cartesian | Claude Code, mcp |
| [claude-youtube-editor](workflow/claude-youtube-editor.md) | Record a talking head; Claude Code does the cut, Remotion visuals, voice, SFX, thumbnail and YouTube upload. | Hasan Aboul Hasan | Claude Code |
| [Concat](workflow/concat.md) | Free, local-first CapCut replacement with a built-in MCP server and JSON-RPC API so agents can cut video. | jub0t | mcp |
| [Erduo B-roll Loop Engineering](workflow/erduo-broll-loop.md) | SRT-driven B-roll agent: a Director plans shots, Creators build them in HyperFrames or Remotion, a Reviewer checks. | erduo1998-cell | Claude Code |
| [FireRed-OpenStoryline](workflow/firered-openstoryline.md) | Conversational editing agent: finds media, writes the storyline, beat-syncs music and refines the cut by chat. | FireRed Team | Codex, OpenClaw |
| [ghost-editor](workflow/ghost-editor.md) | Talking-head reel editor in your agent: best takes, face-safe word captions, motion graphics, 7 styles. | kurbaitaev | — |
| [Hypit](workflow/hypit.md) | Clone a viral video as a word-anchored workflow: swap face, words and B-roll, then ship many variants. | Hypit | Claude Code |
| [Oh My Cassette](workflow/oh-my-cassette.md) | MCP bridge to the Cassette editing agent: import footage and music, brief a montage, revise and export. | Cassette | Claude Code, mcp |
| [OpenChatCut](workflow/openchatcut.md) | Local-first chat video editor with a multi-track timeline that Codex and Claude Code can edit over MCP. | 0xsline | Claude Code, mcp |
| [OpenMontage](workflow/openmontage.md) | Open-source agentic video studio: 12 pipelines (8 edit your footage), 100+ tools, ~140 skills. Run your agent in it. | Calesthio | Claude Code |
| [OpenMontage Cinematic](workflow/openmontage-cinematic.md) | Mood-led trailers, teasers and brand films, best with supplied footage; can analyze a reference video and fill gaps with | Calesthio | Claude Code |
| [OpenMontage Clip Factory](workflow/openmontage-clip-factory.md) | Extracts a batch of ranked short clips from one long source (webinar, stream, talk, interview) with gates for clip selec | Calesthio | Claude Code |
| [OpenMontage Documentary Montage](workflow/openmontage-documentary-montage.md) | Builds a CLIP-searchable corpus from free archives (Pexels, Archive.org, NASA, Wikimedia, Unsplash) and cuts real footag | Calesthio | Claude Code |
| [OpenMontage Hybrid](workflow/openmontage-hybrid.md) | Combines your source footage with designed or generated support visuals (diagrams, overlays, inserts) with gates for sou | Calesthio | Claude Code |
| [OpenMontage Podcast Repurpose](workflow/openmontage-podcast-repurpose.md) | Turns podcast audio or video into audiogram or caption-led clips, quote cards and an optional full-episode companion vid | Calesthio | Claude Code |
| [OpenMontage Screen Demo](workflow/openmontage-screen-demo.md) | Polishes real screen captures into demos with callouts, zoom crops, subtitles and cleaned audio, or renders a synthetic | Calesthio | Claude Code |
| [OpenMontage Talking Head](workflow/openmontage-talking-head.md) | Takes raw footage of a person speaking, transcribes it, makes edit decisions (fillers, dead air, pacing), adds subtitles | Calesthio | Claude Code |
| [SeeCut](workflow/seecut.md) | Talking-head and AI-avatar fine cut that watches its own render with Gemini and iterates up to three versions. | YeJe-cpu | — |
| [Video Recap Skills](workflow/video-recap-skills.md) | Seven skills that cut one or more videos into a narrated recap: scene detection, ASR, VLM, script, TTS, ffmpeg. | Zenstory | Claude Code |
| [video-use](workflow/video-use.md) | Drop raw takes in a folder, chat with your agent, get final.mp4: transcript-first cuts, grade, subtitles, overlays. | Browser Use | Claude Code, Codex |

### Editing

| Skill | What it does | By | Install |
|---|---|---|---|
| [Chengfeng Videocut](workflow/chengfeng-videocut.md) | Chinese talking-head editing: word-level transcript, five-pass flub sweep, human review in a Studio, subtitles, export. | chengfeng | Codex |
| [Claude Code Video Toolkit](workflow/claude-code-video-toolkit.md) | Open-source video workspace for Claude Code: script, voice, music, visuals and Remotion render on your own GPU account. | Digital Samba | Claude Code |
| [Herk Edit Kit](workflow/herk-edit-kit.md) | Nate Herk's kit to edit talking-head videos, reels and Shorts: silence and flub cuts, storytelling, motion graphics. | Nate Herk | Claude Code, Codex |

### Explainers

| Skill | What it does | By | Install |
|---|---|---|---|
| [Explainroo](workflow/explainroo.md) | Narrated explainer MP4s with a local voice (Kokoro), word timing (Whisper) and a canvas renderer; no API key needed. | Vincent Schmalbach | Claude Code |
| [Higgsfield Video Explainer](workflow/higgsfield-video-explainer.md) | Turn a topic or document into a narrated, stylized explainer assembled from 10-second voiced blocks. | Higgsfield | Claude Code, Codex, Cursor, Gemini CLI |
| [HyperFrames Slideshow](workflow/hyperframes-slideshow.md) | Build a live, navigable deck with fragment reveals, branching hotspots and presenter notes instead of an MP4. | HeyGen | Claude Code, Codex, Cursor, Gemini CLI |
| [Manim Skills (3Blue1Brown Style)](workflow/manim-skill.md) | Plan and code 3Blue1Brown-style math animations: a scene composer plus ManimCE and ManimGL best practices. | Adithya S K | Claude Code |
| [Plain-Sight Explainer](workflow/hyperframes-vox-explainer.md) | 60–90 s collage explainers about everyday things, or mined from your documents and links, with numeric seam checks. | HeyGen | Claude Code, Codex, Cursor, Gemini CLI |

### Image

| Skill | What it does | By | Install |
|---|---|---|---|
| [Baoyu Cover Image](workflow/baoyu-cover-image.md) | Article cover images built from five dimensions (type, palette, rendering, text, mood) in 2.35:1, 16:9 or 1:1. | Jim Liu | Claude Code, Codex |
| [Higgsfield YouTube Thumbnail](workflow/higgsfield-youtube-thumbnail.md) | Design truthful, high-CTR YouTube thumbnails and vertical covers with up to three consistent faces. | Higgsfield | Claude Code, Codex, Cursor, Gemini CLI |
| [Slack GIF Creator](workflow/anthropic-slack-gif-creator.md) | Make animated GIFs that pass Slack's limits: 128×128 emoji or 480×480 message GIFs, validated on export. | Anthropic | Claude Code, Codex, Cursor, Gemini CLI |

### Launch

| Skill | What it does | By | Install |
|---|---|---|---|
| [Guizang Product Video](workflow/guizang-product-video.md) | Software promos and release-notes videos built from your real product components, with original music and SFX. | Guizang | Claude Code, Codex |
| [Onetake](workflow/onetake.md) | Launch films that never cut to the next slide: one continuous camera, measured moves, motion blur, a slideshow oracle. | Patrick | Claude Code, Codex |

### Logos

| Skill | What it does | By | Install |
|---|---|---|---|
| [Higgsfield Brandkit](workflow/higgsfield-brandkit.md) | Build a complete visual identity: palette, SVG logo marks, type, mockups, packaging and an editable brandbook. | Higgsfield | Claude Code, Codex, Cursor, Gemini CLI |

### Lyrics

| Skill | What it does | By | Install |
|---|---|---|---|
| [Bitwize Music (Suno Album Studio)](workflow/bitwize-music.md) | A 53-skill Claude Code plugin for human + AI albums on Suno: lyrics, style prompts, stem mixing, mastering, release. | bitwize-music-studio | Claude Code |

### Music

| Skill | What it does | By | Install |
|---|---|---|---|
| [Motion Graphics Music Video](workflow/motion-graphics-music-video.md) | Animated character music videos from your song and a prompt: storyboard, fal generation, p5 motion graphics, VFX. | Francesco Canessa | Claude Code |
| [Prod by Claude](workflow/hyperframes-prod-by-claude.md) | A square video of a Strudel live-coding track where every code token lights up on the note it plays. | HeyGen | Claude Code, Codex, Cursor, Gemini CLI |
| [Schizo-Edit AI Music Video](workflow/schizo-edit-music-video.md) | A 16 s vertical AI music video cut 3–4 times per beat: generated stills and clips, one effect per shot, the title built letter by letter. | varg | Claude Code |
| [Turn a song into an AI music video](workflow/varg-music-video.md) | Direct an AI music video the way top X creators do: song map, beat-grid storyboard, stills first, Seedance, lip-sync. | varg | Claude Code, Codex, Cursor, OpenClaw, Gemini CLI |

### Native Ui

| Skill | What it does | By | Install |
|---|---|---|---|
| [Gooseworks Video (Apple Notes Ads)](workflow/gooseworks-apple-notes-ads.md) | Video ads in chat from a reference ad or a ready style, including the viral HTML-only Apple Notes typing ad. | Gooseworks | Claude Code, Codex, Cursor |
| [iMessage Video](workflow/varg-imessage-video.md) | Any chat script as an iPhone iMessage screen recording: typing, tapbacks, group chats, dark mode, sounds. Local, free. | varg | Claude Code |

### Product

| Skill | What it does | By | Install |
|---|---|---|---|
| [AI Product Photography](workflow/inference-sh-ai-product-photography.md) | Generate commercial product shots, lifestyle scenes and mockups with FLUX, Imagen 3, Grok and Seedream. | inference.sh | Claude Code, Codex, Cursor, Gemini CLI |
| [ASO App Store Screenshots](workflow/aso-appstore-screenshots.md) | App Store screenshots from your codebase: finds the core benefits, pairs simulator shots, then composes and enhances. | Adam Lyttle | Claude Code |
| [E-commerce Image Studio](workflow/ecom-image2.md) | 39 e-commerce image templates (main images, lifestyle, A+, sizes, GIFs) with one style lock across a campaign set. | buluslan | Claude Code |
| [fal Commercial](workflow/fal-commercial.md) | Plan and run product photography, e-commerce batches, product reveal videos and lifestyle commercials. | fal | Claude Code, Codex, Cursor, Gemini CLI |
| [Higgsfield Marketplace Cards](workflow/higgsfield-marketplace-cards.md) | Produce marketplace listing images: a compliant main image, secondary shots and A+ content modules. | Higgsfield | Claude Code, Codex, Cursor, Gemini CLI |
| [Higgsfield Product Photoshoot](workflow/higgsfield-product-photoshoot.md) | Shoot brand-quality product images in 10 modes: studio, lifestyle, hero banners, ad packs, try-on and more. | Higgsfield | Claude Code, Codex, Cursor, Gemini CLI |
| [Product Ad](workflow/varg-studio-product.md) | The product itself: a 360° spin, in hand and a texture close-up, with a voiceover and an end card. | varg | — |
| [Turn a product link into a TikTok Shop video](workflow/tiktok-shop-video.md) | A TikTok Shop video that sells and stays compliant: Shop styles, script, shot list, the 2026 rules. | varg | Claude Code, Codex, Cursor |
| [Turn a product photo into a product video ad](workflow/product-photo-to-video.md) | Product photos into a video that keeps the real product: storyboard, PRODUCT LOCK, repair, real packshot. | varg | Claude Code, Codex, Cursor |

### Shorts

| Skill | What it does | By | Install |
|---|---|---|---|
| [AI Social Media Content](workflow/inference-sh-ai-social-media-content.md) | Produce reels, shorts, images and thumbnails for TikTok, Instagram, YouTube and X with one toolkit. | inference.sh | Claude Code, Codex, Cursor, Gemini CLI |
| [Krea Faceless Video](workflow/krea-faceless-video.md) | Make narrated faceless explainers, documentaries and kids' stories as finished multi-scene films on Krea. | Krea | Claude Code, Codex, Cursor, Gemini CLI |
| [Video Producer](workflow/video-producer.md) | Topic in, narrated short MP4 out: shot plan, AI stills, per-scene voiceover, Remotion render | a1024708231 | OpenClaw |

### Story

| Skill | What it does | By | Install |
|---|---|---|---|
| [AI Short Drama Studio](workflow/ai-short-drama-studio.md) | Greenlight score, series bible, episode compiler and production pack for serialized AI short dramas and manju. | Hao0321 | Claude Code, Codex |
| [Baidu Wenku AI Picture Book](workflow/ai-picture-book.md) | Turns a story text into a static or animated picture-book video through Baidu Wenku | ide-rea | OpenClaw |
| [dLazy Image Storyboard](workflow/dlazy-image-storyboard.md) | Plan-first storyboard workflow: specs, character sheet and script approved before each panel is rendered | dlazyai | OpenClaw |
| [Shuohao Short-Drama Skills](workflow/shuohao-short-drama.md) | Seven chained skills from novel to AI short drama: characters, outline, art bible, script, staging, storyboard. | Wesley Wang | Claude Code, Codex |

### Talking Head

| Skill | What it does | By | Install |
|---|---|---|---|
| [AI Podcast Video](workflow/inference-sh-ai-podcast.md) | Generate a multi-person talking-head podcast video from scratch: characters, voices, avatars, stitching. | inference.sh | Claude Code, Codex, Cursor, Gemini CLI |
| [Character Keynote](workflow/varg-character-keynote.md) | One render call: a Soul character delivers a keynote-style ad line on a generated stage, voiced by Seedance 2.5. | varg | Claude Code, Codex, Cursor, OpenClaw, Gemini CLI |
| [Lanshu AI Presenter Video](workflow/lanshu-ai-presenter-video.md) | Publish-ready explainers led by an AI presenter from an authorized photo, or in one of twelve presenter-free styles. | Lanshu | Claude Code |
| [Talking Head Ad](workflow/varg-studio-talking-head.md) | A presenter speaks to camera about the product: lip-synced portrait, two b-roll shots, captions, end card. | varg | — |
| [Talking Head Production](workflow/inference-sh-talking-head-production.md) | Produce talking-head videos with AI avatars, lip-sync and voiceover, from portrait specs to final cut. | inference.sh | Claude Code, Codex, Cursor, Gemini CLI |
| [Turn a script into a two-person podcast video](workflow/varg-podcast-video.md) | Two-character podcast or debate clips: one studio set, locked camera angles, MiniMax H3 Max with native audio. | varg | Claude Code, Codex, Cursor, OpenClaw, Gemini CLI |
| [Two-Person Dialogue Ad](workflow/varg-studio-dialogue.md) | Two people talk it through, one of them already a fan: two lip-synced presenters, captions, end card. | varg | — |

### Tooling

| Skill | What it does | By | Install |
|---|---|---|---|
| [AI Content Pipeline](workflow/inference-sh-ai-content-pipeline.md) | Chain image, video, voice and music models into one pipeline: generate, animate, voice over, merge. | inference.sh | Claude Code, Codex, Cursor, Gemini CLI |

## Prompts

Prompt packs for video and image models: camera moves, shot sizes, lighting, characters, hooks. On varg how to: <https://varg.ai/how-to/prompts.md>

### Ads

| Skill | What it does | By | Install |
|---|---|---|---|
| [Ad Hook Styles](prompt/varg-studio-ad-hooks.md) | Studio's 12 ad hook styles with copy templates, brand-kit gates and the Hook Lab recipe for new 3 s openers. | varg | — |
| [Did We Have A Choice? (Higgsfield Open-Source Commercial)](prompt/higgsfield-open-did-we-have-a-choice.md) | Higgsfield's 79 s documentary-style ad: humanlike animals caught in quiet everyday moments in muted city interiors. | Higgsfield | — |
| [Inside AI (Higgsfield Open-Source Commercial)](prompt/higgsfield-open-inside-ai.md) | Higgsfield's 108 s comedy ad about what happens inside an AI asked how to ask a girl out, with every prompt public. | Higgsfield | — |
| [Top Up (Higgsfield Open-Source Cinematic Ad)](prompt/higgsfield-open-top-up.md) | Higgsfield's 106 s soda ad breakdown: a drained athlete becomes a robot gladiator who must run dry to win. | Higgsfield | — |
| [Untold Stories (Higgsfield Open-Source Commercial)](prompt/higgsfield-open-untold-stories.md) | Higgsfield's 92 s music-driven ad: a notebook, a photo and a toy plane open onto a battle, a duel and a space chase. | Higgsfield | — |

### Animation

| Skill | What it does | By | Install |
|---|---|---|---|
| [Anime Production (Higgsfield Open-Source Launch Video)](prompt/higgsfield-open-anime-production.md) | Higgsfield's 46 s tutorial-launch: a full anime sequence built with Claude and Seedream 5.0 Pro via the Higgsfield MCP. | Higgsfield | — |
| [How to make motion graphics videos in 15 AI styles](prompt/motion-design-styles-15.md) | 15 ten-second motion-design films, one style each, with the full prompt, source code and a review rubric. | Vincent Wei | — |
| [How to make motion graphics videos with Claude Code](prompt/awesome-opus-5-5-videos.md) | 703 prompts for motion graphics videos Claude Code writes as code (explainers, 3D, games), each linked to its post. | yihui-dev | — |
| [If You Stop Loving Me, I'll Die (Higgsfield Open-Source Animated Short)](prompt/higgsfield-open-if-you-stop-loving-me-ill-die.md) | Higgsfield's 5 min deadpan silent cartoon: Tolik dies at every refusal, and one morning his wife walks out. | Higgsfield | — |

### Camera

| Skill | What it does | By | Install |
|---|---|---|---|
| [Camera Moves](prompt/craft-camera-moves.md) | 47 camera moves with direction, speed and an end frame — dolly in to car mount — in six models' syntax. | varg | — |
| [Composition & Framing](prompt/craft-composition-framing.md) | 34 composition cards — thirds, symmetry, leading lines, forced perspective, 2.39:1 to IMAX — for stills and video. | varg | — |
| [fal Cinematography](prompt/fal-cinematography.md) | Direct cinematic stills and video: shot language, camera moves, lenses, lighting, grade and film texture. | fal | Claude Code, Codex, Cursor, Gemini CLI |
| [Lens & Optics](prompt/craft-lens-optics.md) | 20 lens and focus cards — anamorphic, rack focus, lens flare, chromatic aberration — written as visible effects. | varg | — |
| [Shot Sizes & Angles](prompt/craft-shot-sizes-angles.md) | 29 framing cards — extreme wide to insert, cowboy to master shot, eye level to worm's-eye — with model-ready clauses. | varg | — |
| [Video Shotcraft](prompt/video-shotcraft.md) | 124 shot recipe cards and a tested Remotion template for cinematic product promos built from real UI screenshots. | Vincent Wei | Claude Code, Codex |

### Characters

| Skill | What it does | By | Install |
|---|---|---|---|
| [Absurd Characters & Mascots](prompt/varg-character-absurd.md) | Food or object + animal + one human detail: brainrot-style creatures and brand mascots in 3D or clay. | varg | Claude Code, Codex, Cursor, OpenClaw, Gemini CLI |
| [Beautiful Women](prompt/varg-character-beautiful-woman.md) | Very beautiful AI women who look like real models: casting details, real skin, fashion styling, no false blocks. | varg | Claude Code, Codex, Cursor, OpenClaw, Gemini CLI |
| [Big Guy Characters](prompt/varg-character-big-guy.md) | Big, heavy characters played straight: size shown with visible cues, a small delicate job, never mocked. | varg | Claude Code, Codex, Cursor, OpenClaw, Gemini CLI |
| [Cartoon Look Characters](prompt/varg-character-cartoon.md) | Original characters in famous cartoon looks (yellow sitcom, 3D family film, anime, clay), described without IP names. | varg | Claude Code, Codex, Cursor, OpenClaw, Gemini CLI |
| [Character Design Sheet](prompt/inference-sh-character-design-sheet.md) | Keep a character consistent across AI images with turnarounds, expression sheets, palettes and LoRAs. | inference.sh | Claude Code, Codex, Cursor, Gemini CLI |
| [Cringe Deadpan Characters](prompt/varg-character-cringe.md) | Bizarre but believable characters people argue about: one wrong outfit, one repeated action, no smile. | varg | Claude Code, Codex, Cursor, OpenClaw, Gemini CLI |
| [fal Character Design](prompt/fal-character-design.md) | Design original characters that stay consistent: reference and expression sheets, outfits, character-to-video. | fal | Claude Code, Codex, Cursor, Gemini CLI |
| [Fitness Characters](prompt/varg-character-fitness.md) | Fitness coaches and athletes with real muscle, a signature colour and catalog wording that gets sports bras through. | varg | Claude Code, Codex, Cursor, OpenClaw, Gemini CLI |
| [Grandma Characters](prompt/varg-character-grandma.md) | Very old AI characters people remember: age vs behaviour, real wrinkles, a loud outfit and one prop. | varg | Claude Code, Codex, Cursor, OpenClaw, Gemini CLI |

### Cinematic

| Skill | What it does | By | Install |
|---|---|---|---|
| [4K Blockbuster (Higgsfield Open-Source Short Film)](prompt/higgsfield-open-4k-blockbuster.md) | Higgsfield's 3 min 4K action short: a guy trapped in his little sister's AI generations wakes in a new one each death. | Higgsfield | — |
| [Adiliada (Higgsfield Open-Source Short Film)](prompt/higgsfield-open-adiliada.md) | Higgsfield's 6 min pitch-black sci-fi comedy: every time Adil dies he is reborn as himself in another universe. | Higgsfield | — |
| [Anerneq (Higgsfield Open-Source Short Film)](prompt/higgsfield-open-anerneq.md) | Higgsfield's 20 min Arctic drama: a young huntress leads her failing father across 1920s Chukotka. | Higgsfield | — |
| [Cinematic Grammar](prompt/craft-cinematic-grammar.md) | Write one shot spec, get the exact prompt for Veo, Kling, Seedance, Hailuo, Luma or Runway. | varg | — |
| [Cully Hill Boys (Higgsfield Open-Source Feature Film)](prompt/higgsfield-open-cully-hill-boys.md) | Higgsfield's fully AI-made 1 h 55 min action-comedy feature: 473,214 generations, every prompt and asset public. | Higgsfield | — |
| [FLUX 3 Cinematic Inserts](prompt/flux-3-cinematic-inserts.md) | Write FLUX 3 prompts for standalone cinematic shots: shot craft, camera, continuity and review. | Black Forest Labs | Claude Code, Codex, Cursor, Gemini CLI |
| [Gothic Beach (Higgsfield Open-Source Short)](prompt/higgsfield-open-gothic-beach.md) | Higgsfield's 37 s surreal short: a gothic girl on a sunset beach draws the soul from everything she touches. | Higgsfield | — |
| [Hell Grind (Higgsfield Open-Source Feature Film)](prompt/higgsfield-open-hell-grind.md) | Higgsfield's 96 min supernatural action feature: four street kids touch a nameless artifact and gain powers. | Higgsfield | — |
| [Higgsfield Open-Source AI Films: Every Prompt and Asset](prompt/higgsfield-open-source-films.md) | 33 AI films Higgsfield open-sourced, from a 2 h feature to 15 s spots, each with every prompt, model and asset public. | Higgsfield | — |
| [Huntress's Tale (Higgsfield Open-Source Dark Fantasy Short)](prompt/higgsfield-open-huntress-tale.md) | Higgsfield's 67 s gothic dark-fantasy short: a porcelain huntress and a silver fairy in misted, flooded vaults. | Higgsfield | — |
| [Kok Boru (Higgsfield Open-Source Short Film)](prompt/higgsfield-open-kok-boru.md) | Higgsfield's 15 min film about Kok Boru, the horseback game of the Central Asian steppe, plus its 20 s teaser. | Higgsfield | — |
| [MADSEASON (Open-Source Fashion Film, Higgsfield Selected)](prompt/higgsfield-open-madseason.md) | Higgsfield Selected #1: a 2 min couture fashion film after Diaghilev and '90s fashion, with every prompt public. | dinitrobenzoll | — |
| [Oneiric (Higgsfield Open-Source Short Film)](prompt/higgsfield-open-oneiric.md) | Higgsfield's 20 min anthology short: four students pick one day anywhere in time, each played as its own genre. | Higgsfield | — |
| [Passport Rush (Higgsfield Open-Source Short Film)](prompt/higgsfield-open-passport-rush.md) | Higgsfield's 5 min comedy: minutes from boarding, a woman dashes through an absurd apocalypse for her passport. | Higgsfield | — |
| [Red Flag (Higgsfield Open-Source Short Film)](prompt/higgsfield-open-red-flag.md) | Higgsfield's 2 min Hong Kong neo-noir: the midnight burglar is her boyfriend, and she's a martial-arts champion. | Higgsfield | — |
| [Rewind Club (Higgsfield Open-Source Montage)](prompt/higgsfield-open-rewind-club.md) | A 15 s 2000s romcom montage from Higgsfield Soul: warm, grainy 35 mm close-ups of shy, glittering teen moments. | Higgsfield | — |
| [Seedance 2.0 4K Showcase (Higgsfield Open-Source Reel)](prompt/higgsfield-open-seedance-2-4k-showcase.md) | Higgsfield's reel of native 4K Seedance 2.0 renders for cinematic and commercial use, with every prompt. | Higgsfield | — |
| [Space Chores (Higgsfield Open-Source Micro Short)](prompt/higgsfield-open-space-chores.md) | A 22 s sci-fi gag from Higgsfield Soul: a woman in an orbital cupola presses one key and an asteroid hits Earth. | Higgsfield | — |
| [The Trigger (Higgsfield Open-Source Short Film)](prompt/higgsfield-open-the-trigger.md) | Higgsfield's 9 min neo-noir thriller: an ageing hitman's next target is the soldier who once saved his life. | Higgsfield | — |
| [Ultra Realistic TV (Higgsfield Open-Source Short Film)](prompt/higgsfield-open-ultra-realistic-tv.md) | Higgsfield's 65 s Seedance 2.0 4K short: a remote pulls a guy into the impossibly real worlds on his TV. | Higgsfield | — |
| [Vengeance Is Mine (Higgsfield Open-Source Western)](prompt/higgsfield-open-vengeance-is-mine.md) | Higgsfield's 27 min supernatural Western: a silent stranger bullets can't stop walks into a Texas town and kills. | Higgsfield | — |
| [Zephyr (Higgsfield Open-Source Series)](prompt/higgsfield-open-zephyr.md) | Higgsfield's photoreal mecha series: a squad of glamorous heroines defends their city from an alien bug invasion. | Higgsfield | — |
| [Zephyr: Special (Higgsfield Open-Source Episode)](prompt/higgsfield-open-zephyr-special.md) | Higgsfield's 5 min Zephyr special: a mysterious guest pilot out-fights the elite mech squad to save one of them. | Higgsfield | — |

### Image

| Skill | What it does | By | Install |
|---|---|---|---|
| [Douyin Cover Builder](prompt/douyin-cover-builder.md) | Writes image-model prompts for Douyin covers: bold title, highlighted keywords, your face bottom right | 0x00000003 | OpenClaw |

### Launch

| Skill | What it does | By | Install |
|---|---|---|---|
| [Higgsfield Academy (Higgsfield Open-Source Promo)](prompt/higgsfield-open-higgsfield-academy.md) | Higgsfield's 64 s promo for Higgsfield Academy, made almost entirely with Seedance 2.0. | Higgsfield | — |
| [Seed Audio 1.0 Launch (Higgsfield Open-Source Video)](prompt/higgsfield-open-seed-audio-launch.md) | Higgsfield's 106 s launch video for Seed Audio 1.0 (voice cloning, cinematic sound): bold motion design, comedic tone. | Higgsfield | — |

### Lighting

| Skill | What it does | By | Install |
|---|---|---|---|
| [Lighting Setups](prompt/craft-lighting-setups.md) | 56 lighting setups — golden hour to chiaroscuro, rain and fog — each with a named source, direction and quality. | varg | — |

### Music

| Skill | What it does | By | Install |
|---|---|---|---|
| [Nala: Heads Drop (Higgsfield Open-Source Music Video)](prompt/higgsfield-open-nala-heads-drop.md) | Higgsfield's 50 s AI music video for "Head Up" by Nala: every frame, character and scene generated. | Higgsfield | — |

### Prompting

| Skill | What it does | By | Install |
|---|---|---|---|
| [AI Film Director (Visual Skills)](prompt/visual-skills-video-director.md) | AI film director for video prompts: dramaturgy first (Murch, blocking, montage), then exact syntax per model. | Serge Shima | Claude Code, Codex |
| [Awesome Seedance Skills](prompt/awesome-seedance-skills.md) | Evidence-led Seedance 2.5/2.0 skills: a production workflow plus genre templates distilled from 934 verified cases. | LearnPrompt | Claude Code, Codex |
| [fal Prompting](prompt/fal-prompting.md) | Prompt specific model families well: Kling, GPT Image 2 and Happy Horse guides, loaded only when needed. | fal | Claude Code, Codex, Cursor, Gemini CLI |
| [FLUX 3 Prompt Doctor](prompt/flux-3-prompt-doctor.md) | Diagnose a FLUX 3 video brief before spending: resolve missing, conflicting or schema-changing asks. | Black Forest Labs | Claude Code, Codex, Cursor, Gemini CLI |
| [FLUX Image Best Practices](prompt/flux-image-best-practices.md) | Prompt FLUX image models well: structure, JSON prompts, hex colors, typography and multi-reference edits. | Black Forest Labs | Claude Code, Codex, Cursor, Gemini CLI |
| [Higgsfield Prompt Skill (O-Side Media)](prompt/higgsfield-prompt-skill-oside.md) | Independent 36-skill prompt pack for Higgsfield: model picks, camera presets, Soul ID, Cinema Studio, Seedance 2.5. | O-Side Media | Claude Code |
| [How to find Nano Banana Pro prompts for AI images](prompt/nano-banana-pro-prompt-libraries.md) | Two open prompt libraries for Nano Banana Pro, organized by look, with example outputs to copy from. | YouMind OpenLab | — |
| [How to make AI images with GPT Image 2 in Claude Code](prompt/gpt-image-2-skill-wuyoscar.md) | Two agent skills and a CLI for GPT Image 2/2.5: generate and edit images, and pull the prompt out of a reference image. | Wuyoscar | Claude Code |
| [Model Prompt Adapters](prompt/craft-model-adapters.md) | Dated syntax adapters for Veo / Gemini Omni, Kling 3, Seedance 2.x, Hailuo 2.3, Luma Ray and Runway Gen-4.5. | varg | — |
| [Reference Breakdown](prompt/craft-reference-breakdown.md) | Turn a frame you have rights to into a shot spec — size, angle, lens, light, palette — plus prompt variants. | varg | — |
| [Replicate Prompt Images](prompt/replicate-prompt-images.md) | Write better image prompts and edits: photographic language, lighting, text rendering, consistent characters. | Replicate | Claude Code, Codex, Cursor, Gemini CLI |
| [Replicate Prompt Videos](prompt/replicate-prompt-videos.md) | Prompt video models like a director: shots, camera motion, four audio layers, dialogue, time-coded beats. | Replicate | Claude Code, Codex, Cursor, Gemini CLI |
| [Seedance 2.0 Prompt Guide](prompt/seedance-2-prompt-guide.md) | Prompt guide for Seedance 2.0 multimodal video: the @ reference system, camera language and ready templates. | Dex Hünter | Claude Code |
| [Video Prompting Guide](prompt/inference-sh-video-prompting-guide.md) | Write prompts that video models follow: shot types, camera moves and per-model tips from Veo to Sora. | inference.sh | Claude Code, Codex, Cursor, Gemini CLI |

### Sfx

| Skill | What it does | By | Install |
|---|---|---|---|
| [FLUX 3 Audio & Dialogue](prompt/flux-3-audio-dialogue.md) | Direct FLUX 3's generated sound: dialogue, voiceover, ambience, effects, music, silence and timing. | Black Forest Labs | Claude Code, Codex, Cursor, Gemini CLI |

### Story

| Skill | What it does | By | Install |
|---|---|---|---|
| [Cat Story (Higgsfield Open-Source Short Series)](prompt/higgsfield-open-cat-story.md) | Higgsfield's 64 s dreamy K-drama series about being loved by someone you've never truly seen: a white cat. | Higgsfield | — |
| [One More Time (Higgsfield Open-Source Romcom Short)](prompt/higgsfield-open-one-more-time.md) | A 2000s-style K-drama romcom from Higgsfield Soul: a girl secretly rewinds time on a first date, again and again. | Higgsfield | — |
| [The Dusk (Higgsfield Open-Source Drama Episode)](prompt/higgsfield-open-dusk.md) | Higgsfield's 88 s muted, grainy school drama: a pale boy's quiet warning and a guarded girl's wary silence. | Higgsfield | — |
| [The New Girl (Higgsfield Open-Source J-Drama Episode)](prompt/higgsfield-open-the-new-girl.md) | Higgsfield's 77 s J-drama school episode: Haruka's ordinary first day at a new school is about to change. | Higgsfield | — |

## Effects

Transitions, captions, titles, device mockups, shaders and every named edit, with the code that makes it. On varg how to: <https://varg.ai/how-to/effects.md>

### 3d Scenes

| Skill | What it does | By | Install |
|---|---|---|---|
| [Three.js Architecture Effects](effect/threejs-architecture-effects.md) | Self-assembling 3D buildings in three.js: bricks, timber, eaves and PBR, driven by one seekable progress value. | Hailey | Claude Code, Cursor |

### Agent Flows

| Skill | What it does | By | Install |
|---|---|---|---|
| [Answer Streams In](effect/answer-streams-in.md) | The assistant's reply arrives in uneven token bursts, the way a real model streams. | Miao Yang · HeyGen | Claude Code, Codex, Cursor |
| [Beams Into the Agent Hub](effect/beams-into-agent-hub.md) | Light pulses run along curved lines from tool icons into a central agent and back out to a result. | Magic UI | Claude Code, Codex, Cursor |
| [Nodes Wire Up on a Canvas](effect/nodes-wire-up-canvas.md) | Nodes pop onto a canvas and connectors draw between them as the camera pulls back to show the whole pipeline. | HeyGen | Claude Code, Codex, Cursor |
| [Parallel Agents Side by Side](effect/parallel-agents-lanes.md) | Several agent cards work at once in lanes or an orbit, each with its own status, then merge into one result. | HeyGen | Claude Code, Codex, Cursor |
| [Plan Checklist Ticks Off](effect/plan-checklist-ticks.md) | The agent's plan appears as a checklist and each item ticks and dims as it is done. | HeyGen | Claude Code, Codex, Cursor |
| [Prompt Typed, Then Generate](effect/prompt-typed-then-generate.md) | A real task types into the prompt box, the Generate button is pressed, and the result starts to build. | Kapish Dima · remocn | Claude Code, Codex, Cursor |
| [Thinking… Shimmer Label](effect/thinking-shimmer-label.md) | A muted "Thinking…" label with a moving shine shows the model working between prompt and answer. | Elliot Sutton | Claude Code, Codex, Cursor |
| [Tool Calls as Status Rows](effect/tool-calls-status-rows.md) | Each tool call appears as a row with an icon and label that goes spinner → check, building a visible plan. | Kapish Dima · remocn | Claude Code, Codex, Cursor |
| [Tracing Beam Through Steps](effect/tracing-beam-through-steps.md) | A glowing dash travels one path through numbered steps, lighting each as it passes. | HeyGen | Claude Code, Codex, Cursor |
| [Vertical Chat Exchange](effect/vertical-chat-exchange.md) | A portrait chat plays out: the prompt types and sends, the answer streams and assembles a card or image. | Jake Moran · HeyGen | Claude Code, Codex, Cursor |

### Animation

| Skill | What it does | By | Install |
|---|---|---|---|
| [Bang Motion](effect/bang-motion.md) | Browser motion graphics that move like video, not slides: openers, promos, bumpers, kinetic type and explainers. | Bang Tutorial | Claude Code |
| [p5 Paint Animation](effect/hyperframes-p5-paint-animation.md) | Handwriting that writes itself, photos that paint themselves and clips repainted as living paintings, in p5.js code. | HeyGen | Claude Code, Codex, Cursor, Gemini CLI |

### Backdrops

| Skill | What it does | By | Install |
|---|---|---|---|
| [Aurora Behind the Title](effect/aurora-behind-title.md) | Blurred light streaks drift sideways across a dark frame behind a centered title. | Aceternity UI | Claude Code, Codex, Cursor |
| [Blurred Product Behind Text](effect/blurred-product-behind.md) | The product UI itself, heavily blurred and dimmed, becomes the backdrop for a title or quote. | Kapish Dima · remocn | Claude Code, Codex, Cursor |
| [Brand-Color Silk Waves](effect/brand-silk-waves.md) | Smooth silk-like folds or wave bands in brand colors flow slowly behind the content. | David Haz | Claude Code, Codex, Cursor |
| [Faint Grid or Dot Field](effect/faint-grid-field.md) | A very faint line grid or dot field gives structure behind UI and code, with a soft radial fade. | Magic UI | Claude Code, Codex, Cursor |
| [Film Grain Over Gradient](effect/film-grain-over-gradient.md) | A fine animated grain sits over the gradient so it feels printed, removes banding and looks less digital. | HeyGen | Claude Code, Codex, Cursor |
| [Perspective Grid Tunnel](effect/perspective-grid-tunnel.md) | A card or title floats in a perspective tunnel or floor grid while light streaks race along the lines. | Magic UI | Claude Code, Codex, Cursor |
| [Quiet Particle Field](effect/quiet-particle-field.md) | Out-of-focus dots drift slowly in depth behind the content, adding life without motion noise. | tsParticles (Matteo Bruni) | Claude Code, Codex, Cursor |
| [Slow Mesh Gradient](effect/slow-mesh-gradient.md) | Soft brand-colored fields blend and drift slowly behind titles and UI. | HeyGen | Claude Code, Codex, Cursor |
| [Spotlight From Above](effect/spotlight-from-above.md) | Soft light cones fall from the top of a dark frame onto the product or title. | Aceternity UI | Claude Code, Codex, Cursor |

### Brand Motion

| Skill | What it does | By | Install |
|---|---|---|---|
| [Cuboid Carousel](effect/hyperframes-cuboid-carousel.md) | A chain of bevelled 3D cuboids rides a travelling wave as a content carousel for features or products. | HeyGen | Claude Code, Codex, Cursor, Gemini CLI |
| [Frost Sequence Camera Orbit](effect/hyperframes-frost-sequence-camera-orbit.md) | An orbiting camera follows an ice logo as it shatters, reforms into two text moments and fades out. | HeyGen | Claude Code, Codex, Cursor, Gemini CLI |
| [Krea Motion](effect/krea-motion.md) | Animate products, renders and logos into reveal films and web loops with Seedance 2.5 on Krea. | Krea | Claude Code, Codex, Cursor, Gemini CLI |
| [Pixel2Motion Logo Animation](effect/pixel2motion.md) | Raster logo to clean SVG to a choreographed logo animation in HTML, with geometry and motion QA evidence. | NolanLai | Claude Code, Codex |

### Captions

| Skill | What it does | By | Install |
|---|---|---|---|
| [3D Camera Captions](effect/hyperframes-camera-3d-captions.md) | Captions that live in 3D around a talking head: the camera flies through the words, heroes pass behind the speaker. | HeyGen | Claude Code, Codex, Cursor, Gemini CLI |
| [Agent Caption](effect/agent-caption.md) | Local captions in any language: Whisper words, forced-aligned timing, SRT/VTT, burned styles or a GSAP captions.js. | Ali Hamza Kamboh | Claude Code, Codex, Cursor |
| [Agent Video Style Kit](effect/cut30-agent-video-style-kit.md) | Cut30's title and caption style kit for 9:16 and 16:9: JSON your agent reads plus an HTML preview. Runnable in varg's code2video templates. | Cut30 | Claude Code, setup-prompt |
| [Caption Animation](effect/iart-caption-animation.md) | Word-timed TikTok captions in Remotion or CSS: per-word pop, active-word highlight, 9:16 safe areas, sidecar SRT/VTT. | iart.ai | Claude Code, Codex, Cursor |
| [Caption Styles: 17 pro caption looks with presets](effect/caption-styles.md) | Karaoke, word pop, pill, glass, neon and 12 more caption looks as exact presets: sizes, safe zones, sync and contrast from subtitle pros. | varg | Claude Code, Codex, Cursor, OpenClaw, Gemini CLI |
| [Cinematic Caption](effect/cinematic-caption-audrey.md) | Designed editorial captions for HyperFrames: scored hero words, subject-aware depth, glass type — not a subtitle strip. | Audrey | Claude Code, Codex |
| [Remotion Captions](effect/remotion-captions.md) | Transcribe speech and burn in animated captions with Remotion, or import an existing SRT file. | Remotion | Claude Code, Codex, Cursor, Gemini CLI |

### Cinematic

| Skill | What it does | By | Install |
|---|---|---|---|
| [fal Fan Cam](effect/fal-fan-cam.md) | Put someone into a live sports broadcast: a realistic fan-cam cutaway with scoreboard and channel overlays. | fal | Claude Code, Codex, Cursor, Gemini CLI |

### Code

| Skill | What it does | By | Install |
|---|---|---|---|
| [Agent CLI Welcome Screen](effect/agent-cli-welcome.md) | A coding agent's terminal welcome screen appears, a prompt types, and the agent starts working. | Kapish Dima · remocn | Claude Code, Codex, Cursor |
| [Camera Scrolls a Long File](effect/camera-scrolls-long-file.md) | The view scrolls through a long file and stops with the target line centered and lit. | HeyGen | Claude Code, Codex, Cursor |
| [Code Left, Live UI Right](effect/code-left-ui-right.md) | Code types on the left and the UI on the right snaps to match after each change. | Kapish Dima · remocn | Claude Code, Codex, Cursor |
| [Code Morphs Between Versions](effect/code-morphs-versions.md) | One snippet transforms into the next: shared tokens glide to new positions, removed ones fade, new ones fade in. | HeyGen | Claude Code, Codex, Cursor |
| [Code on a Lit 3D Slab](effect/code-on-3d-slab.md) | Highlighted code sits on a beveled slab that turns through space under studio light, then faces the camera. | HeyGen | Claude Code, Codex, Cursor |
| [Editor Types the Code](effect/editor-types-the-code.md) | Syntax-highlighted code types into an editor window with a caret riding the frontier. | HeyGen | Claude Code, Codex, Cursor |
| [One-Line Install Card](effect/one-line-install-card.md) | A single install command types into a small terminal card, prints a success check, and holds. | Magic UI | Claude Code, Codex, Cursor |
| [Red/Green Diff Collapse](effect/red-green-diff.md) | Removed lines flash red and collapse away while added lines expand in green. | HeyGen | Claude Code, Codex, Cursor |
| [Spotlight One Line of Code](effect/spotlight-one-line.md) | A highlight band sweeps onto the one line that matters while the rest of the file dims. | HeyGen | Claude Code, Codex, Cursor |
| [Terminal Session Run](effect/terminal-session-run.md) | A terminal types a command, then streams real-looking log output with green checks. | HeyGen | Claude Code, Codex, Cursor |

### Cursors

| Skill | What it does | By | Install |
|---|---|---|---|
| [Auto Zoom on Every Click](effect/auto-zoom-on-click.md) | The camera eases in toward each upcoming click, trails the cursor on a spring, and eases out after. | HeyGen | Claude Code, Codex, Cursor |
| [Click Ripple and Button Press](effect/click-ripple-press.md) | Every click shows a quiet expanding ring while the clicked button presses in and responds. | HeyGen | Claude Code, Codex, Cursor |
| [Drag a Card Across Columns](effect/drag-card-across.md) | The cursor grabs a card, lifts and tilts it while carrying, and drops it into a new column with a settle. | HeyGen | Claude Code, Codex, Cursor |
| [Multiplayer Cursors Drift In](effect/multiplayer-cursors-drift.md) | Several labeled cursors in different colors drift in from the edges and gather on the canvas. | HeyGen | Claude Code, Codex, Cursor |
| [Named Agent Cursor](effect/named-agent-cursor.md) | A cursor with an accent name tag ("Claude", "Agent") moves and clicks on its own, typing each step. | HeyGen | Claude Code, Codex, Cursor |
| [Oversized Look-Here Cursor](effect/oversized-look-here-cursor.md) | A macOS arrow at ~3–4× normal size glides in and lands its tip on what matters. | HeyGen | Claude Code, Codex, Cursor |
| [Select Text, Then Act](effect/select-text-then-act.md) | The arrow becomes an I-beam, drags a selection across a phrase, and a menu or AI action appears on it. | HeyGen | Claude Code, Codex, Cursor |
| [Shortcut Keycaps Overlay](effect/shortcut-keycaps-overlay.md) | Physical-looking keycaps rise at the bottom of the frame and press in the real order when a shortcut is used. | Kapish Dima · remocn | Claude Code, Codex, Cursor |
| [Touch Taps on Phone UI](effect/touch-taps-on-phone.md) | A translucent touch circle taps, swipes and pulls to refresh on a phone screen instead of an arrow. | HeyGen | Claude Code, Codex, Cursor |

### Cuts

| Skill | What it does | By | Install |
|---|---|---|---|
| [Action Match Cut](effect/action-match-cut.md) | A movement started in shot A finishes in shot B: a jump, a throw, a door swing carried across two angles. | HeyGen | Claude Code, Codex, Cursor |
| [Audio Crossfades, J and L in FFmpeg](effect/ffmpeg-audio-crossfade-jl.md) | Crossfade audio with acrossfade, or build J/L-cuts by delaying one track with adelay and mixing with amix. | varg | Claude Code, Codex, Cursor |
| [B-Roll Overlay Cut](effect/b-roll-overlay.md) | Keep the A-roll voice running and lay B-roll pictures over it; edits in the A-roll disappear under the cover. | varg | Claude Code, Codex, Cursor |
| [Beat-Synced Cut](effect/beat-synced-cut.md) | Place cuts on the beats of the music so the edit feels driven by the track. | HeyGen | Claude Code, Codex, Cursor |
| [Cross-Cutting](effect/cross-cutting.md) | Alternate between two or more scenes happening at the same time, building tension or comparison. | varg | Claude Code, Codex, Cursor |
| [Cut on Action](effect/cut-on-action.md) | Change angle while the subject moves. The movement hides the cut and keeps continuity. | HeyGen | Claude Code, Codex, Cursor |
| [Cutaway / Insert](effect/cutaway-insert.md) | Briefly leave the main shot for a detail or related shot, then come back. Shows what is talked about and hides edits. | varg | Claude Code, Codex, Cursor |
| [FFmpeg Concat Demuxer (Lossless)](effect/ffmpeg-concat-demuxer.md) | Join files that share codec, resolution, fps and audio format without re-encoding, from a text list. | varg | Claude Code, Codex, Cursor |
| [FFmpeg Concat Filter (Re-encode)](effect/ffmpeg-concat-filter.md) | Join any sources frame-accurately by decoding, normalizing and re-encoding them in one filter graph. | varg | Claude Code, Codex, Cursor |
| [Freeze Frame](effect/freeze-frame.md) | Stop on a single frame for a beat, to introduce a character, land a joke or add a caption. | HeyGen | Claude Code, Codex, Cursor |
| [Graphic Match Cut](effect/graphic-match-cut.md) | Cut between two shots that share a shape, colour or position on screen, so the eye slides from one to the other. | HeyGen | Claude Code, Codex, Cursor |
| [Hard Cut](effect/hard-cut.md) | One shot ends, the next begins on the very next frame. The default join: invisible when the content flows. | varg | Claude Code, Codex, Cursor |
| [In-Camera Whip Pan Cut](effect/in-camera-whip-cut.md) | End shot A and start shot B with real fast pans in the same direction, and cut inside the motion blur. | HeyGen | Claude Code, Codex, Cursor |
| [Invisible Cut](effect/invisible-cut.md) | Hide a cut inside a frame that is fully covered (a passing object, a dark wall, a blur) to fake one continuous shot. | HeyGen | Claude Code, Codex, Cursor |
| [J-Cut](effect/j-cut.md) | Shot B's sound starts before its picture. The ear arrives first and pulls the viewer into the next scene. | varg | Claude Code, Codex, Cursor |
| [Jump Cut](effect/jump-cut.md) | Cut out a stretch inside one continuous shot, so the subject visibly jumps. Removes pauses, adds pace. | varg | Claude Code, Codex, Cursor |
| [Jump-Zoom Punch-In](effect/jump-zoom-punch-in.md) | Hide a jump cut by scaling the next segment 110–130%. Reads as a second camera angle in talking heads. | HeyGen | Claude Code, Codex, Cursor |
| [L-Cut](effect/l-cut.md) | Shot A's sound keeps playing after the picture cuts to B. Carries a line or a mood across the edit. | varg | Claude Code, Codex, Cursor |
| [Montage Sequence](effect/montage-sequence.md) | A run of short shots, usually on music, that compresses time or builds one feeling. | varg | Claude Code, Codex, Cursor |
| [Pattern Interrupt](effect/pattern-interrupt.md) | Every few seconds of a short, break the visual pattern: angle, zoom, graphic, sound hit, so attention resets. | HeyGen | Claude Code, Codex, Cursor |
| [Remotion Overlay on a Cut](effect/remotion-overlay-cut.md) | Keep a hard cut but draw something over it (flash, light leak, SFX graphic) without shortening the video. | Kapish Dima · remocn | Claude Code, Codex, Cursor |
| [Rhythmic Cutting (3-2-1)](effect/rhythmic-cutting-3-2-1.md) | Shorten shot lengths step by step (3 s, 2 s, 1 s, half a second) to build momentum into a payoff. | HeyGen | Claude Code, Codex, Cursor |
| [Smash Cut](effect/smash-cut.md) | An abrupt cut from one extreme to its opposite (calm to chaos, loud to silent) at the most surprising moment. | varg | Claude Code, Codex, Cursor |
| [Sound Match Cut](effect/sound-match-cut.md) | Two different sounds that rhyme (a scream and a train whistle) bridge the cut and link the two scenes. | varg | Claude Code, Codex, Cursor |
| [Speed Ramp](effect/speed-ramp.md) | Change playback speed within a shot (fast into a moment, slow on it, fast out) to stress the beat. | HeyGen | Claude Code, Codex, Cursor |
| [Split Screen](effect/split-screen.md) | Show two or more shots at once in separate panels: comparison, reaction or simultaneous action. | HeyGen | Claude Code, Codex, Cursor |

### Devices

| Skill | What it does | By | Install |
|---|---|---|---|
| [3D Phone Turn](effect/3d-phone-turn.md) | A real 3D phone model turns in space with the app playing on its screen, then faces the camera. | HeyGen | Claude Code, Codex, Cursor |
| [Browser Window Frame](effect/browser-window-frame.md) | The web app plays inside a clean browser window with traffic lights and a URL bar on a soft backdrop. | Magic UI | Claude Code, Codex, Cursor |
| [Floating Device with Soft Bob](effect/floating-device-bob.md) | The device hangs in space and bobs and tilts very slightly so a still shot never feels frozen. | Daniel Petho | Claude Code, Codex, Cursor |
| [Foldable Two-Screen Reveal](effect/foldable-two-screen.md) | A foldable phone opens to show two screens side by side — before and after, or app and result. | varg | Claude Code, Codex, Cursor |
| [Laptop Lid Opens to Screen](effect/laptop-lid-opens.md) | A laptop lid tilts open and the screen content lifts toward the viewer, then becomes the full frame. | Aceternity UI | Claude Code, Codex, Cursor |
| [macOS Desktop Stage](effect/macos-desktop-stage.md) | A full Mac desktop with menu bar, dock and app windows sets the stage for a desktop app demo. | HeyGen | Claude Code, Codex, Cursor |
| [Phone Frame with Live Screen](effect/phone-frame-live-screen.md) | A screen recording plays edge to edge inside a realistic phone frame with Dynamic Island. | Magic UI | Claude Code, Codex, Cursor |
| [Phone in Hand Insert](effect/phone-in-hand-insert.md) | A portrait phone held in frame shows a lock screen or app moment, as if filmed by a person. | HeyGen · HeyGen | Claude Code, Codex, Cursor |
| [Phone, Tablet and Laptop Splay](effect/multi-device-splay.md) | Phone, tablet and laptop fan out from one stack into a proud row, each showing the same product. | HeyGen | Claude Code, Codex, Cursor |
| [Push Through the Screen](effect/push-through-the-screen.md) | A phone rises into view, then the camera pushes through its screen into the full-frame UI. | HeyGen | Claude Code, Codex, Cursor |

### Editing

| Skill | What it does | By | Install |
|---|---|---|---|
| [Clipify](effect/clipify.md) | Long videos into social clips: find funny lines or impact beats, cut, reframe to 9:16, burn word-by-word captions. | Louise de Sadeleer | Claude Code |
| [Editing & Transitions](effect/craft-editing-transitions.md) | Cuts, match cuts, J/L cuts, whips and speed ramps — multi-shot prompt syntax per model, ffmpeg when needed. | varg | — |
| [Footage Effects: glow, glitch, CRT and VHS on real video](effect/footage-effects.md) | Eight effects for footage you already have as ffmpeg filter chains and WebGL presets: glow, glitch, CRT, chromatic, halftone, photocopy, zoom blur, heat haze. | varg | Claude Code, Codex, Cursor, OpenClaw, Gemini CLI |

### End Cards

| Skill | What it does | By | Install |
|---|---|---|---|
| [Action Line + CTA Button](effect/action-line-cta-button.md) | One short action line lands, then a real-looking button pops in under it with a soft glow. | HeyGen | Claude Code, Codex, Cursor |
| [Follow Card Sign-Off](effect/follow-card-sign-off.md) | A profile card with avatar, handle and a Follow button that a cursor or tap presses. | HeyGen | Claude Code, Codex, Cursor |
| [Last Frame Equals First Frame](effect/loop-to-first-frame.md) | The ending morphs back into the opening frame so autoplaying feeds loop without a visible seam. | HeyGen | Claude Code, Codex, Cursor |
| [Logo Lockup Outro](effect/logo-lockup-outro.md) | The mark assembles, the wordmark settles beside it, then tagline and URL fade in under it. | HeyGen | Claude Code, Codex, Cursor |
| [Pull Back to the Whole Canvas](effect/pull-back-to-canvas.md) | The camera pulls out from the last detail to the whole product workspace, then lands on the logo. | HeyGen | Claude Code, Codex, Cursor |
| [Scan-to-Try QR Card](effect/scan-to-try-qr.md) | A high-contrast QR code with a one-line reason to scan, held long enough to grab a phone. | HeyGen | Claude Code, Codex, Cursor |
| [Store Badges Close](effect/store-badges-close.md) | A short headline settles above equal-size App Store and Google Play badges, often beside a phone. | HeyGen | Claude Code, Codex, Cursor |
| [URL Typed Into the Address Bar](effect/url-typed-in-bar.md) | A browser bar appears and the product URL types itself in, then the page loads into the hero. | Magic UI | Claude Code, Codex, Cursor |
| [YouTube End Screen Layout](effect/youtube-end-screen.md) | A 5–20 s outro with clean empty slots for YouTube's clickable video and subscribe elements. | HeyGen | Claude Code, Codex, Cursor |

### Explainers

| Skill | What it does | By | Install |
|---|---|---|---|
| [Remotion Maps](effect/remotion-maps.md) | Animate maps in Remotion: static maps, Mapbox, MapLibre, MapTiler and CesiumJS 3D flyovers. | Remotion | Claude Code, Codex, Cursor, Gemini CLI |

### Galleries

| Skill | What it does | By | Install |
|---|---|---|---|
| [App Screens on a Rail](effect/app-screens-on-rail.md) | Two to five app screens ride a horizontal rail: one centered and sharp, neighbors smaller and receded. | HeyGen | Claude Code, Codex, Cursor |
| [Bento Feature Grid](effect/bento-feature-grid.md) | Features land in a grid of differently sized rounded tiles — one hero tile, smaller supporting ones. | HeyGen | Claude Code, Codex, Cursor |
| [Camera Drifts Across a Bento](effect/camera-drifts-bento.md) | An oversized grid of screenshots fills the frame and the camera drifts diagonally across it. | Kapish Dima · remocn | Claude Code, Codex, Cursor |
| [Cards Orbit in a Ring](effect/cards-orbit-ring.md) | Image cards ride a circle, larger in front and smaller behind, sweeping fast-slow-fast. | Daniel Petho | Claude Code, Codex, Cursor |
| [Filmstrip on a Curve](effect/filmstrip-on-curve.md) | A ribbon of thumbnails snakes along a curved path across the frame. | Daniel Petho | Claude Code, Codex, Cursor |
| [Opposing Marquee Rows](effect/opposing-marquee-rows.md) | Rows of tiles scroll sideways at different speeds and directions under a title. | Daniel Petho | Claude Code, Codex, Cursor |
| [Rapid Screenshot Burst](effect/rapid-screenshot-burst.md) | Full-screen images slam in one on top of another on the beat, landing on the final hero shot. | Codrops | Claude Code, Codex, Cursor |
| [Stacked Cards Fan Out](effect/stacked-cards-fan.md) | A pile of cards or photos shuffles, then fans or settles one forward into focus. | Codrops | Claude Code, Codex, Cursor |
| [Tilted Screenshot Wall](effect/tilted-screenshot-wall.md) | A wall of screenshots seen at an isometric angle, columns scrolling up and down at different speeds. | Aceternity UI | Claude Code, Codex, Cursor |

### Kinetic Type

| Skill | What it does | By | Install |
|---|---|---|---|
| [Canopy Part Title](effect/hyperframes-canopy-part-title.md) | Leaves sweep across the frame and part to reveal your headline: a 12-second 1080p title block. | HeyGen | Claude Code, Codex, Cursor, Gemini CLI |
| [Code Slice Hero](effect/hyperframes-code-slice-hero.md) | A tiled headline flips cell by cell under a sweeping depth field to reveal a second line: an 8-second hero. | HeyGen | Claude Code, Codex, Cursor, Gemini CLI |
| [Glass Shard Title](effect/hyperframes-glass-shard-title.md) | Glass shards fly in through fog and tile themselves into your headline, then fly out past the camera. | HeyGen | Claude Code, Codex, Cursor, Gemini CLI |
| [Kinetic Type Art: 17 typography pieces on the beat](effect/kinetic-type-art.md) | Typeface strobe, beat slams, word tunnels, manifestos, riso posters and decrypt titles with beat maths, spacing and palettes as presets. | varg | Claude Code, Codex, Cursor, OpenClaw, Gemini CLI |
| [Kinetic Typography](effect/iart-kinetic-typography.md) | Kinetic type for web and video: line, word or char splits, mask and blur reveals, variable-font motion, frozen-frame QA. | iart.ai | Claude Code, Codex, Cursor |
| [Persian Motion Director](effect/persian-motion-director.md) | Persian/RTL kinetic type done right: HarfBuzz-shaped letters, kashida, unbroken joins, font loaded before render. | atmirrr | Claude Code |
| [Wireframe Portal Title](effect/hyperframes-wireframe-portal-title.md) | A wireframe portal bursts open, the title comes through, then its letters swap into a second phrase. | HeyGen | Claude Code, Codex, Cursor, Gemini CLI |

### Launch

| Skill | What it does | By | Install |
|---|---|---|---|
| [Orbit Card](effect/hyperframes-orbit-card.md) | A single feature card orbits a dot sphere on a Blender-made camera move: a 10-second product beat. | HeyGen | Claude Code, Codex, Cursor, Gemini CLI |

### Logo Walls

| Skill | What it does | By | Install |
|---|---|---|---|
| [Brand Chips Spring In](effect/brand-chips-spring-in.md) | Round brand chips pop in one by one with a spring and overlap into a tidy stack. | Kapish Dima · remocn | Claude Code, Codex, Cursor |
| [Integration Logos Light Up](effect/integration-logos-light-up.md) | A grid of integration tiles sits dim; each lights with a traveling border glow as the narration names it. | HeyGen | Claude Code, Codex, Cursor |
| [Integrations Orbit the Logo](effect/integrations-orbit.md) | App icons circle your logo on one or two thin rings turning in opposite directions. | Magic UI | Claude Code, Codex, Cursor |
| [Logo Grid Settles In](effect/logo-grid-settles.md) | Logos fade and scale into a tidy grid with a soft stagger, then hold for a beat. | HeyGen | Claude Code, Codex, Cursor |
| [Logos Float Past in Depth](effect/model-logos-float-past.md) | Partner or model logos drift past on a tilted plane, sharp near the camera and blurred toward the horizon. | HeyGen | Claude Code, Codex, Cursor |
| [Partner × Partner Lockup](effect/partner-lockup.md) | Two logos slide together from opposite sides and lock around a thin × or + mark. | HeyGen | Claude Code, Codex, Cursor |
| [Trusted-By Logo Marquee](effect/trusted-by-marquee.md) | A row of monochrome customer logos glides sideways in a seamless loop under a short line. | Julien Thibeaut (ibelick) | Claude Code, Codex, Cursor |

### Native Ui

| Skill | What it does | By | Install |
|---|---|---|---|
| [Duo Foldable Phone](effect/hyperframes-duo.md) | Two HTML screens composited into a photo of hands holding an open foldable phone, for side-by-side meme videos. | HeyGen | Claude Code, Codex, Cursor, Gemini CLI |
| [iPhone Duo Fold](effect/iphone-duo-fold.md) | Your screens on Apple's foldable iPhone Duo, unfolding in 3D with its progressive blur. Local, free. | varg | Claude Code |
| [X Posting License](effect/hyperframes-x-posting-license.md) | A 10-second animated 'posting license' card for an X profile, filled with real profile data into a locked template. | HeyGen | Claude Code, Codex, Cursor, Gemini CLI |

### Numbers

| Skill | What it does | By | Install |
|---|---|---|---|
| [Axis-Free Speed Comparison](effect/axis-free-comparison.md) | Two or three bars with no axis numbers, just labels and a big multiplier like "2.4× faster". | HeyGen | Claude Code, Codex, Cursor |
| [Bars Grow with Value Labels](effect/bars-grow-with-labels.md) | Bars rise from the baseline in a staggered cascade with values riding their tops. | HeyGen | Claude Code, Codex, Cursor |
| [Before → After Metric](effect/before-after-metric.md) | The old number shows, gets crossed or rolls, and the new better number takes its place. | Kapish Dima · remocn | Claude Code, Codex, Cursor |
| [Big Stat Count-Up](effect/big-stat-count-up.md) | One huge number counts from zero to its value and lands, with a short label under it. | HeyGen | Claude Code, Codex, Cursor |
| [Dense Specs Wall](effect/dense-specs-wall.md) | A grid of short spec tiles fills the frame in a fast stagger — numbers and two-word labels. | HeyGen | Claude Code, Codex, Cursor |
| [Line Draws with Riding Label](effect/line-draws-riding-label.md) | A line draws itself left to right while the current value rides the pen tip, ending on a dot and big label. | HeyGen | Claude Code, Codex, Cursor |
| [Maps and Data Motion: travel maps, charts and visualizers](effect/maps-and-data-motion.md) | Globe dives, flyovers, route maps, self-drawing charts, count-ups and audio visualizers with camera curves, chart rules and map credits. | varg | Claude Code, Codex, Cursor, OpenClaw, Gemini CLI |
| [Money Counter Payoff](effect/money-counter-payoff.md) | A currency figure counts up fast, flashes green on landing, and a small burst celebrates it. | Stronkter · HeyGen | Claude Code, Codex, Cursor |
| [Odometer Digit Roll](effect/odometer-digit-roll.md) | Each digit rolls on its own wheel to the target, places settling right to left like an odometer. | HeyGen | Claude Code, Codex, Cursor |
| [Pain Metric Falls Away](effect/pain-metric-falls.md) | A painful metric (hours, cost, errors) draws a falling line while the number counts down and the mood lifts. | HeyGen | Claude Code, Codex, Cursor |
| [Progress Ring Fills](effect/progress-ring-fills.md) | A thin ring draws on to a percentage while the number in its center counts up in sync. | HeyGen | Claude Code, Codex, Cursor |
| [Ranked Bar Race](effect/ranked-bar-race.md) | Ranked bars grow and overtake each other over time while the axis rescales and a year/date ticks. | HeyGen | Claude Code, Codex, Cursor |
| [Ticking Time-Saved Clock](effect/ticking-time-saved.md) | Clock-style digits slide as seconds tick, timing the task live on screen. | Julien Thibeaut (ibelick) | Claude Code, Codex, Cursor |

### Quotes

| Skill | What it does | By | Install |
|---|---|---|---|
| [Community Post as Proof](effect/community-post-proof.md) | A real community post or comment card pops over the footage with its upvotes counting up. | HeyGen | Claude Code, Codex, Cursor |
| [GitHub Stars as Proof](effect/star-count-proof.md) | Stargazer avatars fly past while a star counter odometers up to the repo's real total. | Kapish Dima · remocn | Claude Code, Codex, Cursor |
| [Pull Quote Beside the Speaker](effect/pull-quote-beside-speaker.md) | While a customer talks on camera, their key sentence appears as large type in the empty side of the frame. | HeyGen | Claude Code, Codex, Cursor |
| [Quote at Reading Pace](effect/quote-at-reading-pace.md) | One strong customer sentence reveals word by word, then the name, role and avatar settle under it. | HeyGen | Claude Code, Codex, Cursor |
| [Reviews Arrive as Notifications](effect/reviews-as-notifications.md) | Short reviews land as system notifications that stack and push each other down. | Magic UI | Claude Code, Codex, Cursor |
| [Split-Flap Headline Quote](effect/split-flap-quote.md) | A short quote or result spells itself out on a split-flap board, tiles flipping until they land. | Aceternity UI | Claude Code, Codex, Cursor |
| [Star Rating Sweep](effect/star-rating-sweep.md) | Five stars fill left to right to the real score while the number counts up beside them. | HeyGen | Claude Code, Codex, Cursor |
| [Tweet as Proof Card](effect/tweet-proof-card.md) | A real post from a user animates in as a card: avatar, name, text, then counts tick up. | HeyGen | Claude Code, Codex, Cursor |
| [Wall of Love Marquee](effect/wall-of-love-marquee.md) | Two or three rows of review cards drift in opposite directions, fading at the edges. | Magic UI | Claude Code, Codex, Cursor |

### Shaders

| Skill | What it does | By | Install |
|---|---|---|---|
| [Paper Shaders Backgrounds](effect/craft-paper-shaders.md) | Frame-exact shader backgrounds and logo stings: 9 varg presets, 124 of Paper's own and 11 researched looks, rendered locally. | varg | — |

### Titles

| Skill | What it does | By | Install |
|---|---|---|---|
| [Clean Lower Third](effect/clean-lower-third.md) | Name and role slide in at the lower left on a quiet bar, hold 3–5 s, then wipe out. | HeyGen | Claude Code, Codex, Cursor |
| [Decode-In Tech Title](effect/decode-in-tech-title.md) | Random glyphs churn and lock into the real word from left to right. | HeyGen | Claude Code, Codex, Cursor |
| [Dim Everything But the Target](effect/dim-around-spotlight.md) | The frame darkens except a soft ellipse around the element being talked about. | HeyGen | Claude Code, Codex, Cursor |
| [Footage Inside the Letters](effect/footage-inside-letters.md) | Huge block letters act as windows onto playing product footage or a demo clip. | Magic UI | Claude Code, Codex, Cursor |
| [Hand-Drawn Callout Arrow](effect/hand-drawn-callout-arrow.md) | A wobbly arrow draws itself from a short label to the exact button or number on screen. | HeyGen | Claude Code, Codex, Cursor |
| [Impact Headline Slam](effect/impact-headline-slam.md) | A heavy headline scales down hard into frame and lands with a 2–3 frame shake. | HeyGen | Claude Code, Codex, Cursor |
| [Kicker Over Rising Headline](effect/kicker-headline-rise.md) | A small mono kicker fades in, then the headline rises word by word from a soft blur. | HeyGen | Claude Code, Codex, Cursor |
| [Marker on the Key Phrase](effect/marker-highlight-phrase.md) | A marker band draws behind the one phrase that matters while the rest of the line stays calm. | HeyGen | Claude Code, Codex, Cursor |
| [Masked Line Reveal](effect/masked-line-reveal.md) | Each line slides up out of an invisible slot, so the type looks cut from the frame. | Daniel Petho | Claude Code, Codex, Cursor |
| [Phrase Builds From the Center](effect/center-build-phrase.md) | Words arrive one at a time and push the growing phrase so it always sits centered. | Remocn · HeyGen | Claude Code, Codex, Cursor |
| [Rotating Benefit Word](effect/rotating-benefit-word.md) | A fixed phrase holds while one word in it cycles through benefits, uses or audiences. | Aceternity UI | Claude Code, Codex, Cursor |
| [Specular Sweep Title](effect/specular-sweep-title.md) | A static title receives one clean light sweep through its glyphs, then rests. | HeyGen | Claude Code, Codex, Cursor |
| [Strike Old, Write New](effect/strike-and-replace.md) | A line strikes through the old way, then the new word takes its place. | HeyGen | Claude Code, Codex, Cursor |
| [Title Design: lower thirds and title reveals by broadcast rules](effect/title-design.md) | Lower thirds, speaker plates, show opens and glitch, CRT or chrome title reveals with hold times, safe areas and easing as presets. | varg | Claude Code, Codex, Cursor, OpenClaw, Gemini CLI |
| [Tracking-In Feature Label](effect/tracking-in-label.md) | Wide-spaced letters draw together into a tight, crisp label as the blur clears. | HeyGen | Claude Code, Codex, Cursor |

### Transitions

| Skill | What it does | By | Install |
|---|---|---|---|
| [3D Cube](effect/cube-3d.md) | Both shots sit on faces of a cube that turns, carrying A away and B into view. | gre · GL Transitions | Claude Code, Codex, Cursor |
| [3D Flip](effect/flip-3d.md) | The frame flips over like a card; its back side is the next shot. | HeyGen | Claude Code, Codex, Cursor |
| [Blur Through](effect/blur-transition.md) | A blurs out of focus, the shots swap at peak blur, and B pulls back into focus. | HeyGen | Claude Code, Codex, Cursor |
| [Box Crop Through Black](effect/xfade-rect-crop.md) | A shrinks into a rectangle on black, B grows out of one. A boxy cousin of the iris. | varg | Claude Code, Codex, Cursor |
| [Camera Shake](effect/camera-shake.md) | A short violent shake (often with a zoom) hits on the cut, like an impact or a bass hit. | HeyGen | Claude Code, Codex, Cursor |
| [CapCut Draft Automation](effect/capcut-draft-automation.md) | Generate CapCut/JianYing drafts from code, with real CapCut transitions on each cut, then export in the app. | varg | Claude Code, Codex, Cursor |
| [Chromatic Split](effect/chromatic-split.md) | Red, green and blue channels pull apart around the cut, then snap back together on the new shot. | HeyGen | Claude Code, Codex, Cursor |
| [Circle Crop Through Black](effect/xfade-circle-crop.md) | A closes to a circle on black, then B opens from it — the cartoon “that’s all folks” beat. | Kapish Dima · remocn | Claude Code, Codex, Cursor |
| [Circle Iris](effect/circle-iris.md) | B opens from (or A closes into) a growing circle, like an old-cartoon iris or a lens opening. | HeyGen | Claude Code, Codex, Cursor |
| [Clock Wipe](effect/clock-wipe.md) | A hand sweeps around the centre like a clock, replacing A with B. | HeyGen | Claude Code, Codex, Cursor |
| [Color-Distance Blend](effect/xfade-distance.md) | A blend that swaps pixels by how different their colours are, so similar areas change first. | HeyGen | Claude Code, Codex, Cursor |
| [Corner Wipe](effect/xfade-corner-wipe.md) | A rectangle grows from one corner until B fills the frame. Variants: wipetl, wipetr, wipebl, wipebr. | varg | Claude Code, Codex, Cursor |
| [Cover and Reveal](effect/xfade-cover-reveal.md) | B slides in over a still A (cover), or A slides away to uncover B (reveal). Variants: cover*/reveal* in four directions. | HeyGen | Claude Code, Codex, Cursor |
| [Custom xfade Expression](effect/xfade-custom-expr.md) | Write your own transition as a per-pixel expression with xfade=transition=custom:expr=… | varg | Claude Code, Codex, Cursor |
| [DaVinci Resolve AddTransition API](effect/resolve-add-transition.md) | Resolve 21.1 added TimelineItem.AddTransition; earlier versions cannot add transitions by script. | varg | Claude Code, Codex, Cursor |
| [Diagonal Wipe](effect/xfade-diagonal-wipe.md) | A wipe that enters from a corner on a diagonal. Variants: diagtl, diagtr, diagbl, diagbr. | pschroen · GL Transitions | Claude Code, Codex, Cursor |
| [Dip to Black](effect/black-fade.md) | A fades to black, then B fades up. Marks the end of a section or a bigger jump in time. | HeyGen | Claude Code, Codex, Cursor |
| [Fade Through Gray](effect/xfade-fade-grays.md) | A drains to black-and-white, crossfades to B in gray, and B regains its colour. | varg | Claude Code, Codex, Cursor |
| [Fast and Slow Fades](effect/xfade-fade-fast-slow.md) | Dissolves with a curve: fadefast commits to B early, fadeslow lingers on A. Exist in FFmpeg 7+. | varg | Claude Code, Codex, Cursor |
| [FFmpeg xfade Chain for N Clips](effect/ffmpeg-xfade-chain.md) | Chain xfade + acrossfade across N clips; offset of the k-th transition = d1+…+dk − k·T. | varg | Claude Code, Codex, Cursor |
| [FFmpeg xfade Transition Reference](effect/ffmpeg-xfade-reference.md) | All 58 built-in xfade transitions plus custom expressions, grouped by look, with the options that matter. | varg | Claude Code, Codex, Cursor |
| [Film Burn](effect/film-burn.md) | Hot glowing holes or a flare burn across A like overheated film and reveal B. | anastasia-dunbar · GL Transitions | Claude Code, Codex, Cursor |
| [Freeze Transition](effect/freeze-transition.md) | Trend: freeze on a frame with a flash, cut out or zoom the subject, add a label, then cut to the next shot. | HeyGen | Claude Code, Codex, Cursor |
| [GL Transitions in Remotion](effect/remotion-gl-transitions.md) | glTransition({name}) turns any gl-transitions shader into a TransitionSeries presentation. | gre · GL Transitions | Claude Code, Codex, Cursor |
| [GL Transitions via editly or FFmpeg](effect/gl-transitions-ffmpeg-editly.md) | Run any of the ~125 GLSL gl-transitions between clips: editly (no custom build) or a patched FFmpeg. | gre · GL Transitions | Claude Code, Codex, Cursor |
| [Glitch](effect/glitch-transition.md) | The frame tears into displaced slices, colour channels split and noise flickers as A breaks into B. | HeyGen | Claude Code, Codex, Cursor |
| [Gradient (Luma) Wipe](effect/luma-gradient-wipe.md) | B appears in the order of a grayscale map (gradient, noise or the image's own brightness). | HeyGen | Claude Code, Codex, Cursor |
| [Heart Mask](effect/heart-mask.md) | B appears through a heart shape that grows to fill the frame. Social, playful and romantic. | varg | Claude Code, Codex, Cursor |
| [HyperFrames Scene Transition (CSS)](effect/hyperframes-scene-transition.md) | Overlap two clips or sub-compositions on separate tracks and tween both wrappers at the same time T. | HeyGen | Claude Code, Codex, Cursor |
| [HyperFrames Shader Transition](effect/hyperframes-shader-transition.md) | Place a WebGL shader between two HyperFrames scenes with HyperShader.init({scenes, transitions}). | HeyGen | Claude Code, Codex, Cursor |
| [HyperFrames Whip with Motion Blur](effect/hyperframes-whip-motion-blur.md) | Fly scene A out and scene B in at matched velocity with directional blur peaking at the swap. | HeyGen | Claude Code, Codex, Cursor |
| [Ink and Brush Reveal](effect/ink-brush.md) | An organic ink blot, brush stroke or smoke plume spreads over A and B shows through the painted area. | HeyGen | Claude Code, Codex, Cursor |
| [Light Leak](effect/light-leak.md) | A warm wash of orange/red light drifts across and blows out the frame at the cut, then fades on B. | HeyGen | Claude Code, Codex, Cursor |
| [Light Sweep](effect/light-sweep.md) | A bright band or lens flare sweeps across the frame and the shot changes behind it. | HeyGen | Claude Code, Codex, Cursor |
| [Mix (Cross Dissolve)](effect/mix-dissolve.md) | The two shots blend through each other. The quietest transition: "time passes" or "this continues". | HeyGen | Claude Code, Codex, Cursor |
| [MoviePy Crossfade and Slide](effect/moviepy-crossfade.md) | In MoviePy v2, crossfade with vfx.CrossFadeIn plus negative padding (or with_start in a CompositeVideoClip). | varg | Claude Code, Codex, Cursor |
| [Normalize Clips Before xfade](effect/ffmpeg-normalize-before-xfade.md) | The #1 xfade failure: inputs differ in size, fps or timebase. Normalize every input first. | varg | Claude Code, Codex, Cursor |
| [OTIO and XML Handoff to NLEs](effect/otio-fcpxml-handoff.md) | Write the edit (clips, cuts, dissolves) as OpenTimelineIO and convert to XML so an editor can finish it in an NLE. | varg | Claude Code, Codex, Cursor |
| [Page Turn](effect/page-turn.md) | Shot A peels or turns like a page and the next shot lies underneath. | hewlett-packard · GL Transitions | Claude Code, Codex, Cursor |
| [Pixel Dissolve](effect/xfade-pixel-dissolve.md) | A dithered dissolve: B appears pixel by pixel in random noise instead of a smooth fade. | Kapish Dima · remocn | Claude Code, Codex, Cursor |
| [Pixelate](effect/pixelate-mosaic.md) | A breaks into ever larger pixels, swaps at the coarsest point, and B sharpens back. | gre · GL Transitions | Claude Code, Codex, Cursor |
| [Pull In (Zoom In)](effect/pull-in-zoom.md) | The camera rushes into shot A and lands, still moving forward, in shot B. The signature short-form transition. | HeyGen | Claude Code, Codex, Cursor |
| [Pull Out (Zoom Out)](effect/pull-out-zoom.md) | The camera jerks backwards out of shot A and keeps pulling back as shot B settles in. | HeyGen | Claude Code, Codex, Cursor |
| [Remotion Custom Presentation](effect/remotion-custom-presentation.md) | Write your own transition as a component that receives progress (0→1) and whether it is entering or exiting. | varg | Claude Code, Codex, Cursor |
| [Remotion TransitionSeries](effect/remotion-transitionseries.md) | Sequence scenes with <TransitionSeries>; each transition overlaps its neighbours, so the video gets shorter. | varg | Claude Code, Codex, Cursor |
| [Ripple and Wave](effect/ripple-wave.md) | Rings or waves distort the frame like water while the shots crossfade. | pawel-plociennik · GL Transitions | Claude Code, Codex, Cursor |
| [Shutter and Blinds](effect/shutter-blinds.md) | Stripes close over A like blinds or a shutter, then open on B. | Kapish Dima · remocn | Claude Code, Codex, Cursor |
| [Slide / Push](effect/slide-push.md) | B pushes A out of frame (push), slides over it (cover) or A slides away to reveal B (reveal). | HeyGen | Claude Code, Codex, Cursor |
| [Soft-Edge Wipe](effect/xfade-smooth-wipe.md) | A wipe with a wide, feathered edge so the two shots blend along a gradient. Variants: smoothleft/right/up/down. | HeyGen | Claude Code, Codex, Cursor |
| [Spin](effect/spin-rotate.md) | The frame rotates fast around its centre (with blur) and comes out of the spin on the next shot. | bread · GL Transitions | Claude Code, Codex, Cursor |
| [Split and Slices](effect/split-slices.md) | The frame breaks into bars that slide apart or open like doors, revealing the next shot. | gre · GL Transitions | Claude Code, Codex, Cursor |
| [Squeeze and Stretch](effect/squeeze-stretch.md) | A is squashed or stretched toward an edge or the centre and B springs out the same way. | HeyGen | Claude Code, Codex, Cursor |
| [Swirl Vortex](effect/swirl-vortex.md) | A twists into a spiral at the centre and unwinds as B. | sergey-kosarevsky · GL Transitions | Claude Code, Codex, Cursor |
| [Transition Craft: six transitions timed like an editor](effect/transition-craft.md) | Shake cuts, infinite Droste zooms, tile-flip mosaics, bokeh and collage transitions with frame counts, beat placement and decay curves. | varg | Claude Code, Codex, Cursor, OpenClaw, Gemini CLI |
| [Velocity Edit](effect/velocity-edit.md) | Trend: speed curves on every clip (fast-slow-fast) synced to the beat, often with shake and flash on hits. | HeyGen | Claude Code, Codex, Cursor |
| [Whip Swipe](effect/whip-swipe.md) | A fast synthetic pan with heavy motion blur pushes A off and B in. Fakes a whip pan between any two shots. | HeyGen | Claude Code, Codex, Cursor |
| [White Flash](effect/white-flash.md) | The frame blows out to white for a moment and opens on the next shot. Energy, memory or a camera snap. | HeyGen | Claude Code, Codex, Cursor |
| [Wind Wipe](effect/xfade-wind.md) | A ragged, streaky wipe that blows A off the screen. Variants: hlwind, hrwind, vuwind, vdwind. | gre · GL Transitions | Claude Code, Codex, Cursor |
| [Wipe](effect/wipe.md) | A moving edge replaces A with B across the frame while both images stay still. | HeyGen | Claude Code, Codex, Cursor |
| [Zoom Blur](effect/zoom-blur.md) | Both shots smear into a radial zoom blur that bursts open on the next shot. | rectalogic · GL Transitions | Claude Code, Codex, Cursor |
| [Zoom Into Next](effect/xfade-zoom-in.md) | A scales up toward the viewer and fades, revealing B — the simple FFmpeg version of a zoom transition. | HeyGen | Claude Code, Codex, Cursor |

### Ui

| Skill | What it does | By | Install |
|---|---|---|---|
| [3D Tilted Dashboard Reveal](effect/tilted-dashboard-reveal.md) | The dashboard rises from a steep 3D tilt to flat, like a screen lifting toward the viewer. | HeyGen | Claude Code, Codex, Cursor |
| [App UI Mockups: chats, terminals and code for launch videos](effect/app-ui-mockups.md) | Message threads, team chat, coding-agent terminals, code walkthroughs, 3D code slabs and exploded UIs at measured typing and reading speeds. | varg | Claude Code, Codex, Cursor, OpenClaw, Gemini CLI |
| [Before/After UI Wipe](effect/before-after-ui-wipe.md) | A divider sweeps across one screen, turning the old version into the new one underneath. | HeyGen | Claude Code, Codex, Cursor |
| [Card Expands Into Detail](effect/card-expands-to-detail.md) | A small card grows into a full detail panel in one continuous shape change. | HeyGen | Claude Code, Codex, Cursor |
| [Command Palette Pop](effect/command-palette-pop.md) | ⌘K opens a palette, a few letters filter the list, the highlight moves and Enter fires the action. | Kapish Dima · remocn | Claude Code, Codex, Cursor |
| [Filmed Off a Monitor](effect/filmed-off-a-monitor.md) | The UI looks filmed on a real display: slight perspective, focus falloff and glare. | HeyGen | Claude Code, Codex, Cursor |
| [Floating UI Panels in Depth](effect/floating-ui-panels.md) | The interface splits into its panels, which float apart in depth with parallax, then snap back. | HeyGen | Claude Code, Codex, Cursor |
| [Form Fills Itself](effect/form-fills-itself.md) | A cursor tabs through a short form; fields type, validate and the submit button resolves to success. | HeyGen | Claude Code, Codex, Cursor |
| [Liquid Glass UI Layer](effect/liquid-glass-ui-layer.md) | Frosted, refractive glass cards and toolbars float over a colorful scene or photo. | HeyGen | Claude Code, Codex, Cursor |
| [Pinned Mock, Changing States](effect/pinned-mock-changing-states.md) | One product frame stays put while tabs or captions switch it through several feature states. | HeyGen | Claude Code, Codex, Cursor |
| [Toggle Turns the Feature On](effect/toggle-turns-feature-on.md) | A cursor flips a settings switch and the result appears at once elsewhere in the UI. | HeyGen | Claude Code, Codex, Cursor |
| [UI Builds Itself Piece by Piece](effect/ui-builds-itself.md) | Grey skeleton blocks pulse once, then real cards, charts and text fill in with a stagger. | HeyGen | Claude Code, Codex, Cursor |
| [Zoom to the Action](effect/zoom-to-the-action.md) | The full app establishes, then the camera pushes 1.5–2× into the part being used and eases back out. | HeyGen | Claude Code, Codex, Cursor |

## Styles

Looks, LUTs, fonts and art directions a model or a render can follow. On varg how to: <https://varg.ai/how-to/styles.md>

### Art Direction

| Skill | What it does | By | Install |
|---|---|---|---|
| [Algorithmic Art](style/anthropic-algorithmic-art.md) | Create original generative art in p5.js: write an algorithmic philosophy, then code it with seeded randomness. | Anthropic | Claude Code, Codex, Cursor, Gemini CLI |
| [Canvas Design](style/anthropic-canvas-design.md) | Design posters and visual art as PNG or PDF from a written design philosophy, with 54 bundled fonts. | Anthropic | Claude Code, Codex, Cursor, Gemini CLI |
| [fal Game Dev](style/fal-gamedev.md) | Generate 2D pixel-art game assets: characters, sprite sheets, walk and attack cycles, parallax backgrounds. | fal | Claude Code, Codex, Cursor, Gemini CLI |
| [Generative Art (Camille Roux)](style/genart-skill.md) | Long-form generative art craft from Camille Roux: hash-seeded determinism, traits and rarity, verification, export. | Camille Roux | Claude Code |
| [Halftone Collage B-roll](style/gbro-collage-broll.md) | Editorial halftone paper-collage B-roll from one line of script, with three approval gates before any video spend. | pyang5166 | Codex |
| [Lemo-Opuscar Film Styles](style/lemo-opuscar.md) | 59 film styles made entirely in code (oil paint, watercolor, ukiyo-e, satellite briefing, exploded teardown). | Lemomo | Claude Code |

### Captions

| Skill | What it does | By | Install |
|---|---|---|---|
| [Open Fonts for Captions](style/craft-caption-fonts.md) | 12 OFL caption and title families, plus the tools to load, fit, split and subset them so renders never use a fallback. | varg | — |

### Color

| Skill | What it does | By | Install |
|---|---|---|---|
| [Color Grade AI](style/color-grade-ai.md) | Measures a frame or clip and writes .cube 3D LUTs for DaVinci Resolve and Premiere: fixes, shot matching, presets. | Isaac Rowntree | Claude Code |
| [Color Looks & LUTs](style/craft-color-looks.md) | Name a look, get prompt words plus an ffmpeg grade: LUT at partial strength, then moving grain. | varg | — |
| [FLUX 3 Archival Formats](style/flux-3-archival-formats.md) | Give FLUX 3 video a period look by naming the recording format and its artifacts, not a mood. | Black Forest Labs | Claude Code, Codex, Cursor, Gemini CLI |
| [Original LUT Pack](style/craft-lut-pack.md) | varg-baked .cube looks plus link-only vendor LUT pages — every file with its license on record. | varg | — |
| [Theme Factory](style/anthropic-theme-factory.md) | Restyle slides, docs and pages with one of 10 matched color-and-font themes, or generate a new one. | Anthropic | Claude Code, Codex, Cursor, Gemini CLI |

### Image

| Skill | What it does | By | Install |
|---|---|---|---|
| [Anatomy Isometric Figures](style/anatomy-isometric.md) | Detailed interactive isometric SVG figures that explain a technical idea as a physical object, with optional WebGL. | Ryan | Claude Code, Codex |

### Logos

| Skill | What it does | By | Install |
|---|---|---|---|
| [Brand Guidelines](style/anthropic-brand-guidelines.md) | Apply Anthropic's colors and typography to any artifact; a compact template for your own brand skill. | Anthropic | Claude Code, Codex, Cursor, Gemini CLI |

### Style Refs

| Skill | What it does | By | Install |
|---|---|---|---|
| [Are.na MCP](style/arena-mcp.md) | Build and read Are.na moodboard channels from your agent. | Are.na | Claude Code, Codex, mcp |
| [FrameThrower Film References](style/framethrower.md) | Film stills from 5,489 films, searchable by lighting, lens, shot size, color and mood. | FrameThrower | claude-ai, mcp |
| [GPT Image 2 Style Library](style/gpt-image-2-style-library.md) | Pick styles and industrial prompt templates for GPT Image 2/2.5 from a 530+ case library (a 35K-star repo). | Canghe | Claude Code, Codex |
| [Reference Finder](style/craft-reference-finder.md) | Pointer-only reference search: deep links to shot.cafe, film-grab and eyecannndy — never the frames. | varg | — |

## Guides

Best practices and references agents read before they generate or edit. On varg how to: <https://varg.ai/how-to/guides.md>

### 3d Scenes

| Skill | What it does | By | Install |
|---|---|---|---|
| [R3F Skills](guide/enzed-r3f-skills.md) | 11 React Three Fiber skills checked against Fiber 9.7 and three r185: Canvas, demand loops, loaders, shaders, post. | Nicolas Zullo | Claude Code |
| [Three.js Scene Composition](guide/calesthio-threejs-scene-composition.md) | Plan, build and capture Three.js scenes for video: absolute-time frames, seeded motion, color-safe glTF, render QA. | Calesthio | Claude Code |
| [Three.js Skills](guide/threejs-skills.md) | 13 Three.js skills: scenes, geometry, materials, lighting, GLSL and TSL shaders, animation, post-processing, R3F. | CloudAI-X | Claude Code |

### Ads

| Skill | What it does | By | Install |
|---|---|---|---|
| [Ad Creative (Marketing Skills)](guide/marketingskills-ad-creative.md) | Generate and iterate ad headlines, primary text and full variations for any platform, using your performance data. | Corey Haines | Claude Code, Codex, Cursor |
| [Ad Library Teardown](guide/scrapecreators-ad-library-teardown.md) | Tear down competitors' live ads from Meta, Google and LinkedIn libraries: hooks, offers, CTAs, test ideas. | ScrapeCreators | Claude Code, Codex, Cursor |
| [Adobe Firefly Run Workflow](guide/adobe-firefly-run-workflow.md) | Adobe plugin for Firefly Creative Production workflows: product banners at scale, retargeting, localization. | Adobe | Claude Code, Codex, mcp |
| [Adobe for Creativity Skills](guide/adobe-for-creativity-social-variations.md) | Adobe's skills for its Claude connector: social crops of images and video, Express-template designs, Quick Cut reels. | Adobe | claude-ai |
| [Anthropic Marketing Plugin](guide/anthropic-marketing-plugin.md) | Anthropic's marketing plugin: campaign plans with channels and budgets, competitive briefs, brand review and performance reports. | Anthropic | Claude Code |
| [Canva Skills + MCP (official)](guide/canva-skills-mcp.md) | Official Canva plugin: resize a design to every social format, bulk-create from CSV, brand-check, edit via Canva MCP. | Canva | Claude Code, Codex, Cursor, mcp |
| [Claude Ads](guide/claude-ads.md) | Paid-media ops across 12 ad platforms: audits, creative review, ad image generation, tests, reports. | Daniel Agrici (AI Marketing Hub) | Claude Code, Codex |
| [Google Ads API Skills (official)](guide/google-ads-api-skills.md) | Google's own Google Ads skills: set up the Ads MCP, API quickstart, diagnose lost conversions and impression share. | Google | Claude Code, Codex, Cursor, Gemini CLI |
| [GooseWorks Video Ad Script](guide/gooseworks-video-ad-script.md) | Short-form video ad script from a researched angle and a reference: words, product proof and sound planned before review. | GooseWorks | Claude Code, Codex, Cursor |
| [LangChain Paid Media Agent](guide/langchain-paid-media-agent.md) | Open-source paid-media agent: cross-channel analysis, weekly reports and proposed changes across six ad platforms. | LangChain | Claude Code |
| [Meta Ads Copilot (OpenClaw)](guide/meta-ads-copilot-openclaw.md) | OpenClaw Meta ads copilot on Meta's official CLI: daily briefing, bleeders, winners, fatigue, copy, upload, CAPI audit. | Matt Berman | OpenClaw |
| [Motion Creative Strategy Skills](guide/motion-creative-strategy-skills.md) | Motion's creative-strategy skills: brand intake, review mining, angles, hooks, 45+ visual formats, ad mechanics. | Motion (Alysha) | Claude Code, Codex, Cursor |
| [Paid Ads (Marketing Skills)](guide/marketingskills-paid-ads.md) | Paid-ads strategist: campaign structure, targeting, budgets, kill/scale rules and search-term cleanup across platforms. | Corey Haines | Claude Code, Codex, Cursor |
| [Static Ad Concept Generator](guide/creatify-static-ad-concept-generator.md) | Static ad concepts from 320+ templates: 16 universal angles plus category-specific formats (Creatify). | Creatify | Claude Code, Codex |
| [TikTok Selling Video Guide](guide/tiktok-short-video.md) | Guide to TikTok product-selling videos: formats, 3-second hooks, shooting, editing, hashtags, metrics | zhenyangze | OpenClaw |
| [Turn a product into an AI singing mascot jingle ad](guide/singing-mascot-jingle-ad.md) | The product becomes a claymation mascot that sings a 15-30 s brand jingle: Nano Banana character, Lyria jingle, Seedance 2.5 singing to the song. | varg | Claude Code, Codex, Cursor, OpenClaw, Gemini CLI |
| [Turn an AI video ad into a TikTok Shop and Meta compliance report](guide/tiktok-shop-ad-compliance-check.md) | Checks an AI ad against TikTok Shop, Meta, YouTube, FTC, New York and EU AI Act rules: pass / fix / block per claim with sources. | varg | Claude Code, Codex, Cursor, OpenClaw, Gemini CLI |
| [Turn one winning ad into a creative testing plan](guide/ad-creative-testing.md) | How many ads to test, what to change, when to judge, kill or scale — concepts Meta sees as different. | varg | Claude Code, Codex, Cursor |
| [Turn one winning video ad into 20 AI ad variations](guide/ai-ad-variations.md) | Scales a winning video ad into 20 Andromeda-safe variants: new concepts plus single-variable hook swaps, with a tested FFmpeg script and a test plan. | varg | Claude Code, Codex, Cursor, OpenClaw, Gemini CLI |
| [Turn winning competitor ads into new AI video ad angles](guide/competitor-ad-remix.md) | Breaks down winning ads from the Meta Ad Library or TikTok Creative Center and turns them into 10-20 original concepts for your product. | varg | Claude Code, Codex, Cursor, OpenClaw, Gemini CLI |
| [Video Ad Reverse Engineer](guide/creatify-video-ad-reverse-engineer.md) | Break a competitor video ad into a reusable template: 12-format catalog and a 7-step teardown (Creatify). | Creatify | Claude Code, Codex |
| [Video Ad Specs](guide/inference-sh-video-ad-specs.md) | Build video ads to each platform's exact specs: TikTok, Instagram, YouTube, Facebook and LinkedIn. | inference.sh | Claude Code, Codex, Cursor, Gemini CLI |
| [Video Script Generator](guide/video-script-generator.md) | Writes a short-video script and shot list as YAML/JSON from pain-solution, before-after or plot-twist templates | oliviapp8 | OpenClaw |
| [ViGenAiR (Google)](guide/vigenair-video-ad-variants.md) | Google's open-source tool that recrafts long video ads into shorter, platform-ready variants with Gemini. | Google Marketing Solutions | Claude Code |

### Animation

| Skill | What it does | By | Install |
|---|---|---|---|
| [dotLottie Web](guide/dotlottie-web.md) | Ship Lottie animations on the web with dotLottie: package choice, workers, state machines, theming, slots. | LottieFiles | Claude Code, Codex, Cursor, Gemini CLI |
| [GSAP Core](guide/gsap-core.md) | Official GSAP core guide: to/from/fromTo tweens, eases, staggers, defaults and transforms for DOM and SVG motion. | GSAP (GreenSock) | Claude Code, Codex, Cursor |
| [GSAP Plugins](guide/gsap-plugins.md) | Official GSAP plugins guide, incl. SplitText chars/words/lines with masks and re-splitting once fonts load. | GSAP (GreenSock) | Claude Code, Codex, Cursor |
| [GSAP Timeline](guide/gsap-timeline.md) | Official GSAP timeline guide: position parameter, labels, nesting, defaults and time/progress seeking. | GSAP (GreenSock) | Claude Code, Codex, Cursor |
| [LottieFiles Animation Review](guide/lottiefiles-animation-review.md) | Inspect, compare and diagnose animation renders with LottieFiles Creator's Engine tools (pre-release). | LottieFiles | Claude Code, Codex, Gemini CLI |
| [LottieFiles Animation Workflows](guide/lottiefiles-animation-workflows.md) | Create, edit and export animation documents through LottieFiles Creator's Engine tools (pre-release). | LottieFiles | Claude Code, Codex, Gemini CLI |
| [Motion AI Kit](guide/motion-ai-kit.md) | Write production-grade UI animation with Motion or CSS: best practices, docs search, springs, perf audits. | Motion | Claude Code, Codex, Cursor, Gemini CLI |
| [Motion Design](guide/lottiefiles-motion-design.md) | Animate with intent: timing, easing, choreography and Disney principles for UI and motion graphics. | LottieFiles | Claude Code, Codex, Cursor, Gemini CLI |
| [Remotion Markup](guide/remotion-markup.md) | Write Remotion markup that animates well: timing, transitions, motion blur, effects, audio, fonts and 3D. | Remotion | Claude Code, Codex, Cursor, Gemini CLI |
| [Rive](guide/rive.md) | Know when to reach for Rive for interactive graphics and motion, then start from its CLI or runtime docs. | Rive | Claude Code, Codex, Cursor, Gemini CLI |

### Camera

| Skill | What it does | By | Install |
|---|---|---|---|
| [Shot QA](guide/craft-shot-qa.md) | Check a generated clip against its shot spec — did it dolly in, hold the angle, end on the right frame? | varg | — |
| [Storyboard Creation](guide/inference-sh-storyboard-creation.md) | Storyboard a video before generating: shot types, angles, moves, the 180-degree rule, annotated panels. | inference.sh | Claude Code, Codex, Cursor, Gemini CLI |

### Captions

| Skill | What it does | By | Install |
|---|---|---|---|
| [Caption Pipeline Libraries](guide/craft-caption-libraries.md) | Open-source libraries for every caption step: word timing, alignment, SRT/VTT/ASS, in-page or ffmpeg rendering. | varg | — |
| [Chinese Font Selector](guide/chinese-font-selector.md) | Pick Chinese fonts by license tier first (OFL, vendor-free, avoid), then by scene and mood, with Latin pairings. | Songzhi-lab | Claude Code, Codex, Cursor |
| [FFmpeg Captions and Subtitles](guide/josiahsiegel-ffmpeg-captions.md) | FFmpeg subtitle reference: burn SRT/ASS/VTT with libass, soft tracks, conversion, styling and FFmpeg 8's Whisper filter. | Josiah Siegel | Claude Code |
| [Pretext Text Metrics](guide/pretext-yaniv-golan.md) | Measure and fit text without the DOM using pretext: auto-fit sizes, know line breaks before render, canvas/WebGL text. | Yaniv Golan | Claude Code, Codex, Cursor |
| [Subtitle Translator](guide/gemini-srt-translator.md) | Agent-translated SRT/ASS subtitles in resumable batches that keep cue count, timing and ASS styling tags intact. | Matheus Castro | Claude Code, Codex |
| [Transcribe Anything](guide/swyx-transcribe-anything.md) | Transcribe hours of audio or video with whisper, whisperX or cloud STT: word timestamps, speaker labels, SRT/VTT. | Shawn Wang (swyx) | Claude Code, Codex, Cursor |
| [WhisperX](guide/whisperx.md) | Fast Whisper ASR with word-level timestamps and speaker diarization: the timing layer for captions and cuts. | Max Bain | Claude Code |
| [WJS Translating Subtitles](guide/wjs-translating-subtitles.md) | Translate an SRT to Chinese, English or another language and re-cut cues at real punctuation; bilingual SRTs too. | Jian Shuo Wang | Claude Code, Codex |

### Characters

| Skill | What it does | By | Install |
|---|---|---|---|
| [Character Design](guide/varg-character-design.md) | How to make AI characters people remember: definition, details, clothing, and a sheet that keeps them consistent. | varg | Claude Code, Codex, Cursor, OpenClaw, Gemini CLI |

### Cinematic

| Skill | What it does | By | Install |
|---|---|---|---|
| [FLUX 3 Keyframes & Continuation](guide/flux-3-keyframes-continuation.md) | Build FLUX 3 video from supplied stills or footage: keyframe image-to-video and continuation chains. | Black Forest Labs | Claude Code, Codex, Cursor, Gemini CLI |

### Cuts

| Skill | What it does | By | Install |
|---|---|---|---|
| [Auto-Editor](guide/auto-editor.md) | CLI that cuts dead space by loudness or motion and exports MP4 or editor timelines; now also an agent skill. | WyattBlue | Claude Code |
| [AutoCut](guide/autocut.md) | Edit video in a text editor: Whisper transcribes, you delete lines in Markdown, AutoCut cuts the video. | Mu Li | Claude Code |
| [Cut Video](guide/cut-video.md) | Claude Code skill that tightens long recordings with forced-aligned cuts, keeping laughs and comedic pauses. | Louise de Sadeleer | Claude Code |
| [OpenMontage Silence Cutter & Auto Reframe](guide/openmontage-jump-cut-reframe.md) | Automatic jump cuts from silencedetect, plus a face-tracked 16:9 → 9:16 reframe with a smoothed crop. | Calesthio | Claude Code |
| [PySceneDetect](guide/pyscenedetect.md) | Find cuts, fades and scene changes in a video, then split it or export scene lists for the edit. | Brandon Castellano | Claude Code |
| [SmartCut (capcut-ai-editor)](guide/capcut-smartcut-mcp.md) | MCP that reads CapCut auto-captions to cut silences and duplicate takes right inside your CapCut project. | mrbuslov | mcp |
| [video-editing-skill (Bash + FFmpeg)](guide/video-editing-skill-bash.md) | Pure Bash skill for OpenClaw, Claude Code and Codex: trim, jump cut, captions, text overlay, speed. | 6missedcalls | — |
| [Videogrep](guide/videogrep.md) | Search spoken words across videos and auto-build supercuts of every match. | Sam Lavigne | Claude Code |

### Dubbing

| Skill | What it does | By | Install |
|---|---|---|---|
| [OpenCreator (formerly KrillinAI)](guide/opencreator.md) | Creator workspace on Codex CLI: download, translate, dub and edit video with reusable Skills and Agents. | KrillinAI | Codex |
| [OpenMontage Localization & Dub](guide/openmontage-localization-dub.md) | Transcript-first translation of an existing video into subtitles, dubbed audio and optional lip-synced language variants | Calesthio | Claude Code |
| [pyVideoTrans](guide/pyvideotrans.md) | Full video translation: ASR, subtitle translation, multi-voice dubbing and muxing, with a headless CLI. | jianchang512 | Claude Code |
| [Sync. lipsync MCP](guide/sync-lipsync.md) | Official MCP for the sync. lipsync API: re-time mouths in existing footage to new or translated audio. | sync. | Claude Code |
| [Turn one video ad into 8 languages with AI dubbing](guide/ai-video-ad-translation.md) | Localizes a winning video ad for TikTok Shop and Meta markets: transcreated script, same voice, lip-sync only where faces talk, re-cut on the new words. | varg | Claude Code, Codex, Cursor, OpenClaw, Gemini CLI |
| [VideoLingo](guide/videolingo.md) | One-click subtitle cutting, translation, alignment and dubbing with Netflix-style subtitle rules. | Huanshere | Claude Code |

### Edit Services

| Skill | What it does | By | Install |
|---|---|---|---|
| [Video Editing Best Practices](guide/varg-video-editing.md) | Best practices for editing video with agents: which service for each edit, and the rules that keep cuts clean. | varg | Claude Code, Codex, Cursor |
| [Video editing skills for Claude Code and AI agents](guide/varg-video-edit-library.md) | 206 named edits with recipes for FFmpeg, HyperFrames, Remotion and CapCut: cuts, transitions, titles, UI, numbers. | varg | Claude Code, Codex, Cursor |

### Editing

| Skill | What it does | By | Install |
|---|---|---|---|
| [Adobe Premiere Pro MCP (premiere-mcp.com)](guide/premiere-pro-mcp-hetpatel.md) | Premiere Pro MCP with a local CEP bridge, Claude Code and Codex plugins, and search-then-invoke tools. | Het Patel | Claude Code, mcp |
| [ae-mcp (After Effects MCP)](guide/after-effects-mcp.md) | Adobe After Effects automation via MCP: 16 tools for editing comps, previews, recovery and reusable work. | JUNKDOGE-JOE | mcp |
| [AI YouTube Shorts Generator](guide/ai-youtube-shorts-generator.md) | Open-source Opus Clip alternative: LLM finds highlights in long videos and renders 9:16 shorts with face crop. | Anil-matcha | Claude Code |
| [claude-shorts](guide/claude-shorts.md) | Claude Code skill that scores segments of a long video, snaps cuts to words and renders captioned 9:16 clips. | AgriciDaniel | Claude Code |
| [ClipsAI](guide/clipsai.md) | Python library that segments long transcripts into clips and resizes video to 9:16 around the speaker. | Clips AI | Claude Code |
| [DaVinci Resolve MCP](guide/davinci-resolve-mcp.md) | The most-starred Resolve MCP: drive timelines, media pool, color, Fusion and render from any MCP client. | Samuel Gursky | mcp |
| [FCP MCP Server (FCPXML)](guide/fcp-mcp-server.md) | Read, edit and generate real Final Cut Pro timelines as FCPXML: cut detection, markers, roles, transcript edits. | DareDev256 | Claude Code |
| [ffmpeg-mcp (video-creator)](guide/ffmpeg-mcp-video-creator.md) | FFmpeg MCP for local video search, trimming, concatenation, overlays and playback through dialogue. | video-creator | mcp |
| [ffmpeg-mcp-lite](guide/ffmpeg-mcp-lite.md) | Small FFmpeg MCP: convert, compress, trim, extract audio and add subtitles, installable with uvx. | kevinwatt | Claude Code |
| [JianYing MCP](guide/jianying-mcp.md) | MCP server that creates JianYing drafts: tracks, clips, transitions, filters, masks, keyframes, audio fades. | hey-jian-wei | — |
| [Kinocut](guide/kinocut.md) | Guardrailed local video editing MCP (formerly mcp-video): ~200 FFmpeg tools, quality gates, Shorts repurposing. | Kyanite Labs | Claude Code |
| [OpenMontage B-roll Planning](guide/openmontage-broll-planning.md) | Plans b-roll from a script: stock vs generated, search queries per beat, and how to judge a clip before using it. | Calesthio | Claude Code |
| [OpenMontage Sound Design Rules](guide/openmontage-sound-design.md) | Mix targets an agent can check: dialogue −16 to −14 LUFS, music 18–20 dB under speech, whoosh timing, true-peak limits. | Calesthio | Claude Code |
| [OpenMontage Visual QA](guide/openmontage-visual-qa.md) | Self-review after render: frames at each cut, codec and duration checks, captions over faces, broken transitions. | Calesthio | Claude Code |
| [OpenTimelineIO](guide/opentimelineio.md) | Academy Software Foundation's interchange format and API for editorial timelines (EDL, FCPXML, AAF adapters). | Academy Software Foundation | Claude Code |
| [Premiere Pro MCP (premiere-pro-mcp.com)](guide/premiere-pro-mcp-leancoder.md) | Independent local-first Premiere Pro MCP over a CEP bridge for Claude, Codex and Cursor. | leancoderkavy | mcp |
| [pyCapCut](guide/pycapcut.md) | International CapCut version of pyJianYingDraft: generate CapCut drafts in Python for automated edits. | GuanYixuan | Claude Code |
| [pyJianYingDraft](guide/pyjianyingdraft.md) | Python library that writes JianYing (CapCut China) drafts: tracks, clips, text, effects, transitions, export. | GuanYixuan | Claude Code |
| [Short-form FFmpeg cookbook: copyable commands for Reels](guide/short-form-ffmpeg-cookbook.md) | Footage into a 9:16 MP4 with FFmpeg: crop to vertical, burn captions, trim and join, music under the voice. | varg | Claude Code, Codex, Cursor |
| [Splice AI clips into a video with FFmpeg](guide/varg-ffmpeg-mixing.md) | Splice generated clips into an original video with ffmpeg without A/V drift: absolute trims, one audio track. | varg | — |
| [SpliceKit](guide/splicekit.md) | Patched Final Cut Pro with a command palette and an MCP server of ~200 tools that talk to FCP's runtime. | Elliott Tate | Claude Code |
| [SupoClip](guide/supoclip.md) | Self-hostable OpusClip alternative: long video in, captioned vertical clips out, no watermark. | FujiwaraChoki | Claude Code |
| [Turn raw product footage into a TikTok ad with FFmpeg](guide/ecommerce-video-edit.md) | Footage into a 9:16 ad: hook at second 0, no dead air, text hook, CTA, -14 LUFS, one MP4 per hook. | varg | Claude Code, Codex, Cursor |
| [Unofficial DaVinci MCP](guide/unofficial-davinci-mcp.md) | Resolve MCP with live Studio control plus FCPXML/LUT workflows for the free edition and beat-aware cuts. | wassermanproductions | Claude Code |
| [Video Jungle MCP (video-editing-mcp)](guide/video-jungle-mcp.md) | MCP for Video Jungle: upload, analyze and search footage, then generate edits from the results. | Kirk Kaiser | mcp |

### Explainers

| Skill | What it does | By | Install |
|---|---|---|---|
| [Explainer Video Guide](guide/inference-sh-explainer-video-guide.md) | Plan explainer videos end to end: script formulas, pacing, scene planning, voiceover and assembly. | inference.sh | Claude Code, Codex, Cursor, Gemini CLI |
| [HyperFrames](guide/hyperframes.md) | Turn HTML, CSS and seekable animation into deterministic MP4s: launch films, explainers, captions, title cards. | HeyGen | Claude Code, Codex, Cursor, Gemini CLI |
| [Remotion Create](guide/remotion-create.md) | Scaffold a new Remotion project and lay the video out as clips or scenes before writing any frames. | Remotion | Claude Code, Codex, Cursor, Gemini CLI |
| [viscript Scenes](guide/lottiefiles-viscript.md) | Write animated scenes, diagrams and math shorts in Lua or JS with viscript, then audit and render them. | LottieFiles | — |

### Image

| Skill | What it does | By | Install |
|---|---|---|---|
| [Book Cover Design](guide/inference-sh-book-cover-design.md) | Design book covers that fit their genre: typography rules, sizing, thumbnail tests and AI iterations. | inference.sh | Claude Code, Codex, Cursor, Gemini CLI |
| [OG Image Design](guide/inference-sh-og-image-design.md) | Design Open Graph and social share images to platform specs, with text placement and branding. | inference.sh | Claude Code, Codex, Cursor, Gemini CLI |
| [PixiJS GIFs](guide/pixijs-gif.md) | Load, play and control animated GIFs inside a PixiJS v8 scene. | PixiJS | Claude Code, Codex, Cursor, Gemini CLI |
| [Social Media Carousel](guide/inference-sh-social-media-carousel.md) | Design swipeable carousels for Instagram, LinkedIn and X: slide structure, hooks, text hierarchy. | inference.sh | Claude Code, Codex, Cursor, Gemini CLI |
| [YouTube Thumbnail Design](guide/inference-sh-youtube-thumbnail-design.md) | Design YouTube thumbnails that read on a phone: dimensions, contrast, safe zones, text and faces. | inference.sh | Claude Code, Codex, Cursor, Gemini CLI |

### Kinetic Type

| Skill | What it does | By | Install |
|---|---|---|---|
| [PixiJS Text](guide/pixijs-scene-text.md) | Render and animate text in PixiJS v8: canvas Text, BitmapText, HTMLText and per-character SplitText. | PixiJS | Claude Code, Codex, Cursor, Gemini CLI |
| [Title & Kinetic Typography Direction](guide/calesthio-title-kinetic-typography.md) | Typography direction for video: text jobs, hierarchy, reveal-hold-exit timing, safe zones, contrast, font licensing. | Calesthio | Claude Code, Codex, Cursor |

### Launch

| Skill | What it does | By | Install |
|---|---|---|---|
| [Opus 5.5 Motion Studio Harness](guide/opus-5-5-motion-studio-harness.md) | Eight .md files that turn Claude Code + Remotion into a launch-film studio: brief, style, storyboard, motion, sound, render. | beamnxw | Claude Code |

### Logos

| Skill | What it does | By | Install |
|---|---|---|---|
| [Logo Design Guide](guide/inference-sh-logo-design-guide.md) | Design logos with AI image models: logo types, prompting techniques, scalability rules and iteration. | inference.sh | Claude Code, Codex, Cursor, Gemini CLI |

### Native Ui

| Skill | What it does | By | Install |
|---|---|---|---|
| [App Store Screenshots](guide/inference-sh-app-store-screenshots.md) | Make App Store and Google Play screenshots to exact specs: sizes, gallery order, mockups and previews. | inference.sh | Claude Code, Codex, Cursor, Gemini CLI |

### Product

| Skill | What it does | By | Install |
|---|---|---|---|
| [Product Photography](guide/inference-sh-product-photography.md) | Apply packshot conventions to AI product photos: angles, backgrounds, shadows, hero shots, store specs. | inference.sh | Claude Code, Codex, Cursor, Gemini CLI |
| [Turn a flat-lay photo into an AI virtual try-on video](guide/ai-virtual-try-on-video.md) | Clothing flat-lay to a model wearing it and a fit-check video: Bria virtual try-on still, Kling 4 motion, honest size captions. | varg | Claude Code, Codex, Cursor, OpenClaw, Gemini CLI |
| [Turn product photos into AI video that keeps the logo and shape](guide/consistent-product-ai-video.md) | Stops logos, labels and shapes from warping in AI product video: lock sheet, multi-angle references, camera-risk ladder, drift check. | varg | Claude Code, Codex, Cursor, OpenClaw, Gemini CLI |
| [Turn product photos into an AI ASMR unboxing video](guide/ai-unboxing-video.md) | Hands-only ASMR unboxing from a box and a product photo: timed VISUAL / ACTION / SOUND blocks on Seedance 2.5 with native sound, no music. | varg | Claude Code, Codex, Cursor, OpenClaw, Gemini CLI |

### Research

| Skill | What it does | By | Install |
|---|---|---|---|
| [Head of Content](guide/head-of-content.md) | TikTok, Instagram, YouTube and X outlier research, hook analysis and a content plan. | Brad Bonanno | — |

### Sfx

| Skill | What it does | By | Install |
|---|---|---|---|
| [How to make video sound effects in code with earshot](guide/earshot.md) | Open-source CLI and MCP server: make free UI and motion sound effects in code and let an agent hear them. | Leon Lin | Claude Code |

### Shaders

| Skill | What it does | By | Install |
|---|---|---|---|
| [PixiJS Blend Modes](guide/pixijs-blend-modes.md) | Composite PixiJS v8 layers with add, multiply and screen, or advanced modes like overlay and color-burn. | PixiJS | Claude Code, Codex, Cursor, Gemini CLI |
| [PixiJS Custom Rendering](guide/pixijs-custom-rendering.md) | Write custom shaders, uniforms and batchers for PixiJS v8 that run on both WebGL and WebGPU. | PixiJS | Claude Code, Codex, Cursor, Gemini CLI |
| [PixiJS Filters](guide/pixijs-filters.md) | Add blur, displacement, color-matrix and custom GLSL/WGSL filters to PixiJS v8 scenes without killing FPS. | PixiJS | Claude Code, Codex, Cursor, Gemini CLI |
| [PixiJS Meshes](guide/pixijs-meshes.md) | Deform images with custom geometry in PixiJS v8: meshes, planes, ropes and 2.5D perspective corners. | PixiJS | Claude Code, Codex, Cursor, Gemini CLI |
| [PixiJS Particles](guide/pixijs-particles.md) | Render thousands of lightweight particles in PixiJS v8 with ParticleContainer and dynamic properties. | PixiJS | Claude Code, Codex, Cursor, Gemini CLI |
| [WebGPU Three.js TSL](guide/dgreenheck-webgpu-threejs-tsl.md) | TSL node materials, GPU compute, post-processing and WGSL for three.js WebGPURenderer, by the Three.js Roadmap author. | Dan Greenheck | Claude Code |

### Shorts

| Skill | What it does | By | Install |
|---|---|---|---|
| [Short Video Script](guide/short-video-script.md) | Short-video scripts, titles and cover ideas for Douyin, Kuaishou, Bilibili and WeChat Channels | rascal6666 | OpenClaw |

### Story

| Skill | What it does | By | Install |
|---|---|---|---|
| [AI Video Script](guide/ai-video-script.md) | Turns a topic into a video script: shot list, per-shot image/video prompts and voiceover text | aguo333 | OpenClaw |
| [Drama Skills (ZenStory)](guide/zenstory-drama-skills.md) | Short-drama skills that beat a no-skill control in blind tests: script, assets, storyboard, keyframe and video prompts. | ZenStory AI | Claude Code, Codex |
| [Emma Short-Drama Writing Skills](guide/emma-screenwriting.md) | Short-drama writing kit (hooks, outlines, dialogue, trims, US localization) that beat a no-skill control in blind tests. | Emma Wang | Claude Code, Codex |
| [fal Storytelling](guide/fal-storytelling.md) | Plan multi-shot stories: storyboards, shot lists, first-to-last-frame chains and continuity across scenes. | fal | Claude Code, Codex, Cursor, Gemini CLI |
| [Screenwriting Skills](guide/screenwriting-skills.md) | 26 screenwriting and dramaturgy skills, from story structure to writing in the style of Ozu, Chekhov or Succession. | Terry Jia | Claude Code, Codex |
| [Short Drama Skill Finder](guide/short-drama-skill-finder.md) | Picks short-drama and manju skills from a hand-checked list of 90+ projects by stage, video model and agent. | Underleveled Builder | Claude Code, Codex |

### Talking Head

| Skill | What it does | By | Install |
|---|---|---|---|
| [Spoken Script Writer](guide/dlazy-text-spoken-script.md) | Writes short-video talking-head scripts in a fixed 7-step story structure for a personal brand | dlazyai | OpenClaw |

### Tooling

| Skill | What it does | By | Install |
|---|---|---|---|
| [fal genmedia Workflow](guide/fal-genmedia-workflow.md) | Design multi-step media pipelines with genmedia: generate, edit, add audio and subtitles, batch, deliver. | fal | Claude Code, Codex, Cursor, Gemini CLI |
| [fal Workflow](guide/fal-workflow.md) | Author fal workflow JSON that chains models, or orchestrate the same pipeline locally with genmedia. | fal | Claude Code, Codex, Cursor, Gemini CLI |
| [How to make motion graphics videos with 20 open-source tools](guide/open-source-motion-studio-repos.md) | 20 open-source repos that make a coding agent a motion studio: Remotion, HyperFrames, Three.js, Tone.js, FFmpeg. | eigen | — |
| [HyperFrames CLI](guide/hyperframes-cli.md) | Drive the HyperFrames CLI: scaffold, check, preview, snapshot, edit the timeline, render locally or in the cloud. | HeyGen | Claude Code, Codex, Cursor, Gemini CLI |
| [HyperFrames Media Use](guide/hyperframes-media-use.md) | Find or make every asset a video needs: music, SFX, voiceover, images, logos, avatars, transcripts, grades. | HeyGen | Claude Code, Codex, Cursor, Gemini CLI |
| [HyperFrames Registry](guide/hyperframes-registry.md) | Pull any of ~450 ready-made blocks into a video as editable source: transitions, titles, captions, charts, 3D. | HeyGen | Claude Code, Codex, Cursor, Gemini CLI |
| [PixiJS](guide/pixijs.md) | Build fast 2D WebGL/WebGPU graphics with PixiJS v8; routes each task to the right PixiJS skill. | PixiJS | Claude Code, Codex, Cursor, Gemini CLI |
| [Remotion Best Practices](guide/remotion-best-practices.md) | Make videos in React with Remotion: the router that loads the right Remotion skill for each step. | Remotion | Claude Code, Codex, Cursor, Gemini CLI |
| [Remotion Docs](guide/remotion-docs.md) | Search the Remotion docs and pull any page as Markdown instead of guessing at APIs. | Remotion | Claude Code, Codex, Cursor, Gemini CLI |
| [Remotion Interactivity](guide/remotion-interactivity.md) | Structure Remotion markup so every element can be edited visually in Remotion Studio. | Remotion | Claude Code, Codex, Cursor, Gemini CLI |
| [Remotion Multimedia](guide/remotion-multimedia.md) | Read media metadata in Remotion with Mediabunny: audio duration, video dimensions and length. | Remotion | Claude Code, Codex, Cursor, Gemini CLI |
| [Remotion Render](guide/remotion-render.md) | Render a Remotion composition to a video file or a still, including transparent video. | Remotion | Claude Code, Codex, Cursor, Gemini CLI |
| [Remotion SaaS](guide/remotion-saas.md) | Build a video app or SaaS on Remotion: embed the Player, choose a framework, decide how to render. | Remotion | Claude Code, Codex, Cursor, Gemini CLI |
| [Remotion Studio](guide/remotion-studio.md) | Launch Remotion Studio to preview and scrub a composition in the browser before rendering. | Remotion | Claude Code, Codex, Cursor, Gemini CLI |
| [Remotion to HyperFrames](guide/remotion-to-hyperframes.md) | Port Remotion, Lottie, Three.js, p5 or canvas animations into HyperFrames and verify them frame by frame. | HeyGen | Claude Code, Codex, Cursor, Gemini CLI |
| [Remotion Upgrade](guide/remotion-upgrade.md) | Upgrade Remotion and every @remotion/* package to one matching version, skills included. | Remotion | Claude Code, Codex, Cursor, Gemini CLI |
| [Runway Workflows](guide/runway-workflows.md) | Author, validate and run multi-step Runway workflow graphs from chat through Runway's MCP tools. | Runway | Claude Code, Codex, Cursor, Gemini CLI |
| [Templates Gallery Ops](guide/varg-templates-section.md) | Internal runbook for the varg app Templates gallery: publish renders, preview clips, frame-0 posters, shelves. | varg | — |
| [Turn your agent skill into a varg how to listing](guide/varg-publish-skill.md) | Publish your agent skill to varg how to in the one card format: checked, shown to you, sent for review. | varg | Claude Code, Codex, Cursor |

### Transitions

| Skill | What it does | By | Install |
|---|---|---|---|
| [editly](guide/editly.md) | Declarative JSON5 video editing CLI/API: clips, titles, transitions, audio mixing, rendered with ffmpeg. | Mikael Finstad | Claude Code |

## Models & tools

Model and tool skills: the services that generate, edit, transcribe or render. On varg how to: <https://varg.ai/how-to/models.md>

### Ads

| Skill | What it does | By | Install |
|---|---|---|---|
| [AdLoop](model/adloop-google-ads-mcp.md) | Google Ads + GA4 + Search Console MCP with approval cards for every change; draft, preview, then apply. | kLOsk | Claude Code |
| [Amazon Ads MCP (official)](model/amazon-ads-mcp.md) | Amazon's hosted Ads MCP: Sponsored Products campaigns, reports, budgets, accounts and AMC queries from chat. | Amazon Ads | Claude Code, claude-ai, mcp |
| [Atria Ad Intelligence](model/atria-ad-intelligence.md) | Official Atria plugin: search the ad library, tear down competitors, build swipe files, weekly account reports. | Atria | Claude Code, Codex |
| [ElevenLabs Plugin + Hosted MCP](model/elevenlabs-plugin-creative-studio.md) | Official ElevenLabs plugin on its hosted OAuth MCP: voiceovers, music, images and video via creative_* tools. | ElevenLabs | Claude Code, Codex, mcp |
| [Facebook Ads Library MCP](model/facebook-ads-library-mcp.md) | MCP for the Meta Ad Library: search advertisers, pull creatives and copy, analyze video ads with Gemini. | Proxy (proxy-intell) | Claude Code, Cursor |
| [Foreplay Ad Library MCP](model/foreplay-ad-library-mcp.md) | Foreplay's MCP: 200M+ ads with transcripts, hooks, run time and landing pages, plus your boards and swipe files. | Foreplay | Claude Code, claude-ai, mcp |
| [GoMarble Facebook Ads MCP](model/gomarble-facebook-ads-mcp.md) | Self-hosted Meta Ads MCP for reading campaigns, ad sets, ads and insights with your own token. | GoMarble | Claude Code |
| [Google Ads MCP (official)](model/google-ads-mcp.md) | Google's open-source Google Ads MCP: list accounts, look up fields, run GAQL reports, including YouTube campaigns. | Google Ads API team | Claude Code |
| [HeyGen CLI](model/heygen-cli.md) | Official HeyGen CLI built for agents: avatar videos, translations and bulk jobs as JSON commands. | HeyGen | Claude Code, Codex |
| [Higgsfield CLI (Marketing Studio)](model/higgsfield-cli-marketing-studio.md) | Official Higgsfield CLI: 40+ image and video models plus marketing-studio branded ads and a Virality Predictor. | Higgsfield AI | Claude Code, Codex, Cursor, OpenClaw, Gemini CLI |
| [Hyper Marketing Skills](model/hyper-marketing-skills.md) | Marketing skills on the Hyper MCP: Meta Ads Library research, ad creative generation, Meta/TikTok/Google/OpenAI Ads. | HyperFX | Claude Code, Codex, Cursor |
| [Meta Ads CLI (official)](model/meta-ads-cli.md) | Meta's official ads CLI for coding agents: campaigns, ad sets, creatives, DCO, insights, datasets; new ads start paused. | Meta | Claude Code, Codex, OpenClaw |
| [Meta Ads MCP (official)](model/meta-ads-mcp.md) | Meta's own hosted ads MCP: reporting, ad creation, catalogs, A/B tests, conversion lift, signals and activity logs. | Meta | Claude Code, mcp |
| [Microsoft Advertising MCP (official)](model/microsoft-advertising-mcp.md) | Microsoft's hosted read-only Ads MCP: accounts, campaigns, ad groups, ads, keywords and asset groups for audits. | Microsoft Advertising | claude-ai, mcp |
| [Motion Creative Analytics MCP](model/motion-creative-analytics-mcp.md) | Motion's read-only MCP: top ads by ROAS/CPA/CTR, creative transcripts, demographics, AI tags and competitor Inspo. | Motion | Claude Code, claude-ai, mcp |
| [Pipeboard Ads MCPs](model/pipeboard-ads-mcp.md) | Hosted ads MCPs for Meta, Google, TikTok, Snap and Reddit behind one login: insights, uploads, paused launches. | Pipeboard | Claude Code, mcp |
| [Snapchat Ads MCP (official)](model/snapchat-ads-mcp.md) | Snap's hosted read-only Ads MCP: agents read Snapchat campaigns, ad squads, ads and stats with your own permissions. | Snap Inc. | Claude Code, claude-ai, Codex, Gemini CLI, mcp |
| [TikTok for Business MCP (official)](model/tiktok-ads-mcp.md) | TikTok's hosted Ads MCP: about 400 tools for campaigns, Smart+ ads, audiences, creative ops and reports. | TikTok for Business | Claude Code, claude-ai, mcp |
| [Triple Whale MCP (official)](model/triple-whale-mcp.md) | Triple Whale's read-only MCP: revenue, ROAS, spend and attribution by channel for DTC brands, in any agent. | Triple Whale | Claude Code, claude-ai, mcp |

### Ai Music

| Skill | What it does | By | Install |
|---|---|---|---|
| [AI Music Generation](model/inference-sh-ai-music-generation.md) | Generate songs and instrumentals with ElevenLabs Music, DiffRhythm or Tencent Song Generation. | inference.sh | Claude Code, Codex, Cursor, Gemini CLI |
| [ElevenLabs Music](model/elevenlabs-music.md) | Compose songs, instrumentals, jingles and background tracks from a prompt or a section-by-section plan. | ElevenLabs | Claude Code, Codex, Cursor, OpenClaw, Gemini CLI |
| [ElevenLabs Music (inference.sh)](model/inference-sh-elevenlabs-music.md) | Compose royalty-free tracks up to 10 minutes from a text prompt with ElevenLabs Music, via inference.sh. | inference.sh | Claude Code, Codex, Cursor, Gemini CLI |

### Audio

| Skill | What it does | By | Install |
|---|---|---|---|
| [AI Voice Cloning](model/inference-sh-ai-voice-cloning.md) | Generate expressive voices in 100+ languages with Inworld TTS-2, ElevenLabs and more, from one CLI. | inference.sh | Claude Code, Codex, Cursor, Gemini CLI |
| [Dialogue Audio](model/inference-sh-dialogue-audio.md) | Produce multi-speaker dialogue audio with speaker tags, emotion and pacing for podcasts and explainers. | inference.sh | Claude Code, Codex, Cursor, Gemini CLI |
| [dLazy Kling TTS](model/dlazy-keling-tts.md) | Kling text-to-speech in Chinese or English with 60+ preset voices, via dLazy | dlazyai | OpenClaw |
| [dLazy Kling Voice Clone](model/dlazy-kling-audio-clone.md) | Clones a voice from a reference audio file with Kling, via the dLazy CLI | dlazyai | OpenClaw |
| [ElevenLabs Dialogue](model/inference-sh-elevenlabs-dialogue.md) | Generate a whole multi-voice conversation as one audio file with ElevenLabs, from a script. | inference.sh | Claude Code, Codex, Cursor, Gemini CLI |
| [ElevenLabs Text to Speech](model/elevenlabs-text-to-speech.md) | Turn scripts into natural voiceover in 90+ languages with ElevenLabs voices, streaming and stitching. | ElevenLabs | Claude Code, Codex, Cursor, OpenClaw, Gemini CLI |
| [ElevenLabs TTS (inference.sh)](model/inference-sh-elevenlabs-tts.md) | Voice scripts with ElevenLabs v4, v4 Turbo, v3, Multilingual v2 and Flash, via inference.sh. | inference.sh | Claude Code, Codex, Cursor, Gemini CLI |
| [ElevenLabs Voice Changer](model/elevenlabs-voice-changer.md) | Re-voice a recording in a different voice while keeping its emotion, timing and delivery. | ElevenLabs | Claude Code, Codex, Cursor, OpenClaw, Gemini CLI |
| [ElevenLabs Voice Changer (inference.sh)](model/inference-sh-elevenlabs-voice-changer.md) | Re-voice a recording into another voice while keeping words and emotion, via inference.sh. | inference.sh | Claude Code, Codex, Cursor, Gemini CLI |
| [Text to Speech](model/inference-sh-text-to-speech.md) | Voice any script with Inworld TTS-2, ElevenLabs, Dia, Kokoro or Chatterbox from one CLI. | inference.sh | Claude Code, Codex, Cursor, Gemini CLI |
| [Video Translator](model/video-translator.md) | Translates and dubs a video into Chinese or English and returns a preview link | papawaigo | OpenClaw |

### Captions

| Skill | What it does | By | Install |
|---|---|---|---|
| [ElevenLabs Speech to Text](model/elevenlabs-speech-to-text.md) | Transcribe audio and video with word timestamps, speaker labels and keyterms, ready for subtitles. | ElevenLabs | Claude Code, Codex, Cursor, OpenClaw, Gemini CLI |
| [ElevenLabs Speech to Text (inference.sh)](model/inference-sh-elevenlabs-stt.md) | Transcribe audio with ElevenLabs Scribe, speaker diarization and forced alignment, via inference.sh. | inference.sh | Claude Code, Codex, Cursor, Gemini CLI |
| [Speech to Text](model/inference-sh-speech-to-text.md) | Transcribe audio with ElevenLabs Scribe v2 or Whisper V3 Large, with timestamps and speaker labels. | inference.sh | Claude Code, Codex, Cursor, Gemini CLI |
| [Submagic API](model/submagic.md) | Caption-styled shorts API with an MCP server: AI captions, Magic Clips from long videos, B-roll, publishing. | Submagic | Claude Code |

### Characters

| Skill | What it does | By | Install |
|---|---|---|---|
| [Higgsfield Soul ID](model/higgsfield-soul-id.md) | Train a reusable face model from your photos for identity-consistent images and video on Higgsfield. | Higgsfield | Claude Code, Codex, Cursor, Gemini CLI |

### Cinematic

| Skill | What it does | By | Install |
|---|---|---|---|
| [AI Video Generation](model/inference-sh-ai-video-generation.md) | Generate video with 40+ models from one CLI: Veo 3.1, Seedance 2.0, HappyHorse, Wan, Grok and more. | inference.sh | Claude Code, Codex, Cursor, Gemini CLI |
| [dLazy Jimeng First-Frame Video](model/dlazy-jimeng-i2v-first.md) | Animates a single first-frame image into a 5 or 10 second Jimeng (Dreamina) clip through the dLazy CLI | dlazyai | OpenClaw |
| [dLazy Jimeng First-Last Frame](model/dlazy-jimeng-i2v-first-tail.md) | Jimeng (Dreamina) transition video between a first and last frame, 5 or 10 s, via dLazy | dlazyai | OpenClaw |
| [dLazy Kling V3](model/dlazy-kling-v3.md) | Text-to-video and image-to-video with Kling v3 through the dLazy CLI, 3–15 s clips | dlazyai | OpenClaw |
| [dLazy Kling V3 Omni](model/dlazy-kling-v3-omni.md) | Kling v3 Omni video from frames, up to 7 images or a reference video, via the dLazy CLI | dlazyai | OpenClaw |
| [dLazy PixVerse C1](model/dlazy-pixverse-c1.md) | PixVerse C1 video for action and VFX shots: text, image, reference or first/last frame, via dLazy | dlazyai | OpenClaw |
| [dLazy Seedance 2.0](model/dlazy-seedance-2-0.md) | Seedance 2.0 video from text, image/video/audio references or first and last frames, via dLazy | dlazyai | OpenClaw |
| [dLazy Veo 3.1](model/dlazy-veo-3-1.md) | Google Veo 3.1 video from frames or reference images, plus +7 s extend, up to 4K, via dLazy | dlazyai | OpenClaw |
| [dLazy Video Generate](model/dlazy-video-generate.md) | Picks a video model for your prompt from about 20 on dLazy (Jimeng, Kling, Veo, Seedance, Wan, PixVerse) and runs it | dlazyai | OpenClaw |
| [FLUX 3 Video](model/flux-3-video.md) | Route any FLUX 3 video job to the right specialist: diagnosis, direction, audio or execution. | Black Forest Labs | Claude Code, Codex, Cursor, Gemini CLI |
| [Gemini Omni Flash](model/gemini-omni-flash-api.md) | Generate and edit video with Gemini Omni 1.1 Flash: text-to-video, first/last frames, extensions, edits. | Google Gemini | Claude Code, Codex, Cursor, Gemini CLI |
| [Google Veo](model/inference-sh-google-veo.md) | Generate cinematic video from text with Google Veo 3.1 and Veo 3.1 Fast. | inference.sh | Claude Code, Codex, Cursor, Gemini CLI |
| [HappyHorse](model/inference-sh-happyhorse.md) | Generate and edit video with Alibaba HappyHorse 1.0: text, image and reference-to-video plus video edits. | inference.sh | Claude Code, Codex, Cursor, Gemini CLI |
| [Higgsfield Generate](model/higgsfield-generate.md) | Generate images, video, 3D and audio across 30+ models, plus ad videos and virality scoring, from one CLI. | Higgsfield | Claude Code, Codex, Cursor, Gemini CLI |
| [Image to Video](model/inference-sh-image-to-video.md) | Animate stills into video: pick the right model, then prompt motion and camera moves that hold together. | inference.sh | Claude Code, Codex, Cursor, Gemini CLI |
| [Kling AI](model/klingai.md) | Official Kling CLI: text/image-to-video, Omni reference and edit, images, reusable subjects, quota | Kling AI | OpenClaw |
| [Melies](model/melies.md) | Generate images, video, movie posters and thumbnails from the terminal with 148 AI actors and style flags. | Melies | Claude Code, Codex, Cursor, OpenClaw, Gemini CLI |
| [P-Video](model/inference-sh-p-video.md) | Generate fast 720p/1080p video with audio using Pruna P-Video and Wan text- and image-to-video. | inference.sh | Claude Code, Codex, Cursor, Gemini CLI |
| [Runway Media](model/runway-media.md) | Generate and edit images, video, music, speech and sound effects from chat with Runway's MCP tools. | Runway | Claude Code, Codex, Cursor, Gemini CLI |
| [Runway Studio Skills](model/runway-studio-skills.md) | Run Runway's API from Python scripts: text, image and video-to-video, character performance, images, TTS. | Runway | Claude Code, Codex, Cursor, Gemini CLI |
| [Seedance 2.0](model/inference-sh-seedance.md) | Make 4–15 s videos with synced audio in Seedance 2.0: text, image or reference-to-video up to 1080p. | inference.sh | Claude Code, Codex, Cursor, Gemini CLI |
| [Seedance Video Gen](model/video-gen.md) | Text- and image-to-video with Doubao Seedance on Volcengine, with optional audio and first/last frame | qiujiahong | OpenClaw |
| [Tianshu Wan Video](model/tianshu-wan-video.md) | Text-to-video and image-to-video with Alibaba's Wan 2.6 through DashScope, from a small Node.js script | wangshengli0421 | OpenClaw |
| [Veo 3.1 Fast via dLazy](model/dlazy-veo-3-1-fast.md) | Quick 4–8 s text- or image-to-video clips and +7 s extensions with Google Veo 3.1 Fast, via the dLazy CLI. | dlazyai | OpenClaw |
| [Vidu Q2 Image-to-Video via dLazy](model/dlazy-viduq2-i2v.md) | Animate images into 2–10 s clips with Vidu Q2, by reference images or first/last frame, through the dLazy CLI. | dlazyai | OpenClaw |
| [Wan 2.7 via dLazy](model/dlazy-wan2-7.md) | Text, first/last-frame and reference-to-video with Alibaba's Wan 2.7, 2–15 s clips, through the dLazy CLI. | dlazyai | OpenClaw |

### Dubbing

| Skill | What it does | By | Install |
|---|---|---|---|
| [ElevenLabs Dubbing](model/elevenlabs-dubbing.md) | Dub video and audio into other languages while keeping each original speaker's voice. | ElevenLabs | Claude Code, Codex, Cursor, OpenClaw, Gemini CLI |
| [ElevenLabs Dubbing (inference.sh)](model/inference-sh-elevenlabs-dubbing.md) | Dub audio or video into 29 languages while keeping the speaker's voice, via inference.sh. | inference.sh | Claude Code, Codex, Cursor, Gemini CLI |

### Edit Agents

| Skill | What it does | By | Install |
|---|---|---|---|
| [Mosaic API](model/mosaic.md) | Run node-based video editing agents (Tiles) from code: send video URLs, get edited results, trigger on YouTube. | Mosaic | — |

### Edit Services

| Skill | What it does | By | Install |
|---|---|---|---|
| [FFmpeg Skill](model/ffmpeg-skill.md) | Local video editor for agents: 42 FFmpeg tools with a machine-readable contract and an MCP server; no cloud, no keys. | Shogo Kajiyama | Claude Code, Codex, Cursor |

### Editing

| Skill | What it does | By | Install |
|---|---|---|---|
| [Creatomate](model/creatomate.md) | Template-based video rendering API with an official remote MCP endpoint for Claude and other agents. | Creatomate | Claude Code |
| [Descript (API and MCP)](model/descript.md) | Edit by transcript with Underlord from Claude: import, remove fillers, Studio Sound, publish, export transcripts. | Descript | mcp |
| [JSON2Video](model/json2video.md) | Video editing API that renders JSON scenes; official CLI installs a local MCP server for Claude. | JSON2Video | Claude Code |
| [Local Video Editor (MoviePy)](model/doorstep-video-editor.md) | Local MoviePy + ffmpeg toolbox: trim, merge, Chinese text and subtitles, background music, speed, vertical resize. | ncsimok | OpenClaw |
| [OpusClip skills and API](model/opusclip.md) | Official OpusClip skill and MCP: clip long videos into shorts, copy a video's style, post to social. | OpusClip | Claude Code, Codex, mcp |
| [Shotstack](model/shotstack.md) | Cloud video editing API with an official MCP server, CLI and Claude Code skill built around Edit JSON. | Shotstack | Claude Code, Codex |
| [VectCut](model/vectcut.md) | Drives the VectCut editing API: talking-head cuts, remixes, e-commerce ads, subtitles, effects, cloud render | sun-guannan | OpenClaw |
| [VideoDB skills](model/videodb-skills.md) | Server-side video for agents: ingest, search moments, cut, reframe, subtitle and stream via skills or MCP. | VideoDB | Claude Code, mcp |
| [Vizard.ai API skill](model/vizard-api-skill.md) | Official ClawHub skill for the Vizard.ai API: clip long videos, edit shorts with subtitles and B-roll, publish. | Vizard.ai | OpenClaw |

### Image

| Skill | What it does | By | Install |
|---|---|---|---|
| [AI Image Generation](model/inference-sh-ai-image-generation.md) | Generate images with 50+ models from one CLI: GPT Image 2.5, FLUX, Gemini, Grok, Seedream, Reve and more. | inference.sh | Claude Code, Codex, Cursor, Gemini CLI |
| [Background Removal](model/inference-sh-background-removal.md) | Cut subjects out of photos into clean transparent PNGs with BiRefNet. | inference.sh | Claude Code, Codex, Cursor, Gemini CLI |
| [dLazy Jimeng Text-to-Image](model/dlazy-jimeng-t2i.md) | Generates images with Jimeng (Dreamina) from a prompt and up to 10 reference images, through the dLazy CLI | dlazyai | OpenClaw |
| [dLazy Kling Image O1](model/dlazy-kling-image-o1.md) | Kling o1 text-to-image and reference-image editing at 2K via the dLazy CLI | dlazyai | OpenClaw |
| [FLUX Image](model/inference-sh-flux-image.md) | Generate and restyle images with FLUX Dev LoRA and FLUX.2 Klein, including custom LoRA styles. | inference.sh | Claude Code, Codex, Cursor, Gemini CLI |
| [GPT Image](model/inference-sh-gpt-image.md) | Generate and edit images with OpenAI GPT Image 2.5 and GPT Image 2 from the command line. | inference.sh | Claude Code, Codex, Cursor, Gemini CLI |
| [Image Upscaling](model/inference-sh-image-upscaling.md) | Upscale and enhance low-resolution images with Real-ESRGAN, Thera, Topaz or the FLUX upscaler. | inference.sh | Claude Code, Codex, Cursor, Gemini CLI |
| [Krea Generate](model/krea-generate.md) | Pick the right Krea model and prompt for any image, video, edit or upscale before you generate. | Krea | Claude Code, Codex, Cursor, Gemini CLI |
| [Nano Banana](model/inference-sh-nano-banana.md) | Generate and edit images with Google's Gemini 3 Pro Image and Gemini 2.5 Flash Image, multi-image input too. | inference.sh | Claude Code, Codex, Cursor, Gemini CLI |
| [Nano Banana 2](model/inference-sh-nano-banana-2.md) | Generate and edit images with Nano Banana 2, with up to 14 reference images and search grounding. | inference.sh | Claude Code, Codex, Cursor, Gemini CLI |
| [P-Image](model/inference-sh-p-image.md) | Generate and edit images fast with Pruna's P-Image models, including LoRA styles and multi-image edits. | inference.sh | Claude Code, Codex, Cursor, Gemini CLI |
| [Qwen Image 2](model/inference-sh-qwen-image-2.md) | Generate and edit images with Alibaba Qwen-Image 2.0: the fast model, or Pro for cleaner text rendering. | inference.sh | Claude Code, Codex, Cursor, Gemini CLI |
| [Qwen Image 2 Pro](model/inference-sh-qwen-image-2-pro.md) | Make posters, banners and text-heavy designs with Qwen-Image 2.0 Pro's precise text rendering. | inference.sh | Claude Code, Codex, Cursor, Gemini CLI |

### Research

| Skill | What it does | By | Install |
|---|---|---|---|
| [Apify MCP](model/apify-mcp.md) | Thousands of ready scrapers behind one MCP: TikTok, Instagram, YouTube, hashtags, sounds. | Apify | claude-ai, mcp |
| [Bilibili Hot Monitor](model/bilibili-hot-monitor.md) | Daily email report of popular Bilibili videos, with subtitle-based AI summaries and comments | jacobzwj | OpenClaw |
| [Bilibili Transcribe & Summary](model/bilibili-video-transcribe-summary.md) | Turns a Bilibili link into a transcript and summary: official subtitles first, cloud speech-to-text as fallback | markusbetter | OpenClaw |
| [Civitai MCP](model/civitai-mcp.md) | Top AI images and videos with prompts and base models, plus model search. | Civitai | Claude Code, mcp |
| [Douyin Hot Trend](model/douyin-hot-trend.md) | Fetches the Douyin hot list: rank, title, heat score, link and cover image for top topics | franklu0819-lang | OpenClaw |
| [Douyin Search and Hot List](model/douyin-search-keyword.md) | Read-only Douyin data as JSON: keyword search, creator posts and follower stats, comments and the live hot list. | um-why | OpenClaw |
| [Douyin Trends](model/douyin-trends.md) | Guide for reading public Douyin search, trending and creator pages and summarising likes, comments and shares | codekungfu | OpenClaw |
| [Exa Search MCP](model/exa-mcp.md) | Neural web search and crawling for research agents. | Exa | Claude Code, Codex, mcp |
| [Firecrawl MCP](model/firecrawl-mcp.md) | Search, scrape and crawl web pages into clean text for your agent. | Firecrawl | mcp |
| [Hugging Face MCP](model/huggingface-mcp.md) | Trending models, Spaces and papers from Hugging Face inside your agent. | Hugging Face | Claude Code, Gemini CLI, mcp |
| [Last 30 Days Research](model/last30days.md) | Researches any topic across Reddit, X, YouTube, HN and the web for the last 30 days, with sources. | Matt Van Horn | Claude Code, Codex, Cursor, OpenClaw, Gemini CLI |
| [Reddit MCP Buddy](model/reddit-mcp-buddy.md) | Browse and search Reddit from your agent: posts, rising threads, users. No API key needed. | Karan | Claude Code, mcp |
| [TrendPulse MCP](model/trendpulse.md) | Free Google News + Google Trends MCP for keyword, market and content research. | AKzar1el | Codex, mcp |
| [Trends MCP](model/trends-mcp.md) | Live Google Trends plus growth data from TikTok, YouTube, Amazon, Reddit and 30+ sources. | Trends MCP | Claude Code |
| [TwelveLabs Video Understanding](model/twelvelabs.md) | Semantic search and analysis across your video library from Claude Code. | TwelveLabs | Claude Code |
| [Video Skills Finder](model/video-skills.md) | Finds the right skill for any AI video, image, voice or music job here and shows you the visual options. | varg | Claude Code, Codex, Cursor, OpenClaw, Gemini CLI |
| [Watch (video analysis)](model/claude-video-watch.md) | Gives the agent eyes on any video: download, scene-aware frames, timestamped transcript. | Brad Bonanno | Claude Code, Codex |
| [YouTube MCP](model/youtube-mcp.md) | YouTube Data API over MCP: search, video and channel stats, transcripts. | Zubeid Hendricks | mcp |
| [YouTube Transcript MCP](model/youtube-transcript-mcp.md) | Transcripts of any YouTube video for the agent: hooks, scripts, lyrics timing. | Junpei Kawamoto | mcp |

### Sfx

| Skill | What it does | By | Install |
|---|---|---|---|
| [ElevenLabs Sound Effects](model/elevenlabs-sound-effects.md) | Generate sound effects and ambiences from a text description, including seamless loops. | ElevenLabs | Claude Code, Codex, Cursor, OpenClaw, Gemini CLI |
| [ElevenLabs Sound Effects (inference.sh)](model/inference-sh-elevenlabs-sound-effects.md) | Generate royalty-free sound effects from text with ElevenLabs, via inference.sh. | inference.sh | Claude Code, Codex, Cursor, Gemini CLI |
| [ElevenLabs Voice Isolator](model/elevenlabs-voice-isolator.md) | Strip background noise and music from dialogue to get clean, isolated speech. | ElevenLabs | Claude Code, Codex, Cursor, OpenClaw, Gemini CLI |
| [ElevenLabs Voice Isolator (inference.sh)](model/inference-sh-elevenlabs-voice-isolator.md) | Remove background noise and isolate vocals from any recording with ElevenLabs, via inference.sh. | inference.sh | Claude Code, Codex, Cursor, Gemini CLI |
| [Kling SFX via dLazy](model/dlazy-keling-sfx.md) | Generate sound effects from a text prompt or matched to a video with Kling SFX, through the dLazy CLI. | dlazyai | OpenClaw |

### Talking Head

| Skill | What it does | By | Install |
|---|---|---|---|
| [AI Avatar Video](model/inference-sh-ai-avatar-video.md) | Create talking-head avatar videos from a portrait and a script, with a lip-synced voice. | inference.sh | Claude Code, Codex, Cursor, Gemini CLI |
| [Jimeng Dream Actor via dLazy](model/dlazy-jimeng-dream-actor.md) | Animate a still character image into an action video with Jimeng Dream Actor, through the dLazy CLI. | dlazyai | OpenClaw |
| [OmniHuman 1.5 via dLazy](model/dlazy-jimeng-omnihuman-1-5.md) | Turn a portrait photo and an audio track into a talking digital-human video with OmniHuman 1.5, via the dLazy CLI. | dlazyai | OpenClaw |
| [P-Video Avatar](model/inference-sh-p-video-avatar.md) | Turn one portrait into a speaking avatar video with Pruna P-Video-Avatar, its built-in TTS or your audio. | inference.sh | Claude Code, Codex, Cursor, Gemini CLI |

### Tooling

| Skill | What it does | By | Install |
|---|---|---|---|
| [BFL API](model/bfl-api.md) | Integrate the FLUX API correctly: endpoints, async polling, webhooks, rate limits, errors and regions. | Black Forest Labs | Claude Code, Codex, Cursor, Gemini CLI |
| [fal genmedia](model/fal-genmedia.md) | Run any of 1,200+ fal endpoints from the terminal: search, inspect schema, price, run, poll and download. | fal | Claude Code, Codex, Cursor, Gemini CLI |
| [fal Model Routing](model/fal-model-routing.md) | Pick default fal endpoints per job: premium stills, fast drafts, edits, video, lip-sync and campaign work. | fal | Claude Code, Codex, Cursor, Gemini CLI |
| [fal Models Catalog](model/fal-models-catalog.md) | Choose the right fal endpoint for any modality from curated picks: image, video, 3D, audio and vision. | fal | Claude Code, Codex, Cursor, Gemini CLI |
| [FLUX 3 Generate](model/flux-3-generate.md) | Submit, poll and validate FLUX 3 video jobs, including cheap drafts before the final render. | Black Forest Labs | Claude Code, Codex, Cursor, Gemini CLI |
| [Gemini API Dev](model/gemini-api-dev.md) | Write current Gemini API code, including Nano Banana image generation, Omni video and Gemini TTS. | Google Gemini | Claude Code, Codex, Cursor, Gemini CLI |
| [Headless Three.js WebGPU (rgl)](model/rendergl-headless-three.md) | Render three.js scenes or GLB files to PNG, MP4, WebM or GIF in Node with Dawn WebGPU: no browser, fixed-step frames. | Or Fleisher | Claude Code |
| [inference.sh CLI](model/infsh-cli.md) | Log in to inference.sh and run its catalog of AI apps — image, video, audio, LLMs, search — from one CLI. | inference.sh | Claude Code, Codex, Cursor, Gemini CLI |
| [Local-first video downloader: private, no subscription](model/media-download.md) | Save any video by link (X, YouTube, Instagram, TikTok, 1800+ sites) or Pinterest images as references, locally, no key. | varg | Claude Code, Codex, Cursor |
| [Remotion Render (inference.sh)](model/inference-sh-remotion-render.md) | Render React/Remotion component code to MP4 in the cloud, without a local Remotion setup. | inference.sh | Claude Code, Codex, Cursor, Gemini CLI |
| [Replicate Compare Models](model/replicate-compare-models.md) | Compare Replicate models on cost, speed, quality and capabilities before you commit to one. | Replicate | Claude Code, Codex, Cursor, Gemini CLI |
| [Replicate Find Models](model/replicate-find-models.md) | Find current models on Replicate through search and curated collections, then read their schemas. | Replicate | Claude Code, Codex, Cursor, Gemini CLI |
| [Replicate Run Models](model/replicate-run-models.md) | Run Replicate models from code: predictions, webhooks, streaming, file handling and multi-model chains. | Replicate | Claude Code, Codex, Cursor, Gemini CLI |
| [Runway Dev](model/runway-dev.md) | Build Runway's image, video and audio models into your app: live API contracts, SDK and server-side keys. | Runway | Claude Code, Codex, Cursor, Gemini CLI |
| [Runway Dev Models](model/runway-dev-models.md) | Add a direct Runway model endpoint to your app for image, video or audio, following the live contract. | Runway | Claude Code, Codex, Cursor, Gemini CLI |
| [Runway Dev Workflows](model/runway-dev-workflows.md) | Call a Workflow published in the Runway app from your application through the Dev API. | Runway | Claude Code, Codex, Cursor, Gemini CLI |
| [Runway Model Routers](model/runway-dev-model-routers.md) | Send generation through a saved Runway Model Router config instead of hard-coding one model. | Runway | Claude Code, Codex, Cursor, Gemini CLI |
| [Runway Recipes](model/runway-dev-recipes.md) | Integrate Runway's prebuilt multi-step image and video Recipes using the live Recipe guide. | Runway | Claude Code, Codex, Cursor, Gemini CLI |
| [varg AI](model/varg-ai.md) | The official varg skill: videos, images, speech and music through one API key, rendered in the cloud or locally. | varg | Claude Code, Codex, Cursor, OpenClaw |

## Wanted

Formats people ask for that no skill makes yet. Build one and submit it. On varg how to: <https://varg.ai/how-to>

### 3d Scenes

| Skill | What it does | By | Install |
|---|---|---|---|
| [3D Previs to Animated Story Ad](wanted/want-previs-animated-story-ad.md) | Block the shots in Blender, then render them as a polished 3D-animated story ad that ends on the product. | Pounds | — |
| [Voxel Cartoon Character](wanted/want-voxel-cartoon-character.md) | A blocky voxel character walks, jumps and lands in a tiny world, rendered from code with no video model. | Francesco | — |

### Ads

| Skill | What it does | By | Install |
|---|---|---|---|
| [AI Creator Persona Ads](wanted/want-ai-creator-persona-ads.md) | One recurring AI creator with a fixed face, voice and room who posts selfie-style product videos as an account, not one-off ads. | tanabe_fragm | — |
| [AI Micro-Drama Ad](wanted/want-ai-micro-drama-ad.md) | A 1–3 minute scripted scene with a conflict and recurring faces; the product arrives late, as the answer to the argument. | frankyecom | — |
| [AI Spec Commercial](wanted/want-ai-spec-commercial.md) | A broadcast-style spot for a brand that did not order it, or a made-up one, made end to end with AI to show what you can do. | takuchang_n | — |
| [AI Static Ad Set](wanted/want-ai-static-ad-set.md) | Ten genuinely different still ads for one product, each its own concept with the headline set in the image, ready for Meta and TikTok tests. | mmmiyama_D | — |

### Animation

| Skill | What it does | By | Install |
|---|---|---|---|
| [How to make a 30-second uncut anime shot with AI video](wanted/want-uncut-anime-shot.md) | One 30-second anime scene with no cuts: three character sheets and a timed prompt keep faces and outfits on model. | Shami | — |
| [Kids' Counting Song Cartoon](wanted/want-kids-counting-song.md) | A cute 3D mascot sings a counting song: words light up, numbers pop, a 1–5 board fills, every scene an ad slot. | Archive | — |

### Art Direction

| Skill | What it does | By | Install |
|---|---|---|---|
| [ASCII Humanist Collage](wanted/want-ascii-humanist-collage.md) | Old paintings and specimens cut apart and refilled with ASCII, word-fill type and halftone on warm paper. | Liam McGregor | — |
| [Generative Code-Art Loop](wanted/want-generative-code-art-loop.md) | A seeded p5.js simulation with a lab-notebook HUD, built from a one-line concept, rendered as a loop. | Prathamesh | — |
| [Slit-Scan Time Jump](wanted/want-slit-scan-time-jump.md) | A jumper hangs mid-air while the world behind smears into vertical time streaks, then snaps back on landing. | François Vogel | — |
| [Y2K Pixel Dress-Up Dolls](wanted/want-y2k-pixel-dress-up-dolls.md) | Early-2000s "Dollz": pixel paper dolls with layered outfits, glitter text and sparkle GIFs. | Dollz Mania | — |

### Brand Motion

| Skill | What it does | By | Install |
|---|---|---|---|
| [3D Chrome Logo with Shader FX](wanted/want-chrome-logo-shader-fx.md) | A glossy black-chrome wordmark that liquid paint flows over as the cursor moves, built from images and shaders. | Alex Burdin | — |
| [Extruded Vector with Lens Blur](wanted/want-extruded-vector-lens-blur.md) | Flat SVG shapes extruded into glossy 3D, turning under heavy lens blur and RGB fringing, as a seamless loop. | Morflax | — |

### Cinematic

| Skill | What it does | By | Install |
|---|---|---|---|
| [Earth Zoom-Out](wanted/want-earth-zoom-out.md) | One unbroken pull-back from a subject to orbit and beyond, often all the way back home again. | AI Video Explorer | — |
| [Fake AAA Gameplay Trailer](wanted/want-gameplay-concept-trailer.md) | Thirty seconds of "gameplay" from a game that does not exist: third-person HUD, minimap, puzzle and boss fight. | Amira Zairi | — |
| [Frame-Break Pop-Out Shot](wanted/want-frame-break-pop-out.md) | A character bursts past the black letterbox bars, with fists, blades or sneakers popping out of the frame. | Kōda | — |
| [How to make a deadpan satirical commercial with AI](wanted/want-deadpan-satire-travel-ad.md) | A straight-faced fake commercial for an absurd place or product: ironic script, period look, subtitle gag, slogan card. | Wytse Koetse | — |
| [Multi-Angle Reshoot from One Take](wanted/want-multi-angle-reshoot.md) | Feed in one clip and get new camera angles of the same performance: coverage that was never filmed. | Scenario | — |
| [Squish and Inflate Gags](wanted/want-squish-inflate-gags.md) | Any object or photo gets crushed, melted, inflated or revealed as cake: a one-tap physics gag. | Pika | — |
| [Surreal AI Edit Director](wanted/want-surreal-edit-director.md) | A fashion portrait "edited" by a giant cursor: faces stretch, inflate and turn to chrome, one gag per shot. | ibexdream | — |

### Editing

| Skill | What it does | By | Install |
|---|---|---|---|
| [Talking-Head Sticker Edit](wanted/want-talking-head-sticker-edit.md) | A presenter talks while cut-out stickers pop in on keywords, with one-word captions and a script-font hook. | Alechka | — |
| [Transcript-Cut Multicam Podcast](wanted/want-transcript-cut-podcast.md) | Sync three cameras, cut the episode from its transcript, and add question cards and pull-quotes in code. | Omah | — |

### Explainers

| Skill | What it does | By | Install |
|---|---|---|---|
| [Sourced Data-Story Explainer](wanted/want-data-story-explainer.md) | One point, one hero number, three beats: every figure sourced, every frame compiled in code. | Francesco | — |
| [What-If Science Explainer](wanted/want-what-if-science-explainer.md) | A flat-vector space explainer drawn entirely in code: narration-timed camera moves, counters and a tiny mascot. | Finn | — |

### Image

| Skill | What it does | By | Install |
|---|---|---|---|
| [Collectible Figure Packshot](wanted/want-collectible-figure-packshot.md) | Turn a selfie, pet or product into a realistic collectible figure, on a desk beside its box or on white. | Regy | — |
| [Hand-Painted Anime Portrait](wanted/want-anime-portrait-from-photo.md) | Restyle a personal photo as a soft, hand-painted anime film still, keeping the same people, pose and setting. | Grant Slatton | — |
| [Living Editorial Banner](wanted/want-living-editorial-banner.md) | A split 16:9 card: a static serif headline and stats beside an AI painting that breathes with subtle motion. | ben (Contra Labs) | — |
| [Plush Toy Version](wanted/want-plush-toy-version.md) | Turn a person, pet or drawing into a cuddly plush-toy photo: chibi proportions, felt texture, stitched seams. | Heisenberg | — |

### Kinetic Type

| Skill | What it does | By | Install |
|---|---|---|---|
| [Word-per-Beat Shader Promo](wanted/want-word-per-beat-shader-promo.md) | One word per beat, each over a different full-bleed shader, with CRT glitch type: a punchy few-second loop. | varg inspiration board | — |

### Launch

| Skill | What it does | By | Install |
|---|---|---|---|
| [Floating UI Cards Promo](wanted/want-floating-ui-cards-promo.md) | A SaaS promo told through floating UI cards (social post, live pill, feature chip) over a halftone backdrop. | varg inspiration board | — |

### Lighting

| Skill | What it does | By | Install |
|---|---|---|---|
| [How to light an AI video scene from a reference image](wanted/want-lighting-reference-scene.md) | Character sheets fix who appears; a third image fixes only the light and colour. A 30 s scene with one amber key light. | Mr.Iancu | — |

### Music

| Skill | What it does | By | Install |
|---|---|---|---|
| [Apple Music Lyric Video](wanted/want-apple-music-lyric-video.md) | A phone lyric screen: the sung line big and bold, the rest dimmed and blurred, synced word by word to a song. | Jeff Guo | — |
| [How to make a slopcore AI music video](wanted/want-slopcore-music-video.md) | A deliberately lo-fi AI music video: a catchy generated song, plastic-looking stills, clips cut on the beat. | Mark Soares | — |
| [How to make an AI singer music video with lip-sync](wanted/want-ai-singer-music-video.md) | AI singer music video: the agent writes lyrics, a model makes the song, a generated singer lip-syncs it. | Mo Alani | — |

### Native Ui

| Skill | What it does | By | Install |
|---|---|---|---|
| [App POV Device Demo](wanted/want-app-pov-device-demo.md) | "POV: you're using my app": a phone mockup swiping through items with a 3D tilt and an ambient color wash. | Lokki | — |
| [Notes-App Ad](wanted/want-notes-app-ad.md) | A lowercase note types itself in a phone notes app, reads like a confession, then turns out to be an ad. | Shiv | — |

### Product

| Skill | What it does | By | Install |
|---|---|---|---|
| [360° Bullet-Time Orbit](wanted/want-bullet-time-orbit.md) | Freeze the moment and orbit 360° around a product or person: a one-photo packshot that feels like a rig shot. | TechHalla | — |
| [Exploded-View Product Reveal](wanted/want-exploded-view-reveal.md) | A product or dish floats apart into labeled layers, then snaps back together: a 3D-ad look from one photo. | M-studioAi | — |
| [Renovation Time-Lapse from One Photo](wanted/want-renovation-time-lapse.md) | One photo of a finished build, reverse-engineered into stages and animated as a construction time-lapse. | David Roberts | — |

### Shorts

| Skill | What it does | By | Install |
|---|---|---|---|
| [Faceless Mannequin Rep-Counter Loop](wanted/want-mannequin-rep-counter-loop.md) | A faceless 3D mannequin throws a combo while an on-screen counter ticks with every rep, in a 6-second loop. | Sulfur | — |
| [How to make a weekly news recap video with AI](wanted/want-weekly-news-recap-video.md) | An agent ranks the week's news, writes the script, makes stills, clips, voice and music, and cuts a 45–60 s recap. | vittorio | — |

