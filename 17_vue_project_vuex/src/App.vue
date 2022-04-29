<template>
  <base-container title="Vuex" v-if="isAuth">
    <h3>{{ counter }}</h3>
    <NewCounter />
    <button type="button" @click="increment(2)">add 2</button>
  </base-container>
  <BaseContainer>
    <UserAuth />
  </BaseContainer>
</template>

<script>
import BaseContainer from "./components/BaseContainer.vue";
import NewCounter from "./components/NewCounter.vue";
import UserAuth from "./components/UserAuth.vue";
import { mapActions } from "vuex";
export default {
  components: {
    BaseContainer,
    NewCounter,
    UserAuth,
  },
  computed: {
    counter() {
      return this.$store.state.counterModule.counter;
    },
    isAuth() {
      return this.$store.getters.userIsAuthenticated;
    },
  },
  methods: {
    // addOne() {
    //   console.log("click");
    //   // this.$store.state.counter++;
    //   // this.$store.commit("increment", 2);
    //   // this.$store.commit({
    //   //   type: "increment",
    //   //   value: 1,
    //   // });
    //   this.$store.dispatch("increment", 2);
    // },

    ...mapActions(["increment"]),
    // ...mapActions({
    //   inc: "increment",
    // }),
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
