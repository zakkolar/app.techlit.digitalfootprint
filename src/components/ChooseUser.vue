<script setup>
import {useGlobalStore} from "@/stores/global";

const global = useGlobalStore();
</script>
<template>
    <div class="py-5">
        <div class="flex flex-wrap items-center gap-3">
            <label for="choose-user" class="font-medium">Viewing data for user</label>
            <select id="choose-user" v-model="global.currentUser" class="min-w-56 rounded-md border bg-surface px-3 py-1.5 hover:border-text-muted">
                <option></option>
                <option v-for="(user, key) of global.users" :value="key">{{user}}</option>
            </select>
        </div>
        <p v-if="!global.currentUser" class="mt-3 text-text-muted">Choose a user from the dropdown to start.</p>
    </div>
</template>
