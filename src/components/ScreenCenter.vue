<template>
  <div class="center">
    <div class="top" ref="map">顶部</div>
    <div class="bottom">底部</div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts'
import chinaJSON from '@/utils/china.json'
const map = ref()
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
  }
}
</style>
