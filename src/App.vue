<template>
  <div id="app">
    <AppHeader />
    <transition name="fade">
      <RouterView />
    </transition>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader";
export default {
  name: "App",
  components: {
    AppHeader
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}

body {
  font-family: sans-serif;
}
</style>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  opacity: 1;
  transition: all 0.5s ease-in-out;
}

.fade-enter,
.fade-leave {
  opacity: 0;
}
/* 
.fade-enter-active {
  animation: fade 0.2s ease-in-out;
}

@keyframes fade {
  from {
    opacity: 0;
  }
  50% {
    opacity: 50%;
  }
  to {
    opacity: 1;
  }
}

.fade-leave-active {
  animation: slide 0.2s ease-in-out;
}

@keyframes slide {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-300px);
  }
} */
</style>
