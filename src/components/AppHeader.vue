<template>
  <header class="header">
    <h1 class="header__title">User Directory</h1>
    <nav class="header__nav">
      <RouterLink name="Directory" dest="/" />
      <RouterLink name="Contact" dest="/contact" />
      <RouterLink name="Legal" dest="/legal" />
    </nav>
  </header>
</template>

<script>
import RouterLink from "./RouterLink";
export default {
  name: "AppHeader",
  components: {
    RouterLink
  }
};
</script>

<style scoped>
.header {
  text-align: center;
  padding-bottom: 1rem;
  position: fixed;
  width: 100%;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.9);
}

.header__title {
  color: goldenrod;
}

.header__nav {
  display: flex;
  justify-content: space-evenly;
}
</style>
