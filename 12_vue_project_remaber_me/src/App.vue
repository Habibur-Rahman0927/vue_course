<template>
  <BaseCard>
    <TheHeader title="RememberMe" />
    <TheResource />
  </BaseCard>
</template>
<script>
import TheHeader from "./components/layouts/TheHeader.vue";
import TheResource from "./components/learningResource/TheResource.vue";
export default {
  components: {
    TheHeader,
    TheResource,
  },
};
</script>
<style></style>
