# gradespot-frontend-website

The public website for **GradeSpot IT Solutions** (Hyderabad) — cybersecurity
training institute + IT solutions. This repo holds the frontend only; the
lead-capture / WhatsApp / automation engine (Axon) lives in the separate
private repo `AravindMutthe/gradespot-backend-axon-api`.

> **Status: full structure.** All routes, components, contracts, and config
> are in place with structured placeholder copy (marked `[Pending]` — no
> lorem ipsum). The final visual design pass and Phase-3 integrations
> (Supabase, `/api/chat`, n8n webhooks) come next.

---

## 1. Stack — every dependency, exact version, purpose

Installed via `npm install`. Exact versions below are what `npm run build`
was verified against (see `package.json` / `package-lock.json`).

### Runtime dependencies

| Package               | Version  | Used for                                                              |
| --------------------- | -------- | --------------------------------------------------------------------- |
| `next`                | 15.5.27  | React framework — App Router, SSR/RSC, routing, `next build`          |
| `react`               | 19.2.8   | UI library (required by Next.js 15)                                   |
| `react-dom`           | 19.2.8   | React DOM rendering (required by Next.js 15)                          |
| `@carbon/react`       | 1.117.0  | IBM Carbon components — Accordion (FAQs), Button (verify form)        |
| `@carbon/styles`      | 1.116.0  | Carbon's compiled component stylesheet (`css/styles.css`)             |
| `@carbon/icons-react` | 11.89.0  | Carbon icons as React SVG components (no CSS, no conflicts)           |
| `framer-motion`       | 14.0.0   | Entrance/scroll animations (hero, stats, chat widget)                 |
| `zod`                 | 4.6.5    | Schema validation — shared contracts in `src/lib/contracts.ts`        |
| `react-hook-form`     | 7.89.0   | Form state for the lead form (`/contact`) and verify form (`/verify`) |
| `ai`                  | 7.0.128  | Vercel AI SDK core — powers `/api/chat` in Phase 3 (installed, unwired)|
| `@ai-sdk/react`       | 4.0.131  | `useChat` hook for the chatbot widget in Phase 3 (installed, unwired)  |
| `@ai-sdk/google`      | 4.0.88   | Gemini provider for `/api/chat` in Phase 3 (installed, unwired)       |
| `@ai-sdk/groq`        | 4.0.55   | Groq provider (Llama 3.3) for `/api/chat` in Phase 3 (installed, unwired)|

### Dev dependencies / build tooling

| Package                | Version  | Used for                                                        |
| ---------------------- | -------- | --------------------------------------------------------------- |
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
| `/`                          | `src/app/page.tsx`                    | Home: hero, services, trust, stats, courses, testimonials, FAQs, CTA |
| `/about`                     | `src/app/about/page.tsx`              | Story, mission/vision, leadership team           |
| `/trainings`                 | `src/app/trainings/page.tsx`          | Course catalog grid (11 real courses)            |
| `/trainings/[course]`        | `src/app/trainings/[course]/page.tsx` | Course detail — highlights, facts, curriculum [Pending] |
| `/batches`                   | `src/app/batches/page.tsx`            | Upcoming batches table — dates/timings [Pending] |
| `/resources`                 | `src/app/resources/page.tsx`          | Resources hub (Blog / Testimonials / FAQs)       |
| `/resources/blog`            | `src/app/resources/blog/page.tsx`     | Article list                                     |
| `/resources/testimonials`    | `src/app/resources/testimonials/page.tsx` | Learner stories                              |
| `/resources/faqs`            | `src/app/resources/faqs/page.tsx`     | Full FAQ accordion                               |
| `/services`                  | `src/app/services/page.tsx`           | Service catalog grid                             |
| `/services/[service]`        | `src/app/services/[service]/page.tsx` | Service detail — offerings, process [Pending]    |
| `/institutes`                | `src/app/institutes/page.tsx`         | B2B pillar — automation products for institutes  |
| `/contact`                   | `src/app/contact/page.tsx`            | Lead form (Zod-validated) + contact info         |
| `/verify`                    | `src/app/verify/page.tsx`             | Certificate serial lookup UI                     |

Dynamic routes (`[course]`, `[service]`) are statically generated via
`generateStaticParams()` from `src/lib/mock-data.ts`.

---

## 3. Components

Follows the Figma component architecture — atoms → molecules → organisms.

### `src/components/atoms/`

