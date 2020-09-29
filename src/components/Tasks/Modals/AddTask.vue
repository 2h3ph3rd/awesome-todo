<template>
  <q-card>
    <modal-header>Add Task</modal-header>
    <q-form @submit="onSubmit">
      <q-card-section>
        <modal-task-name :name.sync="taskToAdd.name" />
        <modal-due-date :dueDate.sync="taskToAdd.dueDate" />
        <modal-due-time
          v-if="taskToAdd.dueDate"
          :dueTime.sync="taskToAdd.dueTime"
        />
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="Save" color="primary" type="submit" />
      </q-card-actions>
    </q-form>
  </q-card>
</template>

<script>
import { mapActions } from 'vuex'
import mixinAddEditTask from 'src/mixins/mixin-add-edit-task'

export default {
  props: ['open'],
  mixins: [mixinAddEditTask],
  data() {
    return {
      taskToAdd: {
        name: '',
        dueDate: '',
        dueTime: '',
        completed: false
      }
    }
  },
  methods: {
    ...mapActions('tasks', ['addTask']),
    onSubmit() {
      this.addTask(this.taskToAdd)
      this.$emit('close')
    }
  }
}
</script>

<style></style>
