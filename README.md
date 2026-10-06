# gradespot-frontend-website

The public website for **GradeSpot IT Solutions** (Hyderabad) — cybersecurity
training institute + IT solutions + institute-automation products. This repo
holds the frontend only; the lead-capture / WhatsApp / automation engine
(Axon) lives in the separate private repo
`AravindMutthe/gradespot-backend-axon-api`.

> **Status: researched design system applied (2026-10-06).** The site now
> implements the design system from Aravind's two researched HTML files
> (§4 below): orange primary brand, Archivo/Manrope/IBM Plex Mono type,
> the 6-course researched catalog, and the new `/pricing`, `/research` and
> `/sitemap` pages. Copy marked `[Pending]` is structurally real but not
> final — no lorem ipsum. Phase-3 integrations (Supabase, `/api/chat`,
> lead-pipeline wiring) come next.

---

## 1. Stack — every dependency, exact version, purpose

Installed via `npm install`. Exact versions below are what `npm run build`
was verified against (see `package.json` / `package-lock.json`).

### Runtime dependencies

| Package               | Version  | Used for                                                              |
| --------------------- | -------- | --------------------------------------------------------------------- |
| `next`                | 15.5.27  | React framework — App Router, SSR/RSC, routing, `next build`; also `next/font` for the researched type system |
| `react`               | 19.2.8   | UI library (required by Next.js 15)                                   |
| `react-dom`           | 19.2.8   | React DOM rendering (required by Next.js 15)                          |
| `@carbon/react`       | 1.117.0  | IBM Carbon components — Accordion (FAQs), Button (verify form)        |
| `@carbon/styles`      | 1.116.0  | Carbon's compiled component stylesheet (`css/styles.css`)             |
| `@carbon/icons-react` | 11.89.0  | Carbon icons as React SVG components (no CSS, no conflicts)           |
| `framer-motion`       | 14.0.0   | Entrance/scroll animations (hero audience switch, chat widget)        |
| `zod`                 | 4.6.5    | Schema validation — shared contracts in `src/lib/contracts.ts`        |
| `react-hook-form`     | 7.89.0   | Form state for the lead form (`/contact`) and verify form (`/verify`) |
| `ai`                  | 7.0.128  | Vercel AI SDK core — powers `/api/chat` in Phase 3 (installed, unwired)|
| `@ai-sdk/react`       | 4.0.131  | `useChat` hook for the chatbot widget in Phase 3 (installed, unwired)  |
| `@ai-sdk/google`      | 4.0.88   | Gemini provider for `/api/chat` in Phase 3 (installed, unwired)       |
| `@ai-sdk/groq`        | 4.0.55   | Groq provider (Llama 3.3) for `/api/chat` in Phase 3 (installed, unwired)|

No new dependencies were added for the design-system overhaul: fonts come
from `next/font/google` (built into Next.js — zero runtime cost, no
Google-Fonts `<link>` needed), and all tokens/components are hand-rolled
Tailwind v4 + CSS.

### Dev dependencies / build tooling

| Package                | Version  | Used for                                                        |
| --------------------- | -------- | --------------------------------------------------------------- |
| `typescript`           | 5.9.3    | Type checking (`tsc --noEmit` runs inside `next build`)         |
| `tailwindcss`          | 4.3.3    | Utility-first CSS; v4 theme tokens live in `globals.css`        |
| `@tailwindcss/postcss` | 4.3.3    | Tailwind v4 PostCSS plugin (wired in `postcss.config.mjs`)       |
| `postcss`              | 8.5.29   | CSS transform pipeline (required by the Tailwind PostCSS plugin)|
| `eslint`               | 9.39.5   | Linting (`npm run lint`); flat config in `eslint.config.mjs`    |
| `eslint-config-next`   | 15.5.27  | Next.js ESLint rules, bridged via `@eslint/eslintrc` FlatCompat |
| `@eslint/eslintrc`     | 3.3.7    | FlatCompat bridge — eslint-config-next v15 ships eslintrc-style |
| `@types/node`          | 20.19.43 | TypeScript types for Node APIs                                  |
| `@types/react`         | 19.3.0   | TypeScript types for React 19                                   |
| `@types/react-dom`     | 19.3.0   | TypeScript types for React DOM                                  |

