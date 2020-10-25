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
html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  color: white;
  font-size: 17px;
  overflow: hidden;
  line-height: 1.4em;
  background: black;
  -webkit-text-size-adjust: 100%;
  font-family: Arial, Helvetica, sans-serif;
}
* {
  box-sizing: border-box;
}
a,
a:hover,
a:focus,
a:active,
a:visited {
  outline: none;
  color: white;
  cursor: pointer;
  text-decoration: none;
}
button,
button:focus,
button:hover,
button:active {
  border: none;
  outline: none;
  color: grey;
  padding: 1em;
  font-size: 17px;
  cursor: pointer;
  background: transparent;
  border-bottom: 1px solid grey;
}
button:hover {
  color: white !important;
}
input,
select,
textarea,
input:focus,
select:focus,
textarea:focus {
  padding: 0;
  border: none;
  outline: none;
  color: white;
  font-size: 17px;
  cursor: pointer;
  caret-color: white;
  border-color: transparent;
  background-color: transparent;
}
input:-webkit-autofill::first-line {
  font-size: 17px;
}
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  border-top: none !important;
  border-left: none !important;
  border-right: none !important;
  border-bottom: 1px solid black;
  -webkit-text-fill-color: white !important;
  box-shadow: 0 0 0 2em black inset !important;
  -webkit-box-shadow: 0 0 0 2em black inset !important;
}
::placeholder {
  color: grey !important;
}
.error-wrapper {
  width: 100%;
  padding: 1em;
  text-align: center;
  height: min-content;
}
.error-msg {
  color: yellow;
}
.error-msg-link {
  cursor: pointer;
  color: lightgreen;
  text-decoration: underline;
  text-decoration-color: lightgreen;
}
.logo-text-wrapper {
  flex: 1;
  width: 100%;
  padding: 1em;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}
.logo-text {
  width: 100%;
  height: auto;
  object-fit: scale-down;
}
#app {
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
  flex-direction: column;
}
canvas {
  z-index: 0;
  background: transparent !important;
}
/* transition */
/* fade */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease-in-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
/* fade-right */
.fade-right-enter-active,
.fade-right-leave-active {
  transition: all 0.2s ease-in-out;
}
.fade-right-enter {
  opacity: 0;
  transform: translateX(-20px);
}
.fade-right-leave-to {
  opacity: 0;
  transform: translateX(20px);
}
@media (max-width: 1023px) and (orientation: landscape) {
  .logo-text-wrapper {
    display: none !important;
  }
}
@media (min-width: 769px) {
  html,
  body,
  input,
  select,
  button,
  button:focus,
  button:hover,
  button:active,
  textarea,
  input:focus,
  select:focus,
  textarea:focus,
  input:-webkit-autofill::first-line {
    font-size: 1.2vw;
  }
}
</style>
