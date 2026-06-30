# Pathlight

Your intelligent AI learning navigator — a short assessment turns into a
structured, paced roadmap from your first line of Python to career-ready.

This is a **frontend demo build**: every flow (auth, onboarding, assessment,
roadmap generation, progress tracking, admin view) is fully interactive, but
it runs entirely in the browser using mock data and `localStorage`. There is
no backend yet, that's intentional, so it can deploy for free as a static
site straight from this repo.

## Tech stack

- React 19 + Vite
- React Router (HashRouter, for zero-config static hosting)
- Tailwind CSS v4
- lucide-react icons

## Running locally

```bash
npm install
npm run dev
```

Open the printed local URL. Any email/password works for login, there's no
real backend. Use `admin@pathlight.app` as the login email to land on the
admin dashboard instead of the learner dashboard.

## Project structure

```
src/
  context/AppContext.jsx   - mock auth + app state, persisted to localStorage
  data/mockData.js         - courses, assessment questions, sample students
  lib/roadmap.js           - turns assessment answers into a roadmap
  components/ui/           - Button, Card, Input, TrailProgress (signature element)
  components/layout/       - Navbar, AppShell, AuthLayout, route guards
  pages/                   - one file per route
```

## Deploying to GitHub Pages

This repo includes a GitHub Actions workflow
(`.github/workflows/deploy.yml`) that builds and deploys automatically on
every push to `main`.

1. Push this project to a new GitHub repository.
2. In the repo, go to **Settings -> Pages**, and under "Build and
   deployment", set **Source** to **GitHub Actions**.
3. Push to `main` (or re-run the workflow from the **Actions** tab). The
   site will be published at:
   `https://<your-username>.github.io/<repo-name>/`

No further configuration is needed, the app uses a relative build path and
hash-based routing, so it works correctly regardless of the repo name.

## Where to go from here

- Swap `src/data/mockData.js` and `src/context/AppContext.jsx` for real API
  calls once a backend exists (Supabase is a fast path: free Postgres +
  auth).
- `src/lib/roadmap.js` is a simple rules engine, that's the natural place
  to plug in something smarter later.