### Runtime environment

| Tool | Version  | Notes                                              |
| ---- | -------- | -------------------------------------------------- |
| Node | v24.20.0 | Version the scaffold was installed and built with  |
| npm  | 10.9.4   | Package manager (`package-lock.json` is committed) |

---

## 2. Routes

| Route                        | File                                  | What it renders                                  |
| ---------------------------- | ------------------------------------- | ------------------------------------------------ |
| `/`                          | `src/app/page.tsx`                    | Home: split-audience hero, WhatsApp demo, 6 courses, services, products, flywheel, FAQ |
| `/about`                     | `src/app/about/page.tsx`              | Story, Why Choose Us, certifications, team, contact, testimonials note |
| `/trainings`                 | `src/app/trainings/page.tsx`          | Course catalog grid — the researched 6 courses   |
| `/trainings/[course]`        | `src/app/trainings/[course]/page.tsx` | Course detail — who/outcome/topics, fee slot, Course JSON-LD |
| `/batches`                   | `src/app/batches/page.tsx`            | Upcoming batches table — dates/timings [Pending] |
| `/pricing`                   | `src/app/pricing/page.tsx`            | **New.** 3 audience tiers + student fee table (amounts [Pending]) |
| `/research`                  | `src/app/research/page.tsx`           | **New.** Evidence tables/cards with honesty tags (verified/measured/practitioner/index) |
| `/sitemap`                   | `src/app/sitemap/page.tsx`            | **New.** Visual site map — page tree + navigation rules |
| `/resources`                 | `src/app/resources/page.tsx`          | Resources hub (Blog / Testimonials / FAQs)       |
| `/resources/blog`            | `src/app/resources/blog/page.tsx`     | Article list                                     |
| `/resources/testimonials`    | `src/app/resources/testimonials/page.tsx` | Learner stories                              |
| `/resources/faqs`            | `src/app/resources/faqs/page.tsx`     | Full FAQ accordion                               |
| `/services`                  | `src/app/services/page.tsx`           | IT services for businesses (4, quote-gated) + CTA band |
| `/services/[service]`        | `src/app/services/[service]/page.tsx` | Service detail — offerings, process, quote CTA  |
| `/institutes`                | `src/app/institutes/page.tsx`         | B2B pillar — 3 automation products, pilot flow, CTA band |
| `/contact`                   | `src/app/contact/page.tsx`            | Lead form (Zod-validated) + real contact info    |
| `/verify`                    | `src/app/verify/page.tsx`             | Certificate serial lookup UI                     |

Dynamic routes (`[course]`, `[service]`) are statically generated via
`generateStaticParams()` from `src/lib/mock-data.ts`. Every page also renders
`<MobileTabBar />` (mobile bottom nav) and `<ChatWidget />`.

---

## 3. Components

Follows the Figma component architecture — atoms → molecules → organisms.

### `src/components/atoms/`

| Component     | File              | API                                                        |
| ------------- | ----------------- | ---------------------------------------------------------- |
| `Button`      | `Button.tsx`      | Researched spec: pill, weight 700. `variant`: primary/ghost/outline/whatsapp · `size`: sm (13.5px, 8px 15px) / md (15px, 11px 20px) / lg (16px, 14px 26px) |
| `Chip`        | `Chip.tsx`        | Pill label · `tone`: default/brand (e.g. "Leg 1 · B2C", product tags) |
| `Input`       | `Input.tsx`       | Labeled input with inline `error` message                  |
| `Badge`       | `Badge.tsx`       | Pill tag · `tone`: primary/accent/muted                    |
| `IconButton`  | `IconButton.tsx`  | Icon-only button (`aria-label` required)                   |

### `src/components/molecules/`

