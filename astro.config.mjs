// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
//
// Deployment notes
// ----------------
// Deployed to GitHub Pages with the custom domain freyazhang.com, which serves
// from the domain root — so `base` is '/'. The domain is set both in the repo's
// Pages settings and via public/CNAME.
//
// If you ever remove the custom domain and want the github.io project URL
// (https://jihaoxin.github.io/FreyaSite/) instead, set `base: '/FreyaSite/'`
// and `site: 'https://jihaoxin.github.io'`, and delete public/CNAME.
export default defineConfig({
  site: 'https://freyazhang.com',
  base: '/',
  i18n: {
    locales: ['en', 'zh'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
