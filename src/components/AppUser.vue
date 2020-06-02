<template>
  <section class="user">
    <template v-if="user">
      <h2 class="user__name">{{ userData.fullName }}</h2>
      <img
        :src="userData.thumbnail"
        :ismap="userData.fullName"
        class="user__picture"
      />
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
        thumbnail: this.user.picture.large
      };
    }
  }
};
</script>

<style scoped>
.user {
  position: fixed;
  width: 30rem;
  left: calc(50vw - 15rem);
  top: 20vmin;
  z-index: 1;
  background-color: lightgray;
  border: 3px solid gray;
  padding: 1rem;
  text-align: center;
  box-shadow: 2px 1px 20px black;
}

.user__name {
  margin-top: 0;
}

.user__picture {
  border: 1px solid;
}

.close {
  position: absolute;
  right: 0.3rem;
  top: 0.3rem;
  text-decoration: none;
  color: black;
  font-weight: bold;
}
</style>