| Component      | File                | Notes                                                        |
| -------------- | ------------------- | ------------------------------------------------------------ |
| `NavItem`      | `NavItem.tsx`       | Nav link with active-state underline                         |
| `StatCounter`  | `StatCounter.tsx`   | Metric box (framer-motion fade on scroll)                    |
| `ServiceCard`  | `ServiceCard.tsx`   | Service tile with icon, hover arrow                          |
| `TeamCard`     | `TeamCard.tsx`      | Member card — initials avatar until photos land              |
| `FaqAccordion` | `FaqAccordion.tsx`  | IBM Carbon `Accordion` — keyboard accessible                 |
| `WhatsAppDemo` | `WhatsAppDemo.tsx`  | **New.** Researched "website as live demo" — static chat bubbles simulating Product 1 answering |
| `CtaBand`      | `CtaBand.tsx`       | **New.** Researched dark rounded panel with the single "Get a Callback" CTA |
| `EvidenceTag`  | `EvidenceTag.tsx`   | **New.** Honesty tags for `/research`: verified / measured / practitioner / index |

### `src/components/organisms/`

| Component              | File                  | Notes                                                     |
| ---------------------- | --------------------- | --------------------------------------------------------- |
| `Topbar`               | `Topbar.tsx`          | **Reworked.** Researched utility bar — dark ink strip: location + quick links (Contact, Verify a Certificate, For Institutes) |
| `Navbar`               | `Navbar.tsx`          | **Reworked.** Sticky blurred header, pill audience tabs (Students/Businesses/For Institutes/Pricing/Site Map/Research), single "Get a Callback" CTA. No desktop hamburger |
| `HomeHero`             | `HomeHero.tsx`        | **New.** Researched split-audience hero: pill switcher (I'm a Student / I'm a Business / I Run an Institute) swaps headline/copy/CTA; WhatsApp demo; 4-up trust grid |
| `MobileTabBar`         | `MobileTabBar.tsx`    | **New.** Mobile-only bottom tab bar: Home · Courses · Pricing · Institutes · More; "More" opens a bottom sheet with every page |
| `CallbackModal`        | `CallbackModal.tsx`   | **New.** `CallbackModalProvider` (mounted in `layout.tsx`) + `CallbackButton` + `useCallbackModal()`. The single site-wide CTA: name, 10-digit Indian mobile (validated `/^[6-9]\d{9}$/` after 91/0-prefix normalization), audience select, message; copies the enquiry for WhatsApp/email (researched behavior) |
| `Footer`               | `Footer.tsx`          | **Reworked.** Researched 4 columns (Students/Businesses/For Institutes) + real address, both phones, both emails, office hours, WhatsApp button |

Removed in the researched overhaul (superseded, zero usages): the old
`Hero`, `ServicesSection`, `TrustBlock`, `StatsRibbon` organisms.

### `src/components/chatbot/`

| Component    | File              | Notes                                                              |
| ------------ | ----------------- | ------------------------------------------------------------------ |
| `ChatWidget` | `ChatWidget.tsx`  | Floating widget shell — visual only; `/api/chat` wiring is Phase 3 |

### `src/lib/`

