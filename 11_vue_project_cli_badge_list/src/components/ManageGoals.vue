<template>
  <div>
    <h2>Manage Goals</h2>
    <input type="text" ref="goal" name="" id="" />
    <button @click="setGoal">Set Goal</button>
    <teleport to="body">
      <ErrorAlert v-if="inputIsInvalid">
        <h2>Input is invalid!</h2>
        <p>Please enter at laest a few characters...</p>
        <button @click="confirmError">close</button>
      </ErrorAlert>
    </teleport>
  </div>
</template>
<script>
import ErrorAlert from "./ErrorAlert.vue";
export default {
  comments: {
    ErrorAlert,
  },
  data() {
    return {
      inputIsInvalid: false,
    };
  },
  methods: {
    setGoal() {
      const enteredValue = this.$refs.goal.value;
      if (enteredValue === "") {
        // alert("Input must not be empty");
        this.inputIsInvalid = true;
      }
    },
    confirmError() {
      this.inputIsInvalid = false;
    },
  },
};
</script>
<style lang=""></style>
