<script setup lang="ts">
import { IncidentUpdate } from '@/types/ApiData';

defineProps<{
  maintainContent: IncidentUpdate[];
  getPostDayFromNow: number;
}>();
</script>

<template>
  <article
    class="flex mx-auto mt-12 md:max-w-lg"
    v-for="(item, index) in maintainContent"
    :key="index"
  >
    <section class="flex-auto w-1/3 text-center text-lg text-white">
      <span>{{ item.formatStatus }}</span>
    </section>
    <section class="flex-auto w-2/3">
      <span>{{ item.body }}</span>
      <div class="text-xs text-base-content text-slate-400">
        Posted <span class="badge badge-outline badge-xs"> {{ getPostDayFromNow }}</span> days ago.
        <time>{{ item.formatDisplayTime }}</time>
      </div>
    </section>
  </article>
</template>
