import { createRouter, createWebHistory } from 'vue-router'
import SplineAreaChart from '../components/SplineAreaChart.vue'
import BasicAreaChart from '../components/BasicAreaChart.vue'
import ApacheEChart from '../components/ApacheEChart.vue'
import DonutChart from '../components/DonutChart.vue'
import PyramidChart from '../components/PyramidChart.vue'
import StreamGraph from '../components/StreamGraph.vue'

const routes = [
  {
    path: '/',
    name: 'spline',
    component: SplineAreaChart
  },
  {
    path: '/area',
    name: 'area',
    component: BasicAreaChart
  },
  {
    path: '/apache',
    name: 'apacheEchart',
    component: ApacheEChart
  },
  {
    path: '/donut',
    name: 'donut',
    component: DonutChart
  },
  {
    path: '/pyramid',
    name: 'pyramid',
    component: PyramidChart
  },
  {
    path: '/stream',
    name: 'stream',
    component: StreamGraph
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router