<script setup>
import ActivityLog from "@/components/activity/ActivityBase.vue";
const props = defineProps({
    activity: {
        required: true
    }
})
</script>
<template>
  <activity-log :activity="activity">
      <p>Emptied their trash</p>
  </activity-log>
</template>