<script setup lang="ts">
import { ScheduledMaintenance, IncidentUpdate } from '@/types/ApiData';

const renderMaintainContent = ref<IncidentUpdate[]>([]);

defineProps<{
  mainBlock: ScheduledMaintenance;
}>();
</script>

<template>
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
</template>
