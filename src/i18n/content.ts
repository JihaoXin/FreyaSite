// ============================================================================
// Page content — bilingual (English + 中文)
// ============================================================================
// All of the substantive page copy lives here so the same components can render
// in either language. Edit the `en` and `zh` objects to update the site.

import type { Lang } from './utils';

export interface ExpertiseItem {
    title: string;
    description: string;
}
export interface Position {
    role: string;
    org: string;
    period: string;
    summary: string;
    highlights: string[];
}
export interface EducationItem {
    degree: string;
    school: string;
    period: string;
    details: string[];
}
export interface AwardItem {
    title: string;
    description: string;
}
export interface Project {
    title: string;
    org: string;
    description: string;
    metrics: string[];
}
export interface ProjectGroup {
    category: string;
    projects: Project[];
}
export interface Activity {
    title: string;
    meta: string;
    detail?: string;
}

interface PageContent {
    metaDescription: string;
    intro: string;
    statement: string;
    expertise: ExpertiseItem[];
    positions: Position[];
    education: EducationItem[];
    awards: AwardItem[];
    work: ProjectGroup[];
    activities: Activity[];
}

const en: PageContent = {
    metaDescription:
        "Freya Zhang (张悦) — brand marketing & integrated communications professional. Brand strategy, integrated marketing, sponsorships, and content for one of China's largest insurers.",

    intro:
        "I'm a brand marketing professional based in China, currently a Senior Brand Promotion Supervisor in the Brand Communication Department at China Life Insurance — one of the country's largest insurers. My work spans brand strategy and architecture, integrated marketing and sponsorships, content production, and omni-channel media planning, often at national scale. I hold a Master's in Advertising from The Chinese University of Hong Kong and a Bachelor's in Chinese Language & Literature from Shandong University.",

    statement:
        "Strong brands aren't built on exposure alone. They're built on consistent strategy, cultural relevance, and stories people actually want to share.",

    expertise: [
        {
            title: 'Brand Strategy & Architecture',
            description:
                'Setting annual communication strategy for a market-leading brand and building out its brand matrix — from positioning and visual identity systems to launching new sub-brands from the ground up.',
        },
        {
            title: 'Integrated Marketing & Sponsorships',
            description:
                'Turning scattered sponsorships into systematic, integrated campaigns across sports, entertainment, and cultural IP — pairing online conversation with on-the-ground activations.',
        },
        {
            title: 'Content & Creative Production',
            description:
                'Leading the production of public-service films, corporate brand films, and key visuals for major brand moments — high-volume, multi-format output that builds lasting brand assets.',
        },
        {
            title: 'Omni-channel Media Planning',
            description:
                'Planning and allocating online and offline media — from national TV and social platforms to airports and high-speed rail — to deliver brand and product exposure at scale.',
        },
    ],

    positions: [
        {
            role: 'Senior Brand Promotion Supervisor',
            org: 'China Life Insurance — Brand Communication Department',
            period: 'Aug 2021 – Present',
            summary:
                "Lead brand strategy, integrated marketing, content production, and media planning for one of China's largest insurance brands, across sponsorships, IP partnerships, and brand management.",
            highlights: [
                'Set the master brand’s annual communication strategy and delivered 10+ brand campaigns a year, integrating event sponsorships, partnerships, and advertising.',
                'Built the “Good Service” (国寿好服务) sub-brand from the ground up — visual identity, branded TV programming, and creative advertising — reaching 500M+ cumulative impressions.',
                'Repositioned the brand for younger audiences across Xiaohongshu, Weibo, and WeChat Channels: #1 industry ranking on WeChat Channels and 5× peer follower growth on Xiaohongshu.',
                'Led the finance industry’s first systematic sports-marketing program (CBA, NYBO, grassroots football, and extreme-sports properties), winning the Yanshu Award for Excellence in Brand Marketing.',
                'Managed brand compliance review, a nine-figure (RMB) communications budget, and 300+ design deliverables a year across 20+ departments.',
            ],
        },
        {
            role: 'Corporate Intern',
            org: 'Weber Shandwick (clients: Microsoft, Herbalife)',
            period: 'Nov 2019 – Mar 2020',
            summary:
                'Supported corporate communications for global clients — social content, brand strategy, and media relations.',
            highlights: [
                'Ran the “Microsoft China” Weibo account: 120+ original posts, 50k+ interactions, and 20k+ new followers in four months.',
                'Pivoted Herbalife’s online strategy during the pandemic from product promotion to a health series; WeChat articles reached 100k+ reads.',
                'Designed and delivered media-relations programs and analyzed public-opinion coverage to support client positioning.',
            ],
        },
    ],

    education: [
        {
            degree: 'M.A. in Advertising',
            school: 'The Chinese University of Hong Kong',
            period: '2020 – 2021',
            details: [
                'GPA 3.63 / 4.0 (Top 10%)',
                'Coursework: Advertising & Communication Theory, Advertising Law & Ethics, Interpersonal & Group Communication, Client Planning & Management',
            ],
        },
        {
            degree: 'B.A. in Chinese Language & Literature',
            school: 'Shandong University',
            period: '2016 – 2020',
            details: [
                'GPA 88 / 100 (Top 9%)',
                'Coursework: Chinese Writing, Contemporary Chinese Literature, Social Survey Methods',
            ],
        },
    ],

    awards: [
        {
            title: 'Yanshu Award · Excellence in Brand Marketing',
            description:
                "For leading the finance industry's first systematic sports-marketing program at China Life.",
        },
        {
            title: 'IAI International Advertising Awards',
            description:
                'For brand content work, including public-service films and corporate brand films.',
        },
        {
            title: 'Kirin International Advertising Awards',
            description: 'For brand content and creative campaigns.',
        },
        {
            title: 'China Innovation Communication Awards · Dandelion',
            description: 'For innovation in brand communication.',
        },
    ],

    work: [
        {
            category: 'Brand Strategy & Architecture',
            projects: [
                {
                    title: '“Good Service” Sub-brand Launch',
                    org: 'China Life Insurance',
                    description:
                        'Defined the positioning and rollout strategy for the “Good Service” (国寿好服务) sub-brand, building a visual-asset system, branded TV programming, and creative advertising to deepen vertical-market communication.',
                    metrics: ['500M+ cumulative impressions', 'Built from 0 → 1'],
                },
                {
                    title: 'Brand Rejuvenation & Social Growth',
                    org: 'China Life Insurance',
                    description:
                        'Repositioned the master brand for younger audiences with a hotspot-driven content strategy across Xiaohongshu, Weibo, and WeChat Channels.',
                    metrics: [
                        '#1 industry ranking on WeChat Channels',
                        '5× peer follower growth on Xiaohongshu',
                        '60% young-user engagement',
                        '+11% YoY brand-sentiment health',
                    ],
                },
            ],
        },
        {
            category: 'Integrated Marketing & Sponsorships',
            projects: [
                {
                    title: 'China Life Sports Marketing Plan',
                    org: 'China Life Insurance',
                    description:
                        "Built the finance industry's first systematic, publicly-announced sports-marketing program — integrating basketball (CBA, NYBO), grassroots football, and extreme-sports properties (the Taklimakan Rally, an Everest expedition) under a “mass sport, attitude marketing” idea, pairing online conversation with offline activations.",
                    metrics: [
                        '10M+ people reached',
                        '1.26M+ app referrals',
                        'Yanshu Award for Excellence in Brand Marketing',
                    ],
                },
                {
                    title: 'CBA League Activation',
                    org: 'China Life Insurance',
                    description:
                        'Ran All-Star Weekend, Junior CBA, club visits, and slam-dunk events across client, high-net-worth, media, and government-relations scenarios, tightening the brand’s tie to the league.',
                    metrics: ['~¥60M / yr in indirectly-driven revenue'],
                },
            ],
        },
        {
            category: 'IP & Brand Partnerships',
            projects: [
                {
                    title: 'China Life × Universal Beijing Brand Day',
                    org: 'China Life Insurance',
                    description:
                        "As Universal Beijing Resort's official insurance partner, led the “China Life Universal Brand Day”, named the Transformers base, and created the “China Life Robot” mascot — using Minions and Transformers IP to package insurance products and lower the barrier to brand perception.",
                    metrics: ['¥70B+ in coverage linked to the activation'],
                },
            ],
        },
        {
            category: 'Content & Creative Production',
            projects: [
                {
                    title: 'Brand Content & Key Visuals',
                    org: 'China Life Insurance',
                    description:
                        'Led production of public-service films, corporate brand films, and anniversary key visuals across online and offline channels — high-frequency, multi-format output that compounds brand equity.',
                    metrics: ['100+ assets produced', 'IAI, Kirin & Dandelion awards'],
                },
            ],
        },
        {
            category: 'Omni-channel Media Planning',
            projects: [
                {
                    title: 'Omni-channel Media System',
                    org: 'China Life Insurance',
                    description:
                        'Planned online + offline media buying and budget allocation on a “focus, localize, market-driven” principle — national TV and WeChat Moments online, airports and high-speed rail offline.',
                    metrics: ['100M+ annual brand & product exposure'],
                },
            ],
        },
        {
            category: 'Earlier Work',
            projects: [
                {
                    title: 'Microsoft China — Social Media',
                    org: 'Weber Shandwick',
                    description:
                        'Planned original content and news releases for the “Microsoft China” Weibo account.',
                    metrics: ['120+ original posts', '50k+ interactions', '+20k followers in 4 months'],
                },
                {
                    title: 'Herbalife — Pandemic Response',
                    org: 'Weber Shandwick',
                    description:
                        'Pivoted online brand strategy from product promotion to a pandemic health series.',
                    metrics: ['100k+ WeChat article reads'],
                },
            ],
        },
    ],

    activities: [
        {
            title: 'China Life Universal Brand Day',
            meta: 'Universal Beijing Resort · Official insurance partner',
            detail: "Named the Transformers base and launched the “China Life Robot” brand image.",
        },
        {
            title: 'CBA All-Star Weekend & Junior CBA',
            meta: 'China Basketball Association',
            detail: 'A series of activations spanning client engagement and large-scale brand exposure.',
        },
        {
            title: 'Extreme-sports Sponsorships',
            meta: 'Taklimakan Rally · Everest expedition',
            detail: 'Part of the China Life sports-marketing matrix.',
        },
        {
            title: 'Brand Films & Public-service Campaigns',
            meta: 'China Life Insurance',
            detail: 'Public-service films, corporate brand films, and anniversary key visuals — 100+ assets.',
        },
    ],
};

