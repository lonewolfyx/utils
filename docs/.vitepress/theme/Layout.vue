<template>
    <div v-if="frontmatter.layout !== false">
        <Navbar />

        <div class="flex-1">
            <div class="flex min-h-screen pt-14">
                <template v-if="page.isNotFound">
                    不存在
                </template>
                <template v-else-if="frontmatter.layout === 'home'">
                    <SiteHome />
                </template>
                <template v-else>
                    <SiteContent />
                </template>
            </div>
        </div>
    </div>
    <div v-else>
        <Content />
    </div>
</template>

<script lang="ts" setup>
import { Content, useData } from 'vitepress'
import Navbar from './components/navbar.vue'
import SiteContent from './components/SiteContent.vue'
import SiteHome from './components/SiteHome.vue'

const { page, frontmatter } = useData()
</script>