| File            | Contents                                                                 |
| --------------- | ------------------------------------------------------------------------ |
| `contracts.ts`  | Shared Zod schemas + TS types: `LeadSubmissionSchema` (fullName min 2, phone `/^[6-9]\d{9}$/`, email, courseInterest enum of the **6 researched course slugs**, mode enum), `CallbackRequestSchema` (name, phone, audience enum student/business/institute, optional message) + `normalizeIndianMobile()` + `AUDIENCE_LABELS`, `CertificateLookupSchema`, `ChatMessageSchema` — used by forms now, API routes later |
| `mock-data.ts`  | `COURSES` — the **researched 6-course lineup** (CEH, SOC Analyst, CCNA, AWS + DevOps, Web Development, Digital Marketing), each with researched `who` / `outcome` / `topics` + fee slots marked "to be confirmed" (never invented); `BATCHES`; `SERVICES` — the researched 4 (Web Development, Cybersecurity Services, Digital Marketing, Corporate Training); `PRODUCTS` — the researched 3 institute products (WhatsApp Lead Automation, Video LMS, PXE Lab Setup); `FAQS` (incl. real address + fee-transparency answers); `TEAM` (Nikhil Duth D, Founder & MD); `TESTIMONIALS`/`BLOG_POSTS` ([Pending] real ones); `STATS`; `CONTACT` — **real details**: "16-126 2nd Floor, Road No.1, Sri Krishna Nagar, Dilsukhnagar, Hyderabad 500060", +91 91826 54056 / +91 88866 60597, info@gsitssolutions.com / hr@gsitssolutions.com, WhatsApp https://wa.me/919885189951, hours 8:00 AM – 9:00 PM; `BRAND` (GradeSpot IT Solutions, tagline "Training · Services · Automation") |

---

## 4. Design system (researched — authoritative)

The design system below is **authoritative** and supersedes the earlier
blue/orange Gemini-inspection tokens. It was researched by Aravind and
supplied as two HTML files on 2026-10-06:

- `workspace/user/files/Static_Website.html` — full token system, component
  patterns, page structures, course data, schema/SEO patterns.
- `workspace/user/files/Sample_Landing_Page_2.html` — real contact details
  (address, phones, emails, hours, WhatsApp number), utility-bar/nav
  patterns, landing sections.

### 4.1 Fonts (via `next/font/google`, zero runtime cost)

| Role     | Family        | Weights           | CSS var / utility        |
| -------- | ------------- | ----------------- | ------------------------ |
| Headings | Archivo       | 500, 600, 700, 800| `--font-archivo` / `font-display` |
| Body     | Manrope       | 400, 500, 600, 700| `--font-manrope` / `font-body`     |
| Mono     | IBM Plex Mono | 400, 500          | `--font-plex-mono` / `.mono`       |

Configured in `src/app/layout.tsx` (`display: swap`, latin subset).
Global rules in `globals.css`: body Manrope, line-height 1.55;
`h1–h4` Archivo, letter-spacing −0.01em, line-height 1.12.

### 4.2 Color tokens

Light mode (`:root` in `globals.css`):

| Token          | Value     | Meaning                                  |
| -------------- | --------- | ---------------------------------------- |
| `--brand`      | `#e85d0c` | **Primary orange** — replaces the old blue primary everywhere |
| `--brand-ink`  | `#c24e08` | Darker orange — text/links on light bg, button hover |
| `--brand-soft` | `#fdf0e6` | Soft orange backgrounds (chips, notes)   |
| `--bg`         | `#ffffff` | Page background                          |
| `--bg2`        | `#f4f5f7` | Secondary background (alt sections)      |
| `--panel`      | `#ffffff` | Cards / header / modal                   |
| `--line`       | `#e3e6ea` | Borders                                  |
| `--ink`        | `#14181d` | Primary text                             |
| `--ink2`       | `#454e59` | Secondary text                           |
| `--ink3`       | `#6b7684` | Muted text                               |
| `--ok` / `--ok-soft`   | `#177245` / `#e6f4ec` | Success            |
| `--warn` / `--warn-soft`| `#9a6a00` / `#fbf3da` | Warning            |
| `--wa`         | `#25d366` | WhatsApp                                 |

Dark mode (`@media (prefers-color-scheme: dark)`):

| Token | Value |
| ----- | ----- |
| `--bg` / `--bg2` / `--panel` / `--line` | `#0f1318` / `#141a20` / `#171d24` / `#28303a` |
| `--ink` / `--ink2` / `--ink3` | `#edf1f5` / `#b3bcc7` / `#8b96a3` |
| `--brand` / `--brand-ink` / `--brand-soft` | `#ff7a2f` / `#ffa26b` / `#2c1d10` |
| `--ok` / `--ok-soft` | `#4cc98a` / `#12291d` |
| `--warn` / `--warn-soft` | `#e0b95c` / `#2b230d` |

