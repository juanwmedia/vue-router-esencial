import Vue from "vue";
export default new Vue();

import AppUserList from "./views/AppUserList";
import AppLegal from "./views/AppLegal";
import AppContact from "./views/AppContact";
import AppUser from "./components/AppUser";
export const routes = [
  {
    path: "/",
    component: AppUserList
  },
  {
    path: "/legal",
    component: AppLegal
  },
  {
    path: "/contact",
    component: AppContact
  },
  {
    path: "/:userid/",
    component: AppUser,
    name: "users"
  }
];
