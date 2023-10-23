<script setup>
import ActivityBase from "@/components/activity/ActivityBase.vue";
import {Activity} from "@/classes/activity/Activity";
const props = defineProps({
  activity: {required: true},
    verb: {required: true},
    afterDocName: {required: false}
})

</script>
<template>
  <activity-base :activity="activity">
      <p>{{ verb }} <span class="linkText">{{activity.docName}}</span> <span v-html="afterDocName"></span></p>
      <slot></slot>
  </activity-base>
</template>
