<template>
  <section>
    <div>
      <slot name="div" />
    </div>
    <slot />
  </section>
</template>
<script>
export default {};
</script>
<style scoped lang="css">
section {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}
div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
