<template>
  <div class="expand">
    <el-icon><component :is="icon" /></el-icon>
  </div>
</template>

<script setup lang="ts">
defineProps({
  icon: {
    type: String
  }
})
</script>

<style scoped>
.expand {
  cursor: pointer;
}
</style>
