<template>
  <q-item
    @click="onUpdateTask"
    clickable
    v-ripple
    :class="task.completed ? 'bg-green-1' : 'bg-orange-1'"
    v-touch-hold:1000.mouse="showEditTaskModal"
  >
    <q-item-section avatar>
      <q-checkbox
        :value="task.completed"
        @input="onUpdateTask"
      />
    </q-item-section>
    <q-item-section>
      <q-item-label
        :class="{ 'text-strikethrough': task.completed }"
        v-html="$options.filters.searchHighlight(task.name, search)"
      ></q-item-label>
    </q-item-section>
    <q-item-section
      side
      v-if="task.dueDate"
    >
      <q-icon name="event" />
    </q-item-section>
    <q-item-section side>
      <q-item-label>{{ task.dueDate | niceDate }}</q-item-label>
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
      <q-dialog
        v-model="showEditTaskDialog"
        persistent
      >
        <edit-task
          :task="task"
          :id="id"
          @close="showEditTaskDialog = false"
        />
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
      <q-dialog
        v-model="showDeleteTaskDialog"
        persistent
      >
        <delete-task @delete="deleteTask(id)" />
      </q-dialog>
    </q-item-section>
  </q-item>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { Dialog, date } from 'quasar'
const { formatDate } = date

export default {
  name: 'Task',
  data() {
    return { showEditTaskDialog: false, showDeleteTaskDialog: false }
  },
  props: ['task', 'id'],
  computed: { ...mapState('tasks', ['search']) },
  methods: {
    ...mapActions('tasks', ['updateTask', 'deleteTask']),
    onUpdateTask() {
      this.updateTask({
        id: this.id,
        updates: {
          completed: !this.task.completed
        }
      })
    },
    showEditTaskModal() {
      this.showEditTaskDialog = true
    }
  },
  components: {
    'delete-task': require('components/Tasks/Modals/DeleteTask').default,
    'edit-task': require('components/Tasks/Modals/EditTask').default
  },
  filters: {
    niceDate(value) {
      return formatDate(value, 'D/M')
    },
    searchHighlight(value, search) {
      if (search)
        return value.replace(search, '<span class="bg-yellow-6">' + search + '</span>')
      return value
    }
  }
}
</script>
