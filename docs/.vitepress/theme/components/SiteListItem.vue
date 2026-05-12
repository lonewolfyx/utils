<template>
    <li class="relative pl-8 pb-5">
        <div class="flex items-center gap-3 mb-2">
            <div
                aria-hidden="true"
                class="absolute left-0 w-7 h-7 rounded-full bg-neutral-300/20 text-text-300 text-sm font-semibold flex items-center justify-center ml-[-13px] flex-shrink-0"
                contenteditable="false"
            >
                {{ index }}
            </div>
            <h3 class="font-semibold text-text-100 mb-1 text-lg !mb-0 capitalize" contenteditable="false">
                {{ title }}
            </h3>
        </div>
        <div
            aria-hidden="true"
            class="absolute left-0 w-px h-[calc(100%-2.5rem)] top-8 bg-gradient-to-b from-neutral-300 to-transparent"
            contenteditable="false"
        />
        <slot />
    </li>
</template>

<script lang="ts" setup>
defineOptions({
    name: 'SiteListItem',
})

withDefaults(defineProps<{
    index?: number
    title?: string
}>(), {
    index: 0,
    title: '',
})
</script>
