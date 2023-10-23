<script setup>
import ActivityBase from "@/components/activity/ActivityBase.vue";
const props = defineProps({
    activity: {
        required: true
    }
})
</script>
<template>
  <activity-base :activity="activity">
      <p>Visited <span class="linkText">{{activity.pageTitle}}</span></p>
  </activity-base>
</template>