<template>
    <NavigationMenuLink
        :class="cn(
            isActiveLink ? [
                'bg-accent text-foreground',
            ] : 'text-dusty-gray',
            'rounded-full px-4 py-2 text-xs font-medium',
        )"
        as-child
    >
        <a :href="item.link">{{ item.text }}</a>
    </NavigationMenuLink>
</template>

<script lang="ts" setup>
import type { DefaultTheme } from 'vitepress/theme'
import { useData } from 'vitepress'
import { computed } from 'vue'
import { cn, isActive } from '../lib/utils'
import { NavigationMenuLink } from './ui/navigation-menu'

defineOptions({
    name: 'NavBarMenuLink',
})

const props = defineProps<{
    item: DefaultTheme.NavItemWithLink
}>()

const { page } = useData()

const href = computed(() => props.item.link)

const isActiveLink = computed(() =>
    isActive(
        page.value.relativePath,
        props.item.activeMatch || href.value,
        !!props.item.activeMatch,
    ),
)
</script>
