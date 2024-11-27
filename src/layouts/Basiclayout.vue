<template>
  <div class="" id="basicLayout">
    <a-layout class="layout">
      <a-layout-header class="header">
        <GlobalHeader />
      </a-layout-header>
      <a-layout-content class="content">
        <router-view />
      </a-layout-content>
      <a-layout-footer class="footer">
        <a href="https://github.com/Gj-12138" target="_blank" >这里是Gj,你想来找我吗？</a>
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script setup lang="ts">
import GlobalHeader from "@/components/GlobalHeader.vue";

//测试
// import { getCurrentUser } from "@/api/user";
//
// getCurrentUser().then((res) => {
//   console.log(res);
// });

</script>

<style scoped>
#basicLayout .footer {
  background-color: lightgrey; /* 背景颜色设置为浅灰色 */
  text-align: center; /* 文本对齐方式设置为居中 */
  left: 0; /* 从页面的左侧开始 */
  right: 0; /* 到页面的右侧结束，这样footer就会水平铺满整个页面宽度 */
  padding: 24px; /* 内边距设置为24像素，使得footer内的内容不会紧贴边缘 */
}

#basicLayout .content {
  padding: 100px; /* 内边距设置为100像素，为内容区域提供足够的空间 */
  margin-bottom: 20px; /* 底部外边距设置为20像素，为footer留出空间 */
  background: linear-gradient(to right, #fefefe, #fff); /* 背景设置为从#fefefe到#fff的线性渐变，从左到右 */
}

#basicLayout .header{
  color: unset; /* 颜色设置为未设置，即继承父元素的颜色 */
  background: white; /* 背景颜色设置为白色 */
  margin-bottom: 10px; /* 底部外边距设置为10像素，为内容区域留出空间 */
  padding-inline: 16px; /* 内联方向（即水平和垂直方向，取决于书写模式）的内边距设置为16像素 */
  /* 注意：padding-inline是一个较新的CSS属性，可能不被所有浏览器支持。在编写时可能需要考虑兼容性。 */
}
</style>
