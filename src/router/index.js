import { createRouter, createWebHistory } from 'vue-router'
import SplineAreaChart from '../components/SplineAreaChart.vue'
import BasicAreaChart from '../components/BasicAreaChart.vue'
import ApacheEChart from '../components/ApacheEChart.vue'

const routes = [
  {
    path: '/',
    name: 'spline-area-chart',
    component: SplineAreaChart
  },
  {
    path: '/basic-area-chart',
    name: 'basic-area-chart',
    component: BasicAreaChart
  },
  {
    path: '/apache',
    name: 'apacheEchart',
    component: ApacheEChart
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router