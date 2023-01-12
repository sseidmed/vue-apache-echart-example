<template>
    <div style="margin-top: 50px">
        <chart id="donut" :options="options" :series="series"></chart>
        <chart id="budget" :options="options" :series="series"></chart>
    </div>
</template>

<script setup>
import { ref, reactive, watch } from 'vue'
import Chart from './Chart.vue'

const options = ref({
    title: {
        text: 'Remaining Budget',
        left: 'center'
    },
    tooltip: {
        trigger: 'item',
    },
    legend: {
        orient: 'vertical',
        left: 'left'
    }
})

const series = ref([
    {
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        colorStops: [{
            offset: 0, color: '#cc9175'
        }, {
            offset: 1, color: '#04fa52'
        }],
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
        label: {
            position: 'inner',
            fontSize: 10
        },
        labelLine: {
            show: false
        },
        data: [

            { 
                value: 60000, 
                name: 'Total Spent', 
                itemStyle: {color: 'red'} 
            },
            { 
                value: 40000, 
                name: 'Total Available',
                itemStyle: {color: 'green'} 
            },
        ]
    }
])
</script>

<style lang="scss" scoped>

</style>