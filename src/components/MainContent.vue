<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { get } from '@helpers/fetch.ts';

const renderMaintainInfo = ref<ScheduledMaintenance[]>([]);
const activeId = '3ktldkb3r6f8';

interface MaintainResponse {
  page: any;
  scheduled_maintenances: ScheduledMaintenance[];
}

interface ScheduledMaintenance {
  id: string;
  name: string;
  status: IncidentUpdateStatus;
  created_at: Date;
  updated_at: Date;
  monitoring_at: null;
  resolved_at: Date;
  impact: string;
  shortlink: string;
  started_at: Date;
  page_id: string;
  incident_updates: IncidentUpdate[];
  components: [];
  scheduled_for: Date;
  scheduled_until: Date;
}

enum IncidentUpdateStatus {
  Completed = 'completed',
  InProgress = 'in_progress',
  Scheduled = 'scheduled',
}

interface IncidentUpdate {
  id: string;
  status: IncidentUpdateStatus;
  body: string;
  incident_id: string;
  created_at: Date;
  updated_at: Date;
  display_at: Date;
  affected_components: null;
  deliver_notifications: boolean;
  custom_tweet: null;
  tweet_id: number | null;
}

const fetchScheduledMaintain = () => {
  const API_PATH = `${import.meta.env.VITE_API_HOSTNAME}${
    import.meta.env.VITE_SCHEDULED_MAINTENANCES
  }.json`;
  get<MaintainResponse>(API_PATH).then((response) => {
    const { scheduled_maintenances } = response;
    const filterMaintainData = () => scheduled_maintenances.filter((item) => item.id === activeId);
    renderMaintainInfo.value = filterMaintainData();
  });
};

onMounted(() => {
  fetchScheduledMaintain();
});
</script>

<template>
  <main class="container mx-auto mt-12 prose prose-sm grow">
    <div v-for="(item, index) in renderMaintainInfo" :key="index">
      <h1 class="text-center tracking-wide">{{ item?.name }}</h1>
      <h3 class="text-center tracking-wider mt-6 font-normal">
        Scheduled Maintenance Report for GitHub
      </h3>
    </div>

    <article class="flex mx-auto mt-12 md:max-w-lg">
      <section class="flex-auto w-1/3 text-center font-bold">
        <span>Completed</span>
      </section>
      <section class="flex-auto w-2/3">
        <span>The scheduled Maintainance has been completed.</span>
        <div class="text-xs text-base-content">
          Posted<span> 6</span> months ago.
          <time class="text-primary">Feb 09, 2023 - 09:09 UTC</time>
        </div>
      </section>
    </article>
  </main>
</template>
