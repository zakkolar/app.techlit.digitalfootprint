<template>
  <div v-if="show" class="flex items-start gap-3 border-b border-notice-border bg-notice px-4 py-2 text-sm" role="status">
    <p class="flex-1">
      The domain for this app will soon change from techlit.app to techlit.tools. To continue using it, please update your link to: <a class="linkText underline" :href="newUrl">{{newUrl}}</a>
    </p>
    <button class="rounded-md p-1 hover:bg-notice-border/40" aria-label="Dismiss notice" @click="acknowledge">
      <svg class="h-4 w-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" aria-hidden="true"><path d="M3.5 3.5l9 9M12.5 3.5l-9 9"/></svg>
    </button>
  </div>
</template>

<script setup>

import {computed, onMounted, ref} from "vue";

const newUrl = ref(null);
const acknowledged = ref(false);

const show = computed(() => {
    return newUrl.value && !acknowledged.value;
})

onMounted(() => {
    acknowledged.value = localStorage.getItem('acknowledged') === 'true';
    const url = new URL(window.location)
    if(url.hostname.indexOf('techlit.app') > -1 || url.hostname.indexOf('localhost') > -1) {
      newUrl.value = window.location.toString().replace('techlit.app', 'techlit.tools')
    }
})

const acknowledge = () => {
    localStorage.setItem('acknowledged', 'true');
    acknowledged.value = true;
}

</script>
