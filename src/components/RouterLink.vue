<template>
  <a class="link" @click.prevent="navigate" :href="dest">{{ name }}</a>
</template>

<script>
import router from "../router";
export default {
  name: "RouterLink",
  props: {
    name: {
      type: String,
      required: true
    },
    dest: {
      type: String,
      required: true
    }
  },
  methods: {
    navigate() {
      router.$emit("navigate", { slug: this.dest });
    }
  }
};
</script>

<style scoped>
.link {
  text-decoration: none;
  color: white;
}
</style>
