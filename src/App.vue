<template>
  <div id="app">
    <Basiclayout />
  </div>
</template>

<style>
</style>

<script setup lang="ts">
import Basiclayout from "@/layouts/Basiclayout.vue"
import { useLoginUserStore } from "@/store/useLoginUserStore";

const loginUserStore = useLoginUserStore();
loginUserStore.fetchLoginUser();

</script>
