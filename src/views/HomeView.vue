<template>
  <div class="home">
    <pre>{{ result }}</pre>
  </div>
</template>

<script async setup lang="ts">
import { ref } from 'vue';

const result = ref();

const response = await fetch('https://api.publicapis.org/entries');
result.value = await response.json();
</script>
