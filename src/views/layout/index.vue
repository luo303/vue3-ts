<template>
  <div class="layout_content">
    <!-- 左侧导航栏 -->
    <div class="nav_left" :class="{ fold: settingStore.fold ? true : false }">
      <!-- logo区域 -->
      <logo></logo>
      <!-- 导航栏部分 -->
      <el-scrollbar class="scrollbar">
        <Menu></Menu>
      </el-scrollbar>
    </div>
    <!-- 顶部导航栏 -->
    <div class="nav_top" :class="{ fold: settingStore.fold ? true : false }">
      <tabbar></tabbar>
    </div>
    <!-- 中间内容区域 -->
    <div class="content" :class="{ fold: settingStore.fold ? true : false }">
      <Main></Main>
    </div>
  </div>
</template>

<script setup lang="ts">
import logo from './logo.vue'
import Menu from '@/components/menu.vue'
import tabbar from './tabbar.vue'
import Main from './main.vue'
import settingstore from '@/stores/modules/setting'
const settingStore = settingstore()
</script>
<style scoped lang="scss">
.layout_content {
  position: relative;
  width: 100%;
  height: 100vh;
  .nav_left {
    width: $base_nav_left;
    height: 100vh;
    background-color: #001529;
    transition: all ease 0.5s;
    .el-menu {
      border-right: none;
    }
    &.fold {
      width: $base_nav_min_left;
    }
  }
  .nav_top {
    position: absolute;
    left: $base_nav_left;
    top: 0;
    width: calc(100% - $base_nav_left);
    height: $base_nav_top;
    transition: all ease 0.5s;
    &.fold {
      left: $base_nav_min_left;
      width: calc(100% - $base_nav_min_left);
    }
  }
  .content {
    overflow-y: auto;
    position: absolute;
    padding: 30px;
    top: $base_nav_top;
    left: $base_nav_left;
    width: calc(100% - $base_nav_left);
    height: calc(100vh - $base_nav_top);
    transition: all ease 0.5s;
    background-color: #6666662a;
    &.fold {
      left: $base_nav_min_left;
      width: calc(100% - $base_nav_min_left);
    }
  }
  .scrollbar {
    height: calc(100vh - $logo_height);
  }
}
</style>
