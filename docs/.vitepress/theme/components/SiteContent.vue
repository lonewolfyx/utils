<template>
    <SiteAside />
    <div class="flex flex-col w-full min-w-0 lg:pl-64">
        <main class="flex-1 bg-bg-100 pt-10 lg:pt-0">
            <div class="max-w-screen-2xl w-full mx-auto min-h-[calc(100vh-3.5rem)]">
                <div class="w-full relative max-w-screen-2xl flex justify-center lg:justify-between mx-auto shrink">
                    <article
                        :class="cn(
                            'prose prose-slate',
                            'dark:prose-invert',
                            'prose-a:inline-flex prose-a:items-center prose-a:min-h-[44px] prose-a:py-0.5',
                            'prose-p:leading-[1.6] prose-li:leading-[1.6] prose-blockquote:leading-[1.6]',
                            'text-foreground/65',
                            'mx-auto max-w-5xl lg:max-w-4xl w-full min-w-0 overflow-x-hidden',
                            'break-words',
                            'px-6 py-8 lg:p-8',
                            '[&>*]:max-w-full [&>*]:box-border',
                        )"
                    >
                        <Content />
                    </article>
                </div>
            </div>
        </main>
    </div>
</template>

<script lang="ts" setup>
import { Content } from 'vitepress'
import { cn } from '../lib/utils'
import SiteAside from './SiteAside.vue'

defineOptions({
    name: 'SiteContent',
})
</script>

<style scoped>

</style>
