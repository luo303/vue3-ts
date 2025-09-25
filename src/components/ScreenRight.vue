<template>
  <div class="ScreenLeft">
    <div class="top">顶部</div>
    <div class="center">中间</div>
    <div class="bottom">底部</div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.ScreenLeft {
  height: 1040px;
  display: flex;
  flex-direction: column;
  .top {
    flex: 1.5;
    background-color: red;
  }
  .center {
    flex: 1;
    background-color: aqua;
  }
  .bottom {
    flex: 1;
    background-color: bisque;
  }
}
</style>
