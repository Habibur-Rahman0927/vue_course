const app = Vue.createApp({
  data() {
    return {
      userInput: "",
    };
  },
  methods: {
    showAlert() {
      alert("I am alert");
    },
    saveInput(e) {
      this.userInput = e.target.value;
    },
  },
});

app.mount("#app");
