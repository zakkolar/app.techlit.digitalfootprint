<script setup>
import {useActivityStore} from "@/stores/activity";

const store = useActivityStore();
</script>
<template>
    <div class="p-2">
        <span>Viewing data for user: </span>
        <select v-model="store.currentUser" class="p-1">
        <option></option>
        <option v-for="(user, key) of store.users" :value="key">{{user}}</option>
    </select>
        <div v-if="!store.currentUser">Choose a user from the dropdown to start.</div>
    </div>


</template>