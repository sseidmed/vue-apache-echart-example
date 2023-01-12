import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '../components/SplineAreaChart.vue'
import Chart from '../components/Chart.vue'
import ApacheEChart from '../components/ApacheEChart.vue'

const routes = [
  {
    path: '/',
    name: 'chart',
    component: HelloWorld
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