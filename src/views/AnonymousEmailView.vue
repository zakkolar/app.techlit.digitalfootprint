<script setup>
import {useAnonymousEmailStore} from "@/stores/anonymousEmail";
import {AnonymousMessage, AnonymousMessageSubject, AnonymousMessageTime} from "@/data/anonymousEmails/activityLogs/culprit";
import {CombineDateAndTime} from "@/utils/CombineDateAndTime";
import {computed} from "vue";

const store = useAnonymousEmailStore();

const date = computed(() => CombineDateAndTime(store.startDate, AnonymousMessageTime, 0))

const emailParagraphs = AnonymousMessage.split("\n").filter(item => !!item);

</script>
<template>
  <div class="mt-5 max-w-xl rounded-md border" v-for="recipient of store.anonymousEmailRecipients">
      <p class="border-b bg-surface-muted px-3 py-2 text-lg font-semibold">{{AnonymousMessageSubject}}</p>
      <div class="px-3 py-3">
          <div class="mb-1 flex flex-wrap justify-between gap-x-4">
              <p class="font-semibold">{{store.culpritDisplayName}}</p>
              <p class="text-sm tabular-nums text-text-muted">{{date.toFormat("ccc, LLL d, yyyy @ h:mm a")}}</p>
          </div>
          <p class="mb-3 text-text-muted">To: {{recipient}}</p>
          <p class="mt-2" v-for="paragraph of emailParagraphs">{{paragraph}}</p>
      </div>
  </div>
</template>
