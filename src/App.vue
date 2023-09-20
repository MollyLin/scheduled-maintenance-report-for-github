<script setup lang="ts">
import { onErrorCaptured } from 'vue';
import Loading from '@/views/LoadingView.vue';

onErrorCaptured((error) => {
  console.log('其他的錯誤處理：', error);
});
</script>

<template>
  <div class="flex flex-col h-screen">
    <RouterView v-slot="{ Component }">
      <Suspense timeout="0">
        <template #default>
          <component :is="Component" :time="5000"></component>
        </template>
        <template #fallback>
          <Loading />
        </template>
      </Suspense>
    </RouterView>
  </div>
</template>

<style scope>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
