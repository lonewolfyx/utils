import { defineConfig } from 'vitepress'

export default defineConfig({
    title: '@lonewolfyx/utils',
    description: '一个轻量级的 JavaScript 工具库',

    locales: {
        root: {
            label: '简体中文',
            lang: 'zh-CN',
            link: '/',
            title: '@lonewolfyx/utils',
            description: '一个轻量级的 JavaScript 工具库',
            themeConfig: {
                nav: [
                    { text: '指南', link: '/guide/getting-started' },
                    { text: 'API', link: '/api/format' },
                ],
                sidebar: {
                    '/guide/': [
                        {
                            text: '指南',
                            items: [
                                { text: '快速开始', link: '/guide/getting-started' },
                            ],
                        },
                    ],
                    '/api/': [
                        {
                            text: 'API 参考',
                            items: [
                                { text: 'format - 数字格式化', link: '/api/format' },
                                { text: 'promise - 异步工具', link: '/api/promise' },
                                { text: 'schedule - 任务调度', link: '/api/schedule' },
                                { text: 'string - 字符串工具', link: '/api/string' },
                            ],
                        },
                    ],
                },
                outline: {
                    label: '页面导航',
                },
                lastUpdated: {
                    text: '最后更新于',
                },
            },
        },
        en: {
            label: 'English',
            lang: 'en-US',
            link: '/en/',
            title: '@lonewolfyx/utils',
            description: 'A lightweight JavaScript utility library',
            themeConfig: {
                nav: [
                    { text: 'Guide', link: '/en/guide/getting-started' },
                    { text: 'API', link: '/en/api/format' },
                ],
                sidebar: {
                    '/en/guide/': [
                        {
                            text: 'Guide',
                            items: [
                                { text: 'Getting Started', link: '/en/guide/getting-started' },
                            ],
                        },
                    ],
                    '/en/api/': [
                        {
                            text: 'API Reference',
                            items: [
                                { text: 'format - Number Formatting', link: '/en/api/format' },
                                { text: 'promise - Async Utilities', link: '/en/api/promise' },
                                { text: 'schedule - Task Scheduler', link: '/en/api/schedule' },
                                { text: 'string - String Utilities', link: '/en/api/string' },
                            ],
                        },
                    ],
                },
                outline: {
                    label: 'On this page',
                },
                lastUpdated: {
                    text: 'Last updated',
                },
            },
        },
    },

    themeConfig: {
        socialLinks: [
            { icon: 'github', link: 'https://github.com/lonewolfyx/utils' },
        ],
    },
})
