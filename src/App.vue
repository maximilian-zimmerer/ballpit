<template>
  <div id="app">
    <!-- force re-render on route change -->
    <Header :key="$route.fullPath" />
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
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
/* @font-face {
  font-family: Aeonik;
  src: url(../assets/fonts/Aeonik-Regular.woff2);
  src: url(../assets/fonts/Aeonik-Regular.woff);
} */

html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  /* padding: 1em; */
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
  -webkit-box-shadow: 0 0 0 30px black inset !important;
  box-shadow: 0 0 0 30px black inset !important;
  -webkit-text-fill-color: white !important;
  border-bottom: 1px solid black;
  border-right: none !important;
  border-left: none !important;
  border-top: none !important;
}
::placeholder {
  color: white;
}
.errorMsg {
  width: 100%;
  padding: 0 1em 0;
  text-align: center;
  height: min-content;
}
.errorMsg p {
  color: yellow;
  text-decoration: underline;
  text-decoration-color: yellow;
}
#app {
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  /* padding: 1em 1em 1em 1em; */
}
canvas {
  z-index: 0;
  background: transparent !important;
}
/* transition */
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 0.2s ease-in-out;
}
.fade-leave-active {
  transition: opacity 0.2s ease-in-out;
  opacity: 0;
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
