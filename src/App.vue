<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view />
  </div>
</template>

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
  display: flex;
}
canvas {
  width: 100vw !important;
  height: 100vh !important;
}
@media (min-width: 769px) {
  html,
  body,
  input {
    font-size: 0.9vw;
  }
}
</style>
