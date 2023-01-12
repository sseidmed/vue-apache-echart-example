<script setup>
import SplineAreaChart from './components/SplineAreaChart.vue'
</script>

<template>
  <div id="nav">
    <router-link to="/">Spline Area Chart</router-link> |
    <router-link to="/area">Basic Area Chart</router-link> |
    <router-link to="/donut">Donut chart</router-link> |
    <router-link to="/pyramid">Pyramid Chart</router-link> |
    <router-link to="/stream">Stream Graph</router-link> |
    <!-- This last router will be removed once we have each chart in its own component -->
    <router-link to="/apache">Apache EChart</router-link> |
  </div>
  <router-view/>
</template>

<style scoped>

</style>
