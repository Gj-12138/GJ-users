<template>
  <div id="app">
    <Basiclayout />
  </div>
  <router-view />
</template>

<style>
#app {
}
</style>

<script setup lang="ts">
import Basiclayout from "@/layouts/Basiclayout.vue";
</script>
