<template>
  <q-card class="q-pa-sm">
    <q-card-section class="row items-center">
      Do you really want to delete this task?
    </q-card-section>

    <q-card-actions align="right">
      <q-btn flat label="Cancel" color="primary" v-close-popup />
      <q-btn
        flat
        label="Delete"
        color="red"
        v-close-popup
        @click="$emit('delete')"
      />
    </q-card-actions>
  </q-card>
</template>

<script>
export default {}
</script>

<style></style>
