# Adeyemi Anthony — Portfolio (GitHub Pages)

A static, single-page React portfolio for **Adeyemi Anthony**, Amazon PPC & eCommerce Growth Specialist. Deploys to **GitHub Pages**.

## Stack
- React 19 + Create React App (CRACO)
- Tailwind CSS + shadcn/ui components
- Embla carousel, Lucide icons, Sonner toasts
- Static — **no backend, no MongoDB**, contact form opens user's email client (`mailto:`)

## Local development

```bash
cd frontend
yarn install
yarn start
```

App runs on `http://localhost:3000`.

## Edit content

All page content lives in **one file**: `src/data/mock.js`.
Update copy, services, case studies, experience, testimonials, links, etc. there — the UI re-binds automatically.

## Build for production

```bash
yarn build
```

Produces a static `build/` folder using **relative asset paths** (`homepage: "."` in `package.json`), so it works:
- at the root of a custom domain (`yourdomain.com`)
- at a project page path (`username.github.io/repo-name/`)

No base-path tweaks needed.

## Deploy to GitHub Pages

### Option A — One-command deploy via `gh-pages`

1. Create a GitHub repo and push your code (the **whole `/app` repo** or **just `/app/frontend`** — see notes below).
2. From the `frontend` folder run:

```bash
yarn deploy
```

This runs `yarn build` then publishes the `build/` folder to a `gh-pages` branch.

Then in your repo on GitHub:
- **Settings → Pages → Build & deployment**
- Source: `Deploy from a branch`
- Branch: `gh-pages` / `(root)` → **Save**

Your site will be live at:
- Project page: `https://<your-username>.github.io/<your-repo>/`
- User/Org page: `https://<your-username>.github.io/`

### Option B — GitHub Actions (recommended for automation)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: yarn
          cache-dependency-path: frontend/yarn.lock
      - run: yarn install --frozen-lockfile
        working-directory: frontend
      - run: yarn build
        working-directory: frontend
      - uses: actions/upload-pages-artifact@v3
        with:
          path: frontend/build
      - uses: actions/deploy-pages@v4
```

Then in **Settings → Pages**, set source to **GitHub Actions**.

### Option C — Custom domain

1. Add a `CNAME` file inside `frontend/public/` with one line: `your-domain.com`
2. Re-run `yarn deploy`.
3. In GitHub repo settings, configure your custom domain and enable HTTPS.

## Notes & best practices

- `homepage: "."` in `package.json` ensures asset paths are relative — no rewrites needed.
- `public/.nojekyll` is included so GitHub Pages won't run Jekyll on the build.
- `public/404.html` is a SPA fallback that gracefully handles direct deep links.
- Anchor navigation (`#about`, `#services`, etc.) works on GitHub Pages out-of-the-box.
- Replace any placeholders in `src/data/mock.js` before publishing.

## Sections

Hero · About · Services · Case Studies (with modal) · Skills & Tools · Experience timeline · Collaboration · Testimonials carousel · Process · Contact (mailto) · Footer

---

Made with care for Amazon brands.
