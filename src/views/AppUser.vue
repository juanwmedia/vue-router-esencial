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
      <RouterLink
        class="user__more"
        :to="{
          name: 'Info',
          params: { username: this.username }
        }"
        >Show user info 👁</RouterLink
      >
      <RouterView />

      <section class="user__other">
        <a @click.prevent="loadPrevUser" href="#">👈 Prev user</a> |
        <a @click.prevent="loadNextUser" href="#">Next user 👉</a>
      </section>
    </template>
  </section>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "AppUser",
  beforeRouteUpdate(to, from, next) {
    this.username = to.params.username;
    next();
  },
  data() {
    return {
      username: this.$route.params.username
    };
  },
  methods: {
    loadPrevUser() {
      this.$router.push({
        name: "Users",
        params: { username: this.prevUser.login.username }
      });
    },
    loadNextUser() {
      this.$router.push({
        name: "Users",
        params: { username: this.nextUser.login.username }
      });
    }
  },
  computed: {
    ...mapState(["users"]),
    user() {
      return this.users.find(user => user.login.username === this.username);
    },
    userIndex() {
      return this.users.findIndex(
        user => user.login.username === this.username
      );
    },
    prevUser() {
      return this.users[this.userIndex - 1];
    },
    nextUser() {
      return this.users[this.userIndex + 1];
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

.user__other a {
  color: black;
}
</style>
