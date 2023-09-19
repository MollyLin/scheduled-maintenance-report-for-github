<script setup lang="ts">
import { IncidentUpdate } from '@/types/ApiData';

defineProps<{
  maintainContent: IncidentUpdate[];
}>();

const getPostDayFromNow = (postDate: string): number => {
  const getPostDate = new Date(postDate).getTime();
  const getToday = new Date().getTime();
  let diff = getToday - getPostDate;
  const millisecondsInDay = 86400000;
  return Math.trunc(diff / millisecondsInDay);
};
</script>

<template>
  <TransitionGroup name="fade" tag="div">
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
          Posted
          <span class="badge badge-outline badge-xs">
            {{ getPostDayFromNow(item.display_at) }}</span
          >
          days ago.
          <time>{{ item.formatDisplayTime }}</time>
        </div>
      </section>
    </article>
  </TransitionGroup>
</template>

<style scoped>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}
</style>
