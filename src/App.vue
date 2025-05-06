<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div id="app">
    <router-view />
  </div>

</template>

<style scoped>
body {
  margin: 0;
  font-family: Arial, sans-serif;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
