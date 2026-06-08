# The False Sun Wiki PRD And Implementation Plan

目标站点：The False Sun Wiki

目标域名：https://www.thefalsesun.wiki

日期：2026-06-08

## 判断

The False Sun 不适合传统 wiki。它当前最强需求不是 codes、tier list、单位数据库或角色资料页，而是 all endings、Ending 20、Silas/Kyle route、mini-games 和 official download FAQ。

因此本项目按轻量 walkthrough / all endings guide 站开发。

## Keyword Matrix

| Keyword | Intent | Route | Priority | Status | Evidence |
|---|---|---:|---:|---:|---|
| the false sun all endings | 找齐 20 个结局 | `/all-endings` | P0 | keep | itch 评论和视频都集中在 all endings |
| the false sun ending 20 | 卡 Ending 20 | `/ending-20` | P0 | keep | 评论中有玩家直接询问 |
| the false sun walkthrough | 通用攻略 | `/guides` | P0 | keep | YouTube / transcript SERP 有 walkthrough |
| the false sun silas route | Silas 选择链 | `/silas-route` | P1 | keep | 玩家讨论集中在 Silas |
| the false sun kyle route | Kyle aftermath | `/kyle-route` | P1 | keep | walkthrough 提到 Kyle 相关结局 |
| the false sun mini games | 农场小游戏、chicken retry | `/mini-games` | P1 | keep | 评论中有人想跳过小游戏 |
| the false sun download android mac | 官方下载 / 平台 | `/download` | P1 | keep | 官方 itch 页面列出平台 |
| the false sun book fandom | 同名小说/其他作品 | `/` | P2 | ignore | 与 Oniray 游戏无关 |

## Source Notes

- Official itch.io page: title, author, platform, content warnings, tags, official download.
- itch comments: demand evidence only.
- YouTube videos / transcript pages: route and Ending 20 cross-check only.
- No transcript spinning, no copied script, no explicit adult scene walkthroughs.

## Launch Pages

- Home
- `/all-endings`
- `/ending-20`
- `/silas-route`
- `/kyle-route`
- `/mini-games`
- `/download`
- `/content-warnings`
- `/guides`
- `/disclaimer`
- `/privacy`
- `/terms`
- `/cookie`

## Implementation Scope

- Remove old-template public pages, data, components, docs, sitemap entries, nav items, and metadata.
- Keep the underlying Next.js/Cloudflare stack.
- Keep unused SaaS internals unlinked unless they break public site output.
- Use remote official itch.io images and YouTube thumbnails as visual assets.
- Configure canonical domain as `https://www.thefalsesun.wiki`.

## Validation

Run:

```bash
pnpm lint
pnpm exec tsc --noEmit
pnpm next:build
```

Then preview homepage and key routes in browser.
