<template>
  <transition
    appear
    enter-active-class="animated zoomIn"
    leave-active-class="animated zoomOut absolute-top"
  >
    <div>
      <list-header bgColor="bg-orange-4">Todo</list-header>
      <q-list separator bordered>
        <task
          v-for="(task, id) in tasksTodo"
          :key="id"
          :task="task"
          :id="id"
        ></task>
      </q-list>
    </div>
  </transition>
</template>

<script>
export default {
  props: ['tasksTodo'],
  components: {
    task: require('components/Tasks/List/Shared/ListTask').default,
    'list-header': require('components/Tasks/List/Shared/ListHeader').default
  }
}
</script>

<style></style>
