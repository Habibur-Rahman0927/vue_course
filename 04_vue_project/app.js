const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: "",
      confirmName: "",
      newName: "",
      newFullName: "",
    };
  },
  watch: {
    name(value) {
      this.newFullName = value + " " + "Habibur Rahman";
    },
    counter(value) {
      if (value > 15) {
        setTimeout(() => {
          this.counter = 0;
        }, 2000);
      }
    },
  },
  computed: {
    fullname() {
      console.log("run");
      if (this.newName === "") {
        return "";
      }
      return this.name + " " + "Habibur";
    },
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
      console.log("runing");
      if (this.newName === "") {
        return "";
      }
      return this.name + " " + "Habibur";
    },
  },
});

app.mount("#app");
