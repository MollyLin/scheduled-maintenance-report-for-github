<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { get } from '@helpers/fetch.ts';
import { MaintainResponse, ScheduledMaintenance } from '@/types/ApiData';
import ImporterMaintenanceContent from '@/components/ImporterMaintenanceContent.vue';

const renderMaintainBlock = ref<ScheduledMaintenance[]>([]);
const activeId = '3ktldkb3r6f8';

const fetchScheduledMaintain = () => {
  const API_PATH = `${import.meta.env.VITE_API_HOSTNAME}${
    import.meta.env.VITE_SCHEDULED_MAINTENANCES
  }.json`;
  get<MaintainResponse>(API_PATH).then((response) => {
    const { scheduled_maintenances } = response;
    renderMaintainBlock.value = scheduled_maintenances.filter((item) => item.id === activeId);
  });
};

onMounted(() => {
  fetchScheduledMaintain();
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
    <ImporterMaintenanceContent :maintain-block="renderMaintainBlock" />
  </main>
</template>
