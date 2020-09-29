<template>
  <transition
    appear
    enter-active-class="animated zoomIn"
    leave-active-class="animated zoomOut absolute-top"
  >
    <div>
      <list-header bgColor="bg-orange-4">Todo</list-header>
      <list-content :tasks="tasksTodo" />
    </div>
  </transition>
</template>

<script>
export default {
  props: ['tasksTodo'],
  components: {
    'list-content': require('components/Tasks/List/Shared/ListContent').default,
    'list-header': require('components/Tasks/List/Shared/ListHeader').default
  }
}
</script>

<style></style>
