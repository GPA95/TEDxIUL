# TEDxIntegral University – Website Prototype

This repository contains the official website prototype for **TEDxIntegral University 2026**, the first-ever TEDx edition at Integral University, Lucknow.

The goal is to build a **single-page, component-based React site** that follows TED/TEDx branding rules, is easy for multiple volunteers to work on in parallel, and can later connect to a Supabase backend for registration and ticketing.

---

## Tech Stack

- **Frontend framework**: React (Vite)
- **Styling**: CSS (global design tokens + section-level styles)
- **Animations**: GSAP + ScrollTrigger (migrated from the original prototype)
- **Original prototype**: HTML5, CSS3, JS (kept in `tedx-integral_1.html` and `assets/` as reference)
- **Planned backend**: Supabase (Postgres + Auth) + Next.js/Node API routes

---

## Project structure (current)

```text
.
├── assets/                 # Original prototype assets (reference only)
│   ├── css/styles.css
│   ├── images/tedx-logo.png
│   └── js/main.js
├── public/                 # Vite public assets (favicons, etc.)
├── src/
│   ├── assets/             # New React assets (logos, images)
│   ├── components/         # React components (Hero, About, Schedule, etc.)
│   ├── data/               # Static data (timeline, FAQs, speakers, tickets)
│   ├── App.jsx             # Main layout shell
│   ├── index.css           # Global design tokens + base styles
│   └── main.jsx            # React entry point
├── tedx-integral_1.html    # Original HTML prototype (GPM)
├── package.json
├── vite.config.js
└── ...
```

The original HTML/CSS/JS prototype is preserved so we can reference the layout, animations, and styling while migrating to React.

---

## Getting started

### Prerequisites

- Node.js (LTS) installed
- Git installed

### Installation

```bash
git clone https://github.com/<your-username>/TEDxIntegral-website.git
cd TEDxIntegral-website

npm install
npm run dev
```

Then open the printed `localhost` URL in your browser.

---

## Development workflow

We use a **branch-per-feature** workflow to avoid conflicts:

1. Update local main:

   ```bash
   git checkout main
   git pull
   ```

2. Create a feature branch:

   ```bash
   git checkout -b feature/<short-description>
   ```

3. Make changes, then:

   ```bash
   git add .
   git commit -m "feat: short message"
   git push -u origin feature/<short-description>
   ```

4. Open a **Pull Request** on GitHub into `main`.
5. After review and merge, delete the branch locally:

   ```bash
   git checkout main
   git pull
   git branch -d feature/<short-description>
   ```

---

## Sections & components (planned)

Each major section of the TEDx site will be its own React component:

- `Navbar` – navigation + anchor links
- `Hero` – hero banner, first edition messaging, hero visuals
- `Countdown` – countdown to event date
- `Tickets` – ticket types, pricing, CTA
- `About` – About TEDxIntegral University
- `Theme` – “Tessellation: From Individual Ideas to Collective Impact”
- `Schedule` – event timeline
- `Speakers` – speaker cards
- `Sponsors` – separate sponsor thank-you section (not on homepage hero)
- `FAQ` – FAQ accordion
- `Venue` – venue description and location
- `Contact` – contact / interest form
- `Footer` – footer links + TEDx license text

Static textual content (FAQs, schedule items, speaker bios, etc.) will be loaded from `src/data/eventData.js` so non-frontend contributors can edit content easily.

---

## TEDx branding and content rules

We follow official TED/TEDx website guidelines, including:

- Homepage must include:
  - “What is TEDx?” language with a visible link to the [TEDx program](https://www.ted.com/about/programs-initiatives/tedx-program).
  - Footer text: **“This independent TEDx event is operated under license from TED.”**
- A separate **About** page/section containing the official “About TEDx” and “About TED” text.
- A separate **Sponsors** page/section (no sponsor logos on the homepage; sponsor logos must be smaller than the TEDx event logo).
- No ads or unrelated sponsor categories (weapons, gambling, etc.).

We will keep these rules in mind as we refine copy and layout.

---

## Backend & database (planned)

Separately, a Supabase/Postgres database and auth layer is being designed for:

- User profiles
- Events
- Tickets
- Roles (attendee/admin)
- Future modules: coupons, feedback, certificates, FAQs, team/volunteers

Once the frontend prototype is stable, we’ll integrate:

- Registration / ticket CTA → API routes → Supabase
- Admin views backed by role-based access and Row-Level Security (RLS)

---

## Contributors

- **[Abdul Malik](https://github.com/abdulmalik812)** – Original prototype design & advanced animations
- **[Ammaar Ahmad Khan](https://github.com/GPA95)** – React migration, structure, and backend/database
- **[Yazdaan Wali](https://github.com/yazdaanwali)** – Content, FAQs, supporting sections, and UI tweaks

New contributors should open an issue or contact the team before starting work on a new feature.