<template>
  <section class="user">
    <template v-if="user">
      <h2 class="user__name">{{ userData.fullName }}</h2>
      <img
        :src="userData.thumbnail"
        :ismap="userData.fullName"
        class="user__picture"
      />
      <p class="user__email">{{ userData.email }}</p>

      <!-- User extended info -->
      <RouterLink class="user__more" :to="`/user/${this.username}/info`"
        >Show user info 👁</RouterLink
      >
      <RouterView :username="username" />
    </template>
  </section>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "AppUser",
  data() {
    return {
      username: this.$route.params.username
    };
  },
  computed: {
    ...mapState(["users"]),
    user() {
      return this.users.find(user => user.login.username === this.username);
    },
    userData() {
      return {
        fullName: `${this.user.name.first} ${this.user.name.last}`,
        thumbnail: this.user.picture.large,
        email: this.user.email
      };
    }
  }
};
</script>

<style scoped>
.user {
  padding: 7rem 0.5rem;
  text-align: center;
}

.user__picture {
  border: 1px solid;
}

.user__more {
  display: block;
  margin-top: 1rem;
  color: black;
}
</style>
