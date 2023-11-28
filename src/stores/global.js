import {defineStore} from "pinia";
import {computed, ref} from "vue";
import {DEFAULTS} from "@/data/global/DEFAULTS";
import {STORIES} from "@/data/global/STORIES";
import {useAnonymousEmailStore} from "@/stores/anonymousEmail";

import 'core-js/full/object/group-by';
import {useRoute} from "vue-router";
import {Activity} from "@/classes/activity/Activity";
import {USERS} from "@/data/anonymousEmails/USERS";
import {DateTime} from "luxon";




export const useGlobalStore = defineStore('global', () => {

     const route = useRoute();

    const anonymousEmailStore = useAnonymousEmailStore();


    const story = ref(DEFAULTS.STORY);

    const currentUser = ref('');

    const links = computed(() => {
        const links = {
            'activity-search': 'Search and Web Activity',
            'activity-drive': 'Drive Activity',
            'activity-email': 'Email Activity'
        }

        if(story.value === STORIES.ANONYMOUS_EMAILS) {
            links['anonymous-email'] = 'Flagged Emails';
        }

        return links;


    })

    const activity = computed(()=> {

        let rawActivity = [];

        if(story.value === STORIES.ANONYMOUS_EMAILS) {
            rawActivity = anonymousEmailStore.activity;
        }


        return rawActivity.filter(item => {

            // filter by selected user
            if(item.user !== currentUser.value) {
                return false;
            }

            // filter by current page
            if(route.name === 'activity-search') {
                return [Activity.TYPES.SEARCH, Activity.TYPES.VISIT].includes(item.type);
            }
            if(route.name === 'activity-drive') {
                return [Activity.TYPES.DRIVE_REMOVE, Activity.TYPES.DRIVE_ADD, Activity.TYPES.DRIVE_DELETE, Activity.TYPES.DRIVE_CREATE, Activity.TYPES.DRIVE_EMPTY, Activity.TYPES.DRIVE_RENAME].includes(item.type);
            }
            if(route.name === 'activity-email') {
                return [Activity.TYPES.EMAIL].includes(item.type);
            }

            return false;
        }).sort((a, b) => a.timestamp.toMillis() - b.timestamp.toMillis())
    })

     const activityByDay = computed(() => {
        function groupedToTimestampedObject(group) {
            return Object.entries(group).map(([key, value])=> {
                return {
                    timestamp: DateTime.fromISO(key),
                    entries: value
                }
            })
        }

        const byHour = groupedToTimestampedObject(Object.groupBy(activity.value, item => item.timestamp.startOf('hour')));

        return groupedToTimestampedObject(Object.groupBy(byHour, item => item.timestamp.startOf('day')));
    })

    const users = computed(() => {
        switch(story.value) {
            case STORIES.ANONYMOUS_EMAILS:
                return anonymousEmailStore.users
        }
    })

    return { story, links, activity, activityByDay, currentUser, users };
})