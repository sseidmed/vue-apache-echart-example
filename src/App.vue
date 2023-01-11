<script setup>
// import HelloWorld from './components/HelloWorld.vue'
// import D3 from './components/D3.vue'
</script>

<template>
  <h1>Test chart</h1>
  <div id="nav">
    <router-link to="/apache">Apache ECharts</router-link> |
    <router-link to="/d3">D3</router-link>
  </div>
  <router-view/>
</template>

<style scoped>

</style>
