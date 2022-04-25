const app = Vue.createApp({
  data() {
    return {
      enteredGoalValue: "",
      goals: [],
      taskListIsVisible: true,
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredGoalValue);
    },
    removeGoal(index) {
      this.goals.splice(index, 1);
    },
    toggle() {
      this.taskListIsVisible = !this.taskListIsVisible;
    },
  },
  computed: {
    buttonCaption() {
      return this.taskListIsVisible ? "Hide" : "Show";
    },
  },
});

app.mount("#app");
