<template>
  <div class="tabbar">
    <div class="tabbar_left">
      <Expand :icon="fold ? 'Expand' : 'Fold'" @click="change"></Expand>
      <!-- 面包屑 -->
      <el-breadcrumb :separator-icon="ArrowRight" class="bread">
        <el-breadcrumb-item :to="{ path: '/' }"
          ><el-icon><Lock /></el-icon>权限管理</el-breadcrumb-item
        >
        <el-breadcrumb-item
          ><el-icon><Avatar /></el-icon>用户管理</el-breadcrumb-item
        >
      </el-breadcrumb>
    </div>
    <div class="tabbar_right">
      <el-button :icon="Refresh" circle />
      <el-button :icon="FullScreen" circle />
      <el-button :icon="Setting" circle />
      <el-avatar :size="32" src="/logo.png" class="avator" />
      <el-dropdown>
        <span class="el-dropdown-link">
          admin
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import Expand from '@/components/expand.vue'
import {
  ArrowRight,
  FullScreen,
  Refresh,
  Setting
} from '@element-plus/icons-vue'
import { ref } from 'vue'
const fold = ref(false)
const change = () => {
  fold.value = !fold.value
}
</script>

<style scoped>
.tabbar {
  width: 100%;
  height: 100%;
  padding-left: 10px;
  display: flex;
  justify-content: space-between;
  .tabbar_left {
    display: flex;
    align-items: center;
    .bread {
      margin-left: 10px;
    }
  }
  .tabbar_right {
    display: flex;
    align-items: center;
    .avator {
      margin-left: 10px;
    }
  }
}
</style>
