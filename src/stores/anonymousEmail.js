import {defineStore} from 'pinia';
import {USERS} from "@/data/anonymousEmails/USERS";
import {computed, ref} from "vue";
import {AnonymousPenguinActivities} from "@/data/anonymousEmails/activityLogs/activities";
import {DateTime} from "luxon";


import 'core-js/full/object/group-by';
import {Culprit} from "@/data/anonymousEmails/activityLogs/culprit";
import {Herring} from "@/data/anonymousEmails/activityLogs/herring";
import {CombineDateAndTime} from "@/utils/CombineDateAndTime";
import {ANONYMOUS_EMAIL_DEFAULTS} from "@/data/anonymousEmails/DEFAULTS";

export const useAnonymousEmailStore = defineStore('anonymousEmails',()=>{

    const startDate = ref(DateTime.fromObject({month: 10, day: 17, year: 2023}));

    const users = ref(structuredClone(USERS));

    users.value.COFFEE_TEACHER = ANONYMOUS_EMAIL_DEFAULTS.COFFEE_TEACHER;
    users.value.BROADWAY_TEACHER = ANONYMOUS_EMAIL_DEFAULTS.BROADWAY_TEACHER;
    users.value.FROG_TEACHER = ANONYMOUS_EMAIL_DEFAULTS.FROG_TEACHER;
    users.value.BOOK_TEACHER = ANONYMOUS_EMAIL_DEFAULTS.BOOK_TEACHER;


    const culprit = ref(ANONYMOUS_EMAIL_DEFAULTS.CULPRIT);
    const herring = ref(ANONYMOUS_EMAIL_DEFAULTS.HERRING);

    const culpritDisplayName = ref(ANONYMOUS_EMAIL_DEFAULTS.CULPRIT_DISPLAY_NAME);
    const anonymousEmailRecipients = ref(ANONYMOUS_EMAIL_DEFAULTS.ANONYMOUS_EMAIL_RECIPIENTS);

    const activity = computed( ()=> {
        return AnonymousPenguinActivities
            .concat(Culprit(culprit.value))
            .concat(Herring(herring.value))
            .map(item => {
                // compute fields
                item.timestamp = CombineDateAndTime(startDate.value, item.time, item.dayOffset);
                item.name = users.value[item.user] || '';
                return item;
            })
    });



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


    return {
        startDate, users, culprit, culpritDisplayName, anonymousEmailRecipients, herring, getName, activity
    }
})