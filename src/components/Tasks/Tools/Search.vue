<template>
  <div class="column">
    <q-input
      v-model="searchField"
      label="Search"
      outlined
      class="col"
      @keyup.esc="searchField = ''"
      clearable
      v-select-all
    >
      <template v-slot:prepend>
        <q-icon name="search" />
      </template>
    </q-input>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { selectAll } from 'src/directives/directive-select-all'

export default {
  computed: {
    ...mapState('tasks', ['search']),
    searchField: {
      get() {
        return this.search
      },
      set(value) {
        this.setSearch(value)
      }
    }
  },
  methods: {
    ...mapActions('tasks', ['setSearch'])
  },
  directives: {
    selectAll
  }
}
</script>

<style></style>
