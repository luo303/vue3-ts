<template>
  <div class="tabbar">
    <div class="tabbar_left">
      <Expand
        :icon="settingStore.fold ? 'Expand' : 'Fold'"
        @click="change"
      ></Expand>
      <!-- 面包屑 -->
      <el-breadcrumb :separator-icon="ArrowRight" class="bread">
        <el-breadcrumb-item :to="{ path: `${$route.fullPath}` }"
          ><el-icon
            ><Lock v-if="title.title1 === '权限管理'" /><ShoppingCartFull
              v-else-if="title.title1 === '商品管理'" />
            <HomeFilled v-else /></el-icon
          >{{ title.title1 }}</el-breadcrumb-item
        >
        <el-breadcrumb-item v-if="title.title2"
          ><el-icon><Avatar /></el-icon>{{ title.title2 }}</el-breadcrumb-item
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
            <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
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
  HomeFilled,
  Refresh,
  Setting
} from '@element-plus/icons-vue'
import settingstore from '@/stores/modules/setting'
import { useRoute, useRouter } from 'vue-router'
import { useUserStore } from '@/stores'
import { watch } from 'vue'
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
const settingStore = settingstore()
const userstore = useUserStore()
const route = useRoute()
const router = useRouter()
const title = ref(route.query)
// 使用watch监听路由的query变化
watch(
  // 监听的目标：路由的query对象
  () => route.query,
  newQuery => {
    title.value = newQuery
  },
  { deep: true }
)
const change = () => {
  settingStore.fold = !settingStore.fold
  settingStore.isCollapse = !settingStore.isCollapse
}
const logout = () => {
  userstore.removetoken()
  router.push('/login')
  ElMessage({
    message: '退出成功',
    type: 'success'
  })
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
    margin-right: 20px;
    .avator {
      margin-left: 10px;
    }
  }
}
</style>
