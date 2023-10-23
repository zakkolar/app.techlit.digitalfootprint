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
      <p>Searched for <span class="linkText">{{activity.query}}</span></p>
  </activity-base>
</template>