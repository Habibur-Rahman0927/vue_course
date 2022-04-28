<template>
  <ul>
    <LearningResource
      v-for="storeResource in storeResources"
      :key="storeResource.id"
      :title="storeResource.title"
      :description="storeResource.description"
      :link="storeResource.link"
      :id="storeResource.id"
    />
  </ul>
</template>
<script>
import LearningResource from "./LearningResources.vue";

export default {
  components: {
    LearningResource,
  },
  inject: ["storeResources"],
};
</script>
<style lang=""></style>
