const app = Vue.createApp({
  data() {
    return {
      name: "Habibur Rahman",
      age: 22,
      random: Math.floor(Math.random() * 2),
      imageLink:
        "https://storage.googleapis.com/blog-images-backup/1*wFL3csJ96lQpY0IVT9SE3w.jpeg",
      input: "",
    };
  },
});

app.mount("#app");
