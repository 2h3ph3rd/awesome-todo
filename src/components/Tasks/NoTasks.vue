<template>
  <q-banner dense rounded class="bg-grey-3">
    <template v-slot:avatar>
      <q-icon name="check" color="primary" />
    </template>
    No tasks to do today!
    <template v-slot:action>
      <q-btn
        flat
        color="primary"
        label="Add task"
        @click="$root.$emit('show-add-task')"
      />
    </template>
  </q-banner>
</template>

<script>
export default {}
</script>

<style></style>
