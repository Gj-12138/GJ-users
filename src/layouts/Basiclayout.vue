<template>
  <div class="" id="basicLayout">
    <a-layout>
      <a-layout-header class="header">
        <GlobalHeader />
        hearder
      </a-layout-header>
      <a-layout-content class="content">
        <router-view />
        content
      </a-layout-content>

      <a-layout-footer class="footer">Footer</a-layout-footer>
    </a-layout>
  </div>
</template>

<script setup lang="ts">
import GlobalHeader from "@/components/GlobalHeader.vue";
import { getCurrentUser } from "@/api/user";

getCurrentUser().then((res) => {
  console.log(res);
});

</script>

<style scoped>
#basicLayout .footer {
  background-color: hotpink;
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 16px;
}

#basicLayout .content {
  padding: 20px;
  margin-bottom: 20px;
  background: linear-gradient(to right, #fefefe, #fff);
}
#basicLayout .header{
  color: unset;
  background: white;
  margin-bottom: 10px;
  padding-inline: 20px;
}
</style>
