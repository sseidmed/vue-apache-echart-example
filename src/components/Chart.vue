<template>
  <div :id="props.id" :width="props.width" :height="props.height"></div>
</template>

<script setup>
import { onMounted, watch } from 'vue'
import * as echarts from 'echarts';

const props = defineProps(['id', 'options', 'series', 'width', 'height'])

let chart
let chartMap

function setOptions() {
  props.options.series = props.series
  chartMap.setOption(props.options)
}

watch(() => props.series, () => {
  setOptions()
})

watch(() => props.width, () => {
  console.log(props.width, props.height)
  chartMap.resize({
    width: props.width,
    height: props.height
  })
})

onMounted(() => {
  console.log(props.id)
  chart = document.getElementById(props.id,)
  chartMap = echarts.init(chart, null, {
    width: props.width,
    height: props.height
  })
  setOptions()
})
</script>