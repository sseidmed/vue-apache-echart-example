<script setup>
import SplineAreaChart from './components/SplineAreaChart.vue'
</script>

<template>
  <div id="nav">
    <router-link to="/">Spline Area Chart</router-link> |
    <router-link to="/basic-area-chart">Basic Area Chart</router-link> |
    <router-link to="/apache">Donut chart</router-link> |
    <router-link to="/apache">Pyramid Chart</router-link> |
    <router-link to="/apache">Stream Graph</router-link> |
    <router-link to="/apache">Apache EChart</router-link> |
  </div>
  <router-view/>
</template>

<style scoped>

</style>
