<script setup>
import ActivityDrive from "@/components/activity/ActivityDrive.vue";
import {computed} from "vue";
import {Activity} from "@/classes/activity/Activity";
const props = defineProps({
    activity: {required: true}
})

const paragraphs = computed(()=> {
    return props.activity.content.split('\n').filter(item => !!item);
})

const addOrRemove = computed(()=> {
    return props.activity.type === Activity.TYPES.DRIVE_ADD ? 'Added text to' : 'Deleted text from';
})
</script>
<template>
    <activity-drive :activity="activity" :verb="addOrRemove">
            <div class="ml-4 my-4 text-gray-600" :class="{'line-through': props.activity.type === Activity.TYPES.DRIVE_REMOVE, 'italic': props.activity.type === Activity.TYPES.DRIVE_ADD}">
                <p class="pt-1.5 max-w-xl" v-for="p of paragraphs">{{p}}</p>
            </div>
    </activity-drive>
</template>