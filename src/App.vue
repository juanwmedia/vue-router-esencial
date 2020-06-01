<template>
  <div id="app">
    <AppHeader />
    <RouterView />
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader";
import RouterView from "./components/RouterView";
export default {
  name: "App",
  components: {
    RouterView,
    AppHeader
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}

body {
  font-family: sans-serif;
  background-color: lightgray;
}
</style>
