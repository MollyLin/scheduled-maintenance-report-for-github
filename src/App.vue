<script setup lang="ts">
import Navbar from './components/NavBar.vue';
</script>

<template>
  <navbar />
  <main class="container mx-auto mt-12 prose prose-sm">
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

  <footer class="footer footer-center p-4 bg-base-300 text-base-content mt-24">
    <div>
      <p>© 2023 GitHub, Inc.</p>
    </div>
  </footer>
</template>

<style scoped></style>
