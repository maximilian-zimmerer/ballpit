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
  font-size: 14px;
  color: white;
  background: black;
  font-family: Arial, Helvetica, sans-serif;
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
</style>