| Component     | File              | API                                                        |
| ------------- | ----------------- | ---------------------------------------------------------- |
| `Button`      | `Button.tsx`      | `variant`: primary/ghost/outline · `size`: sm/md/lg        |
| `Input`       | `Input.tsx`       | Labeled input with inline `error` message                  |
| `Badge`       | `Badge.tsx`       | Pill tag · `tone`: primary/accent/muted                    |
| `IconButton`  | `IconButton.tsx`  | Icon-only button (`aria-label` required)                   |

### `src/components/molecules/`

| Component     | File               | Notes                                                        |
| ------------- | ------------------ | ------------------------------------------------------------ |
| `NavItem`     | `NavItem.tsx`      | Nav link with active-state underline                         |
| `StatCounter` | `StatCounter.tsx`  | Metric box (framer-motion fade on scroll)                    |
| `ServiceCard` | `ServiceCard.tsx`  | Service tile with icon, hover arrow                          |
| `TeamCard`    | `TeamCard.tsx`     | Member card — initials avatar until photos land              |
| `FaqAccordion`| `FaqAccordion.tsx` | IBM Carbon `Accordion` — keyboard accessible                 |

### `src/components/organisms/`

| Component        | File                 | Notes                                                     |
| ---------------- | -------------------- | --------------------------------------------------------- |
| `Topbar`         | `Topbar.tsx`         | Utility bar — hours, phone, email                         |
| `Navbar`         | `Navbar.tsx`         | Sticky header — logo, dropdowns, CTA, mobile drawer       |
| `Hero`           | `Hero.tsx`           | Eyebrow, headline, CTAs, quick-call card (props-driven)   |
| `ServicesSection`| `ServicesSection.tsx`| 4-col services grid (4/2/1 responsive)                    |
| `TrustBlock`     | `TrustBlock.tsx`     | Value prop + ISO/AICTE badges + founder block             |
| `StatsRibbon`    | `StatsRibbon.tsx`    | Full-width metrics band on brand primary                  |
| `Footer`         | `Footer.tsx`         | 4 columns + legal sub-bar                                 |

### `src/components/chatbot/`

| Component    | File              | Notes                                                              |
| ------------ | ----------------- | ------------------------------------------------------------------ |
| `ChatWidget` | `ChatWidget.tsx`  | Floating widget shell — visual only; `/api/chat` wiring is Phase 3 |

### `src/lib/`

| File            | Contents                                                                 |
| --------------- | ------------------------------------------------------------------------ |
| `contracts.ts`  | Shared Zod schemas + TS types: `LeadSubmissionSchema` (fullName min 2, phone `/^[6-9]\d{9}$/`, email, courseInterest enum of the 11 real course slugs, mode enum), `CertificateLookupSchema`, `ChatMessageSchema` — used by forms now, API routes later |
| `mock-data.ts`  | `COURSES` (11 real courses — AWS, Azure, DevOps, Python, Java, Cyber Security (CEH), Web Development, Digital Marketing, Bank PO, SSC, CCNA — each with slug/title/category/duration/mode/level/highlights), `BATCHES` (upcoming batch per course — dates/timings [Pending]), `SERVICES`, `FAQS`, `TEAM`, `TESTIMONIALS`, `BLOG_POSTS`, `STATS`, `CONTACT` (+91 88866 60597, info@gsitssolutions.com), `BRAND` (GradeSpot IT Solutions, Hyderabad, 9 years, ISO 9001:2015, AICTE) — drives every page until real content lands |

---

## 4. Brand design tokens

Extracted from the live `gsitssolutions.com`. They live in
**`src/app/globals.css`** inside Tailwind v4's `@theme` block, so each token
generates utilities automatically.

| Token (CSS var)          | Value     | Generates utilities                | Meaning                    |
| ------------------------ | --------- | ---------------------------------- | -------------------------- |
| `--color-primary`        | `#0A4D92` | `bg-primary`, `text-primary`, …    | Tech Blue (base)           |
| `--color-primary-light`  | `#0B58CA` | `bg-primary-light`, …              | Tech Blue (bright)         |
| `--color-accent`         | `#F37021` | `bg-accent`, `text-accent`, …      | Safety Orange (base)       |
| `--color-accent-light`   | `#FF9900` | `bg-accent-light`, …               | Safety/Action Orange       |
| `--color-dark`           | `#1A1D24` | `bg-dark`, `text-dark`, …          | Near Black (text/headings) |
| `--color-muted`          | `#64748B` | `text-muted`, `border-muted`, …    | Cool Gray (secondary text) |
| `--color-surface-light`  | `#F8FAFC` | `bg-surface-light`, …              | Light page surface         |
| `--color-surface`        | `#FFFFFF` | `bg-surface`, …                    | White surface (cards)      |
| `--radius-button`        | `6px`     | `rounded-button`                   | Buttons                    |
| `--radius-card`          | `12px`    | `rounded-card`                     | Cards / modals             |

