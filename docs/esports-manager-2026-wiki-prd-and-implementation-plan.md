# Esports Manager 2026 Wiki PRD and Implementation Plan

创建日期：2026-07-08  
项目名：Esports Manager 2026 Wiki  
目标域名：https://www.esportsmanager.wiki  
Worker 名称：`esportsmanager`  
GitHub 仓库：`esportsmanager`

## 1. 项目目标

把当前模板改造成只服务 `Esports Manager 2026` 的英文攻略站，覆盖：

- esports manager
- esports manager 2026
- esports manager wiki
- esports manager 2026 wiki
- esports manager guide
- esports manager 2026 guides

站点不做虚假 redeem codes、trainer、crack、APK mirror、tier list 或未经验证的硬数值表。所有内容以官方商店、官网、官方社区、EMDB、YouTube 玩法视频和人工验证为依据。

## 2. 官方来源与事实基线

核心来源：

- Steam: https://store.steampowered.com/app/2749950/Esports_Manager_2026/
- 官网: https://esportsmanager.gg/
- EMDB: https://emdb.gg/
- 官方 YouTube: https://www.youtube.com/@neuronagames
- 官方 Discord / Reddit / X：从官网链接进入

已确认事实：

- 游戏：`Esports Manager 2026`
- 开发商：Neurona Games
- 发行商：indie.io
- Steam 发售日期：2026-07-06
- 类型：Indie / Simulation / Sports / Strategy
- Steam 有 demo 与 achievements
- 官网宣传点：325+ real organizations、1,900+ real players、scouting、contracts、staff、sponsors、live match simulation、training、morale、rankings、tournaments、organization growth
- 官网路线图提到 mobile / multi-platform planned for Q4 2026，以及未来 Esports Manager 2027 / 2028
- EMDB 是面向 Esports Manager 2026 的社区 roster/database 工具，需要 Steam 登录并拥有游戏或 demo

## 3. 长尾词调研

使用方式：

- Google autocomplete 直接抓取成功
- Serper：本环境未找到 `SERPER_API_KEY`
- OpenClaw / Shipmanager 关键词接口：找到本地 key 线索但请求返回 401 / fetch fail，因此本轮不作为可靠数据源
- YouTube / Steam / 官网用于补充内容方向

### Keep：建页或写入专题

| Keyword | Page | Priority | Notes |
| --- | --- | --- | --- |
| esports manager | `/` | P0 | 首页承接 head term |
| esports manager 2026 | `/` | P0 | 首页 + game facts |
| esports manager wiki | `/` | P0 | 首页作为 wiki hub |
| esports manager 2026 wiki | `/` | P0 | 首页 + sidebar |
| esports manager guide | `/guides` | P0 | 指南索引 |
| esports manager 2026 guides | `/guides` | P0 | 指南索引 |
| esports manager 2026 guide | `/guides/beginner-guide` | P0 | 新手指南 |
| esports manager 2026 tips | `/guides/beginner-guide` | P0 | 搜索建议存在 |
| esports manager 2026 best tactics | `/best-tactics` | P0 | 搜索建议存在，YouTube 有 tips/tactics 视频 |
| esports manager 2026 tactics | `/best-tactics` | P0 | 决策型战术页 |
| esports manager 2026 demo | `/demo` | P0 | Steam/官网支持 |
| esports manager 2026 release date | `/release-date` | P0 | Steam 日期明确 |
| esports manager 2026 price | `/download` | P1 | 官方商店链接，价格可能变化，不写死长期价格 |
| esports manager 2026 review | `/review` | P1 | Steam review + YouTube review |
| esports manager 2026 discord | `/discord` | P1 | 官网官方链接 |
| esports manager 2026 twitter / x | `/discord` | P1 | 社区入口聚合 |
| esports manager 2026 emdb | `/emdb` | P1 | 官网直接链接，数据工具需求强 |
| esports manager 2026 scouting | `/guides/scouting-transfers` | P1 | 核心机制 |
| esports manager 2026 contracts | `/guides/contracts-budget` | P1 | 核心机制 |
| esports manager 2026 training | `/guides/training-morale` | P1 | 核心机制 |

### Watch / Ignore

| Keyword | Handling | Reason |
| --- | --- | --- |
| mobile | `/platforms` FAQ watch | 官网路线图提到 Q4 2026，但不能当成现已发布 |
| mods | `/mods-and-cheats` safety page | 只做状态与风险说明 |
| cheats | `/mods-and-cheats` safety page | 不提供 trainer / script / fake generator |
| codes | `/mods-and-cheats` safety page | 未发现官方 redeem code 系统 |
| salary | ignore | 多为现实职业薪资，不是游戏攻略意图 |

## 4. 信息架构

已实现路由：

- `/`
- `/guides`
- `/guides/beginner-guide`
- `/guides/create-organization`
- `/guides/scouting-transfers`
- `/guides/contracts-budget`
- `/guides/training-morale`
- `/best-tactics`
- `/guides/tournaments-majors`
- `/guides/sponsors-brand`
- `/release-date`
- `/demo`
- `/platforms`
- `/steam-deck`
- `/emdb`
- `/review`
- `/download`
- `/discord`
- `/mods-and-cheats`
- `/disclaimer`
- `/terms`
- `/privacy`
- `/cookie`

