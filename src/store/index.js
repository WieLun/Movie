import Vue from "vue";
import Vuex from "vuex";

// 1、安装插件
Vue.use(Vuex);

// 2、创建对象
const store = new Vuex.Store({
  state: {
    isCollapse: false,
  },
  mutations: {
    toggle(state) {
      state.isCollapse = !state.isCollapse;
    },
  },
  getters: {},
  modules: {},
});

// 3、导出
export default store;
