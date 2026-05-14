<template>
    <SiteList>
        <SiteListItem
            v-for="(item, index) in fn"
            :key="`fn${index}`"
            :index="index + 1"
            :title="item.label"
        >
            <div class="text-sm dark:prose-invert max-w-none text-text-300 dark:text-text-200 mt-2">
                <div
                    class="not-prose grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-2"
                >
                    <a
                        v-for="(fn, key) in item.children"
                        :key="`children${key}`"
                        :href="fn.href"
                        class="group flex items-center gap-3 px-4 py-3 rounded-[0.6rem] border-0.5 border no-underline text-text-100 hover:bg-primary/20 transition-colors"
                    >
                        <Icon
                            :icon="fn.icon"
                            class="text-pretty size-4 flex items-center justify-center"
                        />
                        <span class="text-sm font-medium">{{ fn.label }}</span>
                        <Icon
                            class="text-text-400 ml-auto opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0"
                            icon="lucide:move-right"
                        />
                    </a>
                </div>
            </div>
        </SiteListItem>
    </SiteList>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue'
import SiteList from './SiteList.vue'
import SiteListItem from './SiteListItem.vue'

defineOptions({
    name: 'SiteHomeGuidance',
})

const fn = [
    {
        label: 'Guide',
        children: {
            guide: {
                icon: 'streamline:startup-solid',
                label: 'Getting Started',
                href: '/guide/getting-started.html',
            },
        },
    },
    {
        label: 'format · 数字格式化相关工具函数',
        children: {
            'format-number': {
                icon: 'octicon:number-16',
                label: 'formatNumber · 数字格式化',
                href: '/api/format.html#formatnumber',
            },
        },
    },
    {
        label: 'promise · 异步相关的工具函数',
        children: {
            sleep: {
                icon: 'mingcute:sleep-line',
                label: 'sleep · 基于 Promise 的延时函数',
                href: '/api/promise.html#sleep',
            },
            importDefault: {
                icon: 'mdi:import',
                label: 'importDefault · 动态导入模块默认导出',
                href: '/api/promise.html#importdefault',
            },
        },
    },
    {
        label: 'schedule',
        children: {
            createSchedule: {
                icon: 'mdi:scheduled-maintenance',
                label: 'createSchedule',
                href: '/api/schedule.html#createschedule',
            },
        },
    },
    {
        label: 'string · 异步相关的工具函数',
        children: {
            capitalize: {
                icon: 'boxicons:capitalize-filled',
                label: 'capitalize',
                href: '/api/string.html#capitalize',
            },
            randomStr: {
                icon: 'game-icons:perspective-dice-six-faces-random',
                label: 'randomStr',
                href: '/api/string.html#randomstr',
            },
            md5: {
                icon: 'carbon:encryption',
                label: 'md5',
                href: '/api/string.html#md5',
            },
        },
    },
]
</script>
