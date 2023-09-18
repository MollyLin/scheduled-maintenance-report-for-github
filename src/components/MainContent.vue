<script setup lang="ts">
import { onMounted, ref, toValue } from 'vue';
import { get } from '@helpers/fetch.ts';
import { MaintainResponse, ScheduledMaintenance, IncidentUpdate } from '@/types/ApiData';
import ImporterMaintenanceContent from '@/components/ImporterMaintenanceContent.vue';

const renderMaintainBlock = ref<ScheduledMaintenance[]>();
const renderMaintainContent = ref<IncidentUpdate[]>([]);
const renderPostDayFromNow = ref(0);
const activeId = 'lpslbfcw2czs';
const API_URL = toValue(
  ref(`${import.meta.env.VITE_API_HOSTNAME}${import.meta.env.VITE_SCHEDULED_MAINTENANCES}.json`),
);

const getPostDayFromNow = (postDate: string): number => {
  const getPostDate = new Date(postDate).getTime();
  const getToday = new Date().getTime();
  let diff = getToday - getPostDate;
  const millisecondsInDay = 8640000;
  const days = Math.trunc(diff / millisecondsInDay);
  diff -= days * millisecondsInDay;
  return days;
};

const formatStatusText = (status: string) => {
  // 將字串以底線分割成陣列
  const words = status.split('_');
  // 首字母大寫化第一個單字，其餘保留小寫，再合併成一個新的字串
  const formattedString = words
    .map((word, index) => (index === 0 ? word.charAt(0).toUpperCase() + word.slice(1) : word))
    .join(' ');
  return formattedString;
};

const timeFormat: Intl.DateTimeFormatOptions = {
  month: 'short',
  day: 'numeric',
  year: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  hour12: false,
  timeZone: 'UTC',
  timeZoneName: 'short',
};

const formatDisplayDate = (display: string) =>
  new Date(display).toLocaleString('en-us', timeFormat);

const setFormattedContent = (item: IncidentUpdate) => {
  const originalContent = { ...item };
  originalContent.formatStatus = formatStatusText(item.status);
  originalContent.formatDisplayTime = formatDisplayDate(item.display_at);
  renderPostDayFromNow.value = getPostDayFromNow(item.display_at);
  return originalContent;
};

const setMaintainContent = (res: ScheduledMaintenance[]) => {
  const originMaintainContent = res[0].incident_updates;
  renderMaintainContent.value = originMaintainContent.map((item) => {
    return setFormattedContent(item);
  });
};

const setMaintainTitle = (res: ScheduledMaintenance[]): ScheduledMaintenance[] =>
  res.filter((item) => item.id === activeId);

const setMaintainGroup = (res: MaintainResponse) => {
  const { scheduled_maintenances } = res;
  renderMaintainBlock.value = setMaintainTitle(scheduled_maintenances);
  return renderMaintainBlock.value;
};

const fetchScheduledMaintain = () => {
  get<MaintainResponse>(API_URL)
    .then((res) => setMaintainGroup(res))
    .then((res) => setMaintainContent(res))
    .catch((error: Error) => {
      console.log(error);
    });
};

onMounted(async () => {
  await fetchScheduledMaintain();
});
</script>

<template>
  <main class="container mx-auto mt-12 prose prose-sm grow">
    <div v-for="(item, index) in renderMaintainBlock" :key="index">
      <h1 class="text-center tracking-wide text-primary">{{ item?.name }}</h1>
      <h3 class="text-center tracking-wider mt-6 font-normal text-secondary">
        Scheduled Maintenance Report for GitHub
      </h3>
    </div>
    <ImporterMaintenanceContent
      :maintain-content="renderMaintainContent"
      :get-post-day-from-now="renderPostDayFromNow"
    />
  </main>
</template>
