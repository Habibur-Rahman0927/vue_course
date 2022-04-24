const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: "",
      confirmName: "",
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
  },
});

app.mount("#app");
