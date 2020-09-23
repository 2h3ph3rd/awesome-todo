<template>
  <q-input
    outlined
    clearable
    :value="dueDate"
    @input="$emit('update:dueDate', $event)"
    label="Due date"
    class="q-mt-md"
  >
    <template v-slot:prepend>
      <q-icon name="event" class="cursor-pointer">
        <q-popup-proxy
          ref="qDateProxy"
          transition-show="scale"
          transition-hide="scale"
        >
          <q-date :value="dueDate" @input="$emit('update:dueDate', $event)">
            <div class="row items-center justify-end">
              <q-btn v-close-popup label="Close" color="primary" flat />
            </div>
          </q-date>
        </q-popup-proxy>
      </q-icon>
    </template>
  </q-input>
</template>

<script>
export default {
  props: ['dueDate']
}
</script>

<style></style>
