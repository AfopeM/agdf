# African Green Growth and Development Forum (AGDF)

Public website for the African Green Growth and Development Forum — a CAC-registered Nigerian non-profit organisation focused on sustainable development, green economy research, and environmental policy across Africa.

**Live site → [agdf.eco](https://www.agdf.eco)**

---

## About the organisation

AGDF is a legally registered non-profit (CAC/IT/NO 135940) comprising multidisciplinary stakeholders from the private, public, and civil society sectors. Established in 2018 and headquartered at the Faculty of Environmental Sciences, University of Calabar, Nigeria, the forum works across research, capacity building, green legislation, and facilitating green financing and technology transitions.

Priority sectors include agriculture, forestry and biodiversity, water resource management, renewable energy, waste management, tourism, manufacturing, and transport.

---

## What the site covers

**Knowledge products** — Nine individually routed project pages covering AGDF's published research and advisory work, including:

- Waste and Circular Economy analysis for Nigeria's NDC (African Development Bank)
- AFOLU-based climate change mitigation across Anglophone Africa (African Forest Forum)
- Low-Carbon Development in Nigeria agriculture sector (World Bank)
- REDD+ Readiness Strategic Environmental and Social Assessment (World Bank)
- Green Economy Framework for Cross River State (Cross River State Planning Commission)
- Nigeria's Circular Economy Program roadmap (AfDB and Government of the Netherlands)

**Team section** — Animated marquee carousel of team members with role badges, built to accommodate team changes without layout rework.

**About page** — Parsed and structured organisational overview, objectives (numbered cards), priority areas, milestone timeline, and team carousel.

**Contact page** — Direct email and LinkedIn contact details for the organisation.

---

## Tech stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion |
| Content | Static JSON (CMS replacement) |
| Fonts | Poppins (Google Fonts) |
| Deployment | Vercel |

---

## Project structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/              # About page
│   ├── contact-us/         # Contact page
│   ├── projects/[id]/      # Dynamic project detail pages
│   ├── team/               # Full team page
│   ├── layout.tsx          # Root layout with nav and footer
│   └── page.tsx            # Home page
├── components/
│   ├── Buttons/            # PrimaryButton component
│   ├── Cards/              # FlexCards, MemberCard, NumberedCard
│   ├── Layout/             # NavBar, Footer, Heading, SectionHeader, FadeInBackground
│   └── Typography/         # Logo, Title, Tagline
├── data/
│   ├── pages/              # about.json, home.json, contact-us.json
│   ├── projects/           # projects.json (all 9 knowledge products)
│   └── team.json           # Team member data
├── hooks/
│   └── useResponsive.ts    # Responsive breakpoint detection
└── styles/
    └── globals.css         # Tailwind v4 + custom component classes
```

---

## Content management

All page content is stored as JSON files in `src/data/`. Adding or updating content does not require touching component code.

**Adding a new knowledge product:**
1. Add an entry to `src/data/projects/projects.json` with the required fields (`id`, `title`, `tag`, `tagline`, `desc`, `full_desc`, `client`, `date`, `project_involved`)
2. Add a matching image to `public/projects/` named `[id].png`
3. The project page at `/projects/[id]` is generated automatically via the dynamic route

**Updating team members:**
Edit `src/data/team.json`. The marquee carousel and team page both read from the same file. Member avatar images should be placed in `public/team/` named as `firstname_lastname.png` (lowercase, underscore separator).

---

## Key implementation decisions

**Static JSON as CMS** — Rather than connecting a headless CMS, all content lives in version-controlled JSON files. This keeps the site fully static, eliminates external API calls at build time, and makes content updates a simple pull request.

**Infinite marquee carousel** — The team carousel duplicates the member array and animates a continuous horizontal scroll using Framer Motion's `x` keyframe. Left and right gradient overlays are positioned absolutely to create a natural fade-in/fade-out effect at both edges without clipping the content.

**Dynamic project pages** — Each of the nine knowledge products has its own route at `/projects/[id]`. The page component reads the `id` param, finds the matching project in `projects.json`, and parses the `full_desc` field into two-sentence paragraphs using the `sentence-splitter` library for readable typography without manual line breaks.

**SEO** — Server-side metadata is defined per page using Next.js `generateMetadata`. The root layout sets a site-wide fallback title and description. All pages render their `<h1>` and content server-side for full search engine visibility.

**Image optimisation** — All team member and project images use `next/image` with `fill` and appropriate `priority` flags. The `FlexCards` component uses CSS background images for the expandable project grid to support the hover-expand interaction without layout shift.
