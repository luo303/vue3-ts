<template>
  <el-menu
    text-color="white"
    background-color="#001529"
    router
    unique-opened
    :default-active="$route.path"
    :collapse="settingStore.isCollapse"
  >
    <el-menu-item index="/home"
      ><el-icon color="white"><HomeFilled /></el-icon>首页</el-menu-item
    >
    <el-menu-item index="/screen"
      ><el-icon><DataBoard /></el-icon>数据大屏</el-menu-item
    >
    <el-sub-menu index="/acl">
      <template #title
        ><el-icon><Lock /></el-icon>权限管理</template
      >
      <el-menu-item index="/acl/user"
        ><el-icon><Avatar /></el-icon>用户管理</el-menu-item
      >
      <el-menu-item index="/acl/player"
        ><el-icon><UserFilled /></el-icon>角色管理</el-menu-item
      >
      <el-menu-item index="/acl/menu"
        ><el-icon><Menu /></el-icon>菜单管理</el-menu-item
      >
    </el-sub-menu>
    <el-sub-menu index="/shopping">
      <template #title
        ><el-icon><ShoppingCartFull /></el-icon>商品管理</template
      >
      <el-menu-item index="/shopping/brand"
        ><el-icon><GoodsFilled /></el-icon>品牌管理</el-menu-item
      >
      <el-menu-item index="/shopping/attr"
        ><el-icon><MagicStick /></el-icon>属性管理</el-menu-item
      >
      <el-menu-item index="/shopping/SPU"
        ><el-icon><Opportunity /></el-icon>SPU管理</el-menu-item
      >
      <el-menu-item index="/shopping/SKU"
        ><el-icon><Flag /></el-icon>SKU管理</el-menu-item
      >
    </el-sub-menu>
  </el-menu>
</template>

<script setup lang="ts">
import settingstore from '@/stores/modules/setting'
const settingStore = settingstore()
</script>

<style scoped></style>
