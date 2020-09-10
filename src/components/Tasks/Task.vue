<template>
  <q-item
    tag="label"
    clickable
    v-ripple
    :class="task.completed ? 'bg-green-1' : 'bg-orange-1'"
  >
    <q-item-section avatar>
      <q-checkbox v-model="task.completed" />
    </q-item-section>
    <q-item-section :class="{ 'text-strikethrough': task.completed }">{{
      task.name
    }}</q-item-section>
    <q-item-section side>
      <q-item-label>{{ task.dueDate }}</q-item-label>
      <q-item-label caption>{{ task.dueTime }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  name: 'Task',
  props: ['task', 'id']
}
</script>
