<script setup lang="ts">
import { onMounted, ref, toValue } from 'vue';
import { get } from '@helpers/fetch.ts';
import { MaintainResponse, ScheduledMaintenance, IncidentUpdate } from '@/types/ApiData';
import ImporterMaintenanceContent from '@/components/ImporterMaintenanceContent.vue';

const renderMaintainBlock = ref<ScheduledMaintenance[]>();
const renderMaintainContent = ref<IncidentUpdate[]>([]);
const activeId = '3ktldkb3r6f8';
const API_URL = toValue(
  ref(`${import.meta.env.VITE_API_HOSTNAME}${import.meta.env.VITE_SCHEDULED_MAINTENANCES}.json`),
);

const setMaintainContent = (res: ScheduledMaintenance[]): IncidentUpdate[] =>
  (renderMaintainContent.value = res[0].incident_updates);

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
      <h1 class="text-center tracking-wide">{{ item?.name }}</h1>
      <h3 class="text-center tracking-wider mt-6 font-normal">
        Scheduled Maintenance Report for GitHub
      </h3>
    </div>
    <ImporterMaintenanceContent :maintain-content="renderMaintainContent" />
  </main>
</template>
