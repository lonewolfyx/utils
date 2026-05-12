<template>
    <div class="max-w-screen flex flex-col">
        <header
            :class="cn(
                'fixed top-0 left-0 gap-1 right-0 z-30 h-14',
                'flex-none border-border border-b',
                'bg-primary flex items-center justify-between px-2 md:px-4',
            )"
        >
            <div class="flex items-center">
                <a href="/">@lonewolfyx/utils</a>
            </div>

            <div class="hidden lg:flex item-center h-full">
                <NavigationMenu v-if="theme.nav" :viewport="false">
                    <NavigationMenuList>
                        <NavigationMenuItem
                            v-for="item in theme.nav"
                            :key="JSON.stringify(item)"
                        >
                            <NavBarMenuLink :item />
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>

            <div>
                <ModeSwitcher />
            </div>
        </header>
    </div>
</template>

<script lang="ts" setup>
import { useData } from 'vitepress'
import { cn } from '../lib/utils'
import ModeSwitcher from './ModeSwitcher.vue'
import NavBarMenuLink from './NavBarMenuLink.vue'
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from './ui/navigation-menu'

const { theme, page } = useData()
</script>
