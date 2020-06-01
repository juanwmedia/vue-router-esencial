<template>
  <div id="app">
    <AppHeader @selectView="selectView" />
    <component :is="selectedView" />
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader";
import AppUserList from "./views/AppUserList";
import AppLegal from "./views/AppLegal";
import AppContact from "./views/AppContact";
export default {
  name: "App",
  data() {
    return {
      selectedView: "AppUserList"
    };
  },
  methods: {
    selectView(selectedView) {
      this.selectedView = selectedView;
    }
  },
  components: {
    AppUserList,
    AppHeader,
    AppLegal,
    AppContact
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
