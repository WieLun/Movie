import Vue from "vue";
import VueRouter from "vue-router";

const Login = () => import("views/login/Login");
const Dashboard = () => import("views/dashboard/Dashboard");
const Test = () => import("views/test/Test");
const Test1 = () => import("views/test1/Test1");
const Container = () => import("components/content/container/Container");

Vue.use(VueRouter);

const routes = [
  {
    path: '/admin',
    // redirect: '/admin/dashboard',
    name: 'Container',
    component: Container,
    meta: { title: 'Dashboard', icon: 'dashboard' },
    children: [
      {
        path: 'dashboard', 
        name: '首页1', 
        component: Test1, 
        meta: { title: 'Test1', icon: 'example' },
      },
      {
        path: 'dashboard1', 
        name: '首页2', 
        component: Test, 
        meta: { title: 'Test2', icon: 'example' },
      },
    ]
  },
  {
    path: '/admin/test',
    // redirect: '/admin/dashboard',
    name: 'Container',
    component: Container,
    meta: { title: 'Test', icon: 'example' },
    children: [
      {
        path: 'dashboard', 
        name: '首页1', 
        component: Test1, 
        meta: { title: 'Test1', icon: 'example' },
      },
      {
        path: 'dashboard1', 
        name: '首页2', 
        component: Test, 
        meta: { title: 'Test2', icon: 'example' },
      },
    ]
  },
  // {
  //   path: "/admin/login",
  //   name: "Login",
  //   component: Login,
  //   hidden: true
  // },
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
