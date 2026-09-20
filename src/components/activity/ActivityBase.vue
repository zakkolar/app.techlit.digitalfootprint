<script setup>
  import {useAnonymousEmailStore} from "@/stores/anonymousEmail";

  const props = defineProps({
      activity: {required: true}
  })

  const store = useAnonymousEmailStore();

</script>
<template>
  <div class="relative border-b py-3 pl-5 pr-2 last-of-type:border-0">
      <span class="absolute -left-[4.5px] top-[1.15rem] h-2 w-2 rounded-full border border-surface bg-text-muted" aria-hidden="true"></span>
      <slot></slot>
      <p class="pt-1.5 text-xs tabular-nums text-text-muted">{{activity.timestamp.toFormat("h:mm a")}}</p>
  </div>
</template>
