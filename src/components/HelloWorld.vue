<template>
  <button @click="updateSpline">Update</button>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import * as echarts from 'echarts';

// Create the echarts instance
let splineChart
let splineChartMap
let series1 = randomNumbers()
let series2 = randomNumbers()
let series3 = randomNumbers()

onMounted(() => {
  const option = ref({
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: series1,
        type: 'line',
        areaStyle: {},
        smooth: true
      },
      {
        data: series2,
        type: 'line',
        areaStyle: {},
        smooth: true
      },
      {
        data: series3,
        type: 'line',
        areaStyle: {},
        smooth: true
      }
    ]
  })

  splineChart = document.getElementById('spline')
  splineChartMap = echarts.init(splineChart)
  splineChartMap.setOption(option.value)
})
function randomNumbers() {
  return Array.from({ length: 7 }, () => Math.floor(Math.random() * 10000))
}
function updateSpline() {
  series1 = randomNumbers()
  series2 = randomNumbers()
  series3 = randomNumbers()
  splineChartMap.setOption({
    series: [
      {
        data: series1,
        type: 'line',
        areaStyle: {},
        smooth: true
      },
      {
        data: series2,
        type: 'line',
        areaStyle: {},
        smooth: true
      },
      {
        data: series3,
        type: 'line',
        areaStyle: {},
        smooth: true
      }
    ]
  })
}
</script>

<style scoped>
.read-the-docs {
  color: rgb(245, 235, 235);
}
.chart {
  height: 400px;
}
</style>
