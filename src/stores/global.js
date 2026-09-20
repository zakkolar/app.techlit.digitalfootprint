import {defineStore} from "pinia";
import {computed, ref} from "vue";
import {DEFAULTS} from "@/data/global/DEFAULTS";
import {STORIES} from "@/data/global/STORIES";
import {USER_REPORTS} from "@/data/global/REPORTS";
import {ANONYMOUS_EMAIL_STORY_REPORTS} from "@/data/anonymousEmails/REPORTS";
import {useAnonymousEmailStore} from "@/stores/anonymousEmail";
import {persistedRef, resetPersistedRef} from "@/utils/persistedRef";


export const useGlobalStore = defineStore('global', () => {

    const anonymousEmailStore = useAnonymousEmailStore();

    const story = ref(DEFAULTS.STORY);

    const currentUser = ref('');

    // story-specific lookups; add a case per story

    const rawActivity = computed(() => {
        switch (story.value) {
            case STORIES.ANONYMOUS_EMAILS:
                return anonymousEmailStore.activity;
        }
        return [];
    })

    const users = computed(() => {
        switch (story.value) {
            case STORIES.ANONYMOUS_EMAILS:
                return anonymousEmailStore.users
        }
    })

    /** Reports for the current story that are not tied to a user, keyed by route name. */
    const storyReports = computed(() => {
        switch (story.value) {
            case STORIES.ANONYMOUS_EMAILS:
                return ANONYMOUS_EMAIL_STORY_REPORTS;
        }
        return {};
    })

    const links = computed(() => {
        const links = {};

        Object.entries(USER_REPORTS).forEach(([key, report]) => links[key] = report.label);
        Object.entries(storyReports.value).forEach(([key, report]) => links[key] = report.label);
        links['print'] = 'Print Activity';

        return links;
    })

    // print page settings

    const printSelection = computed({
        get() {
            switch (story.value) {
                case STORIES.ANONYMOUS_EMAILS:
                    return anonymousEmailStore.printSelection;
            }
            return [];
        },
        set(value) {
            switch (story.value) {
                case STORIES.ANONYMOUS_EMAILS:
                    anonymousEmailStore.printSelection = value;
                    break;
            }
        }
    })

    const printCopies = persistedRef('print.copies', 1);
    const printCollate = persistedRef('print.collate', true);

    function resetPrintSettings() {
        switch (story.value) {
            case STORIES.ANONYMOUS_EMAILS:
                anonymousEmailStore.resetPrintSelection();
                break;
        }
        resetPersistedRef('print.copies', printCopies, 1);
        resetPersistedRef('print.collate', printCollate, true);
    }

    return {
        story, links, currentUser, users, rawActivity, storyReports,
        printSelection, printCopies, printCollate, resetPrintSettings
    };
})
