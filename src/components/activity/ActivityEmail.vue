<script setup>
import {computed} from "vue";
import {Activity} from "@/classes/activity/Activity";
import ActivityBase from "@/components/activity/ActivityBase.vue";
import {useAnonymousEmailStore} from "@/stores/anonymousEmail";
const props = defineProps({
    activity: {required: true}
})

const paragraphs = computed(()=> {
    return props.activity.body.split('\n').filter(item => !!item);
})

const store = useAnonymousEmailStore();

</script>
<template>
    <activity-base :activity="activity">

        <p>Sent an email to <b class="font-semibold">{{store.getName(activity.recipient)}}</b></p>
        <div class="my-3 max-w-xl rounded-md border">
            <p class="border-b bg-surface-muted px-3 py-2 font-semibold">{{activity.subject}}</p>
            <div class="px-3 py-2">
                <p class="pt-1" v-for="p of paragraphs" v-html="p"></p>
            </div>
        </div>
    </activity-base>
</template>
