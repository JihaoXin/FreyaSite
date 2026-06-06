// ============================================================================
// Site Configuration — identity & contact
// ============================================================================
// Bilingual page content lives in `src/i18n/content.ts`.
// Interface labels (nav, headings) live in `src/i18n/ui.ts`.
// This file holds the things that are the same across the whole site.

export const SITE_DATA = {
    // Name, shown bilingually
    name: { en: 'Freya Zhang', zh: '张悦' },

    // Short tagline under the name — "specialty | role"
    tagline: {
        en: 'Brand Marketing & Integrated Communications | Senior Brand Supervisor',
        zh: '品牌营销与整合传播 | 品牌推广高级主管',
    },

    // Contact — shown publicly on the site
    email: '877181179@qq.com',
    phoneDisplay: '+86 186 9518 2706',
    phoneHref: '+8618695182706',
    wechat: 'zycyybz',

    // Optional social handles (username only). Empty string hides the icon.
    linkedin: '',
    twitter: '',
    x: '',
    bluesky: '',
    github: '',
    scholar: '',

    // Base URL of the deployed site (used for Open Graph / sharing meta tags).
    // Update to https://freyazhang.com once the custom domain is live.
    siteUrl: 'https://jihaoxin.github.io/FreyaSite/',

    // Footer copyright year
    year: 2026,
};