旧模板的 romance、farming、magic、characters、database、tools、switch、nokturna、walkthrough 等页面已删除或通过 middleware 重定向到新页面。

## 5. 内容与 YouTube 结合方式

参考 `kingshotguide` 的优点：

- guide article 以玩家决策为主，不照搬视频脚本
- 视频作为 evidence / walkthrough embed
- 每篇文章保留 source notes 与 video search query
- SEO title / description 单独写，不使用模板句堆砌

当前使用视频：

- Official Trailer: `hb_t9aD3smo`
- Official Release Trailer: `78ovz89_zaQ`
- Advanced Tips / Tactics: `6IbPBJcfMf8`
- Gameplay: `QhNNgFF1Iu0`
- Review: `EL7DgNYklso`

## 6. 视觉风格

定位：冷静、信息密集、电竞管理后台感，而不是营销大 hero。

主色：

- Background: `#061018`
- Panel: `#0E1B27`
- Border: `#1F3A4A`
- Cyan accent: `#59D6FF`
- Green accent: `#74F2A7`
- Orange accent: `#FF8A3D`
- Text: `#EAF7FF`
- Muted text: `#A8C7D8`

布局原则：

- 首页首屏直接是 wiki hub + official trailer + quick routes
- 页面以扫描、对比、决策为主
- 不做 stock-like hero，不沿用旧模板的生活模拟视觉资产
- 数据不足的地方只做 status / source notes，不造表

## 7. 本轮实现记录

核心数据：

- `src/data/esportsmanager/types.ts`
- `src/data/esportsmanager/sources.ts`
- `src/data/esportsmanager/guides.ts`
- `src/data/esportsmanager/localized.ts`

核心组件：

- `src/components/esportsmanager/home-page.tsx`
- `src/components/esportsmanager/guide-article.tsx`
- `src/components/esportsmanager/faq-section.tsx`
- `src/components/esportsmanager/wiki-navigation.tsx`

路由：

- `src/app/[locale]/(esportsmanager)/**`

配置：

- `src/routes.ts`
- `src/config/navbar-config.tsx`
- `src/config/footer-config.tsx`
- `src/app/sitemap.ts`
- `src/lib/urls/urls.ts`
- `wrangler.jsonc`
- `messages/en.json`
- `public/site.webmanifest`
- `env.example`

文档：

- `docs/esports-manager-2026-wiki-prd-and-implementation-plan.md`
- `docs/竞品.md`
- `README.md`

## 8. 验证与上线清单

必须验证：

- `pnpm lint`
- `pnpm exec tsc --noEmit`
- `pnpm build`
- 本地 dev server 首页、`/guides`、`/best-tactics`、`/emdb`、`/mods-and-cheats`

上线：

- GitHub：创建或关联 `esportsmanager` 仓库并 push
- Cloudflare：`wrangler deploy` 到 Worker `esportsmanager`
- 域名：绑定 `esportsmanager.wiki` 与 `www.esportsmanager.wiki`
- GA：在 GA-GTM 项目中使用授权创建媒体资源，回填环境变量

如第三方 CLI 未登录或凭据不可用，记录 blocker，不伪造完成状态。

## 9. Launch Record

执行日期：2026-07-08

GitHub:

- Repository: https://github.com/kiraplane/esportsmanager
- Branch: `main`
- Latest pushed commit after launch config: `eb24731475dd7b8c2cd6417cbd1c25247bf6e14e`

Cloudflare:

- Worker: `esportsmanager`
- Worker URL: https://esportsmanager.zhh0504.workers.dev
- Custom domains:
  - https://esportsmanager.wiki -> 301 to `www`
  - https://www.esportsmanager.wiki -> 200
- Current deployed version observed after GA update: `9a2251ad-3129-4211-a416-95f3e9f18edf`

GA4:

- Account: `kiraplane`
- Property: `esportsmanager.wiki`
- Property ID: `544629595`
- Web stream: `https://www.esportsmanager.wiki`
- Measurement ID: `G-K1ZMLJRCGE`
- Updated in `wrangler.jsonc`, `.env`, `env.example`, and GA-GTM `analytics-sites.json`

Validation:

- `pnpm lint`: passed
- `pnpm exec tsc --noEmit`: passed
- `pnpm build`: passed
- `wrangler deploy`: deployed successfully; one run returned a transient Wrangler `fetch failed` after upload, but `wrangler deployments list` and live page checks confirmed the final version.
- Live checks:
  - `/`: 200, canonical `https://www.esportsmanager.wiki`, GA `G-K1ZMLJRCGE`
  - `/best-tactics`: 200
  - `/emdb`: 200
  - `/mods-and-cheats`: 200
  - `/esports-manager-2026-cheats`: 308 to `/mods-and-cheats`

Remaining external action:

- Cloudflare GitHub automatic builds were not connected in this run. `wrangler` does not expose a build-connection command for this Worker setup, and the browser automation surface was unavailable, so connecting the Cloudflare GitHub App remains a dashboard/OAuth approval step.
