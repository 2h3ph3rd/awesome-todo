<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  mounted() {
    this.loadSettings()
    this.handleAuthStateChange()
  },
  methods: {
    ...mapActions('settings', ['loadSettings']),
    ...mapActions('auth', ['handleAuthStateChange'])
  }
}
</script>

<style></style>
