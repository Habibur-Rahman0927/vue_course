<template>
  <li>
    <BaseCard>
      <header>
        <h3>{{ title }}</h3>
        <BaseButton mode="flat" @click="deleteResource(id)">delete</BaseButton>
      </header>
    </BaseCard>
    <p>{{ description }}</p>
    <nav>
      <a :href="link">View Resource</a>
    </nav>
  </li>
</template>
<script>
export default {
  props: ["title", "description", "link"],
  inject: ["deleteResource"],
};
</script>
<style></style>
