<template>
    <DefineTemplate v-slot="{ link }">
        <Button
            v-for="item in link"
            :key="item.icon"
            as-child
            class="h-8 shadow-none"
            size="sm"
            variant="ghost"
        >
            <a
                :href="item.link"
                rel="noreferrer"
                target="_blank"
            >
                <Icon icon="mdi:github" />
            </a>
        </Button>
    </DefineTemplate>
    <UseTemplate :link="theme.socialLinks" />
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue'
import { useData } from 'vitepress'
import { createReusableTemplate } from '../composables/createReusableTemplate.ts'
import { Button } from './ui/button'

defineOptions({
    name: 'SiteSocialLink',
})
const { theme } = useData()

const [DefineTemplate, UseTemplate] = createReusableTemplate()
</script>
