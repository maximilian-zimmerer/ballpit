<template>
  <div id="app">
    <!-- force re-render on route change -->
    <Header :key="$route.fullPath" />
    <router-view />
  </div>
</template>

<script>
import Header from "@/components/Layout/Header.vue";
export default {
  name: "app",
  components: {
    Header,
  },
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  color: white;
  font-size: 12px;
  background: black;
  font-family: Arial, Helvetica, sans-serif;
}
input {
  font-size: 12px;
}
* {
  box-sizing: border-box;
}
#app {
  width: 100%;
  height: 100%;
  padding: 1em;
}
canvas {
  width: 100vw !important;
  height: 100vh !important;
}
@media (min-width: 769px) {
  html,
  body,
  input {
    font-size: 1vw;
  }
}
</style>
