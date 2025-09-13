<script setup lang="ts">
console.log(import.meta.env)
</script>

<template>
  <h1>You did it!</h1>
  <p>我是根组件</p>
  <svg style="width: 30px; height: 30px">
    <use xlink:href="#icon-photo" fill="red"></use>
  </svg>
</template>

<style scoped></style>
