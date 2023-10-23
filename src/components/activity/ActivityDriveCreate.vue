<script setup>
import ActivityDrive from "@/components/activity/ActivityDrive.vue";
const props = defineProps({
  activity: {required: true}
})
</script>
<template>
  <activity-drive :activity="activity" verb="Created"></activity-drive>
</template>