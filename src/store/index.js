import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    users: []
  },
  mutations: {
    setUsers(state, users) {
      state.users = users;
    }
  },
  actions: {
    async setUsers({ commit }) {
      const users = window.localStorage.getItem("users");
      if (users) {
        commit("setUsers", JSON.parse(users));
      } else {
        try {
          await fetch("https://randomuser.me/api/?results=100")
            .then(data => data.json())
            .then(data => {
              commit("setUsers", data.results);
              window.localStorage.setItem(
                "users",
                JSON.stringify(data.results)
              );
            });
        } catch (error) {
          console.error(error);
        }
      }
    }
  }
});

export default store;

store.dispatch("setUsers");