Layout tokens:

- **Container** — `container-brand` utility (defined via `@utility` in
  `globals.css`): `max-width: 1200px`, centered, `1.5rem` side padding.
- **Grid** — 12-column desktop grid, 24px gutters (Tailwind `grid-cols-12`).

To change the brand, edit the `@theme` block in `src/app/globals.css` —
no other file needs touching.

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
│   │   ├── layout.tsx          # Root layout: fonts, metadata, CSS import order
│   │   ├── page.tsx            # / — home (hero → services → trust → stats → …)
│   │   ├── globals.css         # Tailwind v4 + @theme brand tokens + container-brand
│   │   ├── favicon.ico
│   │   ├── about/page.tsx              # /about
│   │   ├── trainings/
│   │   │   ├── page.tsx                # /trainings — catalog
│   │   │   └── [course]/page.tsx       # /trainings/[course] — detail (static)
│   │   ├── resources/
│   │   │   ├── page.tsx                # /resources — hub
│   │   │   ├── blog/page.tsx           # /resources/blog
│   │   │   ├── testimonials/page.tsx   # /resources/testimonials
│   │   │   └── faqs/page.tsx           # /resources/faqs
│   │   ├── services/
│   │   │   ├── page.tsx                # /services — catalog
│   │   │   └── [service]/page.tsx      # /services/[service] — detail (static)
│   │   ├── contact/
│   │   │   ├── page.tsx                # /contact — server shell + metadata
│   │   │   └── lead-form.tsx           # Zod-validated lead form (client)
│   │   ├── verify/
│   │   │   ├── page.tsx                # /verify — server shell + metadata
│   │   │   └── verify-form.tsx         # Serial lookup UI (client, Carbon button)
│   │   ├── sitemap.ts                  # /sitemap.xml — static + dynamic routes
│   │   └── robots.ts                   # /robots.txt
│   ├── components/
│   │   ├── atoms/              # Button, Input, Badge, IconButton (+ index.ts)
│   │   ├── molecules/          # NavItem, StatCounter, ServiceCard, TeamCard,
│   │   │                       # FaqAccordion (Carbon) (+ index.ts)
│   │   ├── organisms/          # Topbar, Navbar, Hero, ServicesSection,
│   │   │                       # TrustBlock, StatsRibbon, Footer (+ index.ts)
│   │   └── chatbot/
│   │       └── ChatWidget.tsx  # Floating widget shell (visual only)
│   ├── lib/
│   │   ├── contracts.ts        # Zod schemas + TS types (single source of truth)
│   │   └── mock-data.ts        # Mock content engine ([Pending] ≠ lorem ipsum)
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
└── README.md                   # This file
```

Key conventions:

- **App Router** (`src/app/`): file-based routing. Marketing pages stay
  React Server Components; interactive pieces (chatbot, drawers, form
  validators, certificate lookup) get explicit `"use client"` boundaries —
  client logic lives in co-located `*-form.tsx` / component files, never
  mixed with `metadata` exports.
- **Path alias**: `@/*` maps to `src/*` (see `tsconfig.json`).
- **Mock data**: every page renders from `src/lib/mock-data.ts`. Copy marked
  `[Pending]` is structurally real but not final — replace before launch.

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
  via PR so every change gets a preview URL first.
- `npm run build` must pass locally before pushing — Vercel runs the same
  command and a red build blocks the deploy.
- This is the **website only**. The Axon engine (lead API, WhatsApp,
  automation) deploys separately from `gradespot-backend-axon-api`.

---

## 10. What's next (not in this structure)

Per the project plan: final visual design pass, Supabase lead pipeline
(`/api/leads`), `/api/chat` AI chatbot route (Vercel AI SDK + Groq/Gemini),
certificate verification API, SEO/301 redirect engine (fill in
`next.config.ts`), and the DNS cutover from WordPress — each as its own
branch/PR.
