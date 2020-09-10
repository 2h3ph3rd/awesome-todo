<template>
  <q-page padding>
    <q-list
      separator
      bordered
    >
      <q-item
        v-for="(task, index) in tasks"
        :key="index"
        tag="label"
        clickable
        v-ripple
        :class="task.completed ? 'bg-green-1' : 'bg-orange-1'"
      >
        <q-item-section avatar>
          <q-checkbox v-model="task.completed" />
        </q-item-section>
        <q-item-section :class="{ 'text-strikethrough' : task.completed }">{{ task.name }}</q-item-section>
        <q-item-section side>
          <q-item-label>{{ task.dueDate }}</q-item-label>
          <q-item-label caption>{{ task.dueTime }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      tasks: [
        { name: 'Go to shop', dueDate: '2020/09/02', dueTime: '10:30', completed: false },
        { name: 'Buy bananas', dueDate: '2020/09/01', dueTime: '12:30', completed: false },
        { name: 'Buy apples', dueDate: '2020/09/04', dueTime: '18:30', completed: false },
      ],
    }
  },
  methods: {
    deleteTask(index) {
      this.tasks.splice(index, 1)
    },
  },
  components: {
    // 'task': require('components/Task').default,
  }
}
</script>

<style></style>