### 4.3 Shape, shadow, type scale, layout

| Item | Value |
| ---- | ----- |
| Card radius | `14px` (`--radius-card` → `rounded-card`) |
| Small-element radius | `9px` (`--radius-s`) |
| Buttons | **pill** (`999px` → `rounded-button`) |
| Shadow | `0 10px 30px rgba(16,24,40,.08)` |
| `h1` | `clamp(32px, 5vw, 54px)`, weight 800 |
| `h2` (section titles) | `clamp(26px, 3.4vw, 36px)`, weight 800 |
| Kicker | mono 12px, uppercase, letter-spacing .08em, brand-ink (`kicker` utility) |
| Container | `1180px` max-width, 20px gutters (`container-brand` utility) |
| Section padding | `56px` desktop / `42px` mobile |

### 4.4 Buttons (researched spec — see `Button.tsx`)

- **Primary:** pill, 15px, weight 700, padding `11px 20px`, orange `#e85d0c`
  bg, white text; hover `#c24e08` + `0 6px 18px` brand-tinted shadow;
  active press `translateY(1px)`.
- **Ghost:** transparent bg, ink text, `1.5px` border.
- **Outline:** brand border + brand-ink text, fills orange on hover.
- **WhatsApp:** `#25d366` bg.
- Sizes: `.sm` 13.5px / `8px 15px`; `.md` 15px / `11px 20px`;
  `.lg` 16px / `14px 26px`.

### 4.5 How tokens reach Tailwind

Raw tokens live in `:root` (light) with the dark override above. They are
wired into Tailwind v4 via **`@theme inline`** in `globals.css`, so every
token generates utilities that track the raw var
(`--color-brand` → `bg-brand`, `text-brand`, `border-brand`, …;
`--color-ink3` → `text-ink3`; `--radius-card` → `rounded-card`), and dark
mode applies automatically because the mapping is `inline` (live var
references, not baked values).

Legacy aliases (`primary`, `accent`, `dark`, `muted`, `surface`,
`surface-light`, `primary-light`, `accent-light`) are kept in `@theme`
**only as backwards-compatible aliases resolving to researched values** —
there is no blue left anywhere. New code must use the canonical researched
names (`brand`, `brand-ink`, `ink`, `ink2`, `ink3`, `bg`, `bg2`, `panel`,
`line`, `ok`, `warn`).

### 4.6 Component inventory (all ported from the researched files)

