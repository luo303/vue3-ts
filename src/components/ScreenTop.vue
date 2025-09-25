<template>
  <div class="top">
    <div class="left">
      <span class="lbtn" @click="gohome">首页</span>
    </div>
    <div class="center">
      <div class="title"><p>智慧旅游可视化大数据平台</p></div>
    </div>
    <div class="right">
      <span class="rbtn">统计结果</span>
      <span class="date">当前时间：{{ time }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { formattime } from '@/utils/formate'
import { useRouter } from 'vue-router'
const time = ref('')
onMounted(() => {
  const date = new Date()
  time.value = formattime(date)
  const timer = setInterval(() => {
    const date = new Date()
    time.value = formattime(date)
  }, 1000)
  onUnmounted(() => {
    clearInterval(timer)
  })
})

const router = useRouter()
const gohome = () => {
  router.push('/')
}
</script>

<style scoped lang="scss">
.top {
  display: flex;
  .left {
    flex: 1;
    background: url(../assets/images/screen/dataScreen-header-left-bg.png)
      no-repeat;
    .lbtn {
      cursor: pointer;
      font-size: larger;
      width: 150px;
      height: 40px;
      float: right;
      text-align: center;
      line-height: 40px;
      color: #29fcff;
      background: url(../assets//images//screen//dataScreen-header-btn-bg-l.png)
        no-repeat;
      background-size: cover;
    }
  }
  .center {
    flex: 2;
    .title {
      width: 100%;
      height: 74px;
      background: url(../assets//images/screen/dataScreen-header-center-bg.png)
        no-repeat;
      background-size: 100% 100%;
      text-align: center;
      color: #29fcff;
      p {
        display: flex;
        justify-content: center;
        letter-spacing: 0.3em;
        width: 100%;
        height: 74px;
        line-height: 74px;
        font-size: 33px;
      }
    }
  }
  .right {
    flex: 1;
    background: url(../assets//images/screen/dataScreen-header-right-bg.png)
      no-repeat;
    .rbtn {
      float: left;
      width: 150px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      font-size: larger;
      color: #29fcff;
      background: url(../assets/images/screen/dataScreen-header-btn-bg-r.png)
        no-repeat;
      background-size: cover;
    }
    .date {
      display: block;
      width: 100%;
      height: 40px;
      line-height: 40px;
      text-align: center;
      color: #29fcff;
    }
  }
}
</style>
