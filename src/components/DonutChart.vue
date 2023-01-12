<template>
    <div>
        <chart id="donut" :options="options" :series="series"></chart>
    </div>
</template>

<script setup>
import { ref, reactive, watch } from 'vue'
import Chart from './Chart.vue'

const options = ref({
    tooltip: {
        trigger: 'item'
    },
    legend: {
        top: '5%',
        left: 'center'
    }
})

const series = ref([
    {
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        label: {
            show: false,
            position: 'center'
        },
        emphasis: {
            label: {
            show: true,
            fontSize: 15,
            fontWeight: 'bold'
            }
        },
        labelLine: {
            show: false
        },
        data: [
            { value: 1048, name: 'Search Engine' },
            { value: 735, name: 'Direct' },
            { value: 580, name: 'Email' },
            { value: 484, name: 'Union Ads' },
            { value: 300, name: 'Video Ads' }
        ]
    }
])
</script>

<style lang="scss" scoped>

</style>