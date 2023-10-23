import {defineStore} from 'pinia';
import {USERS} from "@/classes/USERS";
import {computed, ref} from "vue";
import {Activities} from "@/data/activities";
import {DateTime} from "luxon";
import {useRoute} from "vue-router";
import {Activity} from "@/classes/activity/Activity";

import 'core-js/full/object/group-by';
import {Culprit} from "@/data/culprit";
import {Herring} from "@/data/herring";
import {CombineDateAndTime} from "@/utils/CombineDateAndTime";
import {DEFAULTS} from "@/data/Defaults";

export const useActivityStore = defineStore('settings',()=>{
    const startDate = ref(DateTime.fromObject({month: 10, day: 18, year: 2023}));
    const users = ref(structuredClone(USERS));

    users.value.MATH_TEACHER = DEFAULTS.MATH_TEACHER;
    users.value.DRAMA_TEACHER = DEFAULTS.DRAMA_TEACHER;
    users.value.MUSIC_TEACHER = DEFAULTS.MUSIC_TEACHER;
    users.value.LIBRARY_TEACHER = DEFAULTS.LIBRARY_TEACHER;


    const currentUser = ref('');

    const culprit = ref(DEFAULTS.CULPRIT);
    const herring = ref(DEFAULTS.HERRING);

    const culpritDisplayName = ref(DEFAULTS.CULPRIT_DISPLAY_NAME);
    const anonymousEmailRecipients = ref(DEFAULTS.ANONYMOUS_EMAIL_RECIPIENTS);

    const rawActivity = ref(Activities);

    const route = useRoute();

    const activity = computed(()=> {

        const culpritActivity = ref(Culprit(culprit.value));
        const herringActivity = ref(Herring(herring.value));

        return rawActivity.value.concat(culpritActivity.value).concat(herringActivity.value).filter(item => {


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
        }).map(item => {
            // compute fields
            item.timestamp = CombineDateAndTime(startDate.value,item.time, item.dayOffset);
            item.name = users.value[item.user] || '';
            return item;
        }).sort((a, b) => a.timestamp.toMillis() - b.timestamp.toMillis())
    })

    const getName = computed(() => {
        return nameBase => {
            if(nameBase.charAt(0) === '@') {
                let id = nameBase.substring(1);
                if(id.toLowerCase() === 'culprit') {
                    id = culprit.value;
                }
                if(id.toLowerCase() === 'herring') {
                    id = herring.value;
                }

                return users.value[id];
            }

            return nameBase;
        }
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

    return {
        startDate, users, culprit, culpritDisplayName, anonymousEmailRecipients, herring, currentUser, activity, rawActivity, activityByDay, getName
    }
})