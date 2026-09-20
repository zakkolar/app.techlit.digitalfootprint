<script setup>
import ActivityByDay from "@/components/ActivityByDay.vue";
import ChooseUser from "@/components/ChooseUser.vue";
import {useGlobalStore} from "@/stores/global";
import {useRoute} from "vue-router";

const global = useGlobalStore();
const route = useRoute();
</script>

<template>
    <ChooseUser></ChooseUser>
    <ActivityByDay :user="global.currentUser" :report="route.name"></ActivityByDay>
</template>
