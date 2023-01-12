<template>
  <chart id="spline" :option="option"></chart>
  <button @click="updateSpline">Update</button>
</template>
<script setup>
import { reactive, watch } from 'vue'

import Chart from './Chart.vue'

// Create the echarts instance
let series1 = randomNumbers()
let series2 = randomNumbers()
let series3 = randomNumbers()

const option = reactive({
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

function randomNumbers() {
  return Array.from({ length: 7 }, () => Math.floor(Math.random() * 10000))
}
function updateSpline() {
  series1 = randomNumbers()
  option.value = {
    ...option,
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
  }
}

watch(option, (newVal) => {
  console.log('watched!', newVal)
  // console.log(props.option)
})
</script>

<style scoped>
.read-the-docs {
  color: rgb(245, 235, 235);
}
.chart {
  height: 400px;
}
</style>
