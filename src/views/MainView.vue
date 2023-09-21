<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
import Navbar from '@/components/NavBar.vue';
import Footer from '@/views/FooterView.vue';

const MaintenanceBlock = defineAsyncComponent(() => import('@/views/MaintenanceView.vue'));
</script>

<template>
  <Navbar />
  <main class="container mx-auto mt-12 px-2 prose prose-sm grow max-h-screen" v-cloak>
    <MaintenanceBlock />
  </main>
  <Footer></Footer>
</template>

<style scoped>
[v-cloak] {
  display: none;
}
</style>
