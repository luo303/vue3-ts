<template>
  <!-- 路由组件出口的位置 -->
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <!-- 渲染layout一级路由组件的子路由 -->
      <component :is="Component" v-if="flag" />
    </transition>
  </router-view>
</template>

<script setup lang="ts">
import { ref, watch, nextTick } from 'vue'
import settingstore from '@/stores/modules/setting'
const settingStore = settingstore()
//当前组件是否没销毁
const flag = ref(true)
watch(
  () => settingStore.refrsh,
  () => {
    flag.value = false
    nextTick(() => {
      flag.value = true
    })
  }
)
</script>

<style scoped>
.fade-enter-from {
  opacity: 0;
  transform: scale(0);
}

.fade-enter-active {
  transition: all 0.3s;
}

.fade-enter-to {
  opacity: 1;
  transform: scale(1);
}
</style>
