const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
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
  },
});

app.mount("#app");
