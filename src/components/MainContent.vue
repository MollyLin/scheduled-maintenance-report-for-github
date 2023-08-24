<script setup lang="ts">
import { onMounted } from 'vue';

function http<T>(request: RequestInfo): Promise<T> {
  return fetch(request)
    .then((response: Response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .catch((error) => {
      if (error.response && error.response.status && error.response.status === 403) {
        console.log('無權限');
      }
      console.log(error);
    });
}

function get<T>(path: string, args: RequestInit = {}): Promise<T> {
  args.method = 'get';
  args.headers = {
    'Content-Type': 'application/json',
  };
  return http<T>(new Request(`${path}`, args));
}

interface CodeStatus {
  code: number;
}

interface MaintenRes extends CodeStatus {
  scheduled_maintenances: MaintenData[];
}

interface StatusData {
  status: string;
  body: string;
  display_at: string;
}

interface MaintenData {
  name: string; // Title
  updated_at: string; // 最後更新日期
  shortlink: string; // source link
  incident_updates: StatusData[];
}

const fetchScheduledMaintenances = (): void => {
  const maintenUrl = 'https://www.githubstatus.com/api/v2/scheduled-maintenances.json';
  get<MaintenRes>(maintenUrl).then((response) => {
    console.log(response.scheduled_maintenances);
  });
};

onMounted(() => {
  fetchScheduledMaintenances();
});
</script>

<template>
  <main class="container mx-auto mt-12 prose prose-sm grow">
    <h1 class="text-center tracking-wide">GitHub Importer Maintenance</h1>
    <h3 class="text-center tracking-wider mt-6 font-normal">
      Scheduled Maintenance Report for GitHub
    </h3>
    <article class="flex mx-auto mt-12 md:max-w-lg">
      <section class="flex-auto w-1/3 text-center font-bold">
        <span>Completed</span>
      </section>
      <section class="flex-auto w-2/3">
        <span>The scheduled maintenance has been completed.</span>
        <div class="text-xs text-base-content">
          Posted<span> 6</span> months ago.
          <time class="text-primary">Feb 09, 2023 - 09:09 UTC</time>
        </div>
      </section>
    </article>
  </main>
</template>
