<template>
  <div class="info">
    <p v-for="(value, key, index) in userLocation" :key="index">
      <strong>{{ key }}</strong> : {{ value }}
    </p>
  </div>
</template>

<script>
export default {
  name: "UserInfo",
  props: {
    username: {
      type: String,
      required: true
    }
  },
  computed: {
    user() {
      return this.$store.state.users.find(
        user => user.login.username === this.username
      );
    },
    userLocation() {
      const { city, country, postcode, state } = this.user.location;
      return {
        city,
        country,
        postcode,
        state
      };
    }
  }
};
</script>

<style scoped>
.info {
  padding: 1rem;
}
</style>
