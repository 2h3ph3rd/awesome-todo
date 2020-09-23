<template>
  <div class="q-mt-lg">
    <list-header bgColor="bg-green-4">Completed</list-header>
    <q-list separator bordered>
      <task
        v-for="(task, id) in tasksCompleted"
        :key="id"
        :task="task"
        :id="id"
      ></task>
    </q-list>
  </div>
</template>

<script>
export default {
  props: ['tasksCompleted'],
  components: {
    task: require('components/Tasks/List/Shared/ListTask').default,
    'list-header': require('components/Tasks/List/Shared/ListHeader').default
  }
}
</script>

<style></style>
