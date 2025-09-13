<script setup lang="ts">
import SvgIcon from './components/SvgIcon.vue'
console.log(import.meta.env)
</script>

<template>
  <h1>You did it!</h1>
  <p>我是根组件</p>
  <SvgIcon name="home" color="red" width="100px" height="100px"></SvgIcon>
</template>

<style scoped></style>
