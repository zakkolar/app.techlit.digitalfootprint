import {USERS} from "@/data/anonymousEmails/USERS";
import {DateTime} from "luxon";

export const ANONYMOUS_EMAIL_DEFAULTS = Object.freeze({
    COFFEE_TEACHER: 'Coffee Teacher',
    BROADWAY_TEACHER: 'Broadway Teacher',
    FROG_TEACHER: 'Frog Teacher',
    BOOK_TEACHER: 'Book Teacher',
    CULPRIT: USERS.BROADWAY_TEACHER,
    HERRING: USERS.COFFEE_TEACHER,
    CULPRIT_DISPLAY_NAME: 'Anonymous Penguin',
    ANONYMOUS_EMAIL_RECIPIENTS: ['JohnSmith@education.com', 'JaneDoe@education.com'],
    START_DATE: DateTime.now().toFormat('yyyy-LL-dd')
})