<template>
  <div class="column">
    <q-select
      outlined
      label="Sort"
      v-model="selectedOption"
      :options="options"
    >
      <template v-slot:prepend>
        <q-icon name="sort" />
      </template>
    </q-select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        'name', 'dueDate'
      ],
      selectedOption: null
    }
  }
}
</script>

<style>
</style>
