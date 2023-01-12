<template>
  <chart id="spline" :options="options" :series="series"></chart>
  <button @click="updateSpline">Update</button>
</template>
<script setup>
import { ref, reactive, watch } from 'vue'

import Chart from './Chart.vue'

// Create the echarts instance
let series1 = randomNumbers()
let series2 = randomNumbers()
let series3 = randomNumbers()

const series = ref([
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
])

const options = ref({
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    axisPointer: {
      show: true,
      type: 'line'
    }
  },
  yAxis: {
    type: 'value'
  },
  grid: {
    tooltip: {
      show: true,
      trigger: 'axis'
    }
  }
})

function randomNumbers() {
  return Array.from({ length: 7 }, () => Math.floor(Math.random() * 10000))
}
function updateSpline() {
  series1 = randomNumbers()
  series.value = [
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
</script>

<style scoped>
.read-the-docs {
  color: rgb(245, 235, 235);
}
.chart {
  height: 400px;
}
</style>
