<template>
  <q-page padding>
    <div class="row">
      <div class="col-md-9 col-12 q-mr-md q-mb-md">
        <search></search>
      </div>
      <div class="col-md col-12 q-mb-md">
        <sort></sort>
      </div>
    </div>
    <p v-if="
        search &&
          !Object.keys(tasksTodo).length &&
          !Object.keys(tasksCompleted).length
      ">
      No search results
    </p>
    <tasks-todo
      v-if="Object.keys(tasksTodo).length"
      :tasksTodo="tasksTodo"
    >
    </tasks-todo>
    <no-tasks v-else-if="!search"></no-tasks>
    <tasks-completed
      v-if="Object.keys(tasksCompleted).length"
      :tasksCompleted="tasksCompleted"
    ></tasks-completed>
    <div class="absolute-bottom text-right q-ma-lg">
      <q-btn
        round
        color="primary"
        size="lg"
        icon="add"
        @click="showAddTask = true"
      />
    </div>
    <q-dialog
      v-model="showAddTask"
      persistent
    >
      <add-task />
    </q-dialog>
  </q-page>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'Index',
  data() {
    return {
      showAddTask: false
    }
  },
  computed: {
    ...mapState('tasks', ['search']),
    ...mapGetters('tasks', ['tasksTodo', 'tasksCompleted'])
  },
  methods: {
    deleteTask(index) {
      this.tasks.splice(index, 1)
    }
  },
  mounted() {
    this.$root.$on('show-add-task', () => (this.showAddTask = true))
  },
  components: {
    'add-task': require('components/Tasks/Modals/AddTask').default,
    'tasks-todo': require('components/Tasks/List/TasksTodo').default,
    'tasks-completed': require('components/Tasks/List/TasksCompleted').default,
    'no-tasks': require('components/Tasks/List/NoTasks').default,
    search: require('components/Tasks/Tools/Search').default,
    sort: require('components/Tasks/Tools/Sort').default
  }
}
</script>

<style></style>
