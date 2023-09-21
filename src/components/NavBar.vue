<script setup lang="ts"></script>

<template>
  <div class="sticky top-0 navbar bg-neutral">
    <div class="flex-1">
      <a class="btn btn-ghost normal-case text-xl">GitHub's Status</a>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1">
        <li><router-link to="/">Maintenance</router-link></li>
        <li><router-link to="/actions">Actions</router-link></li>
        <!-- <li><a href="https://github.com/">GitHub.com</a></li>
        <li class="text-accent">
          <a href="https://www.githubstatus.com/">Status</a>
        </li> -->
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