const zh: PageContent = {
    metaDescription:
        '张悦（Freya Zhang）——品牌营销与整合传播从业者。为中国大型保险品牌操盘品牌策略、整合营销、赛事赞助与内容传播。',

    intro:
        '我是一名品牌营销从业者，现任中国人寿保险股份有限公司品牌宣传部品牌推广高级主管。工作覆盖品牌策略与矩阵建设、整合营销与品牌合作、品牌内容制作以及全域媒介投放，多为全国规模的项目。我拥有香港中文大学广告学硕士与山东大学汉语言文学学士学位。',

    statement:
        '好的品牌不只靠曝光堆出来，而是靠持续的策略、对文化与热点的敏感，以及真正值得被分享的内容。',

    expertise: [
        {
            title: '品牌策略与矩阵建设',
            description:
                '为行业头部品牌制定年度传播策略、搭建品牌矩阵——从定位、视觉识别体系，到从 0 到 1 打造全新子品牌。',
        },
        {
            title: '整合营销与品牌合作',
            description:
                '把分散的赛事赞助升级为系统化的整合营销，覆盖体育、娱乐与文化 IP，线上话题与线下活动双轮驱动。',
        },
        {
            title: '品牌内容制作',
            description:
                '主导公益宣传片、企业品牌片及重要节点主视觉的制作——高频次、多形态产出，持续积累品牌资产。',
        },
        {
            title: '全域媒介投放',
            description:
                '统筹线上线下媒介投放与预算分配——从央视、社交平台到机场、高铁，实现规模化的品牌与产品曝光。',
        },
    ],

    positions: [
        {
            role: '品牌推广高级主管',
            org: '中国人寿保险股份有限公司 · 品牌宣传部',
            period: '2021.08 – 至今',
            summary:
                '负责品牌策略、整合营销、内容制作与媒介投放，覆盖赛事赞助、IP 合作与品牌管理。',
            highlights: [
                '统筹母品牌年度传播策略，每年落地 10+ 场品牌推广活动，整合赛事赞助、品牌合作与广告投放。',
                '从 0 到 1 打造「国寿好服务」子品牌——构建视觉资产体系、策划电视节目、推出创意广告，累计曝光超 5 亿人次。',
                '推动品牌年轻化，布局小红书、微博、微信视频号：微信视频号行业排名 Top1，小红书涨粉速度达同业 5 倍。',
                '牵头金融行业首个系统性体育营销计划（CBA、NYBO、草根足球及极限运动），荣获「燕梳奖·卓越品牌营销奖」。',
                '负责品牌合规审核、上亿级传播预算管理，统筹 20+ 部门、每年交付 300+ 项设计服务。',
            ],
        },
        {
            role: '实习生（Corporate 组）',
            org: '万博宣伟公关公司（Weber Shandwick）· 客户：微软、康宝莱',
            period: '2019.11 – 2020.03',
            summary: '支持全球客户的企业传播——社交内容、品牌策略与媒体关系。',
            highlights: [
                '运营「微软中国」微博账号：原创博文 120+，互动总数 5 万+，4 个月涨粉 2 万+。',
                '疫情期间将康宝莱线上品宣从产品推广转向健康系列，微信公众号推文累计阅读 10 万+。',
                '设计并落实媒体关系维护方案，分析舆情报道以支持客户立论。',
            ],
        },
    ],

    education: [
        {
            degree: '广告学 · 硕士',
            school: '香港中文大学',
            period: '2020 – 2021',
            details: [
                'GPA 3.63 / 4.0（前 10%）',
                '主修：广告及传播理论、广告法与伦理、人际传播与团体关系、客户企划与管理',
            ],
        },
        {
            degree: '汉语言文学 · 学士',
            school: '山东大学',
            period: '2016 – 2020',
            details: [
                'GPA 88 / 100（前 9%）',
                '主修：中文写作训练、中国当代文学、社会调查方法',
            ],
        },
    ],

    awards: [
        {
            title: '燕梳奖 · 卓越品牌营销奖',
            description: '凭借中国人寿金融行业首个系统性体育营销计划获奖。',
        },
        {
            title: 'IAI 传鉴国际广告奖',
            description: '凭借公益宣传片、企业品牌片等品牌内容获奖。',
        },
        {
            title: '麒麟国际广告奖',
            description: '凭借品牌内容与创意作品获奖。',
        },
        {
            title: '中国创新传播大奖 · 蒲公英',
            description: '凭借创新性品牌传播获奖。',
        },
    ],

    work: [
        {
            category: '品牌策略与矩阵建设',
            projects: [
                {
                    title: '「国寿好服务」子品牌打造',
                    org: '中国人寿',
                    description:
                        '制定「国寿好服务」子品牌定位与推广策略，构建视觉资产体系、策划电视节目、推出创意广告，深耕垂类传播。',
                    metrics: ['累计曝光超 5 亿人次', '从 0 到 1 建设'],
                },
                {
                    title: '品牌年轻化与社交增长',
                    org: '中国人寿',
                    description:
                        '以热点驱动内容策略，布局小红书、微博、微信视频号，重塑品牌与年轻消费者的对话方式。',
                    metrics: [
                        '微信视频号行业 Top1',
                        '小红书涨粉达同业 5 倍',
                        '年轻用户互动率 60%',
                        '全平台舆论健康度同比 +11%',
                    ],
                },
            ],
        },
        {
            category: '整合营销与品牌合作',
            projects: [
                {
                    title: '中国人寿体育营销计划',
                    org: '中国人寿',
                    description:
                        '打造金融行业首个系统性对外发布的体育营销计划，整合篮球（CBA、NYBO）、草根足球及极限运动（环塔拉力赛、登珠峰），以「大众运动 + 态度营销」为核心，线上话题与线下活动双轮驱动。',
                    metrics: [
                        '累计触达超 1000 万人次',
                        '为 APP 引流超 126 万人次',
                        '荣获燕梳奖·卓越品牌营销奖',
                    ],
                },
                {
                    title: 'CBA 联赛权益激活',
                    org: '中国人寿',
                    description:
                        '统筹全明星周末、少年 CBA、俱乐部探营及扣篮大赛等系列活动，覆盖客户经营、高净值维护、媒体与政府关系等多元场景。',
                    metrics: ['每年间接拉动收入超 6000 万元'],
                },
            ],
        },
        {
            category: 'IP 与品牌合作',
            projects: [
                {
                    title: '中国人寿 × 北京环球度假区 品牌日',
                    org: '中国人寿',
                    description:
                        '作为北京环球度假区官方保险合作伙伴，主导「中国人寿环球品牌日」落地，冠名「变形金刚」基地并打造「国寿机器人」形象；借力小黄人、变形金刚等 IP 对保险产品进行场景化包装。',
                    metrics: ['累计提供保额超 700 亿元'],
                },
            ],
        },
        {
            category: '品牌内容制作',
            projects: [
                {
                    title: '品牌内容与主视觉',
                    org: '中国人寿',
                    description:
                        '主导公益宣传片、企业微电影、司庆海报等重要物料的制作发布，覆盖线上线下核心渠道，高频次、多形态产出。',
                    metrics: ['产出物料 100+ 份', 'IAI、麒麟、蒲公英等奖项'],
                },
            ],
        },
        {
            category: '全域媒介投放',
            projects: [
                {
                    title: '全域媒介投放体系',
                    org: '中国人寿',
                    description:
                        '以「聚焦重点、因地制宜、市场驱动」为原则统筹线上线下投放与预算：线上聚焦央视及朋友圈，线下布局机场、高铁等高流量场景。',
                    metrics: ['每年过亿级品牌与产品曝光'],
                },
            ],
        },
        {
            category: '早期经历',
            projects: [
                {
                    title: '微软中国 · 社交媒体',
                    org: '万博宣伟',
                    description: '负责「微软中国」微博的原创内容策划与新闻发布。',
                    metrics: ['原创博文 120+', '互动 5 万+', '4 个月涨粉 2 万+'],
                },
                {
                    title: '康宝莱 · 疫情应对',
                    org: '万博宣伟',
                    description: '疫情期间将线上品宣从产品推广转向健康系列。',
                    metrics: ['微信推文阅读 10 万+'],
                },
            ],
        },
    ],

    activities: [
        {
            title: '中国人寿环球品牌日',
            meta: '北京环球度假区 · 官方保险合作伙伴',
            detail: '冠名「变形金刚」基地，打造「国寿机器人」品牌形象。',
        },
        {
            title: 'CBA 全明星周末 & 少年 CBA',
            meta: '中国篮球协会',
            detail: '覆盖客户经营与品牌曝光的系列活动。',
        },
        {
            title: '极限运动赞助',
            meta: '环塔拉力赛 · 登珠峰',
            detail: '中国人寿体育营销矩阵的一部分。',
        },
        {
            title: '品牌片与公益传播',
            meta: '中国人寿',
            detail: '公益宣传片、企业微电影、司庆海报——累计 100+ 份物料。',
        },
    ],
};

export const CONTENT: Record<Lang, PageContent> = { en, zh };

export function getContent(lang: Lang): PageContent {
    return CONTENT[lang];
}
