<template>
  <el-menu
    text-color="white"
    background-color="#001529"
    router
    :default-active="getActivePath()"
    :collapse="settingStore.isCollapse"
  >
    <el-menu-item index="/home?title1=首页"
      ><el-icon color="white"><HomeFilled /></el-icon>首页</el-menu-item
    >
    <el-menu-item index="/screen?title1=数据大屏"
      ><el-icon><DataBoard /></el-icon>数据大屏</el-menu-item
    >
    <el-sub-menu index="/acl">
      <template #title
        ><el-icon><Lock /></el-icon>权限管理</template
      >
      <el-menu-item index="/acl/user?title1=权限管理&title2=用户管理"
        ><el-icon><Avatar /></el-icon>用户管理</el-menu-item
      >
      <el-menu-item index="/acl/player?title1=权限管理&title2=角色管理"
        ><el-icon><UserFilled /></el-icon>角色管理</el-menu-item
      >
      <el-menu-item index="/acl/menu?title1=权限管理&title2=菜单管理"
        ><el-icon><Menu /></el-icon>菜单管理</el-menu-item
      >
    </el-sub-menu>
    <el-sub-menu index="/shopping">
      <template #title
        ><el-icon><ShoppingCartFull /></el-icon>商品管理</template
      >
      <el-menu-item index="/shopping/brand?title1=商品管理&title2=品牌管理"
        ><el-icon><GoodsFilled /></el-icon>品牌管理</el-menu-item
      >
      <el-menu-item index="/shopping/attr?title1=商品管理&title2=属性管理"
        ><el-icon><MagicStick /></el-icon>属性管理</el-menu-item
      >
      <el-menu-item index="/shopping/SPU?title1=商品管理&title2=SPU管理"
        ><el-icon><Opportunity /></el-icon>SPU管理</el-menu-item
      >
      <el-menu-item index="/shopping/SKU?title1=商品管理&title2=SKU管理"
        ><el-icon><Flag /></el-icon>SKU管理</el-menu-item
      >
    </el-sub-menu>
  </el-menu>
</template>

<script setup lang="ts">
import settingstore from '@/stores/modules/setting'
import { useRoute } from 'vue-router'
const route = useRoute()
const settingStore = settingstore()
// 处理可能的编码问题，确保匹配一致
const getActivePath = () => {
  // 对fullPath进行解码，避免中文/特殊字符编码导致的不匹配
  return decodeURIComponent(route.fullPath)
}
</script>

<style scoped></style>
