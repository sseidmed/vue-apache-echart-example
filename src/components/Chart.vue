<template>
  <div :id="props.id" style="width: 800px; height:400px;"></div>
</template>

<script setup>
import { onMounted, watch, toRefs } from 'vue'
import * as echarts from 'echarts';

const props = defineProps({
  id: String,
  options: Object,
  series: Array
})

let chart
let chartMap

const { series } = toRefs(props)

function setOptions() {
  props.options.series = series
  chartMap.setOption(props.options)
}

watch(() => props.series, () => {
  setOptions()
})

onMounted(() => {
  chart = document.getElementById(props.id)
  chartMap = echarts.init(chart)
  setOptions()
})
</script>