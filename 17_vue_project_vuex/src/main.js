import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";

const store = createStore({
  state() {
    return {
      counter: 0,
    };
  },
  mutations: {
    increment(state, payload) {
      state.counter = state.counter + payload;
    },
  },
  actions: {
    increment(context, payload) {
      setTimeout(() => {
        context.commit("increment", payload);
      }, 2000);
    },
  },
  getters: {
    finalCounter(state) {
      return state.counter * 5;
    },
    normalizedCounter(state, getters) {
      const finalCounter = getters.finalCounter;
      if (finalCounter < 0) {
        return 0;
      }
      if (finalCounter > 100) {
        return 100;
      }
      return finalCounter;
    },
  },
});

const app = createApp(App);
app.use(store);
app.mount("#app");
