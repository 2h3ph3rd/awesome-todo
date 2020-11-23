<template>
  <q-input
    outlined
    v-autofocus
    clearable
    v-select-all
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
import { selectAll } from 'src/directives/directive-select-all'
import { autofocus } from 'src/directives/directive-autofocus'

export default {
  props: ['name'],
  directives: {
    autofocus
  }
}
</script>

<style></style>
