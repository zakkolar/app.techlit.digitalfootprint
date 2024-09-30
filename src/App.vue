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
    <header>
        <nav class="sticky inset-0 z-10 block h-max w-full max-w-full rounded-none border border-white/80 bg-white bg-opacity-80 py-2 px-4 text-white shadow-md backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4 top-0">
            <div class="flex items-center text-gray-900">
                <span class="mr-4 block cursor-pointer py-1.5 font-sans text-base font-medium leading-relaxed text-inherit antialiased">
                    Admin Dashboard
                </span>
                <div class="ml-auto mr-8  items-center gap-6 flex">
                    <router-link v-for="(text, routeName) of global.links" class="pb-2" :to="{name: routeName}">{{ text }}</router-link>
                </div>
            </div>
        </nav>
    </header>

    <div class="pa-4">
        <RouterView/>
    </div>
</template>

<style scoped>
nav li {
    @apply block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased;
}

nav a {
    @apply flex items-center;
}

.router-link-exact-active {
    @apply border-b-2 border-blue-600
}
</style>
