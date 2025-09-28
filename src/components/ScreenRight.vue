<template>
  <div class="ScreenLeft">
    <div class="top">
      <p class="top-title">热门高校排行</p>
      <p class="top-bg"></p>
      <div class="topchart">
        <div class="topleft">
          <p>排行</p>
          <span>NO.1</span>
          <span>NO.2</span>
          <span>NO.3</span>
          <span>NO.4</span>
          <span>NO.5</span>
        </div>
        <div class="topcenter">
          <p>景区</p>
          <span>东莞理工</span>
          <span>东莞理工</span>
          <span>东莞理工</span>
          <span>东莞理工</span>
          <span>东莞理工</span>
        </div>
        <div class="topright" ref="topechart"></div>
      </div>
    </div>
    <div class="center">
      <p class="center-title">年度游客量对比</p>
      <p class="center-bg"></p>
      <div class="centerechart" ref="centerchart"></div>
    </div>
    <div class="bottom">
      <p class="bottom-title">预约渠道数据统计</p>
      <p class="bottom-bg"></p>
      <div class="bottomechart" ref="bottomchart"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts'
const topechart = ref()
const centerchart = ref()
const bottomchart = ref()
onMounted(() => {
  const Topechart = echarts.init(topechart.value)
  Topechart.setOption({
    title: {
      text: '预约数量',
      textStyle: {
        color: 'orange'
      }
    },
    xAxis: {
      show: false
    },
    yAxis: {
      show: false,
      type: 'category',
      data: ['', '', '', '', ''],
      inverse: true
    },
    series: [
      {
        type: 'bar',
        colorBy: 'data',
        data: [80, 72, 65, 40, 20],
        barWidth: 15,
        z: 100,
        label: {
          show: true,
          position: 'inside',
          formatter: '{c}%',
          color: '#000',
          fontSize: 12,
          fontWeight: 'bold',
          align: 'center',
          verticalAlign: 'middle'
        },
        itemStyle: {
          borderRadius: 20
        }
      },
      {
        type: 'bar',
        data: [100, 100, 100, 100, 100],
        barWidth: 20,
        barGap: '-118%',
        itemStyle: {
          color: 'rgba(15, 23, 80)',
          borderRadius: 20,
          borderWidth: 1.5,
          borderColor: 'skyblue'
        }
      }
    ],
    color: ['#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de'],
    grid: {
      left: 20,
      right: 20,
      top: 58,
      bottom: 10
    }
  })
  const Centerchart = echarts.init(centerchart.value)
  Centerchart.setOption({
    color: ['#fac858', 'rgba(0, 82, 188)', '#ee6666'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    legend: {
      data: ['2023年', '2024年', '2025年'],
      right: 20,
      top: 0,
      itemWidth: 40,
      itemHeight: 12,
      itemGap: 25,
      textStyle: {
        color: 'white'
      },
      itemStyle: {
        borderWidth: 1,
        borderColor: '#fff'
      }
    },
    xAxis: [
      {
        type: 'category',
        data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
        name: '月份',
        nameTextStyle: {
          color: 'white'
        },
        axisLabel: {
          color: 'white'
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        show: true,
        splitLine: false,
        axisLine: {
          show: true
        },
        axisTick: {
          show: true
        },
        name: '人数',
        nameTextStyle: {
          color: 'white'
        },
        axisLabel: {
          color: 'white'
        }
      }
    ],
    series: [
      {
        name: '2023年',
        type: 'line',
        smooth: true,
        lineStyle: {
          width: 0
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: '#fac858'
        },
        emphasis: {
          focus: 'series'
        },
        data: [1000, 532, 401, 100, 300, 340, 250, 220, 400, 600, 200, 700]
      },
      {
        name: '2024年',
        type: 'line',
        smooth: true,
        lineStyle: {
          width: 0
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: 'rgba(0, 82, 188)'
        },
        emphasis: {
          focus: 'series'
        },
        data: [120, 282, 111, 834, 220, 340, 310, 200, 500, 700, 100, 1200]
      },
      {
        name: '2025年',
        type: 'line',
        smooth: true,
        lineStyle: {
          width: 0
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: '#ee6666'
        },
        emphasis: {
          focus: 'series'
        },
        data: [320, 632, 201, 334, 190, 130, 220, 400, 200, 700, 200, 200]
      }
    ],
    grid: {
      left: 0,
      right: 0,
      top: 40,
      bottom: 0
    }
  })
  const Bottomchart = echarts.init(bottomchart.value)
  Bottomchart.setOption({
    legend: {
      textStyle: {
        color: 'white',
        fontSize: 18
      },
      orient: 'vertical',
      top: 80,
      left: 10
    },
    series: [
      {
        type: 'pie',
        radius: [10, 100],
        center: ['53%', '50%'],
        roseType: 'area',
        itemStyle: {
          borderRadius: 15
        },
        label: {
          color: 'white',
          fontSize: 15
        },
        data: [
          { value: 40, name: '东莞理工官网' },
          { value: 38, name: '字节' },
          { value: 32, name: '美团' },
          { value: 30, name: '网易' }
        ]
      }
    ],
    grid: {
      left: 0,
      right: 0,
      top: 100,
      bottom: 0
    }
  })
})
</script>

<style scoped lang="scss">
.ScreenLeft {
  height: 1040px;
  display: flex;
  flex-direction: column;
  .top {
    flex: 1.3;
    background: url(../assets/images/screen/dataScreen-main-rt.png);
    background-size: cover;
    margin-top: 20px;
    .top-title {
      color: white;
      font-size: 20px;
      margin: 10px 10px;
    }
    .top-bg {
      width: 68px;
      height: 7px;
      background: url(../assets/images/screen/dataScreen-title.png) no-repeat;
      margin-left: 10px;
    }
    .topchart {
      color: orange;
      margin-top: 20px;
      height: 82%;
      display: flex;
    }
    .topleft {
      flex: 1;
      margin-top: 20px;
      margin-left: 20px;
      display: flex;
      flex-direction: column;
      gap: 35px;
      align-items: center;
      span {
        color: white;
      }
    }
    .topcenter {
      flex: 1;
      display: flex;
      margin-top: 20px;
      flex-direction: column;
      gap: 35px;
      align-items: center;
      span {
        color: white;
      }
    }
    .topright {
      flex: 3;
      display: flex;
      flex-direction: column;
    }
  }
  .center {
    flex: 1;
    margin-top: 10px;
    background: url(../assets/images/screen/dataScreen-main-rc.png);
    background-size: cover;
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
    .centerechart {
      margin-top: 20px;
      height: 78%;
    }
  }
  .bottom {
    flex: 1;
    background: url(../assets/images/screen/dataScreen-main-rb.png) no-repeat;
    background-size: cover;
    margin-top: 10px;
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
    .bottomechart {
      margin-top: 10px;
      height: 80%;
    }
  }
}
</style>
