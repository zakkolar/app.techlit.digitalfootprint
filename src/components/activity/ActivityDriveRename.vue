<script setup>
import ActivityDrive from "@/components/activity/ActivityDrive.vue";
const props = defineProps({
  activity: {required: true}
})
</script>
<template>
  <activity-drive :activity="activity" verb="Renamed" :after-doc-name="`to <span class='linkText'>${activity.newName}</span>`"></activity-drive>
</template>