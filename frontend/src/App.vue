<script setup lang="ts">
import Header from './components/header.vue';
</script>

<template>
  <Header />
  <main class="container">
    <RouterView />
  </main>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
</style>
