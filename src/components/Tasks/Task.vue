<template>
  <q-item
    @click="updateTask({ id, updates: { completed: !task.completed } })"
    clickable
    v-ripple
    :class="task.completed ? 'bg-green-1' : 'bg-orange-1'"
  >
    <q-item-section avatar>
      <q-checkbox :value="task.completed" />
    </q-item-section>
    <q-item-section :class="{ 'text-strikethrough': task.completed }">{{
      task.name
    }}</q-item-section>
    <q-item-section side v-if="task.dueDate">
      <q-icon name="event" />
    </q-item-section>
    <q-item-section side>
      <q-item-label>{{ task.dueDate }}</q-item-label>
      <q-item-label caption>{{ task.dueTime }}</q-item-label>
    </q-item-section>
    <q-item-section side>
      <q-btn
        flat
        round
        color="primary"
        icon="edit"
        @click.stop="showEditTaskDialog = true"
      />
      <q-dialog v-model="showEditTaskDialog" persistent>
        <edit-task :task="task" :id="id" @close="showEditTaskDialog = false" />
      </q-dialog>
    </q-item-section>
    <q-item-section side>
      <q-btn
        flat
        round
        color="red"
        icon="delete"
        @click.stop="showDeleteTaskDialog = true"
      />
      <q-dialog v-model="showDeleteTaskDialog" persistent>
        <delete-task @delete="deleteTask(id)" />
      </q-dialog>
    </q-item-section>
  </q-item>
</template>

<script>
import { mapActions } from 'vuex'
import { Dialog } from 'quasar'

export default {
  name: 'Task',
  data() {
    return { showEditTaskDialog: false, showDeleteTaskDialog: false }
  },
  props: ['task', 'id'],
  methods: {
    ...mapActions('tasks', ['updateTask', 'deleteTask'])
  },
  components: {
    'delete-task': require('components/Tasks/DeleteTask').default,
    'edit-task': require('components/Tasks/EditTask').default
  }
}
</script>
