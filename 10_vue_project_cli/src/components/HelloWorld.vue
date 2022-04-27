<template>
  <div>
    <li>
      <h2>{{ friend.name }} {{ is_fevorite ? "(Fevorite)" : "" }}</h2>
      <button @click="toggleFavorite">Toggle Favorite</button>
      <button @click="toggleDetails">Show Details</button>
      <ul v-if="detailsAreVisible">
        <li>
          <strong>Phone: </strong>
          {{ phone }}
        </li>
        <li><strong>email: </strong> {{ email }}</li>

        <li><strong>name: </strong>{{ name }}</li>
      </ul>
    </li>
  </div>
</template>
<script>
export default {
  // props: ["name", "phone", "email", "is_fevorite"],
  props: {
    id: String,
    name: String,
    phone: String,
    email: String,
    is_fevorite: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  name: "HelloWorld",
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "Hello",
        name: "Hello Wolrd",
        phone: "014 52265 22",
        email: "habibur.rahmna.0927@gmail.com",
      },
      // friendIsFevorite: this.is_fevorite,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      // this.friendIsFevorite = !this.friendIsFevorite;
      this.$emit("toggle-favorite", this.id);
    },
  },
};
</script>
<style></style>
