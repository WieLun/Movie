import Vue from 'vue';
import VueRouter from 'vue-router';

const Login = () => import('views/login/Login')
// const Menu = () => import('@/components/Menu')

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  // {
  //   path: '/',
  //   redirect: '/discovery'
  // },
  // {
  //   path: '/discovery', 
  //   component: Discovery
  // },
  // {
  //   path: '/menu', 
  //   component: Menu
  // }
]

export const router = new VueRouter({
  base: '/',
  mode: 'history',
  routes,
});