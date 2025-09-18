<template>
  <div class="layout_content">
    <!-- 左侧导航栏 -->
    <div class="nav_left">
      <!-- logo区域 -->
      <logo></logo>
      <!-- 导航栏部分 -->
      <el-scrollbar class="scrollbar">
        <p v-for="item in 100" :key="item" class="scrollbar-demo-item">
          {{ item }}
        </p>
      </el-scrollbar>
    </div>
    <!-- 顶部导航栏 -->
    <div class="nav_top">顶部导航栏</div>
    <!-- 中间内容区域 -->
    <div class="content">内容区域</div>
  </div>
</template>

<script setup lang="ts">
import logo from './logo.vue'
</script>
<style scoped lang="scss">
.layout_content {
  position: relative;
  width: 100%;
  height: 100vh;
  .nav_left {
    width: $base_nav_left;
    height: 100vh;
    background-color: bisque;
  }
  .nav_top {
    position: absolute;
    left: $base_nav_left;
    top: 0;
    width: calc(100% - $base_nav_left);
    height: $base_nav_top;
    background-color: aqua;
  }
  .content {
    position: absolute;
    top: $base_nav_top;
    left: $base_nav_left;
    background-color: blueviolet;
    width: calc(100% - $base_nav_left);
    height: calc(100vh - $base_nav_top);
  }
  .scrollbar {
    height: calc(100vh - $logo_height);
  }
}
</style>
