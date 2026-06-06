// ============================================================================
// i18n routing helpers
// ============================================================================
// English is the default locale and lives at the site root (e.g. /FreyaSite/).
// Chinese lives under a /zh/ prefix (e.g. /FreyaSite/zh/).
// These helpers build locale-aware links that respect Astro's BASE_URL so the
// site keeps working whether it is served from /FreyaSite/ or from a root
// custom domain later.

export const LANGUAGES = ['en', 'zh'] as const;
export type Lang = (typeof LANGUAGES)[number];
export const DEFAULT_LANG: Lang = 'en';

function normBase(): string {
    const base = import.meta.env.BASE_URL || '/';
    return base.endsWith('/') ? base : base + '/';
}

/** Strip the base prefix from a pathname, returning the route remainder. */
function stripBase(pathname: string): string {
    const base = normBase();
    if (pathname.startsWith(base)) return pathname.slice(base.length);
    return pathname.replace(/^\/+/, '');
}

/** Detect the active language from the current pathname. */
export function getLangFromUrl(pathname: string): Lang {
    const rest = stripBase(pathname);
    return rest === 'zh' || rest.startsWith('zh/') ? 'zh' : 'en';
}

/**
 * Build a locale-aware path for a page slug.
 *   localePath('en', 'about/')  -> '/FreyaSite/about/'
 *   localePath('zh', 'about/')  -> '/FreyaSite/zh/about/'
 *   localePath('zh')            -> '/FreyaSite/zh/'
 */
export function localePath(lang: Lang, slug = ''): string {
    const base = normBase();
    const clean = slug.replace(/^\/+/, '');
    if (lang === DEFAULT_LANG) return base + clean;
    return base + 'zh/' + clean;
}

/**
 * Given the current pathname, return the equivalent page in the other language.
 * Used by the language toggle so switching keeps you on the same page.
 */
export function altLang(pathname: string): { lang: Lang; href: string } {
    const base = normBase();
    let rest = stripBase(pathname);
    if (rest === 'zh') rest = 'zh/';
    if (rest.startsWith('zh/')) {
        return { lang: 'en', href: base + rest.replace(/^zh\//, '') };
    }
    return { lang: 'zh', href: base + 'zh/' + rest };
}
