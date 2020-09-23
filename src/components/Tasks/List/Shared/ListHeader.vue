<template>
  <q-banner
    inline-actions
    rounded
    :class="bgColor"
    class="text-white text-center"
  >
    <span class="text-bold text-subtitle1"><slot></slot></span>
  </q-banner>
</template>

<script>
export default {
  props: ['bgColor']
}
</script>

<style></style>
