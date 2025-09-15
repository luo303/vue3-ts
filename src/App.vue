<script setup lang="ts">
import request from '@/utils/request'
import { onMounted } from 'vue'
onMounted(() => {
  const res = request.get('/user/info')
  console.log(res)
  console.log(import.meta.env.VITE_APP_BASE_API)
})
</script>

<template>
  <div>
    <h1>You did it!</h1>
    <p>我是根组件</p>
    <SvgIcon name="home" color="blue" width="100px" height="100px"></SvgIcon>
  </div>
</template>

<style scoped lang="scss">
div {
  h1 {
    color: $color1;
  }
  p {
    color: $color2;
  }
}
</style>
