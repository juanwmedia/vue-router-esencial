<template>
  <div>
    <h2>Login form</h2>
    <form @submit.prevent="onSubmit" id="form">
      <input v-model="username" required type="text" placeholder="Username" />
      <input
        v-model="password"
        required
        type="password"
        placeholder="Password"
      />
      <input type="submit" value="Login" />
    </form>
  </div>
</template>

<script>
export default {
  name: "AppLogin",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    async onSubmit() {
      try {
        await this.$store.dispatch("doLogin", this.username);
        this.$router.push({ name: "Dashboard" });
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>

<style scoped>
div {
  padding: 7rem 0.5rem;
  width: 30vw;
  min-width: 500px;
  margin: 0 auto;
}
form {
  background-color: gray;
  padding: 1rem;
}

form * {
  width: 100%;
  margin: 0.3rem 0;
  padding: 0.2rem;
}
</style>
