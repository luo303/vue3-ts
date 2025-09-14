<script setup lang="ts">
console.log(import.meta.env)
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
