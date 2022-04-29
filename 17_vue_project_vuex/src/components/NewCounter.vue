<template>
  <div>
    <h1>{{ normalizedCounter }}</h1>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    // counter() {
    //   return this.$store.getters.normalizedCounter;
    // },
    ...mapGetters(["normalizedCounter"]),
  },
};
</script>
<style></style>
