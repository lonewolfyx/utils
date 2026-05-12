<template>
    <DefineTemplate v-slot="{ aside }">
        <a
            v-for="item in aside"
            :key="item.text"
            :class="cn(
                'h-8 px-2 flex items-center text-sm rounded-lg transition-colors duration-200',
                isActiveLink(item.link) ? 'bg-accent text-foreground/75' : 'text-foreground/65 hover:text-foreground/75 hover:bg-accent',
            )"
            :href="item.link"
            class=""
        >
            <span class="h-full flex items-center min-w-0">
                <span class="truncate py-1">{{ item.text }}</span>
            </span>
        </a>
    </DefineTemplate>
    <div
        v-for="side in sidebar"
        :key="side"
    >
        <div class="text-sm text-neutral-800 font-medium h-8 flex items-center px-2 mb-1">
            {{ side.text }}
        </div>
        <div class="flex flex-col gap-1">
            <AsideItem :aside="side.items" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { DefaultTheme } from 'vitepress/theme'
import { useData } from 'vitepress'
import { createReusableTemplate } from '../composables/createReusableTemplate'
import { cn, isActive } from '../lib/utils'

defineOptions({
    name: 'SiteSidebar',
})

defineProps<{
    sidebar: DefaultTheme.SidebarItem[]
}>()
const [DefineTemplate, AsideItem] = createReusableTemplate()
const { page } = useData()

function isActiveLink(link: string): boolean {
    return isActive(page.value.relativePath, link)
}
</script>
