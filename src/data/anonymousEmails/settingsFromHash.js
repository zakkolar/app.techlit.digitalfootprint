import {useAnonymousEmailStore} from "@/stores/anonymousEmail";
import {PARAM_TYPES, paramCache} from "@/utils/UrlParams";
import {ANONYMOUS_EMAIL_DEFAULTS} from "@/data/anonymousEmails/DEFAULTS";
import {USERS} from "@/data/anonymousEmails/USERS";
import {DateTime} from "luxon";

export function anonymousEmailSettingsFromHash() {

    const anonymousEmailStore = useAnonymousEmailStore();

    const userTranslations = {
        'mathTeacher': USERS.MATH_TEACHER,
        'dramaTeacher': USERS.DRAMA_TEACHER,
        'musicTeacher': USERS.MUSIC_TEACHER,
        'libraryTeacher': USERS.LIBRARY_TEACHER
    }

    const culpritKey = paramCache('culprit', 'string', ANONYMOUS_EMAIL_DEFAULTS.CULPRIT);
    if (Object.keys(userTranslations).includes(culpritKey)) {
        anonymousEmailStore.culprit = userTranslations[culpritKey];
    } else {
        anonymousEmailStore.culprit = ANONYMOUS_EMAIL_DEFAULTS.CULPRIT;
    }

    const herringKey = paramCache('herring', 'string', ANONYMOUS_EMAIL_DEFAULTS.HERRING);
    if (Object.keys(userTranslations).includes(herringKey)) {
        anonymousEmailStore.herring = userTranslations[herringKey];
    } else {
        anonymousEmailStore.herring = ANONYMOUS_EMAIL_DEFAULTS.HERRING;
    }

    anonymousEmailStore.users.MATH_TEACHER = paramCache('mathTeacher', PARAM_TYPES.STRING, ANONYMOUS_EMAIL_DEFAULTS.MATH_TEACHER);
    anonymousEmailStore.users.DRAMA_TEACHER = paramCache('dramaTeacher', PARAM_TYPES.STRING, ANONYMOUS_EMAIL_DEFAULTS.DRAMA_TEACHER);
    anonymousEmailStore.users.MUSIC_TEACHER = paramCache('musicTeacher', PARAM_TYPES.STRING, ANONYMOUS_EMAIL_DEFAULTS.MUSIC_TEACHER);
    anonymousEmailStore.users.LIBRARY_TEACHER = paramCache('libraryTeacher', PARAM_TYPES.STRING, ANONYMOUS_EMAIL_DEFAULTS.LIBRARY_TEACHER);

    anonymousEmailStore.culpritDisplayName = paramCache('culpritDisplayName', PARAM_TYPES.STRING, ANONYMOUS_EMAIL_DEFAULTS.CULPRIT_DISPLAY_NAME);

    const [year, month, day] = paramCache('startDate', PARAM_TYPES.DATE, ANONYMOUS_EMAIL_DEFAULTS.START_DATE)
        .split("-")
        .map(item => parseInt(item));

    anonymousEmailStore.startDate = DateTime.fromObject({year, month, day});

    anonymousEmailStore.anonymousEmailRecipients = paramCache('anonymousEmailRecipients', PARAM_TYPES.ARRAY, ANONYMOUS_EMAIL_DEFAULTS.ANONYMOUS_EMAIL_RECIPIENTS);
}