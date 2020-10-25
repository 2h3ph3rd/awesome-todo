<template>
  <transition
    appear
    enter-active-class="animated zoomIn"
    leave-active-class="animated zoomOut"
  >
    <div :class="{'q-mt-lg': !settings.showTasksInOneList}">
      <list-header
        v-if="!settings.showTasksInOneList"
        bgColor="bg-green-4"
      >Completed</list-header>
      <list-content :tasks="tasksCompleted" />
    </div>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: ['tasksCompleted'],
  computed: {
    ...mapGetters('settings', ['settings'])
  },
  components: {
    'list-content': require('components/Tasks/List/Shared/ListContent').default,
    'list-header': require('components/Tasks/List/Shared/ListHeader').default
  }
}
</script>

<style></style>
