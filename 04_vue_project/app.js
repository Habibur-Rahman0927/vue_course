const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: "",
      confirmName: "",
      newName: "",
    };
  },
  methods: {
    increments() {
      return this.counter++;
    },
    decrements() {
      return this.counter--;
    },
    setName(e, lastName) {
      this.name = e.target.value + " " + lastName;
    },
    // submitForm(e) {
    //   e.preventDefault();
    // },
    submitForm(e) {},
    confirmedName() {
      this.confirmName = this.name;
    },

    outputFullName() {
      if (this.newName === "") {
        return "";
      }
      return this.name + " " + "Habibur";
    },
  },
});

app.mount("#app");
