<template>
  <div class="center">
    <div class="top" ref="map"></div>
    <div class="bottom">
      <p class="bottom-title">未来七天游客数量趋势图</p>
      <p class="bottom-bg"></p>
      <div class="echart" ref="line"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts'
import chinaJSON from '@/utils/china.json'
const map = ref()
const line = ref()
echarts.registerMap('china', chinaJSON as any)
onMounted(() => {
  const mapchart = echarts.init(map.value)
  mapchart.setOption({
    //地图组件
    geo: {
      map: 'china',
      roam: true,
      top: 66,
      left: 72,
      right: 72,
      label: {
        show: true,
        color: 'white'
      },
      itemStyle: {
        opacity: 0.8
      },
      emphasis: {
        label: {
          fontSize: 18
        }
      }
    },
    //布局位置
    grid: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    },
    //系列
    series: {
      type: 'lines',
      data: [
        {
          coords: [
            [87.617733, 43.792818], //起点
            [108.948024, 34.263161] //终点
          ],
          lineStyle: {
            type: 'dashed',
            color: 'white',
            width: 2
          }
        },
        {
          coords: [
            [91.132212, 29.660361],
            [116.405285, 39.904989]
          ],
          lineStyle: {
            type: 'dashed',
            color: 'white',
            width: 2
          }
        },
        {
          coords: [
            [115.892151, 28.676493],
            [113.280637, 23.125178]
          ],
          lineStyle: {
            type: 'dashed',
            color: 'white',
            width: 2
          }
        },
        {
          coords: [
            [126.642464, 45.756967],
            [114.298572, 30.584355]
          ],
          lineStyle: {
            type: 'dashed',
            color: 'white',
            width: 2
          }
        },
        {
          coords: [
            [106.713478, 26.578343],
            [111.670801, 40.818311]
          ],
          lineStyle: {
            type: 'dashed',
            color: 'white',
            width: 2
          }
        }
      ],
      //航线特效
      effect: {
        show: true,
        symbol: 'arrow',
        color: 'white',
        symbolSize: 15
      }
    }
  })
  const linechart = echarts.init(line.value)
  linechart.setOption({
    titel: {
      text: '访问量'
    },
    xAxis: {
      type: 'category',
      boundaryGap: 'false',
      splitLine: {
        show: false
      },
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
      axisLabel: {
        color: 'white'
      }
    },
    yAxis: {
      splitLine: {
        show: false
      },
      axisLine: {
        show: true
      },
      axisTick: {
        show: true
      },
      axisLabel: {
        color: 'white'
      }
    },
    grid: {
      left: 40,
      top: 0,
      right: 0,
      bottom: 40
    },
    series: {
      type: 'line',
      data: [240, 500, 250, 360, 600, 980, 280],
      smooth: true,
      areaStyle: {
        color: 'rgba(100,255,255)'
      }
    }
  })
})
</script>

<style scoped lang="scss">
.center {
  height: 100%;
  display: flex;
  flex-direction: column;
  .top {
    flex: 8;
    margin-top: 60px;
  }
  .bottom {
    flex: 3;
    margin: 0 20px;
    background: url(../assets/images/screen/dataScreen-main-cb.png) no-repeat;
    background-size: cover;
    .bottom-title {
      color: white;
      font-size: 20px;
      margin: 10px 50px;
    }
    .bottom-bg {
      width: 68px;
      height: 7px;
      background: url(../assets/images/screen/dataScreen-title.png) no-repeat;
      margin-left: 50px;
    }
    .echart {
      width: 100%;
      height: 80%;
      margin-top: 18px;
    }
  }
}
</style>
