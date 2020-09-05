<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title> Quasar App </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-footer
      class="lt-md"
      :v-show="$q.screen.lt.md"
    >
      <q-tabs align="center">
        <TabLink
          v-for="link in links"
          :link="link"
          :key="link.title"
        />
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
        <q-item-label
          header
          class="text-grey-8"
        >
          Navigation
        </q-item-label>
        <EssentialLink
          v-for="link in links"
          :key="link.title"
          :link="link"
        />
      </q-list>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
const linksData = [
  {
    title: 'Todo',
    icon: 'list',
    link: '/',
  },
  {
    title: 'Settings',
    icon: 'settings',
    link: '/settings',
  },
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
      links: linksData,
    }
  }
}
</script>
