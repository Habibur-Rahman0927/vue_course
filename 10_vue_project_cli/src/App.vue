<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <FriendComponent
    v-for="friend in friends"
    :key="friend.id"
    :name="friend.name"
    :phone="friend.phone"
    :email="friend.email"
    :is_fevorite="true"
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
          email: "hibur@gmail.com",
        },
        {
          id: "manuel",
          name: "Manuel Lorenx",
          phone: "0298948930",
          email: "hibur@gmail.com",
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
