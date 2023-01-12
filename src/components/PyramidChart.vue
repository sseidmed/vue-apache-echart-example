<template>
    <div>
        <chart id="donut" :options="options" :series="series"></chart>
    </div>
</template>

<script setup>
import { ref, reactive, watch } from 'vue'
import Chart from './Chart.vue'

const options = ref({    
    title: {
      text: 'Deals'
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}'
    },
    toolbox: {
      feature: {
        dataView: { readOnly: false },
        restore: {},
        saveAsImage: {}
      }
    },
    legend: {
      data: ['868', '204', '45', '24']
    }
})
const series = ref([
      {
        name: 'Deals',
        type: 'funnel',
        left: '10%',
        top: 60,
        bottom: 60,
        width: '60%',
        min: 0,
        max: 100,
        minSize: '0%',
        maxSize: '100%',
        sort: 'descending',
        gap: 2,
        label: {
          show: true,
          position: 'inside'
        },
        labelLine: {
          length: 10,
          lineStyle: {
            width: 1,
            type: 'solid'
          }
        },
        itemStyle: {
          borderColor: '#fff',
          borderWidth: 1
        },
        emphasis: {
          label: {
            fontSize: 20
          }
        },
        data: [
  
          { value: 25, name: '24' },
          { value: 50, name: '45' },
          { value: 75, name: '204' },
          { value: 100, name: '868' }
        ]
      }
    ])
</script>

<style lang="scss" scoped>

</style>