<script setup lang="ts">
defineProps<{
  status: string;
  body: string;
  display_at: Date;
}>();
</script>

<template>
  <article class="flex mx-auto mt-12 md:max-w-lg">
    <section class="flex-auto w-1/3 text-center font-bold">
      <span>{{ status }}</span>
    </section>
    <section class="flex-auto w-2/3">
      <span>{{ body }}</span>
      <div class="text-xs text-base-content">
        Posted<span> 6</span> months ago.
        <time class="text-primary">{{ display_at }}</time>
      </div>
    </section>
  </article>
</template>
