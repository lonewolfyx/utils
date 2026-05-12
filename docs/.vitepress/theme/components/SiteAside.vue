<template>
    <aside
        class="hidden lg:flex lg:flex-col bg-primary/20 w-64 flex-none border-r fixed top-14 z-header"
    >
        <div class="flex-1 overflow-y-auto pt-3 pb-4 transition-[border-color]">
            <div class="flex flex-col gap-1 px-2">
                <div class="space-y-4">
                    <SiteSidebar v-if="sidebar.hasAside" :sidebar="aside" />
                </div>
            </div>
        </div>
    </aside>
</template>

<script lang="ts" setup>
import { useSidebar } from 'vitepress/theme'
import { computed } from 'vue'
import SiteSidebar from './SiteSidebar.vue'

defineOptions({
    name: 'SiteAside',
})

const sidebar = useSidebar()

const aside = computed(() => sidebar.sidebarGroups.value)
</script>

<style scoped>

</style>
