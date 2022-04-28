<template>
  <ul>
    <LearningResource
      v-for="storeResource in storeResources"
      :key="storeResource.id"
      :title="storeResource.title"
      :description="storeResource.description"
      :link="storeResource.link"
    />
  </ul>
</template>
<script>
import LearningResource from "./LearningResources.vue";

export default {
  components: {
    LearningResource,
  },
  props: ["storeResources"],
};
</script>
<style lang=""></style>
