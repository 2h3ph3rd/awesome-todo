<template>
  <q-input
    outlined
    autofocus
    clearable
    :value="name"
    @input="$emit('update:name', $event)"
    label="Task name"
    :rules="[val => !!val || 'Field is required']"
  >
    <template v-slot:prepend>
      <q-icon name="edit" />
    </template>
  </q-input>
</template>

<script>
export default {
  props: ['name']
}
</script>

<style></style>
