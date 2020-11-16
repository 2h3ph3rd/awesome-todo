<template>
  <q-route-tab :icon="link.icon" :to="link.link" :label="link.title" exact />
</template>

<script>
export default {
  name: 'TabLink',
  props: {
    link: {
      type: Object,
      required: true
    }
  }
}
</script>
