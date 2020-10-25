<template>
  <transition
    appear
    enter-active-class="animated zoomIn"
    leave-active-class="animated zoomOut absolute-top"
  >
    <div>
      <list-header
        v-if="!settings.showTasksInOneList"
        bgColor="bg-orange-4"
      >Todo</list-header>
      <list-content :tasks="tasksTodo" />
    </div>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: ['tasksTodo'],
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
