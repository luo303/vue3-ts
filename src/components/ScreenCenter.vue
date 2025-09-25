<template>
  <div class="center">
    <div class="top">顶部</div>
    <div class="bottom">底部</div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.center {
  height: 100%;
  display: flex;
  flex-direction: column;
  .top {
    flex: 8;
    margin-top: 60px;
    background-color: aqua;
  }
  .bottom {
    flex: 3;
    background-color: aliceblue;
  }
}
</style>
