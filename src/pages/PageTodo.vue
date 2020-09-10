<template>
  <q-page padding>
    <q-list separator bordered>
      <task v-for="(task, id) in tasks" :key="id" :task="task" :id="id"></task>
    </q-list>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Index',
  computed: {
    ...mapGetters('tasks', ['tasks'])
  },
  methods: {
    deleteTask(index) {
      this.tasks.splice(index, 1)
    }
  },
  components: {
    task: require('components/Tasks/Task').default
  }
}
</script>

<style></style>
