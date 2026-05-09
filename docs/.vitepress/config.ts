import { defineConfig } from 'vitepress'
import zhCN from './locales/zh-CN.json'
import enUS from './locales/en-US.json'

function createLocale(locale: typeof zhCN, prefix: string) {
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
							{ text: locale.gettingStarted, link: `${prefix}/guide/getting-started` }
						]
					}
				],
				[`${prefix}/api/`]: [
					{
						text: locale.apiLabel,
						items: locale.apiItems
					}
				]
			},
			outline: {
				label: locale.outline
			},
			lastUpdated: {
				text: locale.lastUpdated
			}
		}
	}
}

export default defineConfig({
	title: '@lonewolfyx/utils',
	description: '一个轻量级的 JavaScript 工具库',

	locales: {
		root: createLocale(zhCN, ''),
		en: createLocale(enUS, '/en')
	},

	themeConfig: {
		socialLinks: [
			{ icon: 'github', link: 'https://github.com/lonewolfyx/utils' }
		]
	}
})
