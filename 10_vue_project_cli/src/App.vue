<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <Form @add-contact="addContact" />
  <FriendComponent
    v-for="friend in friends"
    :key="friend.id"
    :id="friend.id"
    :name="friend.name"
    :phone="friend.phone"
    :email="friend.email"
    :is_fevorite="friend.isFevorite"
    @toggle-favorite="toggleFevoriteStatus"
  />
  <br />
</template>

<script>
import FriendComponent from "./components/HelloWorld.vue";
import Form from "./components/NewFriend.vue";
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
          isFevorite: true,
        },
        {
          id: "manuel1",
          name: "Manuel Lorenx",
          phone: "0298948930",
          email: "hibur@gmail.com",
          isFevorite: false,
        },
      ],
    };
  },
  methods: {
    toggleFevoriteStatus(friendId) {
      // console.log(friendId);
      const identifinedFriend = this.friends.find((fd) => fd.id === friendId);
      identifinedFriend.isFevorite = !identifinedFriend.isFevorite;
    },
    addContact(name, phone, email) {
      const newFriendContact = {
        id: new Date().toISOString(),
        name,
        phone,
        email,
        isFevorite: false,
      };
      this.friends.push(newFriendContact);
    },
  },
  components: {
    FriendComponent,
    Form,
  },
};
</script>

<style></style>
