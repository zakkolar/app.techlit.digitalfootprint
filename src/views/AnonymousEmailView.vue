<script setup>
import {useAnonymousEmailStore} from "@/stores/anonymousEmail";
import {AnonymousMessage, AnonymousMessageSubject, AnonymousMessageTime} from "@/data/anonymousEmails/activityLogs/culprit";
import {CombineDateAndTime} from "@/utils/CombineDateAndTime";
import {ref} from "vue";

const store = useAnonymousEmailStore();

const date = ref(CombineDateAndTime(store.startDate, AnonymousMessageTime, 0))

const emailParagraphs = AnonymousMessage.split("\n").filter(item => !!item);

</script>
<template>
  <div class="max-w-lg border-2 p-2 mt-2 ml-2" v-for="recipient of store.anonymousEmailRecipients">
      <p class="text-xl font-bold border-b pb-2 mb-2">{{AnonymousMessageSubject}}</p>
      <div class="flex justify-between mb-1">
          <p class="font-bold">{{store.culpritDisplayName}}</p>
          <p class="">{{date.toFormat("ccc, LLL d, yyyy @ h:mm a")}}</p>
      </div>
      <p class="mb-3">To: {{recipient}}</p>
      <p class="mt-2" v-for="paragraph of emailParagraphs">{{paragraph}}</p>
  </div>
</template>