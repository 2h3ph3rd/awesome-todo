<template>
  <div class="column">
    <q-select
      outlined
      emit-value
      map-options
      label="Sort by"
      v-model="sortBy"
      :options="options"
    >
      <template v-slot:prepend>
        <q-icon name="sort" />
      </template>
    </q-select>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data() {
    return {
      options: [
        { label: 'Name', value: 'name' },
        { label: 'Date', value: 'dueDate' }
      ]
    }
  },
  computed: {
    ...mapState('tasks', ['sort']),
    sortBy: {
      get() {
        return this.sort
      },
      set(value) {
        this.setSort(value)
      }
    }
  },
  methods: {
    ...mapActions('tasks', ['setSort'])
  }
}
</script>

<style></style>
