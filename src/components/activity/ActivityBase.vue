<script setup>
  import {useAnonymousEmailStore} from "@/stores/anonymousEmail";

  const props = defineProps({
      activity: {required: true}
  })

  const store = useAnonymousEmailStore();

</script>
<template>
  <div class="border-b last-of-type:border-0 p-2">
      <slot></slot>
      <p class="text-[0.65rem] text-gray-600 py-1.5">{{activity.timestamp.toFormat("h:mm a")}}</p>
  </div>
</template>