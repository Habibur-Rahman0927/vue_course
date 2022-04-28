<template>
  <li>
    <BaseCard>
      <header>
        <h3>{{ title }}</h3>
        <button>delete</button>
      </header>
    </BaseCard>
    <p>{{ description }}</p>
    <nav>
      <a :href="link">View Resource</a>
    </nav>
  </li>
</template>
<script>
import BaseCard from "../UI/BaseCard.vue";
export default {
  components: {
    BaseCard,
  },
  props: ["title", "description", "link"],
};
</script>
<style></style>
