<template>
  <main>
    <AppUser
      v-if="selectedUser"
      @closeUser="selectedUser = null"
      :user="selectedUser"
    />
    <article class="users">
      <section
        @click="showUser(user)"
        class="users__item"
        v-for="(user, $index) in users"
        :key="user.login.uuid"
      >
        <div class="fade">
          {{ fullName($index) }}
        </div>
        <img
          class="user__thumbnail"
          :src="user.picture.medium"
          :alt="user.name.first"
        />
      </section>
    </article>
  </main>
</template>

<script>
import AppUser from "../components/AppUser";
export default {
  name: "AppUserList",
  mounted() {
    this.getUsers();
  },
  data() {
    return {
      users: [],
      selectedUser: null
    };
  },
  methods: {
    async getUsers() {
      try {
        await fetch("https://randomuser.me/api/?results=100")
          .then(data => data.json())
          .then(data => (this.users = data.results));
      } catch (error) {
        console.error(error);
      }
    },
    showUser(user) {
      this.selectedUser = user;
    },
    fullName(index) {
      const user = this.users[index];
      return `${user.name.first} ${user.name.last}`;
    }
  },
  components: {
    AppUser
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
