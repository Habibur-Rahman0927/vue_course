<template>
  <teleport to="body">
    <dialog open>
      <header>
        <slot name="header">
          <h2>{{ title }}</h2>
        </slot>
      </header>
      <section>
        <slot></slot>
      </section>
      <menu>
        <slot name="action"></slot>
      </menu>
    </dialog>
  </teleport>
</template>
<script>
export default {
  props: ["title"],
};
</script>
<style lang=""></style>
