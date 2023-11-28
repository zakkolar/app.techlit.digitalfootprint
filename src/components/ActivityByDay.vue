<script setup>
import ActivityLog from "@/components/activity/ActivityLog.vue";
import {RelativeDate} from "@/utils/RelativeDate";
import {useGlobalStore} from "@/stores/global";

const global = useGlobalStore();
</script>
<template>
  <div v-for="day of global.activityByDay">
        <h2 class="bg-gray-100 p-2 text-xl">{{ RelativeDate(day.timestamp) }}</h2>
        <div class="my-1" v-for="hour of day.entries">
            <h3 class="p-2 text-gray-600 text-xs">{{hour.timestamp.toFormat('h:mm a')}}</h3>
            <div class="border-l-2 ml-4">
                <activity-log v-for="entry of hour.entries" :activity="entry"></activity-log>
            </div>
        </div>
    </div>
</template>