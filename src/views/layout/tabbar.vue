<template>
  <div class="tabbar">
    <div class="tabbar_left">
      <Expand
        :icon="settingStore.fold ? 'Expand' : 'Fold'"
        @click="change"
      ></Expand>
      <!-- 面包屑 -->
      <el-breadcrumb :separator-icon="ArrowRight" class="bread">
        <el-breadcrumb-item
          v-for="(item, index) in $route.matched"
          :key="index"
          :to="item.path"
          v-show="!item.meta?.hidden"
          ><el-icon><component :is="item.meta.icon"></component></el-icon
          >{{ item.meta.title }}</el-breadcrumb-item
        >
      </el-breadcrumb>
      <button @click="a">显示</button>
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
  Refresh,
  Setting
} from '@element-plus/icons-vue'
import settingstore from '@/stores/modules/setting'
import { useRoute, useRouter } from 'vue-router'
import { useUserStore } from '@/stores'
import { ElMessage } from 'element-plus'
const settingStore = settingstore()
const userstore = useUserStore()
const route = useRoute()
const router = useRouter()
const a = () => {
  console.log(route.matched)
}

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
