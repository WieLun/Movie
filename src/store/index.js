import Vue from "vue";
import Vuex from "vuex";

// 1、安装插件
Vue.use(Vuex);

// 2、创建对象
const store = new Vuex.Store({
  state: {
    dialogMovieVisible: false
  },
  mutations: {
    setMovieVisibleTrue(state) {
      state.dialogMovieVisible = true;
    },
    setMovieVisibleFalse(state) {
      state.dialogMovieVisible = false;
    }
  },
  getters: {},
  modules: {},
});

// 3、导出
export default store;
