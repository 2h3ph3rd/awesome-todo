<template>
  <q-layout view="HHh lpr fFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title class="absolute-center">Awesome Todo</q-toolbar-title>
        <q-btn
          flat
          icon-right="account_circle"
          label="Login"
          to="/auth"
          class="absolute-right"
          v-if="!loggedIn"
        />
        <q-btn
          flat
          icon-right="account_circle"
          label="Logout"
          to="/auth"
          @click="logoutUser"
          class="absolute-right"
          v-else
        />
      </q-toolbar>
    </q-header>

    <q-footer class="lt-md" :v-show="$q.screen.lt.md">
      <q-tabs align="center">
        <TabLink v-for="link in links" :link="link" :key="link.title" />
      </q-tabs>
    </q-footer>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
      :v-show="$q.screen.gt.md"
    >
      <q-list>
        <q-item-label header class="text-grey-8">
          Navigation
        </q-item-label>
        <EssentialLink v-for="link in links" :key="link.title" :link="link" />
      </q-list>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapState, mapActions } from 'vuex'

const linksData = [
  {
    title: 'Todo',
    icon: 'list',
    link: '/'
  },
  {
    title: 'Settings',
    icon: 'settings',
    link: '/settings'
  }
]

export default {
  name: 'MainLayout',
  components: {
    EssentialLink: require('components/EssentialLink.vue').default,
    TabLink: require('components/TabLink').default
  },
  data() {
    return {
      leftDrawerOpen: false,
      links: linksData
    }
  },
  computed: {
    ...mapState('auth', ['loggedIn'])
  },
  methods: {
    ...mapActions('auth', ['logoutUser'])
  }
}
</script>
