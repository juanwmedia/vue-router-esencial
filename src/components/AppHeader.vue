<template>
  <header class="header">
    <h1 class="header__title">User Directory</h1>
    <nav class="header__nav">
      <RouterLink class="header__nav__link" to="/">Directory</RouterLink>
      <RouterLink class="header__nav__link" to="/contact">Contact</RouterLink>
      <RouterLink class="header__nav__link" to="/legal">Legal</RouterLink>
    </nav>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
  methods: {
    selectView(name) {
      this.$emit("selectView", name);
    }
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

.header__nav__link {
  text-decoration: none;
  color: white;
}
</style>
