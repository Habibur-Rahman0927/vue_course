<template>
  <base-container title="Vuex">
    <h3>{{ counter }}</h3>
    <NewCounter />
    <button type="button" @click="addOne">add 2</button>
  </base-container>
</template>

<script>
import BaseContainer from "./components/BaseContainer.vue";
import NewCounter from "./components/NewCounter.vue";

export default {
  components: {
    BaseContainer,
    NewCounter,
  },
  computed: {
    counter() {
      return this.$store.state.counter;
    },
  },
  methods: {
    addOne() {
      console.log("click");
      // this.$store.state.counter++;
      // this.$store.commit("increment", 2);
      // this.$store.commit({
      //   type: "increment",
      //   value: 1,
      // });
      this.$store.dispatch("increment", 2);
    },
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
