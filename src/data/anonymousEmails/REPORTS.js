import {defineAsyncComponent} from "vue";

/**
 * Reports specific to the anonymous emails story that are not tied to a user.
 * The key doubles as the route name of the dashboard page.
 */
export const ANONYMOUS_EMAIL_STORY_REPORTS = Object.freeze({
    'anonymous-email': {
        label: 'Suspicious Emails',
        component: defineAsyncComponent(() => import('@/views/AnonymousEmailView.vue'))
    }
});
