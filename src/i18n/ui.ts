// ============================================================================
// UI strings (chrome: navigation, section headings, labels)
// ============================================================================
// Page *content* lives in content.ts. This file holds the reusable interface
// labels so the same component can render in either language.

import type { Lang } from './utils';

export const NAV = [
    { slug: '', en: 'Home', zh: '首页' },
    { slug: 'about/', en: 'About', zh: '关于' },
    { slug: 'work/', en: 'Work', zh: '案例' },
    { slug: 'awards/', en: 'Awards', zh: '荣誉' },
    { slug: 'notes/', en: 'Notes', zh: '随笔' },
] as const;

export const UI = {
    en: {
        // section headings
        statement: 'Statement',
        expertise: 'Areas of Expertise',
        experience: 'Experience',
        education: 'Education',
        awards: 'Awards & Honors',
        contact: 'Contact',
        selectedWork: 'Selected Work',
        activities: 'Selected Activities',
        // contact labels
        email: 'Email',
        phone: 'Phone',
        wechat: 'WeChat',
        // misc
        present: 'Present',
        contactIntro:
            'Open to brand, marketing, and communications opportunities, as well as collaborations. The best way to reach me is by email.',
        notesEmpty: 'Writing is on the way — articles and field notes on brand, marketing, and communications will appear here.',
        comingSoon: 'Coming soon',
        toGoChinese: '中文',
        toGoEnglish: 'EN',
        langLabel: 'Switch language',
    },
    zh: {
        statement: '理念',
        expertise: '专业领域',
        experience: '工作经历',
        education: '教育背景',
        awards: '荣誉与奖项',
        contact: '联系方式',
        selectedWork: '代表案例',
        activities: '代表活动',
        email: '邮箱',
        phone: '电话',
        wechat: '微信',
        present: '至今',
        contactIntro:
            '欢迎品牌、市场、传播相关的机会与合作。最快的联系方式是邮件。',
        notesEmpty: '文章正在路上——关于品牌、营销与传播的思考和随笔会陆续更新在这里。',
        comingSoon: '敬请期待',
        toGoChinese: '中文',
        toGoEnglish: 'EN',
        langLabel: '切换语言',
    },
} as const;

export function t(lang: Lang) {
    return UI[lang];
}
