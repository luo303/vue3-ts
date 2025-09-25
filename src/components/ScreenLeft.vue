<template>
  <div class="ScreenLeft">
    <div class="top">
      <p class="top-title">实时游客统计</p>
      <p class="top-bg"></p>
      <p class="top-right">可预约总量<span>99999</span>人</p>
      <div class="number">
        <span v-for="(item, index) in number" :key="index">
          {{ item }}
        </span>
      </div>
      <div class="top-echart" ref="top_charts"></div>
    </div>
    <div class="center">
      <p class="center-title">实时游客统计</p>
      <p class="center-bg"></p>
      <div class="sex">
        <div class="male">
          <div class="male-top">男士</div>
          <div class="male-bottom"></div>
        </div>
        <div class="female">
          <div class="female-top">女士</div>
          <div class="female-bottom"></div>
        </div>
      </div>
      <div class="rate">
        <span>男士60%</span>
        <span>女士40%</span>
      </div>
      <div class="sex-echart" ref="sex_charts"></div>
    </div>
    <div class="bottom">
      <p class="bottom-title">实时游客统计</p>
      <p class="bottom-bg"></p>
      <div class="bottom-echart" ref="bottom_charts"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts'
import 'echarts-liquidfill'
const top_charts = ref()
const sex_charts = ref()
const bottom_charts = ref()
onMounted(() => {
  //水球图
  const topechart = echarts.init(top_charts.value)
  topechart.setOption({
    xAxis: {},
    yAxis: {},
    series: {
      type: 'liquidFill',
      waveAnimation: true,
      animationDuration: 0,
      animationDurationUpdate: 0,
      data: [0.5, 0.4],
      radius: '100%'
    },
    grid: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }
  })
  //男女比例柱状图
  const sexechart = echarts.init(sex_charts.value)
  sexechart.setOption({
    xAxis: {
      show: false,
      min: 0,
      max: 100
    },
    yAxis: {
      show: false,
      type: 'category'
    },
    series: [
      {
        type: 'bar',
        data: [60],
        barWidth: 20,
        z: 100,
        itemStyle: {
          color: 'skyblue',
          borderRadius: 20
        }
      },
      {
        type: 'bar',
        data: [100],
        barWidth: 20,
        barGap: '-100%',
        itemStyle: {
          color: 'pink',
          borderRadius: 20
        }
      }
    ],
    grid: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }
  })
  //底部饼图
  const bottomechart = echarts.init(bottom_charts.value)
  const option = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      top: 50,
      right: 30,
      orient: 'vertical',
      textStyle: {
        color: 'white'
      }
    },
    series: [
      {
        name: '年龄在',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderWidth: 2
        },
        label: {
          show: false,
          position: 'inside',
          color: 'white'
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 1048, name: '10岁以下' },
          { value: 735, name: '10-18岁' },
          { value: 580, name: '19-30岁' },
          { value: 484, name: '31-40岁' },
          { value: 300, name: '41-60岁' },
          { value: 300, name: '60岁以上' }
        ]
      }
    ]
  }
  bottomechart.setOption(option)
})
const number = ref('216908人')
</script>

<style scoped lang="scss">
.ScreenLeft {
  height: 1040px;
  display: flex;
  flex-direction: column;
  .top {
    flex: 1.3;
    margin-top: 20px;
    background: url('../assets/images/screen/dataScreen-main-lc.png');
    background-size: cover;
    .top-echart {
      width: 100%;
      height: 227px;
    }
    .number {
      display: flex;
      gap: 10px;
      width: 100%;
      margin-top: 40px;
      margin-bottom: 29px;
      justify-content: center;
      span {
        color: #29fcff;
        text-align: center;
        font-size: 30px;
        height: 40px;
        line-height: 40px;
        width: 50px;
        background: url(../assets/images/screen/total.png) no-repeat;
        background-size: cover;
      }
    }
    .top-title {
      color: white;
      font-size: 20px;
      margin: 15px 10px;
    }
    .top-bg {
      width: 68px;
      height: 7px;
      background: url(../assets/images/screen/dataScreen-title.png) no-repeat;
      margin-left: 10px;
    }
    .top-right {
      float: right;
      margin-right: 20px;
      font-size: 20px;
      color: white;
      span {
        color: chocolate;
      }
    }
  }
  .center {
    flex: 1;
    background: url(../assets/images/screen/dataScreen-main-lc.png);
    background-size: cover;
    margin-top: 10px;
    .center-title {
      color: white;
      font-size: 20px;
      margin: 10px 10px;
    }
    .center-bg {
      width: 68px;
      height: 7px;
      background: url(../assets/images/screen/dataScreen-title.png) no-repeat;
      margin-left: 10px;
    }
    .sex {
      width: 100%;
      height: 180px;
      padding: 20px;
      display: flex;
      gap: 40px;
      justify-content: center;
      .male {
        margin-top: 10px;
        display: flex;
        justify-content: space-between;
        width: 100px;
        height: 150px;
        flex-direction: column;
        background: url(../assets/images/screen/man-bg.png) no-repeat;
        background-size: 100% 100%;
        .male-top {
          width: 100%;
          height: 20px;
          line-height: 20px;
          color: white;
          text-align: center;
        }
        .male-bottom {
          width: 100%;
          height: 110px;
          background: url(../assets/images/screen/man.png) no-repeat;
          background-size: 100%;
        }
      }
      .female {
        margin-top: 10px;
        display: flex;
        justify-content: space-between;
        width: 100px;
        height: 150px;
        flex-direction: column;
        background: url(../assets/images/screen/woman-bg.png) no-repeat;
        background-size: 100% 100%;
        .female-top {
          width: 100%;
          height: 20px;
          line-height: 20px;
          color: white;
          text-align: center;
        }
        .female-bottom {
          width: 100%;
          height: 110px;
          background: url(../assets/images/screen/woman.png) no-repeat;
          background-size: 100%;
        }
      }
    }
    .rate {
      display: flex;
      justify-content: space-around;
      span {
        color: white;
      }
    }
    .sex-echart {
      text-align: center;
      margin-left: 70px;
      width: 70%;
      height: 50px;
    }
  }
  .bottom {
    flex: 1;
    margin-top: 10px;
    background: url(../assets/images/screen/dataScreen-main-lb.png) no-repeat;
    background-size: cover;
    .bottom-title {
      color: white;
      font-size: 20px;
      margin: 10px 10px;
    }
    .bottom-bg {
      width: 68px;
      height: 7px;
      background: url(../assets/images/screen/dataScreen-title.png) no-repeat;
      margin-left: 10px;
    }
    .bottom-echart {
      box-sizing: border-box;
      margin-top: 20px;
      height: 260px;
    }
  }
}
</style>
