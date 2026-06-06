// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
//
// Deployment notes
// ----------------
// Currently deployed as a GitHub Pages *project* site at:
//   https://jihaoxin.github.io/FreyaSite/
// That is why `base` is set to '/FreyaSite/'.
//
// When you switch to the custom domain (freyazhang.com):
//   1. set `base: '/'`  (or delete the `base` line)
//   2. set `site: 'https://freyazhang.com'`
//   3. add a `public/CNAME` file containing the single line: freyazhang.com
//   4. configure the domain in GitHub → Settings → Pages → Custom domain
export default defineConfig({
  site: 'https://jihaoxin.github.io',
  base: '/FreyaSite/',
  i18n: {
    locales: ['en', 'zh'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
