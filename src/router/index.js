import Vue from "vue";
import VueRouter from "vue-router";
// import AppUserList from "../views/AppUserList.vue";
// import AppContact from "../views/AppContact.vue";
// import AppLegal from "../views/AppLegal.vue";
// import AppUser from "../views/AppUser.vue";
// import UserInfo from "../components/UserInfo.vue";
import NotFound from "../components/NotFound.vue";

Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/",
  //   redirect: { name: "Home" }
  // },
  {
    path: "/user",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "AppUserList" */ "../views/AppUserList.vue"),
    alias: "/"
  },
  // {
  //   path: "/user",
  //   name: "Home",
  //   component: AppUserList
  // },
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
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  linkExactActiveClass: "escuela-vue-exact",
  linkActiveClass: "escuela-vue-active",
  routes
});

export default router;
