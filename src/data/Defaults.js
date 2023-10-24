import {USERS} from "@/classes/USERS";
import {DateTime} from "luxon";

export const DEFAULTS = Object.freeze({
    MATH_TEACHER: 'Math Teacher',
    DRAMA_TEACHER: 'Drama Teacher',
    MUSIC_TEACHER: 'Music Teacher',
    LIBRARY_TEACHER: 'Library Teacher',
    CULPRIT: USERS.DRAMA_TEACHER,
    HERRING: USERS.MATH_TEACHER,
    CULPRIT_DISPLAY_NAME: 'Anonymous Penguin',
    ANONYMOUS_EMAIL_RECIPIENTS: ['JohnSmith@education.com', 'JaneDoe@education.com'],
    START_DATE: DateTime.now().toFormat('yyyy-LL-dd'),
})