<script setup>
import { RouterLink, RouterView } from 'vue-router'
import {useActivityStore} from "@/stores/activity";
import {onMounted} from "vue";
import {getParam, hashToParams, PARAM_TYPES} from "@/utils/UrlParams";
import {DEFAULTS} from "@/data/Defaults";
import {USERS} from "@/classes/USERS";

const store = useActivityStore();

onMounted(() => {
    window.addEventListener('hashchange', updateSettingsFromHash);
    updateSettingsFromHash();
})

function updateSettingsFromHash() {
    const params = hashToParams();


    const localOrDefault = (key, defaultValue) => JSON.parse(localStorage.getItem(key)) || defaultValue;

    const paramCache = (params, paramName, type, defaultValue) => {
        const value = getParam(params, paramName, type, localOrDefault(paramName, defaultValue));
        localStorage.setItem(paramName, JSON.stringify(value));
        return value;
    }


    const userTranslations = {
        'mathTeacher': USERS.MATH_TEACHER,
        'dramaTeacher': USERS.DRAMA_TEACHER,
        'musicTeacher': USERS.MUSIC_TEACHER,
        'libraryTeacher': USERS.LIBRARY_TEACHER
    }

    const culpritKey = paramCache(params, 'culprit', 'string', DEFAULTS.CULPRIT);
    if(Object.keys(userTranslations).includes(culpritKey)) {
        store.culprit = userTranslations[culpritKey];
    }
    else {
        store.culprit = DEFAULTS.CULPRIT;
    }

    const herringKey = paramCache(params, 'herring', 'string', DEFAULTS.HERRING);
    if(Object.keys(userTranslations).includes(herringKey)) {
        store.herring = userTranslations[herringKey];
    }
    else {
        store.herring = DEFAULTS.HERRING;
    }


    store.users.MATH_TEACHER = paramCache(params, 'mathTeacher', PARAM_TYPES.STRING, DEFAULTS.MATH_TEACHER);
    store.users.DRAMA_TEACHER = paramCache(params, 'dramaTeacher', PARAM_TYPES.STRING, DEFAULTS.DRAMA_TEACHER);
    store.users.MUSIC_TEACHER = paramCache(params, 'musicTeacher', PARAM_TYPES.STRING, DEFAULTS.MUSIC_TEACHER);
    store.users.LIBRARY_TEACHER = paramCache(params, 'libraryTeacher', PARAM_TYPES.STRING, DEFAULTS.LIBRARY_TEACHER);

    store.culpritDisplayName = paramCache(params,'culpritDisplayName', PARAM_TYPES.STRING, DEFAULTS.CULPRIT_DISPLAY_NAME);

    store.anonymousEmailRecipients = paramCache(params, 'anonymousEmailRecipients', PARAM_TYPES.ARRAY, DEFAULTS.ANONYMOUS_EMAIL_RECIPIENTS);


}

</script>

<template>
    <header>
        <nav class="sticky inset-0 z-10 block h-max w-full max-w-full rounded-none border border-white/80 bg-white bg-opacity-80 py-2 px-4 text-white shadow-md backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4 top-0">
            <div class="flex items-center text-gray-900">
                <span class="mr-4 block cursor-pointer py-1.5 font-sans text-base font-medium leading-relaxed text-inherit antialiased">
                    Admin Dashboard
                </span>
                <ul class="ml-auto mr-8  items-center gap-6 flex">
                    <li>
                        <router-link :to="{name: 'activity-search'}">Search and Web Activity</router-link>
                    </li>
                    <li><router-link :to="{name: 'activity-drive'}">Drive Activity</router-link></li>
                    <li><router-link :to="{name: 'activity-email'}">Email Activity</router-link></li>
                    <li><router-link :to="{name: 'anonymous-email'}">Flagged Emails</router-link></li>
                </ul>
            </div>
        </nav>
    </header>

    <div class="">

        <RouterView />
    </div>

</template>

<style scoped>
nav li {
    @apply block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased;
}
nav a {
    @apply flex items-center;
}


</style>
