<template>
  <BaseCard>
    <BaseButton
      @click="setSeletedTab('stored-resource')"
      :mode="storedResBtnMode"
      >Stored Resources</BaseButton
    >
    <BaseButton @click="setSeletedTab('add-resource')" :mode="addResBtnMode"
      >Add Resources</BaseButton
    >
  </BaseCard>
  <component :is="selectedTab"></component>
</template>
<script>
import StoredResource from "./StoredResource.vue";
import AddResource from "./AddResource.vue";
export default {
  components: {
    StoredResource,
    AddResource,
  },
  data() {
    return {
      selectedTab: "stored-resource",
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
  provide() {
    return {
      storeResources: this.storeResources,
    };
  },
  computed: {
    storedResBtnMode() {
      return this.selectedTab === "stored-resource" ? null : "flat";
    },
    addResBtnMode() {
      return this.selectedTab === "add-resource" ? null : "flat";
    },
  },
  methods: {
    setSeletedTab(tab) {
      this.selectedTab = tab;
    },
  },
};
</script>
<style></style>
