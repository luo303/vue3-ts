<template>
  <el-menu
    text-color="white"
    background-color="#001529"
    router
    unique-opened
    :default-active="$route.path"
    :collapse="settingStore.isCollapse"
  >
    <el-menu-item index="/screen"
      ><el-icon><DataBoard /></el-icon>数据大屏</el-menu-item
    >
    <el-menu-item index="/channel"
      ><el-icon color="white"><Menu /></el-icon>文章分类</el-menu-item
    >
    <el-menu-item index="/manage"
      ><el-icon><Promotion /></el-icon>文章管理</el-menu-item
    >
    <el-sub-menu index="/user">
      <template #title
        ><el-icon><Avatar /></el-icon>个人中心</template
      >
      <el-menu-item index="/user/profile"
        ><el-icon><List /></el-icon>基本资料</el-menu-item
      >
      <el-menu-item index="/user/avatar"
        ><el-icon><MagicStick /></el-icon>更换头像</el-menu-item
      >
      <el-menu-item index="/user/password"
        ><el-icon><Opportunity /></el-icon>更改密码</el-menu-item
      >
    </el-sub-menu>
  </el-menu>
</template>

<script setup lang="ts">
import settingstore from '@/stores/modules/setting'
const settingStore = settingstore()
</script>

<style scoped></style>
