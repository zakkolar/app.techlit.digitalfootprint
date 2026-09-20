import {USERS} from "@/data/anonymousEmails/USERS";
import {DateTime} from "luxon";
import {storyReportId, userReportId} from "@/data/global/REPORTS";

export const ANONYMOUS_EMAIL_DEFAULTS = Object.freeze({
    COFFEE_TEACHER: 'Coffee Teacher',
    BROADWAY_TEACHER: 'Broadway Teacher',
    FROG_TEACHER: 'Frog Teacher',
    CULPRIT: USERS.BROADWAY_TEACHER,
    HERRING: USERS.COFFEE_TEACHER,
    CULPRIT_DISPLAY_NAME: 'Anonymous Penguin',
    ANONYMOUS_EMAIL_RECIPIENTS: ['JohnSmith@education.com', 'JaneDoe@education.com'],
    START_DATE: DateTime.now().toFormat('yyyy-LL-dd'),
    // report ids checked by default on the print page
    PRINT_SELECTION: Object.freeze([
        ...Object.keys(USERS).map(userKey => userReportId(userKey, 'activity-search')),
        storyReportId('anonymous-email')
    ])
})