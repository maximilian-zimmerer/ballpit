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
* {
  box-sizing: border-box;
}
input,
input:focus,
select:focus,
textarea:focus {
  outline: none;
  font-size: 12px;
  cursor: pointer;
  border-color: transparent;
  background-color: transparent;
}
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  -webkit-text-fill-color: white !important;
  -webkit-box-shadow: 0 0 0 30px black inset !important;
  box-shadow: 0 0 0 30px black inset !important;
}
.errorMsg {
  width: 100%;
  padding: 0 1em 0;
  text-align: center;
  height: min-content;
}
.errorMsg p {
  color: orange;
  text-decoration: underline;
  text-decoration-color: orange;
}
#app {
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  padding: 1em 1em 1em 1em;
}
canvas {
  mix-blend-mode: difference;
  background: transparent !important;
}
@media (min-width: 769px) {
  html,
  body,
  input,
  input:focus,
  select:focus,
  textarea:focus {
    font-size: 1vw;
  }
}
</style>
