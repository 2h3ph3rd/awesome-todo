<template>
  <q-page padding>
    <ul>
      <task
        v-for="(task, index) in tasks"
        :key="index"
        :task="task"
      />
    </ul>
  </q-page>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      tasks: [
        { name: 'Go to shop', dueDate: '2020/09/02', dueTime: '10:30' },
        { name: 'Buy bananas', dueDate: '2020/09/01', dueTime: '12:30' },
        { name: 'Buy apples', dueDate: '2020/09/04', dueTime: '18:30' },
      ],
    }
  },
  methods: {
    deleteTask(index) {
      this.tasks.splice(index, 1)
    },
  },
  components: {
    'task': require('components/Task').default,
  }
}
</script>

<style></style>
