import Vue from "vue";
import VueRouter from "vue-router";

const Login = () => import("views/login/Login");
const Container = () => import("components/content/container/Container");
// const Menu = () => import('@/components/Menu')

const originalReplace = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalReplace.call(this, location).catch((err) => err);
};

Vue.use(VueRouter);

const routes = [
  {
    path: "/admin",
    name: "admin",
    component: Container,
  },
  {
    path: "/admin/login",
    name: "Login",
    component: Login,
  },

  // {
  //   path: '/discovery',
  //   component: Discovery
  // },
  // {
  //   path: '/menu',
  //   component: Menu
  // }
];

export const router = new VueRouter({
  base: "/",
  mode: "history",
  routes,
});
