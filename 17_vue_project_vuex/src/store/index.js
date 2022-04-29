import { createStore } from "vuex";
import actions from "./actions";
import getters from "./getters";
import mutation from "./mutation";
import counterModule from "./counter/index";

const store = createStore({
  modules: {
    counterModule,
  },
  state() {
    return {
      isLoggedIn: false,
    };
  },
  mutations: mutation,
  actions: actions,
  getters: getters,
});

export default store;
