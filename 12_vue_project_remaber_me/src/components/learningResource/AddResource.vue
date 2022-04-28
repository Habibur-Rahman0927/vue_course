<template>
  <BaseDialog v-if="inputIsInvalid" title="Invalid Input">
    <template #default>
      <p>Unfortunatly, at laest one input give</p>
      <p>Please check all inputs and make</p>
      <BaseButton @click="confrimError">Okey</BaseButton>
    </template>
  </BaseDialog>
  <BaseCard>
    <form @submit.prevent="submitData">
      <label for="title">Title</label>
      <input type="text" name="title" ref="titleInput" id="title" />
      <br />
      <label for="description">Description</label>
      <input
        type="text"
        name="description"
        ref="descriptionInput"
        id="description"
      />
      <br />
      <label for="link">link</label>
      <input type="text" ref="linkInput" name="link" id="link" />
      <br />
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  </BaseCard>
</template>
<script>
export default {
  data() {
    return {
      inputIsInvalid: false,
    };
  },
  inject: ["addResource"],
  methods: {
    submitData() {
      const title = this.$refs.titleInput.value;
      const description = this.$refs.descriptionInput.value;
      const link = this.$refs.linkInput.value;
      if (title.trim() === "" || description.trim() === "" || link.trim()) {
        this.inputIsInvalid = true;
        return;
      }
      this.addResource(title, description, link);
    },
    confrimError() {
      this.inputIsInvalid = false;
    },
  },
};
</script>
<style lang=""></style>
