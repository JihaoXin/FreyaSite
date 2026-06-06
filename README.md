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
npm run dev        # http://localhost:4321/
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
Pages (`.github/workflows/deploy.yaml`). The Pages source is already set to
**GitHub Actions** and the custom domain **freyazhang.com** is configured, so the
site builds for the domain root (`base: '/'`, with `public/CNAME`).

### DNS (Cloudflare)

`www.freyazhang.com` already points at GitHub Pages. The apex `freyazhang.com`
still needs records. In Cloudflare add either:

- an `A` record for `@` → each of `185.199.108.153`, `185.199.109.153`,
  `185.199.110.153`, `185.199.111.153` (Cloudflare flattens this automatically), or
- keep the apex as the GitHub Pages target and rely on Cloudflare CNAME flattening.

Set the records to **DNS only** (grey cloud) initially so GitHub can issue the
TLS certificate, then enable **Enforce HTTPS** in **Settings → Pages**.

## Credits

Built on the [astro-scholar](https://github.com/whydevils/astro-scholar) template
by [whydevils](https://github.com/whydevils), used under the MIT License (see
[LICENSE](LICENSE)).
