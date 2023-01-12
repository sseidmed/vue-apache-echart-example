<template>
  <div id="main1" style="width: 800px;height:400px;"></div>
  <div id="main2" style="width: 800px;height:400px;"></div>
  <div id="main3" style="width: 800px;height:400px;"></div>
  <div id="main4" style="width: 800px;height:400px;"></div>
  <div id="main5" style="width: 800px;height:400px;"></div>
  <div id="main6" style="width: 800px;height:400px;"></div>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import * as echarts from 'echarts'

// Create the echarts instance

onMounted(() => {
  let myChart1 = document.getElementById('main1')
  let map1 = echarts.init(myChart1)
  map1.setOption({
    title: {
      text: 'ECharts Getting Started Example'
    },
    tooltip: {},
    xAxis: {
      data: ['shirt', 'cardigan', 'chiffon', 'pants', 'heels', 'socks']
    },
    yAxis: {},
    series: [
      {
        name: 'sales',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }
    ]
  })

  let myChart2 = document.getElementById('main2')
  let map2 = echarts.init(myChart2)
  map2.setOption({
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
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        areaStyle: {},
        smooth: true
      }
    ]
  })

  let myChart3 = document.getElementById('main3')
  let map3 = echarts.init(myChart3)
  map3.setOption({
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
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        areaStyle: {},
        smooth: true
      },
      {
        data: [720, 832, 801, 834, 590, 1230, 1220],
        type: 'line',
        areaStyle: {},
        smooth: true
      },
      {
        data: [620, 732, 601, 534, 990, 930, 920],
        type: 'line',
        areaStyle: {},
        smooth: true
      }
    ]
  })

  let myChart4 = document.getElementById('main4')
  let map4 = echarts.init(myChart4)
  map4.setOption({
    tooltip: {
      trigger: 'item'
    },
    legend: {
      top: '5%',
      left: 'center'
    },
    series: [
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
    ]
  })

  let myChart5 = document.getElementById('main5')
  let map5 = echarts.init(myChart5)
  map5.setOption({
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
    },
    series: [
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
    ]
  })


  let myChart6 = document.getElementById('main6')
  let map6 = echarts.init(myChart6)
  map6.setOption({
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'line',
        lineStyle: {
          color: 'rgba(0,0,0,0.2)',
          width: 1,
          type: 'solid'
        }
      }
    },
    legend: {
      data: ['DQ', 'TY', 'SS', 'QG', 'SY', 'DD']
    },
    singleAxis: {
      top: 50,
      bottom: 50,
      axisTick: {},
      axisLabel: {},
      type: 'time',
      axisPointer: {
        animation: true,
        label: {
          show: true
        }
      },
      splitLine: {
        show: true,
        lineStyle: {
          type: 'dashed',
          opacity: 0.2
        }
      }
    },
    series: [
      {
        type: 'themeRiver',
        emphasis: {
          itemStyle: {
            shadowBlur: 20,
            shadowColor: 'rgba(0, 0, 0, 0.8)'
          }
        },
        data: [
          ['2015/11/08', 10, 'DQ'],
          ['2015/11/09', 15, 'DQ'],
          ['2015/11/10', 35, 'DQ'],
          ['2015/11/11', 38, 'DQ'],
          ['2015/11/12', 22, 'DQ'],
          ['2015/11/13', 16, 'DQ'],
          ['2015/11/14', 7, 'DQ'],
          ['2015/11/15', 2, 'DQ'],
          ['2015/11/16', 17, 'DQ'],
          ['2015/11/17', 33, 'DQ'],
          ['2015/11/18', 40, 'DQ'],
          ['2015/11/19', 32, 'DQ'],
          ['2015/11/20', 26, 'DQ'],
          ['2015/11/21', 35, 'DQ'],
          ['2015/11/22', 40, 'DQ'],
          ['2015/11/23', 32, 'DQ'],
          ['2015/11/24', 26, 'DQ'],
          ['2015/11/25', 22, 'DQ'],
          ['2015/11/26', 16, 'DQ'],
          ['2015/11/27', 22, 'DQ'],
          ['2015/11/28', 10, 'DQ'],
          ['2015/11/08', 35, 'TY'],
          ['2015/11/09', 36, 'TY'],
          ['2015/11/10', 37, 'TY'],
          ['2015/11/11', 22, 'TY'],
          ['2015/11/12', 24, 'TY'],
          ['2015/11/13', 26, 'TY'],
          ['2015/11/14', 34, 'TY'],
          ['2015/11/15', 21, 'TY'],
          ['2015/11/16', 18, 'TY'],
          ['2015/11/17', 45, 'TY'],
          ['2015/11/18', 32, 'TY'],
          ['2015/11/19', 35, 'TY'],
          ['2015/11/20', 30, 'TY'],
          ['2015/11/21', 28, 'TY'],
          ['2015/11/22', 27, 'TY'],
          ['2015/11/23', 26, 'TY'],
          ['2015/11/24', 15, 'TY'],
          ['2015/11/25', 30, 'TY'],
          ['2015/11/26', 35, 'TY'],
          ['2015/11/27', 42, 'TY'],
          ['2015/11/28', 42, 'TY'],
          ['2015/11/08', 21, 'SS'],
          ['2015/11/09', 25, 'SS'],
          ['2015/11/10', 27, 'SS'],
          ['2015/11/11', 23, 'SS'],
          ['2015/11/12', 24, 'SS'],
          ['2015/11/13', 21, 'SS'],
          ['2015/11/14', 35, 'SS'],
          ['2015/11/15', 39, 'SS'],
          ['2015/11/16', 40, 'SS'],
          ['2015/11/17', 36, 'SS'],
          ['2015/11/18', 33, 'SS'],
          ['2015/11/19', 43, 'SS'],
          ['2015/11/20', 40, 'SS'],
          ['2015/11/21', 34, 'SS'],
          ['2015/11/22', 28, 'SS'],
          ['2015/11/23', 26, 'SS'],
          ['2015/11/24', 37, 'SS'],
          ['2015/11/25', 41, 'SS'],
          ['2015/11/26', 46, 'SS'],
          ['2015/11/27', 47, 'SS'],
          ['2015/11/28', 41, 'SS'],
          ['2015/11/08', 10, 'QG'],
          ['2015/11/09', 15, 'QG'],
          ['2015/11/10', 35, 'QG'],
          ['2015/11/11', 38, 'QG'],
          ['2015/11/12', 22, 'QG'],
          ['2015/11/13', 16, 'QG'],
          ['2015/11/14', 7, 'QG'],
          ['2015/11/15', 2, 'QG'],
          ['2015/11/16', 17, 'QG'],
          ['2015/11/17', 33, 'QG'],
          ['2015/11/18', 40, 'QG'],
          ['2015/11/19', 32, 'QG'],
          ['2015/11/20', 26, 'QG'],
          ['2015/11/21', 35, 'QG'],
          ['2015/11/22', 40, 'QG'],
          ['2015/11/23', 32, 'QG'],
          ['2015/11/24', 26, 'QG'],
          ['2015/11/25', 22, 'QG'],
          ['2015/11/26', 16, 'QG'],
          ['2015/11/27', 22, 'QG'],
          ['2015/11/28', 10, 'QG'],
          ['2015/11/08', 10, 'SY'],
          ['2015/11/09', 15, 'SY'],
          ['2015/11/10', 35, 'SY'],
          ['2015/11/11', 38, 'SY'],
          ['2015/11/12', 22, 'SY'],
          ['2015/11/13', 16, 'SY'],
          ['2015/11/14', 7, 'SY'],
          ['2015/11/15', 2, 'SY'],
          ['2015/11/16', 17, 'SY'],
          ['2015/11/17', 33, 'SY'],
          ['2015/11/18', 40, 'SY'],
          ['2015/11/19', 32, 'SY'],
          ['2015/11/20', 26, 'SY'],
          ['2015/11/21', 35, 'SY'],
          ['2015/11/22', 4, 'SY'],
          ['2015/11/23', 32, 'SY'],
          ['2015/11/24', 26, 'SY'],
          ['2015/11/25', 22, 'SY'],
          ['2015/11/26', 16, 'SY'],
          ['2015/11/27', 22, 'SY'],
          ['2015/11/28', 10, 'SY'],
          ['2015/11/08', 10, 'DD'],
          ['2015/11/09', 15, 'DD'],
          ['2015/11/10', 35, 'DD'],
          ['2015/11/11', 38, 'DD'],
          ['2015/11/12', 22, 'DD'],
          ['2015/11/13', 16, 'DD'],
          ['2015/11/14', 7, 'DD'],
          ['2015/11/15', 2, 'DD'],
          ['2015/11/16', 17, 'DD'],
          ['2015/11/17', 33, 'DD'],
          ['2015/11/18', 4, 'DD'],
          ['2015/11/19', 32, 'DD'],
          ['2015/11/20', 26, 'DD'],
          ['2015/11/21', 35, 'DD'],
          ['2015/11/22', 40, 'DD'],
          ['2015/11/23', 32, 'DD'],
          ['2015/11/24', 26, 'DD'],
          ['2015/11/25', 22, 'DD'],
          ['2015/11/26', 16, 'DD'],
          ['2015/11/27', 22, 'DD'],
          ['2015/11/28', 10, 'DD']
        ]
      }
    ]
  })




  
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
