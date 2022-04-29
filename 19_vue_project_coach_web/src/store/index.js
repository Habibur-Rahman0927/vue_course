import { createStore } from "vuex";
import coachModules from "./modules/coaches/index.js";
export default createStore({
  modules: {
    coaches: coachModules,
  },
  state: {},
  getters: {},
  mutations: {},
  actions: {},
});
