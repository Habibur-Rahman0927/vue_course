const app = Vue.createApp({
  data() {
    return {
      number: "",
    };
  },
  methods: {
    numberUpdate(number) {
      this.number = this.number + number;
    },
  },

  computed: {
    result() {
      if (this.number < 37) {
        return "Not there yet!";
      } else if (this.number === 37) {
        return this.number;
      } else {
        return "Too Much";
      }
    },
  },
  watch: {
    result() {
      const that = this;
      setTimeout(() => {
        that.number = 0;
      }, 2000);
    },
  },
});

app.mount("#app");
