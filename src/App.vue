<script setup lang="ts">
import Navbar from '@components/NavBar.vue';
import MainContent from '@components/MainContent.vue';
</script>

<template>
  <div class="flex flex-col h-screen">
    <Navbar />
    <MainContent />
    <footer class="footer footer-center p-4 bg-base-300 text-base-content mt-24">
      <div>
        <p>© 2023 GitHub, Inc.</p>
      </div>
    </footer>
  </div>
</template>

<style scoped></style>
