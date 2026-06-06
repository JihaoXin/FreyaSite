# FreyaZhang.com — personal site

Personal website for **Freya Zhang (张悦)** — a bilingual (English / 中文) brand-marketing
portfolio built with [Astro](https://astro.build).

- **English** lives at the site root (`/`).
- **中文** lives under `/zh/`.
- A language toggle in the header switches between them on any page.

## Run locally

Requires [Node.js 18+](https://nodejs.org/).

```bash
npm install
npm run dev        # http://localhost:4321/FreyaSite/
npm run build      # output to dist/
npm run preview    # preview the production build
```

## Where the content lives

All copy is centralized so you never have to touch markup to update the site:

| File | What it holds |
|------|---------------|
| `src/constants.ts` | Name, tagline, and contact details (email, phone, WeChat) — for both languages. |
| `src/i18n/content.ts` | The substance of every page (intro, expertise, experience, education, awards, work, activities) with `en` and `zh` versions side by side. |
| `src/i18n/ui.ts` | Interface labels — navigation items and section headings. |

Edit those three files to change almost anything. The pages themselves
(`src/pages/`, `src/components/pages/`) just render the data.

### Pages

- **Home** — name, tagline, contact icons (`HomePage.astro`)
- **About** — intro, statement, expertise, experience, education, awards, contact (`AboutPage.astro`)
- **Work** — campaigns grouped by focus area (`WorkPage.astro`)
- **Awards** — awards and marquee activities (`AwardsPage.astro`)
- **Notes** — placeholder for future writing (`NotesPage.astro`)

### Adding a photo

The portrait is currently an `FZ` monogram (`src/components/Portrait.astro`).
To use a real photo, drop a square image into `src/assets/` and swap the
monogram markup for an `<Image>` from `astro:assets`.

## Deployment

Pushing to `main` triggers GitHub Actions, which builds and deploys to GitHub
Pages (`.github/workflows/deploy.yaml`). One-time setup: in the repo go to
**Settings → Pages → Build and deployment** and set the source to **GitHub Actions**.

Currently live at **https://jihaoxin.github.io/FreyaSite/**.

### Switching to the custom domain (freyazhang.com)

The site is configured for the project-path URL above. To move it to the custom
domain, in `astro.config.mjs`:

1. set `base: '/'` (or delete the `base` line)
2. set `site: 'https://freyazhang.com'`
3. add a file `public/CNAME` containing one line: `freyazhang.com`
4. in **Settings → Pages → Custom domain**, enter `freyazhang.com`
5. point DNS (Cloudflare) at GitHub Pages — a `CNAME` record for `www` to
   `jihaoxin.github.io`, plus the four GitHub Pages `A` records (or a flattened
   `CNAME`/`ALIAS`) for the apex `freyazhang.com`.

## Credits

Built on the [astro-scholar](https://github.com/whydevils/astro-scholar) template
by [whydevils](https://github.com/whydevils), used under the MIT License (see
[LICENSE](LICENSE)).
