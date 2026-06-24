# Orb of Creation Wiki PRD And Implementation Plan

目标站点：Orb of Creation

目标域名：https://www.orbofcreation.wiki

建站日期：2026-06-24

## Positioning

Orb of Creation 的需求不适合做空泛 landing page，也不应该一开始假装有完整 1.0 数据库。Steam 1.0 已加入随机发现系统，玩家更需要的是可以直接解决问题的 guide hub：play online、beginner guide、spells、research、rituals、alchemy、New Game+、Steam/itch/download/Discord/mobile 安全说明。

本站定位为英文非官方 wiki / guide / play-online site：

- 首页回答 `Orb of Creation` 和 `Orb of Creation wiki`
- `/play-online` 回答 `Orb of Creation play online`
- `/guides` 和文章页承接攻略、系统、平台、安全长尾词
- 自托管官方 itch.io WebGL build，站内说明浏览器版与 Steam 1.0 的区别

## Source Inputs

- User requirement file: `docs/xuqiu.md`
- Official Steam: https://store.steampowered.com/app/1910680/Orb_of_Creation/
- Steam 1.0 announcement: https://steamcommunity.com/games/1910680/announcements/detail/688634814372254859
- Steam release-date announcement: https://steamcommunity.com/games/1910680/announcements/detail/701015907648930551
- Official itch.io: https://marple.itch.io/orb-of-creation
- Official Discord from itch page: https://discord.gg/JpNRYUud57
- Serper API long-tail discovery via local `.local.env`
- YouTube beginner guide: https://www.youtube.com/watch?v=r6zTbEVlYR4
- Official 1.0 trailer: https://www.youtube.com/watch?v=o1E1gSOUpPs
- Implementation reference for self-hosted game frame: `/Users/he/Documents/AI/vibe coding/klifur-org/apostateverity`
- Guide article reference: `/Users/he/Documents/AI/vibe coding/kingshot/kingshotguide`

## Long-Tail Keyword Matrix

| Keyword | Intent | Route | Priority | Decision |
| --- | --- | --- | --- | --- |
| Orb of Creation | Head term and game identity | `/` | P0 | keep |
| Orb of Creation wiki | Structured systems and guide hub | `/` | P0 | keep |
| Orb of Creation play online | Launch browser version | `/play-online` | P0 | keep |
| Orb of Creation online | Browser play and save limits | `/play-online` | P0 | keep |
| Orb of Creation guide | General guide hub | `/guides` | P0 | keep |
| Orb of Creation beginner guide | First-hour route | `/guides/beginner-guide` | P0 | keep |
| Orb of Creation spells | Spell power, recharge, setup | `/spells` | P1 | keep |
| Orb of Creation research | Technology/research choices | `/research` | P1 | keep |
| Orb of Creation rituals guide | Ritual timing and late systems | `/rituals` | P1 | keep |
| Orb of Creation Steam | Release status and official page | `/steam` | P0 | keep |
| Orb of Creation itch io | Browser build and official itch page | `/itch-io` | P1 | keep |
| Orb of Creation Discord | Community link | `/discord` | P1 | keep |
| Orb of Creation mobile | Mobile status | `/mobile` | P1 | keep |
| Orb of Creation APK | Unsafe APK intent | `/mobile` | P1 | keep as safety page |
| Orb of Creation unblocked | Browser-play adjacent | `/play-online` redirect/answer | P2 | watch |
| Orb of Creation save editor | Risky cheat intent | `/download` or `/mobile` safety copy | P2 | ignore/watch |

## Route Plan

Core routes implemented:

- `/`
- `/play-online`
- `/guides`
- `/guides/beginner-guide`
- `/guides/alchemy-druidry`
- `/guides/new-game-plus`
- `/spells`
- `/research`
- `/rituals`
- `/steam`
- `/download`
- `/itch-io`
- `/discord`
- `/mobile`
- `/disclaimer`

Redirect aliases implemented in middleware:

- `/itchio`, `/orb-of-creation-itch-io` -> `/itch-io`
- `/download-orb-of-creation` -> `/download`
- `/orb-of-creation-apk` -> `/mobile`
- `/orb-of-creation-mobile`, `/android`, `/apk` -> `/mobile`
- `/orb-of-creation-discord` -> `/discord`
- `/orb-of-creation-steam` -> `/steam`
- `/orb-of-creation-research` -> `/research`
- `/orb-of-creation-spells` -> `/spells`
- `/orb-of-creation-rituals` -> `/rituals`

## Implementation Summary

- Converted the starter template paths, data, and components to Orb of Creation-specific modules.
- Removed old route pages and old multilingual message files.
- Set canonical domain to `https://www.orbofcreation.wiki`.
- Added Orb-specific data model, guide content, metadata, routes, sitemap, manifest, footer/nav config, legal copy, and README.
- Downloaded official visual assets for icons, logo, Open Graph, and app icons.
- Downloaded and self-hosted the authorized itch.io Unity WebGL build under `public/games/orb-of-creation/`.
- Split the Unity `.data` payload into four `.bin` chunks under 25 MiB each and served it through `/api/games/orb-of-creation/data`, because Cloudflare Workers assets reject a single static file above 25 MiB.
- Built a lazy-start game frame with reload, fullscreen, and direct-open controls.
- Added guide pages with FAQ and YouTube embeds where useful.
- Kept source and timestamp data internal; front-end copy avoids visible update/source blocks per `docs/tiaozheng.md`.

## Content Guardrails

- Do not publish APK mirrors, copied paid Steam files, save editors, cheats, or modified clients.
- Do not claim affiliation with MarpleGames, Valve, Steam, or itch.io.
- Do not overbuild fake database pages until reliable 1.0 data is available.
- Keep YouTube-supported guides original and decision-first; do not summarize transcripts mechanically.
- Preserve the distinction between the itch.io Dev 0.5.4 WebGL build and Steam 1.0.
