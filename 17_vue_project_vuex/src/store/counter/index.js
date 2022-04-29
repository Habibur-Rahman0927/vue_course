import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

export default {
  state() {
    return {
      counter: 0,
    };
  },
  mutations: mutations,
  actions: actions,
  getters: getters,
};
