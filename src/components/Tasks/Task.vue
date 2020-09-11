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
        icon="delete"
        color="red"
        @click.stop="confirmDialog = true"
      />

      <q-dialog v-model="confirmDialog" persistent>
        <q-card class="q-pa-sm">
          <q-card-section class="row items-center">
            Do you really want to delete this task?
          </q-card-section>

          <q-card-actions align="right">
            <q-btn flat label="Cancel" color="primary" v-close-popup />
            <q-btn
              flat
              label="Delete"
              color="red"
              v-close-popup
              @click="deleteTask(id)"
            />
          </q-card-actions>
        </q-card>
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
    return { confirmDialog: false }
  },
  props: ['task', 'id'],
  methods: {
    ...mapActions('tasks', ['updateTask', 'deleteTask'])
  }
}
</script>
