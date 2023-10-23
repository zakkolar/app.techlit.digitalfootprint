<script setup>
import {Activity} from "@/classes/activity/Activity";
import ActivitySearch from "@/components/activity/ActivitySearch.vue";
import ActivityVisit from "@/components/activity/ActivityVisit.vue";
import ActivityDriveCreate from "@/components/activity/ActivityDriveCreate.vue";
import ActivityDriveDelete from "@/components/activity/ActivityDriveDelete.vue";
import ActivityDriveEdit from "@/components/activity/ActivityDriveEdit.vue";
import ActivityDriveRename from "@/components/activity/ActivityDriveRename.vue";
import ActivityDriveEmpty from "@/components/activity/ActivityDriveEmpty.vue";
import ActivityEmail from "@/components/activity/ActivityEmail.vue";

const props = defineProps({
    activity: {
        required: true
    }
})
</script>
<template>
    <activity-search v-if="activity.type === Activity.TYPES.SEARCH" :activity="activity"></activity-search>
    <activity-visit v-if="activity.type === Activity.TYPES.VISIT"  :activity="activity"></activity-visit>
    <activity-drive-create v-if="activity.type === Activity.TYPES.DRIVE_CREATE"  :activity="activity"></activity-drive-create>
    <activity-drive-delete v-if="activity.type === Activity.TYPES.DRIVE_DELETE"  :activity="activity"></activity-drive-delete>
    <activity-drive-edit v-if="activity.type === Activity.TYPES.DRIVE_ADD || activity.type === Activity.TYPES.DRIVE_REMOVE"  :activity="activity"></activity-drive-edit>
     <activity-drive-rename v-if="activity.type === Activity.TYPES.DRIVE_RENAME"  :activity="activity"></activity-drive-rename>
     <activity-drive-empty v-if="activity.type === Activity.TYPES.DRIVE_EMPTY"  :activity="activity"></activity-drive-empty>
     <activity-email v-if="activity.type === Activity.TYPES.EMAIL"  :activity="activity"></activity-email>
</template>