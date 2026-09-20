<script setup>
import {RouterLink, RouterView} from 'vue-router'
import {onMounted} from "vue";
import {paramCache} from "@/utils/UrlParams";

import {STORIES} from "@/data/global/STORIES";
import {useGlobalStore} from "@/stores/global";
import {DEFAULTS} from "@/data/global/DEFAULTS";
import {anonymousEmailSettingsFromHash} from "@/data/anonymousEmails/settingsFromHash";
import MovedNotification from "@/components/MovedNotification.vue";

const global = useGlobalStore();

onMounted(() => {
    window.addEventListener('hashchange', updateSettingsFromHash);
    updateSettingsFromHash();
})

function updateSettingsFromHash() {

    const storyKey = paramCache('story', 'string', DEFAULTS.STORY);

    if (Object.keys(STORIES).includes(storyKey)) {
        global.story = storyKey;
    } else {
        global.story = DEFAULTS.STORY;
    }

    switch(global.story) {
        case STORIES.ANONYMOUS_EMAILS:
            anonymousEmailSettingsFromHash();
            break;
    }

}
</script>

<template>
    <moved-notification></moved-notification>
    <header class="sticky top-0 z-10 border-b bg-surface">
        <nav class="flex flex-wrap items-center gap-x-6 gap-y-1 px-4 py-2" aria-label="Main">
            <span class="mr-2 font-semibold tracking-tight">Admin dashboard</span>
            <div class="ml-auto flex flex-wrap justify-end gap-x-6 gap-y-1">
                <router-link v-for="(text, routeName) of global.links" :key="routeName" :to="{name: routeName}">{{ text }}</router-link>
            </div>
        </nav>
    </header>

    <main class="mx-auto max-w-4xl px-4 pb-16">
        <RouterView/>
    </main>
</template>

<style scoped>
nav a {
    @apply rounded-md px-2.5 py-1.5 font-medium text-text-muted hover:bg-surface-muted hover:text-text;
}

nav a.router-link-exact-active {
    @apply bg-accent-soft text-accent;
}
</style>
