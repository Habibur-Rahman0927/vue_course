<template>
  <div>
    <form @submit.prevent="submitData">
      <div>
        <label for="name">Name</label>
        <input type="text" name="" id="name" v-model="enteredName" />
      </div>
      <div>
        <label for="email">E-mail</label>
        <input type="email" name="" id="email" v-model="enteredPhone" />
      </div>
      <div>
        <label for="phone">Phone</label>
        <input type="text" name="" id="phone" v-model="enteredEmail" />
      </div>
      <div>
        <button>Add contact</button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "NewFriend",
  emits: ["add-contact"],
  data() {
    return {
      enteredName: "",
      enteredPhone: "",
      enteredEmail: "",
    };
  },
  methods: {
    submitData() {
      this.$emit(
        "add-contact",
        this.enteredName,
        this.enteredEmail,
        this.enteredPhone
      );
    },
  },
};
</script>
<style></style>
