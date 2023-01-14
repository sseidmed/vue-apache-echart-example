<template>
  <h1>Lead Metrics</h1>
  <chart id="area" :options="options" :series="series" :width="width" :height="height"></chart>
  <button @click="updateChartSize(800, 400)">800 x 400</button>
  <button @click="updateChartSize(1200, 600)">1200 x 600</button>
  <button @click="updateChartSize(600, 300)">600 x 300</button>
</template>
<script setup>
import { ref, reactive, watch, onMounted } from 'vue'
import dayjs from 'dayjs'

import Chart from './Chart.vue'

let series1 = randomNumbers()
const daysOfTheWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat']
const width = ref(1200)
const height = ref(600)

const series = ref([
  {
    data: series1,
    type: 'line',
    areaStyle: { color: '#6C50D380' },
    areaStyle: { color: '#6C50D380' },
    smooth: true
  }
])

const options = ref({
  xAxis: {
    type: 'time',
    boundaryGap: false,
    backgroundColor: '#6C50D380',
    axisPointer: {
      show: true,
      type: 'line',
      snap: true,
      label: {
        show: true,
        formatter: ((params) => {
          const date = new Date(params.value)
          return dayjs(date).format('ddd, MMM DD HH:MM')
        })
      }
    },
    axisLabel: {
      formatter: ((value) => {
        const date = new Date(value)
        return dayjs(date).format('ddd, MMM DD')
      })
    }
  },
  yAxis: {
    type: 'value',
    axisPointer: {
      show: true,
      type: 'line',
      snap: true,
      label: {
        show: true
      }
    }
  },
  grid: {
    tooltip: {
      show: true,
      trigger: 'axis',
    }
  }
})

onMounted(() => {
  addEventListener("resize", (event) => {
    width.value = event.target.outerWidth * .8
    height.value = event.target.outerHeight * .8
  });
})

function randomNumbers() {
  // return Array.from({ length: 10 }, () => Math.floor(Math.random() * 10000))
  return [['2023-01-02T00:00:00', Math.floor(Math.random() * 10000)], ['2023-01-02T12:00:00', Math.floor(Math.random() * 10000)], ['2023-01-03T00:00:00', Math.floor(Math.random() * 10000)], ['2023-01-03T12:00:00', Math.floor(Math.random() * 10000)], ['2023-01-04T00:00:00', Math.floor(Math.random() * 10000)], ['2023-01-04T12:00:00', Math.floor(Math.random() * 10000)], ['2023-01-05T00:00:00', Math.floor(Math.random() * 10000)], ['2023-01-05T12:00:00', Math.floor(Math.random() * 10000)], ['2023-01-06T00:00:00', Math.floor(Math.random() * 10000)], ['2023-01-06T12:00:00', Math.floor(Math.random() * 10000)]]
}

function updateChartSize(newWidth, newHeight) {
  width.value = newWidth
  height.value = newHeight
}

function updateSpline() {
  series1 = randomNumbers()
  series.value = [
    {
      data: series1,
      ...series.value
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
