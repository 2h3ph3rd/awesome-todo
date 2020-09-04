<template>
  <q-page padding>
    <ul>
      <li v-for="(task, index) in tasks" :key="index">
        <div>{{ task.name }}</div>
        <small>{{ task.dueDate }} @ {{ task.dueTime }}</small>
        <button @click="deleteTask(index)">X</button>
      </li>
    </ul>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
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
}
</script>

<style></style>