| Component | Source pattern | Implementation |
| --------- | -------------- | -------------- |
| Utility bar | dark strip: location + quick links | `Topbar.tsx` |
| Sticky blurred header + pill nav tabs | SANS/OffSec pattern, no desktop hamburger | `Navbar.tsx` |
| Mobile bottom tab bar + "More" sheet | Home · Courses · Pricing · Institutes · More | `MobileTabBar.tsx` |
| Hero audience switcher | I'm a Student / I'm a Business / I Run an Institute | `HomeHero.tsx` |
| WhatsApp chat demo | fake bubbles, Product 1 prototype | `WhatsAppDemo.tsx` |
| Callback modal | name / 10-digit mobile / audience / message | `CallbackModal.tsx` |
| CTA band | dark rounded panel | `CtaBand.tsx` |
| Trust-indicator grid | 4-up (fees open, replies fast, verifiable, pilot #1) | `HomeHero.tsx` |
| Chips / evidence tags | verified · measured · practitioner · index | `Chip.tsx` / `EvidenceTag.tsx` |
| Single site-wide CTA | **"Get a Callback"** everywhere — header, hero, page ends, mobile | `CallbackButton` |

### 4.7 Decision log — researched system vs. what the repo used before

| Aspect | Before (Gemini-inspection tokens) | Researched (authoritative) | Decision |
| ------ | --------------------------------- | -------------------------- | -------- |
| Primary brand color | Tech Blue `#0A4D92` (+ `#0B58CA`) | Orange `#e85d0c` (dark `#ff7a2f`) | **Researched wins** — orange is primary, no blue primary anywhere |
| Accent | Safety Orange `#F37021` / `#FF9900` | Orange family `#c24e08` / `#fdf0e6` | Folded into the orange scale |
| Headings font | Geist (default scaffold) | Archivo 500–800 | **Researched wins** |
| Body font | Geist Sans | Manrope 400–700 | **Researched wins** |
| Mono font | Geist Mono | IBM Plex Mono 400/500 | **Researched wins** |
| Container | `1200px` | `1180px` | **Researched wins** |
| Card radius | `12px` | `14px` | **Researched wins** |
| Button radius | `6px` | pill `999px` | **Researched wins** |
| Course catalog | 11 courses (AWS, Azure, DevOps, Python, Java, CEH, Web Dev, Digital Marketing, Bank PO, SSC, CCNA) | 6 courses (CEH, SOC Analyst, CCNA, AWS + DevOps, Web Dev, Digital Marketing) with who/outcome/topics | **Researched wins** — replaced |
| Site CTA | Competing CTAs ("Start Now", "Enquire Now", …) | Single "Get a Callback" | **Researched wins** |
| Dark mode | none | `prefers-color-scheme` tokens | **Researched wins** — implemented |
| Contact details | `[Pending]` placeholders | Real address/phones/emails/hours from Sample_Landing_Page_2 | **Researched wins** — applied |

Rationale: the researched files are Aravind's own consolidated research and
were explicitly ordered authoritative; the earlier tokens came from an
automated inspection of the old WordPress site and were always provisional.

### 4.8 SEO / schema patterns (researched)

- Home: `EducationalOrganization` + `ItemList` of `Course` + `BreadcrumbList`
  JSON-LD (in `src/app/page.tsx`).
- Course pages: `Course` JSON-LD with provider (in
  `src/app/trainings/[course]/page.tsx`).
- FAQs ship for AI-answer extraction (Google restricts FAQ rich results —
  no SERP promise is made).
- Shallow URLs (≤3 clicks), flat `/trainings/[course]` structure.

---

## 5. Carbon + Tailwind coexistence

Configured in **`src/app/layout.tsx`**:

1. `./globals.css` (Tailwind v4: preflight + utilities + `@theme` tokens) is
   imported **first**.
2. `@carbon/styles/css/styles.css` (full Carbon component stylesheet) is
   imported **second**, so Carbon's component styles win any cascade ties.

Why this is safe:

- Carbon uses BEM-namespaced classes (`.cds--*`) — they never collide with
  Tailwind utilities.
- Icons come from `@carbon/icons-react` as React SVG components; they ship
  **no CSS at all**, so there is nothing to collide.
- Rule of thumb: use **Tailwind utilities for layout/spacing/brand color**,
  and **Carbon components for complex UI** (forms, tables, accordions,
  modals). Do not fight Carbon component internals with `!important`.

---

## 6. Project structure

```
gradespot-frontend-website/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout: researched fonts, metadata,
│   │   │                       # CSS import order, CallbackModalProvider
│   │   ├── page.tsx            # / — researched home (audience hero → demo →
│   │   │                       # courses → services → products → flywheel → FAQ)
│   │   ├── globals.css         # Tailwind v4 + researched tokens (@theme inline)
│   │   │                       # + container-brand (1180px) + kicker utilities
│   │   ├── favicon.ico
│   │   ├── about/page.tsx              # /about — researched about
│   │   ├── trainings/
│   │   │   ├── page.tsx                # /trainings — 6 researched courses
│   │   │   └── [course]/page.tsx       # /trainings/[course] — detail + Course JSON-LD (static)
│   │   ├── batches/page.tsx            # /batches — schedule table ([Pending] dates)
│   │   ├── pricing/page.tsx            # /pricing — 3 audience tiers + fee table
│   │   ├── research/page.tsx           # /research — evidence tables + honesty tags
│   │   ├── sitemap/page.tsx            # /sitemap — visual site map
│   │   ├── resources/
│   │   │   ├── page.tsx                # /resources — hub
│   │   │   ├── blog/page.tsx           # /resources/blog
│   │   │   ├── testimonials/page.tsx   # /resources/testimonials
│   │   │   └── faqs/page.tsx           # /resources/faqs
│   │   ├── services/
│   │   │   ├── page.tsx                # /services — 4 researched services + CTA band
│   │   │   └── [service]/page.tsx      # /services/[service] — detail (static)
│   │   ├── institutes/page.tsx         # /institutes — 3 researched products + pilot flow
│   │   ├── contact/
│   │   │   ├── page.tsx                # /contact — server shell + real contact info
│   │   │   └── lead-form.tsx           # Zod-validated lead form (client)
│   │   ├── verify/
│   │   │   ├── page.tsx                # /verify — server shell + metadata
│   │   │   └── verify-form.tsx         # Serial lookup UI (client, Carbon button)
│   │   ├── sitemap.ts                  # /sitemap.xml — static + dynamic routes
│   │   └── robots.ts                   # /robots.txt
│   ├── components/
│   │   ├── atoms/              # Button, Chip, Input, Badge, IconButton (+ index.ts)
│   │   ├── molecules/          # NavItem, StatCounter, ServiceCard, TeamCard,
│   │   │                       # FaqAccordion (Carbon), WhatsAppDemo, CtaBand,
│   │   │                       # EvidenceTag (+ index.ts)
│   │   ├── organisms/          # Topbar (utility bar), Navbar (pill tabs),
│   │   │                       # HomeHero (audience switch), MobileTabBar,
│   │   │                       # CallbackModal (provider+button+hook), Footer (+ index.ts)
│   │   └── chatbot/
│   │       └── ChatWidget.tsx  # Floating widget shell (visual only)
│   ├── lib/
│   │   ├── contracts.ts        # Zod schemas + TS types (single source of truth)
│   │   └── mock-data.ts        # Researched content engine ([Pending] ≠ lorem ipsum)
│   └── middleware.ts           # Security headers on every response
├── public/                     # Static assets served at /
├── .env.example                # Placeholder env vars with purposes (copy to .env.local)
├── .gitignore                  # Ignores node_modules, .next, .env* (not .env.example)
├── eslint.config.mjs           # ESLint flat config (Next.js rules via FlatCompat)
├── next.config.ts              # Next.js config + commented 301-redirect section
├── next-env.d.ts               # Auto-generated Next.js TypeScript declarations
├── package.json                # Dependencies + scripts (dev / build / start / lint)
├── package-lock.json           # Pinned dependency tree — committed
├── postcss.config.mjs          # PostCSS pipeline: @tailwindcss/postcss plugin
├── tsconfig.json               # TypeScript config (strict, @/* path alias)
├── AGENTS.md                   # Next.js agent rules (auto-maintained by `next dev`)
├── CLAUDE.md                   # Repo notes for Claude/Codex agents
└── README.md                   # This file
```

Key conventions:

- **App Router** (`src/app/`): file-based routing. Marketing pages stay
  React Server Components; interactive pieces (hero switcher, tab bar,
  callback modal, chatbot, form validators, certificate lookup) get explicit
  `"use client"` boundaries — client logic lives in component files, never
  mixed with `metadata` exports.
- **Path alias**: `@/*` maps to `src/*` (see `tsconfig.json`).
- **Mock data**: every page renders from `src/lib/mock-data.ts`. Copy marked
  `[Pending]` is structurally real but not final — replace before launch.
  Fee amounts are deliberately "to be confirmed" — never invented.
- **Single CTA rule**: every conversion button on the site opens the
  `CallbackButton` ("Get a Callback") modal. No competing CTAs.

---

## 7. Local setup — step by step

Prerequisites: **Node 20+** (built with v24.20.0) and **npm 10+**.

```bash
# 1. Clone
git clone https://github.com/AravindMutthe/gradespot-frontend-website.git
cd gradespot-frontend-website

# 2. Install (exact pinned tree)
npm install

# 3. (Optional) env for future integrations — not needed to build/run
cp .env.example .env.local
# then fill in values in .env.local (see §8)

# 4. Run the dev server
npm run dev
# → http://localhost:3000

# 5. Type-check + production build (must pass clean)
npm run build

# 6. Lint
npm run lint

# 7. Serve the production build locally (after `npm run build`)
npm start
# → http://localhost:3000
```

### npm scripts

| Script          | Command      | What it does                                      |
| --------------- | ------------ | ------------------------------------------------- |
| `npm run dev`   | `next dev`   | Dev server with HMR at http://localhost:3000      |
| `npm run build` | `next build` | Production build — TypeScript check + optimization|
| `npm start`     | `next start` | Serves the production build locally               |
| `npm run lint`  | `eslint`     | Lints the project per `eslint.config.mjs`         |

---

## 8. Environment variables

All defined in **`.env.example`** (placeholders — the site builds and runs
with none of them set). Copy to `.env.local` when an integration lands.
`.env.local` is git-ignored; **never commit real keys.**

| Variable                       | Purpose                                                              | Needed now? |
| ------------------------------ | -------------------------------------------------------------------- | ----------- |
| `NEXT_PUBLIC_AXON_API_URL`     | Axon backend base URL (e.g. the Cloud Run service URL) — future lead/callback/chat wiring | No (Phase 3)|
| `NEXT_PUBLIC_SUPABASE_URL`     | Supabase project URL — lead forms + chatbot knowledge base (pgvector) | No (Phase 3)|
| `NEXT_PUBLIC_SUPABASE_ANON_KEY`| Supabase anon key (RLS-protected reads/writes only)                  | No (Phase 3)|
| `GROQ_API_KEY`                 | GroqCloud free tier — Llama 3.3 inference for `/api/chat`            | No (Phase 3)|
| `GOOGLE_GENERATIVE_AI_API_KEY` | Google AI Studio — Gemini Flash API (alternate chat provider)        | No (Phase 3)|
| `N8N_LEAD_WEBHOOK_URL`         | Outbound webhook — new-lead alerts to n8n / Meta WhatsApp Cloud API  | No (Phase 3)|

---

## 9. Deploy flow

**Vercel auto-deploys on every push to `main`.** No manual step needed.

- Vercel project: `gradespot-frontend-website`
- Linked to GitHub repo `AravindMutthe/gradespot-frontend-website`
- Push to `main` → Vercel builds (`npm run build`) → production deploy.
- Pull requests get automatic preview deployments.

Guardrails for this repo:

- `main` is production. Do all work on feature branches (`feat/…`) and merge
  via PR so every change gets a preview URL first. (The 2026-10-06 researched
  overhaul was pushed straight to `main` on explicit instruction because the
  push itself is the deploy and the change was pre-authorized.)
- `npm run build` must pass locally before pushing — Vercel runs the same
  command and a red build blocks the deploy.
- This is the **website only**. The Axon engine (lead API, WhatsApp,
  automation) deploys separately from `gradespot-backend-axon-api`.

---

## 10. What's next (not in this structure)

- Fee amounts + installment terms (Aravind confirms → drop into
  `mock-data.ts` fee slots and the `/pricing` table — no sitemap change).
- Supabase lead pipeline: wire `LeadForm` and the callback modal to the Axon
  `POST /api/leads` once its callback-shaped contract lands.
- `/api/chat` AI chatbot route (Vercel AI SDK + Groq/Gemini) behind
  `ChatWidget`; live WhatsApp engine behind `WhatsAppDemo`.
- Certificate registry API behind `/verify`.
- Team bios/photos, batch dates/timings, placement wording ([Pending] items).
- SEO/301 redirect engine (fill in `next.config.ts`), then the DNS cutover
  from WordPress — each as its own branch/PR.
