<template>
  <div>
    <h1>User Dashboard</h1>
    <a href="#" @click="onLogout">Logout</a>
  </div>
</template>

<script>
export default {
  name: "UserDashboard",
  methods: {
    onLogout() {
      this.$store.dispatch("doLogout");
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
div {
  padding: 7rem 0.5rem;
  text-align: center;
}
</style>
