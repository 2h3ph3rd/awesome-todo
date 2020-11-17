<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  mounted() {
    if (this.$q.platform.is.electron) this.electronMessagesHandler()
    this.loadSettings()
    this.handleAuthStateChange()
  },
  methods: {
    ...mapActions('settings', ['loadSettings']),
    ...mapActions('auth', ['handleAuthStateChange']),
    electronMessagesHandler() {
      require('electron').ipcRenderer.on('show-settings', () => {
        if (this.$router.currentRoute.path != '/settings')
          this.$router.push('/settings')
      })
    }
  }
}
</script>

<style></style>
