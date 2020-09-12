<template>
  <q-page padding>
    <q-list separator bordered v-if="Object.keys(tasks).length">
      <task v-for="(task, id) in tasks" :key="id" :task="task" :id="id"></task>
    </q-list>
    <div v-else>Nothing to do</div>
    <div class="absolute-bottom text-right q-ma-lg">
      <q-btn
        round
        color="primary"
        size="lg"
        icon="add"
        @click="showAddTask = true"
      />
    </div>
    <q-dialog v-model="showAddTask" persistent>
      <add-task />
    </q-dialog>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Index',
  data() {
    return {
      showAddTask: false
    }
  },
  computed: {
    ...mapGetters('tasks', ['tasks'])
  },
  methods: {
    deleteTask(index) {
      this.tasks.splice(index, 1)
    }
  },
  components: {
    task: require('components/Tasks/Task').default,
    'add-task': require('components/Tasks/AddTask').default
  }
}
</script>

<style></style>
