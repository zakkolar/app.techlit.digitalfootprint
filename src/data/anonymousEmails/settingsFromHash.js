import {useAnonymousEmailStore} from "@/stores/anonymousEmail";
import {PARAM_TYPES, paramCache} from "@/utils/UrlParams";
import {ANONYMOUS_EMAIL_DEFAULTS} from "@/data/anonymousEmails/DEFAULTS";
import {USERS} from "@/data/anonymousEmails/USERS";
import {DateTime} from "luxon";

export function anonymousEmailSettingsFromHash() {

    const anonymousEmailStore = useAnonymousEmailStore();

    const culpritKey = paramCache('culprit', 'string', ANONYMOUS_EMAIL_DEFAULTS.CULPRIT);
    if (Object.keys(USERS).includes(culpritKey)) {
        anonymousEmailStore.culprit = USERS[culpritKey];
    } else {
        anonymousEmailStore.culprit = ANONYMOUS_EMAIL_DEFAULTS.CULPRIT;
    }

    const herringKey = paramCache('herring', 'string', ANONYMOUS_EMAIL_DEFAULTS.HERRING);
    if (Object.keys(USERS).includes(herringKey)) {
        anonymousEmailStore.herring = USERS[herringKey];
    } else {
        anonymousEmailStore.herring = ANONYMOUS_EMAIL_DEFAULTS.HERRING;
    }

    anonymousEmailStore.users.MATH_TEACHER = paramCache('MATH_TEACHER', PARAM_TYPES.STRING, ANONYMOUS_EMAIL_DEFAULTS.MATH_TEACHER);
    anonymousEmailStore.users.DRAMA_TEACHER = paramCache('DRAMA_TEACHER', PARAM_TYPES.STRING, ANONYMOUS_EMAIL_DEFAULTS.DRAMA_TEACHER);
    anonymousEmailStore.users.MUSIC_TEACHER = paramCache('MUSIC_TEACHER', PARAM_TYPES.STRING, ANONYMOUS_EMAIL_DEFAULTS.MUSIC_TEACHER);
    anonymousEmailStore.users.LIBRARY_TEACHER = paramCache('LIBRARY_TEACHER', PARAM_TYPES.STRING, ANONYMOUS_EMAIL_DEFAULTS.LIBRARY_TEACHER);

    anonymousEmailStore.culpritDisplayName = paramCache('culpritDisplayName', PARAM_TYPES.STRING, ANONYMOUS_EMAIL_DEFAULTS.CULPRIT_DISPLAY_NAME);

    const [year, month, day] = paramCache('startDate', PARAM_TYPES.DATE, ANONYMOUS_EMAIL_DEFAULTS.START_DATE)
        .split("-")
        .map(item => parseInt(item));

    anonymousEmailStore.startDate = DateTime.fromObject({year, month, day});

    anonymousEmailStore.anonymousEmailRecipients = paramCache('anonymousEmailRecipients', PARAM_TYPES.ARRAY, ANONYMOUS_EMAIL_DEFAULTS.ANONYMOUS_EMAIL_RECIPIENTS);
}