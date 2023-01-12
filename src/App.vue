<script setup>
import SplineAreaChart from './components/SplineAreaChart.vue'
</script>

<template>
  <div id="nav">
    <router-link to="/">Spline Area Chart</router-link> |
    <router-link to="/apache">Apache EChart</router-link>
  </div>
  <router-view/>
  <SplineAreaChart />
</template>

<style scoped>

</style>
