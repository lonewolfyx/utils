import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vitepress'
import enUS from './locales/en-US.json'
import zhCN from './locales/zh-CN.json'
import { codeBlockPlugin } from './plugins/code-block'

function createLocale(locale: typeof zhCN, prefix: string): any {
    return {
        label: locale.label,
        lang: locale.lang,
        link: locale.link,
        title: '@lonewolfyx/utils',
        description: locale.description,
        themeConfig: {
            nav: locale.nav,
            sidebar: {
                [`${prefix}/guide/`]: [
                    {
                        text: locale.guideLabel,
                        items: [
                            { text: locale.gettingStarted, link: `${prefix}/guide/getting-started` },
                        ],
                    },
                ],
                [`${prefix}/api/`]: [
                    {
                        text: locale.apiLabel,
                        items: locale.apiItems,
                    },
                ],
            },
            outline: {
                label: locale.outline,
            },
            lastUpdated: {
                text: locale.lastUpdated,
            },
        },
    }
}

function disableVitePressBaseCss(): any {
    const virtualId = 'virtual:vitepress-empty-base-css'
    const resolvedVirtualId = `\0${virtualId}`

    return {
        name: 'disable-vitepress-base-css',
        enforce: 'pre',

        resolveId(id: string, importer?: string) {
            // VitePress default theme:
            // vitepress/dist/client/theme-default/without-fonts.js
            // import './styles/base.css'
            if (
                id === './styles/base.css'
                && importer?.includes('vitepress')
                && importer?.includes('theme-default')
            ) {
                return resolvedVirtualId
            }

            // 兼容某些情况下已经解析成绝对路径
            if (
                id.includes('vitepress')
                && id.includes('theme-default/styles/base.css')
            ) {
                return resolvedVirtualId
            }

            return null
        },

        load(id: string) {
            if (id === resolvedVirtualId) {
                return ''
            }

            return null
        },
    }
}

export default defineConfig({
    title: '@lonewolfyx/utils',
    description: '一个轻量级的 JavaScript 工具库',

    markdown: {
        lineNumbers: true,
        theme: {
            light: 'github-light',
            dark: 'github-dark',
        },
        config(md) {
            md.use(codeBlockPlugin)
        },
    },

    locales: {
        root: createLocale(zhCN, ''),
        en: createLocale(enUS, '/en'),
    },

    themeConfig: {
        socialLinks: [
            { icon: 'github', link: 'https://github.com/lonewolfyx/utils' },
        ],
    },

    vite: {
        plugins: [
            tailwindcss() as never,
            disableVitePressBaseCss(),
        ],
    },
})
