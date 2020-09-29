<template>
  <q-scroll-area v-if="numTasks > 5" class="scroll-area-tasks">
    <q-list separator bordered>
      <task v-for="(task, id) in tasks" :key="id" :task="task" :id="id"></task>
    </q-list>
  </q-scroll-area>
  <q-list v-else separator bordered>
    <task v-for="(task, id) in tasks" :key="id" :task="task" :id="id"></task>
  </q-list>
</template>

<script>
export default {
  props: ['tasks'],
  components: {
    task: require('components/Tasks/List/Shared/ListTask').default
  },
  computed: {
    numTasks() {
      return Object.keys(this.tasks).length
    }
  }
}
</script>

<style></style>
