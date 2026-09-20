<script setup>
import {computed, onBeforeUnmount, onMounted} from "vue";
import ActivityByDay from "@/components/ActivityByDay.vue";
import PrintPage from "@/components/PrintPage.vue";
import {useGlobalStore} from "@/stores/global";
import {storyReportId, USER_REPORTS, userReportId} from "@/data/global/REPORTS";

const MAX_COPIES = 100;

const global = useGlobalStore();

// Every printable report for the current story, in the order they are listed and printed.
const userSections = computed(() => Object.entries(global.users || {}).map(([userKey, userName]) => ({
    userKey,
    userName,
    reports: Object.entries(USER_REPORTS).map(([reportKey, report]) => ({
        id: userReportId(userKey, reportKey),
        reportKey,
        title: report.label
    }))
})));

const storyPages = computed(() => Object.entries(global.storyReports).map(([reportKey, report]) => ({
    id: storyReportId(reportKey),
    title: report.label,
    component: report.component
})));

// One set = one copy of every checked report. Stale ids in storage are ignored because we filter from the valid list.
const set = computed(() => {
    const selected = new Set(global.printSelection);
    return [
        ...userSections.value.flatMap(section => section.reports
            .filter(report => selected.has(report.id))
            .map(report => ({id: report.id, title: report.title, userName: section.userName, userKey: section.userKey, reportKey: report.reportKey}))),
        ...storyPages.value.filter(page => selected.has(page.id))
    ];
});

const copies = computed(() => {
    const value = Math.floor(Number(global.printCopies));
    return Number.isFinite(value) ? Math.min(Math.max(value, 1), MAX_COPIES) : 1;
});

// Collated: set, set, set (1,2,3,1,2,3). Not collated: each page repeated (1,1,1,2,2,2).
const pages = computed(() => {
    const withKey = (page, copy) => ({...page, key: `${copy}-${page.id}`});
    const copyNumbers = Array.from({length: copies.value}, (_, copy) => copy);
    return global.printCollate
        ? copyNumbers.flatMap(copy => set.value.map(page => withKey(page, copy)))
        : set.value.flatMap(page => copyNumbers.map(copy => withKey(page, copy)));
});

const print = () => window.print();

// Sheets are printed edge to edge (margins are part of each sheet), so only apply this @page rule while this view is open.
let pageStyle;
onMounted(() => {
    pageStyle = document.createElement('style');
    pageStyle.textContent = '@page { size: letter portrait; margin: 0; }';
    document.head.appendChild(pageStyle);
});
onBeforeUnmount(() => pageStyle?.remove());
</script>

<template>
    <div class="print:hidden">
        <h1 class="pt-5 text-2xl font-bold">Print activity</h1>
        <p class="mt-1 text-text-muted">Choose the reports to print. Everything below is generated for a single print, so leave the print dialog set to 1 copy.</p>

        <div class="mt-4 grid gap-4 sm:grid-cols-2">
            <fieldset v-for="section of userSections" :key="section.userKey" class="rounded-md border px-4 py-3">
                <legend class="px-1 font-semibold">{{ section.userName }}</legend>
                <label v-for="report of section.reports" :key="report.id" class="flex items-center gap-2 py-0.5">
                    <input type="checkbox" :value="report.id" v-model="global.printSelection">
                    {{ report.title }}
                </label>
            </fieldset>

            <fieldset v-if="storyPages.length" class="rounded-md border px-4 py-3">
                <legend class="px-1 font-semibold">Story pages</legend>
                <label v-for="page of storyPages" :key="page.id" class="flex items-center gap-2 py-0.5">
                    <input type="checkbox" :value="page.id" v-model="global.printSelection">
                    {{ page.title }}
                </label>
            </fieldset>
        </div>

        <div class="mt-4 flex flex-wrap items-center gap-x-6 gap-y-3">
            <label class="flex items-center gap-2 font-medium">
                Copies
                <input type="number" min="1" :max="MAX_COPIES" step="1" v-model.number="global.printCopies" class="w-20 rounded-md border bg-surface px-2 py-1.5">
            </label>
            <label class="flex items-center gap-2 font-medium">
                <input type="checkbox" v-model="global.printCollate">
                Collate
            </label>
            <button type="button" class="rounded-md border px-3 py-1.5 font-medium hover:bg-surface-muted" @click="global.resetPrintSettings()">Reset to story defaults</button>
            <button type="button" class="rounded-md bg-accent px-4 py-1.5 font-medium text-white disabled:opacity-50" :disabled="!pages.length" @click="print">Print</button>
        </div>

        <p class="mt-3 text-sm text-text-muted">
            {{ set.length }} {{ set.length === 1 ? 'report' : 'reports' }} × {{ copies }} {{ copies === 1 ? 'copy' : 'copies' }} = {{ pages.length }} {{ pages.length === 1 ? 'page' : 'pages' }}
            <template v-if="copies > 1 && set.length > 1">, {{ global.printCollate ? 'collated (1, 2, 3, 1, 2, 3)' : 'not collated (1, 1, 2, 2, 3, 3)' }}</template>
        </p>
        <p v-if="!pages.length" class="mt-3 text-text-muted">Nothing selected.</p>
    </div>

    <div class="mt-6 overflow-x-auto print:mt-0 print:overflow-visible">
        <div class="mx-auto w-[8.5in] print:mx-0 print:w-auto">
            <PrintPage v-for="page of pages" :key="page.key" :title="page.title" :user-name="page.userName">
                <ActivityByDay v-if="page.userKey" :user="page.userKey" :report="page.reportKey"></ActivityByDay>
                <component v-else :is="page.component"></component>
            </PrintPage>
        </div>
    </div>
</template>
