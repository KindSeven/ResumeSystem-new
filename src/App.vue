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
  min-width: 100vw;
  min-height: 100vh;

}

#app {
  min-width: 100vw;
  min-height: 100vh;
  margin: 0 auto;
  padding: 2rem;
  font-weight: normal;
}
</style>
