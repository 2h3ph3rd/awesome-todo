<template>
  <transition
    appear
    enter-active-class="animated zoomIn"
    leave-active-class="animated zoomOut"
  >
    <div class="q-mt-lg">
      <list-header bgColor="bg-green-4">Completed</list-header>
      <list-content :tasks="tasksCompleted" />
    </div>
  </transition>
</template>

<script>
export default {
  props: ['tasksCompleted'],
  components: {
    'list-content': require('components/Tasks/List/Shared/ListContent').default,
    'list-header': require('components/Tasks/List/Shared/ListHeader').default
  }
}
</script>

<style></style>
