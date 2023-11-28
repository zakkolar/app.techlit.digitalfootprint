<script setup>
import {useGlobalStore} from "@/stores/global";

const global = useGlobalStore();
</script>
<template>
    <div class="p-2">
        <span>Viewing data for user: </span>
        <select v-model="global.currentUser" class="p-1">
        <option></option>
        <option v-for="(user, key) of global.users" :value="key">{{user}}</option>
    </select>
        <div v-if="!global.currentUser" class="mt-3">Choose a user from the dropdown to start.</div>
    </div>


</template>