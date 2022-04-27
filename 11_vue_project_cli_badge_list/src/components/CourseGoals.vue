<template>
  <div>
    <ul>
      <li v-for="goal in goals" :key="goal">
        <slot :goal="goal" another="..."></slot>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      goals: ["Finish the course", "Learn vue"],
    };
  },
};
</script>
<style></style>
