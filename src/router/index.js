import Vue from "vue";
import VueRouter from "vue-router";
import NotFound from "../components/NotFound.vue";
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/user",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "AppUserList" */ "../views/AppUserList.vue"),
    alias: "/"
  },
  {
    path: "/contact",
    name: "Contact",
    component: () =>
      import(/* webpackChunkName: "AppContact" */ "../views/AppContact.vue")
  },
  {
    path: "/legal",
    name: "Legal",
    component: () =>
      import(/* webpackChunkName: "AppLegal" */ "../views/AppLegal.vue")
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    meta: {
      requiresAuth: true
    },
    component: () =>
      import(/* webpackChunkName: "Dashboard" */ "../views/UserDashboard")
  },
  {
    path: "/login",
    name: "Login",
    component: () => import(/* webpackChunkName: "Login" */ "../views/AppLogin")
  },
  {
    path: "/user/:username",
    name: "Users",
    component: () =>
      import(/* webpackChunkName: "AppUser" */ "../views/AppUser.vue"),
    children: [
      {
        path: "information",
        name: "Info",
        props: true,
        component: () =>
          import(
            /* webpackChunkName: "UserInfo" */ "../components/UserInfo.vue"
          )
      }
    ]
  },
  { path: "*", component: NotFound }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  linkExactActiveClass: "escuela-vue-exact",
  linkActiveClass: "escuela-vue-active",
  routes,
  scrollBehavior(to, from, savedPosition) {
    console.log(to, from, savedPosition);
    return new Promise(resolve => {
      const position = (function() {
        if (savedPosition) {
          return savedPosition;
        } else {
          if (to.hash) {
            return {
              selector: to.hash
            };
          }
        }
      })();
      router.app.$root.$once("triggerScroll", () => {
        router.app.$nextTick(() => resolve(position));
      });
    });
  }
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.state.auth) {
      next();
    } else {
      next({ name: "Login" });
    }
  } else {
    next();
  }
});

export default router;
