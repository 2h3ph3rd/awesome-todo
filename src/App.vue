<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  mounted () {
    this.loadSettings()
  },
  methods: {
    ...mapActions('settings', ['loadSettings'])
  }
}
</script>

<style>
</style>
