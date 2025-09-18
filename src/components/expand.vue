<template>
  <el-icon><component :is="icon" /></el-icon>
</template>

<script setup lang="ts">
defineProps({
  icon: {
    type: String
  }
})
</script>

<style scoped></style>
