<template>
  <div class="container">
    <div class="box" ref="box">
      <div class="top">
        <ScreenTop></ScreenTop>
      </div>
      <div class="bottom">
        <div class="left">
          <ScreenLeft></ScreenLeft>
        </div>
        <div class="center">
          <ScreenCenter></ScreenCenter>
        </div>
        <div class="right">
          <ScreenRight></ScreenRight>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import ScreenTop from '@/components/ScreenTop.vue'
import ScreenLeft from '@/components/ScreenLeft.vue'
import ScreenCenter from '@/components/ScreenCenter.vue'
import ScreenRight from '@/components/ScreenRight.vue'
const box = ref()
onMounted(() => {
  box.value.style.transform = `scale(${getScale()}) translate(-50%,-50%)`
})
const getScale = (w = 1920, h = 1080) => {
  const ww = window.innerWidth / w
  const wh = window.innerHeight / h
  return ww < wh ? ww : wh
}

//视口监听
window.onresize = () => {
  box.value.style.transform = `scale(${getScale()}) translate(-50%,-50%)`
}
</script>

<style scoped lang="scss">
.container {
  width: 100vw;
  height: 100vh;
  background: url(@/assets/images/screen/bg.png);
  background-size: cover;
  .box {
    position: fixed;
    width: 1920px;
    height: 1080px;
    left: 50%;
    top: 50%;
    transform-origin: left top;
    .top {
      width: 100%;
      height: 40px;
    }
    .bottom {
      display: flex;
      .left {
        flex: 1;
      }
      .right {
        flex: 1;
      }
      .center {
        flex: 2;
      }
    }
  }
}
</style>
