import Vue from 'vue';
import VueRouter from 'vue-router';

const Discovery = () => import('@/views/discovery/Discovery')
// const Menu = () => import('@/components/Menu')

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/discovery'
  },
  {
    path: '/discovery', 
    component: Discovery
  },
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