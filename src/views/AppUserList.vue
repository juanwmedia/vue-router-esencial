<template>
  <main>
    <article class="users">
      <section
        class="users__item"
        v-for="(user, $index) in users"
        :key="user.login.uuid"
      >
        <RouterLink
          :to="{ name: 'Users', params: { username: user.login.username } }"
        >
          <div class="fade">
            {{ fullName($index) }}
          </div>
          <img
            class="user__thumbnail"
            :src="user.picture.medium"
            :alt="user.name.first"
          />
        </RouterLink>
      </section>
    </article>
  </main>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "AppUserList",
  methods: {
    fullName(index) {
      const user = this.users[index];
      return `${user.name.first} ${user.name.last}`;
    }
  },
  computed: {
    ...mapState(["users"])
  }
};
</script>

<style scoped>
.users {
  padding-top: 7.5rem;
  display: grid;
  grid-gap: 0.5rem;
  grid:
    repeat(auto-fill, minmax(10rem, 1fr))
    / repeat(auto-fill, minmax(10rem, 1fr));
  grid-auto-rows: minmax(10rem, 1fr);
}

.user__thumbnail {
  width: 100%;
  display: block;
  height: auto;
}

.users__item {
  position: relative;
  cursor: pointer;
}

.fade {
  position: absolute;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease-in-out;
}

.users__item:hover .fade {
  opacity: 1;
  visibility: visible;
}
</style>
