<script setup>
import ActivityLog from "@/components/activity/ActivityLog.vue";
import {RelativeDate} from "@/utils/RelativeDate";
import {useActivityReport} from "@/composables/useActivityReport";
import {toRef} from "vue";

const props = defineProps({
    // key of the user whose activity is shown
    user: {type: String, default: ''},
    // key from USER_REPORTS
    report: {type: String, required: true}
});

const {activityByDay} = useActivityReport(toRef(props, 'user'), toRef(props, 'report'));
</script>
<template>
  <section v-for="day of activityByDay" class="mb-6">
        <h2 class="rounded-md border bg-surface-muted px-3 py-2 text-lg font-semibold">{{ RelativeDate(day.timestamp) }}</h2>
        <div class="mt-3" v-for="hour of day.entries">
            <h3 class="px-3 text-xs font-medium tabular-nums text-text-muted">{{hour.timestamp.toFormat('h:mm a')}}</h3>
            <div class="ml-4 mt-1 border-l">
                <activity-log v-for="entry of hour.entries" :activity="entry"></activity-log>
            </div>
        </div>
    </section>
  <p v-if="activityByDay.length === 0 && user" class="py-2 text-text-muted">No activity to show.</p>
</template>
