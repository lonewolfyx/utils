<template>
    <div class="flex flex-col w-full min-w-0">
        <main class="flex-1 bg-primary pt-10 lg:pt-0">
            <div class="max-w-screen-2xl w-full mx-auto min-h-[calc(100vh-3.5rem)]">
                <div class="min-h-screen">
                    <section class="px-5 pt-8 pb-12 max-w-[1200px] mx-auto">
                        <div class="mb-8">
                            <div class="text-xs font-semibold uppercase tracking-widest text-amber-500 mb-2">
                                @lonewolfyx/utils
                            </div>
                            <h2 class="font-mono">
                                轻量级 JavaScript 工具库
                            </h2>
                            <p class="mt-3 text-base max-w-lg leading-relaxed">
                                为简化常见开发任务而生，提供一系列实用的函数和方法
                            </p>
                        </div>

                        <SiteHomeGuidance />
                    </section>
                </div>
            </div>
        </main>
    </div>
</template>

<script lang="ts" setup>
import SiteHomeGuidance from './SiteHomeGuidance.vue'

defineOptions({
    name: 'SiteHome',
})
</script>
