<template>
  <q-card>
    <modal-header>Edit Task</modal-header>
    <q-form @submit="onSubmit">
      <q-card-section>
        <modal-task-name :name.sync="updatedTask.name" />
        <modal-due-date :dueDate.sync="updatedTask.dueDate" />
        <modal-due-time
          v-if="updatedTask.dueDate"
          :dueTime.sync="updatedTask.dueTime"
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

export default {
  props: ['showDialog', 'task', 'id'],
  data() {
    return {
      updatedTask: {}
    }
  },
  components: {
    'modal-header': require('components/Tasks/Modal/ModalHeader').default,
    'modal-task-name': require('components/Tasks/Modal/ModalTaskName').default,
    'modal-due-date': require('components/Tasks/Modal/ModalDueDate').default,
    'modal-due-time': require('components/Tasks/Modal/ModalDueTime').default
  },
  methods: {
    ...mapActions('tasks', ['updateTask']),
    onSubmit() {
      let payload = {
        id: this.id,
        updates: this.updatedTask
      }
      this.updateTask(payload)
      this.$emit('close')
    }
  },
  mounted() {
    this.updatedTask = Object.assign({}, this.task)
  }
}
</script>

<style></style>
