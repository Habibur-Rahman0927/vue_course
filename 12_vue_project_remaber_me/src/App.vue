<template>
  <BaseCard>
    <TheHeader title="RememberMe" />
    <StoredResource :storeResources="storeResources" />
  </BaseCard>
</template>
<script>
import StoredResource from "./components/learningResource/StoredResource.vue";
import TheHeader from "./components/layouts/TheHeader.vue";
export default {
  components: {
    StoredResource,
    TheHeader,
  },
  data() {
    return {
      storeResources: [
        {
          id: "official-guide",
          title: "Official Guide",
          description: "The official Vue Js documents",
          link: "https://vuejs.org",
        },
        {
          id: "google",
          title: "google Guide",
          description: "Learn to gooogle ",
          link: "https://google.com",
        },
      ],
    };
  },
};
</script>
<style></style>
