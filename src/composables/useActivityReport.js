import {computed, toValue} from "vue";
import {DateTime} from "luxon";
import 'core-js/full/object/group-by';
import {useGlobalStore} from "@/stores/global";
import {USER_REPORTS} from "@/data/global/REPORTS";

function groupedToTimestampedObject(group) {
    return Object.entries(group).map(([key, value]) => ({
        timestamp: DateTime.fromISO(key),
        entries: value
    }));
}

/**
 * Activity for one user and one report, grouped by day then hour.
 * @param userKey key of the user (value or ref)
 * @param reportKey key from USER_REPORTS (value or ref)
 */
export function useActivityReport(userKey, reportKey) {
    const global = useGlobalStore();

    const activity = computed(() => {
        const user = toValue(userKey);
        const report = USER_REPORTS[toValue(reportKey)];

        if (!user || !report) {
            return [];
        }

        return global.rawActivity
            .filter(item => item.user === user && report.types.includes(item.type))
            .sort((a, b) => a.timestamp.toMillis() - b.timestamp.toMillis());
    });

    const activityByDay = computed(() => {
        const byHour = groupedToTimestampedObject(Object.groupBy(activity.value, item => item.timestamp.startOf('hour')));
        return groupedToTimestampedObject(Object.groupBy(byHour, item => item.timestamp.startOf('day')));
    });

    return {activity, activityByDay};
}
