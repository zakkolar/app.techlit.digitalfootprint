<script setup>
import ActivityDrive from "@/components/activity/ActivityDrive.vue";
const props = defineProps({
  activity: {required: true}
})
</script>
<template>
  <activity-drive :activity="activity" verb="Moved" after-doc-name="to trash"></activity-drive>
</template>