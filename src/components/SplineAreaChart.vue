<template>
  <h1>Lead Metrics</h1>
  <chart id="area" :options="options" :series="series"></chart>
  <button @click="addData(0)">Partner A</button>
  <button @click="addData(1)">Partner B</button>
  <button @click="addData(2)">Partner C</button>
</template>
<script setup>
import { ref, reactive, watch } from 'vue'
import dayjs from 'dayjs'

import Chart from './Chart.vue'

// Create the echarts instance
let series1 = randomNumbers()

const daysOfTheWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat']

let styles = [
  {
    areaStyle: {
      color: '#EF6E6E',
      opacity: 0.15
    },
    lineStyle: {
      color: '#EF6E6E'
    }
  },
  {
    areaStyle: {
      color: '#FFA53C59',
      opacity: 0.35
    },
    lineStyle: {
      color: '#FFA53C59'
    }
  },
  {
    areaStyle: {
      color: '#6C50D326',
      opacity: 0.15
    },
    lineStyle: {
      color: '#6C50D326'
    }
  }
]

let partners = [ randomNumbers(), randomNumbers(), randomNumbers() ]
console.log(partners)

const series = ref([])

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

function randomNumbers() {
  // return Array.from({ length: 10 }, () => Math.floor(Math.random() * 10000))
  return [['2023-01-02T00:00:00', Math.floor(Math.random() * 10000)], ['2023-01-02T12:00:00', Math.floor(Math.random() * 10000)], ['2023-01-03T00:00:00', Math.floor(Math.random() * 10000)], ['2023-01-03T12:00:00', Math.floor(Math.random() * 10000)], ['2023-01-04T00:00:00', Math.floor(Math.random() * 10000)], ['2023-01-04T12:00:00', Math.floor(Math.random() * 10000)], ['2023-01-05T00:00:00', Math.floor(Math.random() * 10000)], ['2023-01-05T12:00:00', Math.floor(Math.random() * 10000)], ['2023-01-06T00:00:00', Math.floor(Math.random() * 10000)], ['2023-01-06T12:00:00', Math.floor(Math.random() * 10000)]]
}
function addData(index) {
  const data = {
    data: partners[index],
    type: 'line',
    ...styles[series.value.length],
    smooth: true
  }
  console.log(data)
  series.value = [
    ...series.value,
    data
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
