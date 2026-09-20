<script setup>
import {onBeforeUnmount, onMounted, ref} from "vue";

defineProps({
    title: {type: String, required: true},
    // display name of the user the report is about; omitted for story-level pages
    userName: {type: String, default: ''}
});

const box = ref(null);
const content = ref(null);
const scale = ref(1);

// Shrinks the content so it always fits on the single printed page.
function fit() {
    if (!box.value || !content.value) return;
    const available = box.value.clientHeight;
    const needed = content.value.offsetHeight;
    scale.value = needed > available ? available / needed : 1;
}

let observer;
onMounted(() => {
    fit();
    observer = new ResizeObserver(fit);
    observer.observe(content.value);
});
onBeforeUnmount(() => observer?.disconnect());
</script>

<template>
    <!-- Letter sheet: 8.5in x 11in with 0.5in margins. Height is a hair under 11in so rounding never spills a blank page. -->
    <section class="print-sheet mb-6 box-border h-[10.98in] w-[8.5in] break-after-page break-inside-avoid overflow-hidden border bg-white p-[0.5in] shadow-md last:break-after-auto print:mb-0 print:border-0 print:shadow-none">
        <div ref="box" class="h-full w-full overflow-hidden">
            <div ref="content" class="origin-top-left" :style="{transform: `scale(${scale})`}">
                <header class="mb-4 border-b pb-3">
                    <p v-if="userName" class="text-sm font-medium text-text-muted">Activity for</p>
                    <h1 v-if="userName" class="text-2xl font-bold">{{ userName }}</h1>
                    <p class="text-lg font-semibold" :class="{'text-text-muted': userName}">{{ title }}</p>
                </header>
                <slot></slot>
            </div>
        </div>
    </section>
</template>

<style scoped>
.print-sheet {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
}
</style>
