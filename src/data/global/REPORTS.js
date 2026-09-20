import {Activity} from "@/classes/activity/Activity";

const {TYPES} = Activity;

/**
 * Per-user activity reports. Every story shows these for each of its users.
 * The key doubles as the route name of the dashboard page for that report.
 */
export const USER_REPORTS = Object.freeze({
    'activity-search': {
        label: 'Search and Web Activity',
        types: [TYPES.SEARCH, TYPES.VISIT]
    },
    'activity-drive': {
        label: 'Drive Activity',
        types: [TYPES.DRIVE_REMOVE, TYPES.DRIVE_ADD, TYPES.DRIVE_DELETE, TYPES.DRIVE_CREATE, TYPES.DRIVE_EMPTY, TYPES.DRIVE_RENAME]
    },
    'activity-email': {
        label: 'Email Activity',
        types: [TYPES.EMAIL]
    }
});

/** Id used to store a user's report in a print selection. */
export const userReportId = (userKey, reportKey) => `${userKey}:${reportKey}`;

/** Id used to store a story-level (not user specific) report in a print selection. */
export const storyReportId = reportKey => `story:${reportKey}`;
