<template>
  <div :id="props.id" style="width: 800px; height:400px;"></div>
</template>

<script setup>
import { onMounted, defineProps, watch } from 'vue'
import * as echarts from 'echarts';

const props = defineProps({
  id: String,
  option: Object
})

let chart
let chartMap

watch(() => props.option, () => {
  console.log('watched!')
  // console.log(props.option)
})

onMounted(() => {
  chart = document.getElementById(props.id)
  chartMap = echarts.init(chart)
  chartMap.setOption(props.option)
})
</script>