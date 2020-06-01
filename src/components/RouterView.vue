<template>
  <component :is="component" v-bind="params"></component>
</template>

<script>
import router, { routes } from "../router";
export default {
  name: "RouterView",
  created() {
    this.getRoute();
    router.$on("navigate", params => this.setRoute(params));
  },
  data() {
    return {
      component: false,
      params: null
    };
  },
  methods: {
    getRoute() {
      let index = routes.findIndex(route => {
        return route.path === window.location.pathname;
      });

      if (index < 0) {
        index = 0;
        window.location.pathname = "/";
      }

      this.component = routes[index].component;
    },
    setRoute(params) {
      const slug = params.slug;
      window.history.pushState(null, null, slug);

      let index = routes.findIndex(route => {
        return (
          (params.name ? route.name : route.path) ===
          (params.name ? params.name : window.location.pathname)
        );
      });

      this.component = routes[index].component;
      this.params = params;
    }
  }
};
</script>
