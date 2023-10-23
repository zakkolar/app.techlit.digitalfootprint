<script setup>
import {computed} from "vue";
import {Activity} from "@/classes/activity/Activity";
import ActivityBase from "@/components/activity/ActivityBase.vue";
import {useActivityStore} from "@/stores/activity";
const props = defineProps({
    activity: {required: true}
})

const paragraphs = computed(()=> {
    return props.activity.body.split('\n').filter(item => !!item);
})

const store = useActivityStore();

</script>
<template>
    <activity-base :activity="activity">

        <p>Sent an email to <b>{{store.getName(activity.recipient)}}</b></p>
            <div class="ml-4 my-4">
                <table class="max-w-lg">
                    <tr>
                        <td class="border p-2">
                            {{activity.subject}}
                        </td>
                    </tr>
                    <tr>
                        <td class="border p-2">
                            <p class="pt-1" v-for="p of paragraphs" v-html="p"></p>
                        </td>
                    </tr>
                </table>


            </div>
    </activity-base>
</template>