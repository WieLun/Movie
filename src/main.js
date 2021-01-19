import Vue from "vue";
import App from "./App.vue";
import { router } from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import "./icons";
Vue.config.productionTip = false;

Vue.use(ElementUI);

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");

router.beforeEach((to, from, next) => {
  if (to.path === "/admin/login") {
    sessionStorage.removeItem("user");
  }
  const user = sessionStorage.getItem("user");
  if (!user && to.path !== "/admin/login") {
    next({
      path: "/admin/login",
    });
  } else {
    next();
  }
});
