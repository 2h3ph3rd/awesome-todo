<template>
  <q-card>
    <q-card-section class="row">
      <div class="text-h6">Add Task</div>
      <q-space />
      <q-btn flat round dense icon="close" v-close-popup />
    </q-card-section>
    <q-form @submit="onSubmit">
      <q-card-section>
        <q-input
          outlined
          autofocus
          clearable
          v-model="taskToAdd.name"
          label="Task name"
          :rules="[val => !!val || 'Field is required']"
        >
          <template v-slot:prepend>
            <q-icon name="edit" />
          </template>
        </q-input>

        <q-input
          outlined
          clearable
          v-model="taskToAdd.dueDate"
          label="Due date"
          class="q-mt-md"
        >
          <template v-slot:prepend>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy
                ref="qDateProxy"
                transition-show="scale"
                transition-hide="scale"
              >
                <q-date v-model="taskToAdd.dueDate">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>

        <q-input
          v-if="taskToAdd.dueDate"
          outlined
          clearable
          v-model="taskToAdd.dueTime"
          label="Due time"
          class="q-mt-md"
        >
          <template v-slot:prepend>
            <q-icon name="access_time" class="cursor-pointer">
              <q-popup-proxy transition-show="scale" transition-hide="scale">
                <q-time v-model="taskToAdd.dueTime">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-time>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
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
  props: ['open'],
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
