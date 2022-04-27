<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <FriendComponent
    name="Rockstar"
    phone="01221"
    email="haibn"
    is_fevorite="1"
    friends
  />
  <!-- <friend-contact /> -->
</template>

<script>
import FriendComponent from "./components/HelloWorld.vue";
export default {
  name: "App",
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenx",
          phone: "0298948930",
        },
        {
          id: "manuel",
          name: "Manuel Lorenx",
          phone: "0298948930",
        },
      ],
    };
  },
  components: {
    FriendComponent,
  },
};
</script>

<style></style>
