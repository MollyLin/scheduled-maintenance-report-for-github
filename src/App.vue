<script setup lang="ts">
import { onErrorCaptured } from 'vue';
import Loading from '@/views/LoadingView.vue';

onErrorCaptured((error) => {
  console.log('其他的錯誤處理：', error);
});
</script>

<template>
  <div class="flex flex-col h-screen">
    <router-view v-slot="{ Component }">
      <suspense v-if="Component">
        <template #default>
          <component :is="Component"></component>
        </template>
        <template #fallback>
          <Loading />
        </template>
      </suspense>
    </router-view>
  </div>
</template>

<style scope>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html,
body {
  height: 100%;
  padding: 0;
  margin: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
