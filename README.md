<p align="center">
  <img src="assets/gdg-banner.png" width="100%" alt="GDG on Campus – Dr. AIT"/>
</p>

<h1 align="center">GDG on Campus Dr. AIT — Official Website</h1>

<p align="center">
  <b>Build. Learn. Innovate.</b><br/>
  The official showcase website of Google Developer Group on Campus, Dr. Ambedkar Institute of Technology, Bengaluru.
</p>

---

## ✨ About this project

A fast, accessible, **frontend-only** website that showcases our community — domains, events, projects, team, gallery and learning resources. All content lives in typed local data files, so any member can update the site through a pull request. There is **no backend, database, CMS or login** by design.

| | |
|---|---|
| **Stack** | React 18 · Vite 5 · TypeScript · Tailwind CSS 3 · React Router 6 · Framer Motion · Lucide React |
| **Pages** | Home · About · Domains · Events (+ detail pages) · Projects · Team · Gallery · Resources · Join Us · 404 |
| **Hosting** | Any static host — configured for Vercel (`vercel.json`) |

## 🚀 Getting started

**Requirements:** Node.js 18+ (20 LTS recommended — see `.nvmrc`) and npm.

```bash
git clone https://github.com/gdg-on-campus-drait/gdg-on-campus-drait.git
cd gdg-on-campus-drait
npm install
npm run dev
```

Open http://localhost:5173.

| Command | What it does |
|---|---|
| `npm run dev` | Start the dev server with hot reload |
| `npm run build` | Type-check and create a production build in `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Run the TypeScript compiler only |

## 📁 Project structure

```
├── .github/                 # PR template, issue templates, CI workflow
├── assets/                  # Images used by this README
├── public/                  # Static files served as-is (favicon, OG image, /images/...)
├── src/
│   ├── assets/
│   │   ├── icons/           # Brand icons (GitHub, LinkedIn, Instagram)
│   │   ├── images/          # Images bundled by Vite
│   │   └── logos/           # Official GDG on Campus Dr. AIT logo files
│   ├── components/
│   │   ├── cards/           # EventCard, ProjectCard, MemberCard, ResourceCard
│   │   ├── common/          # Button, Chip, Reveal, Shapes, Lightbox, FilterChips, …
│   │   ├── layout/          # Layout, Footer, page transitions, loader
│   │   ├── navigation/      # Navbar, MobileMenu
│   │   └── sections/        # Homepage sections (Hero, Stats, JoinCTA, …)
│   ├── data/                # ⭐ ALL editable website content
│   │   ├── site.ts          # Name, contact, socials, stats, nav, join link
│   │   ├── about.ts         # Vision, mission, culture, journey
│   │   ├── domains.ts       # The five technical domains
│   │   ├── events.ts        # Events
│   │   ├── projects.ts      # Projects
│   │   ├── team.ts          # Team (update every academic year)
│   │   ├── gallery.ts       # Gallery photos
│   │   └── resources.ts     # Learning resources
│   ├── hooks/               # useCountUp, useScrollSpy, useDocumentTitle, …
│   ├── pages/               # One folder per page
│   ├── styles/index.css     # Tailwind layers + global styles
│   ├── types/index.ts       # Content types
│   ├── utils/               # Helpers (accent colours, dates, class names)
│   ├── App.tsx              # Routes
│   └── main.tsx             # Entry
├── tailwind.config.ts       # Design tokens (brand colours, type scale, radii)
└── vercel.json              # SPA rewrites + caching for Vercel
```

## ✏️ Updating content (no React knowledge needed)

Everything visitors read comes from `src/data/`. Each file is commented with instructions.

**The placeholder rule:** a value of `null` means *"not supplied yet"*. The site then shows a clearly labelled placeholder (dashed **Placeholder** / **To be announced** badges) instead of made-up information. Never publish invented numbers, events, names or links.

| I want to… | Edit |
|---|---|
| Add an event | `src/data/events.ts` — copy the example in the comment; use a unique `slug` (it becomes `/events/<slug>`) |
| Mark an event as finished | Set `status: 'completed'` — it moves to **Previous events** |
| Add a project | `src/data/projects.ts` |
| Update the team | `src/data/team.ts` — fill a slot's `name`, `role`, `photo`, `github`, `linkedin` (with consent) and set `teamYear` |
| Add gallery photos | Put files in `public/images/gallery/`, then set `src` in `src/data/gallery.ts` |
| Show real statistics | Set `value` in `stats` (`src/data/site.ts`) — counters animate automatically |
| Add LinkedIn / Instagram / e-mail / join link | `src/data/site.ts` |
| Add a resource | `src/data/resources.ts` |

**Images:** use `.webp` or `.jpg`, longest side ≤ 1600 px, ideally < 300 KB. Team photos should be square (≥ 400×400). Always write meaningful `alt` text. Images are lazy-loaded automatically.

## 🎨 Design system

Based on the official **Google Developer Groups on Campus brand guide**. Tokens live in `tailwind.config.ts`.

| Token | Value | Tailwind |
|---|---|---|
| Blue | `#4285F4` | `gblue` |
| Green | `#34A853` | `ggreen` |
| Yellow | `#F9AB00` | `gyellow` |
| Red | `#EA4335` | `gred` |
| Off-white | `#F0F0F0` | `offwhite` (page background) |
| Black | `#1E1E1E` | `ink` |
| Pastels | `#C3ECF6` `#CCF6C5` `#FFE7A5` `#F8D8D8` | `gblue-pastel`, `ggreen-pastel`, … |

- **Accessible text shades** (`gblue-deep`, `ggreen-deep`, `gyellow-deep`, `gred-deep`) are used when a brand colour must carry small text, so contrast stays ≥ 4.5:1.
- **Typography:** Google Sans (display/body) and Google Sans Code (the public release of Google Sans Mono) for labels and code, loaded from Google Fonts. Fluid display sizes: `text-display-xl` → `text-display-sm`.
- **Graphics:** geometric shapes in `src/components/common/Shapes.tsx` (circles, quarter/half circles, rings, pills, brackets).
- **Logo:** `src/assets/logos/` holds transparent crops of the official lockup. Never stretch, recolour or redraw it.
- **Motion:** Framer Motion, subtle and short. `prefers-reduced-motion` is respected globally via `<MotionConfig reducedMotion="user">`.

## ☁️ Deploying to Vercel

1. Push the repository to GitHub (or fork it).
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel detects **Vite** automatically. Confirm:
   - Build command: `npm run build`
   - Output directory: `dist`
   - Install command: `npm install`
4. Click **Deploy**. No environment variables are needed.

`vercel.json` rewrites every route to `index.html` so deep links such as `/events/<slug>` work on refresh. Every pull request gets a preview deployment automatically once the project is connected.

Using the CLI instead:

```bash
npm i -g vercel
vercel        # preview deployment
vercel --prod # production deployment
```

## 🤝 Contributing

We welcome contributions from every domain team. Please read **[CONTRIBUTING.md](CONTRIBUTING.md)** for the branching strategy, commit conventions and pull-request process, and follow our **[Code of Conduct](CODE_OF_CONDUCT.md)**.

## 📄 License

[MIT](LICENSE) © GDG on Campus – Dr. AIT

<p align="center"><sub>GDG on Campus Dr. AIT is a student community. Activities and opinions shared here are the community’s own and should not be linked to Google.</sub></p>
