import { LocalStorage } from 'quasar'

const state = {
  settings: {
    show12HourTimeFormat: false,
    showTasksInOneList: false
  }
}

const mutations = {
  setShow12HourTimeFormat(state, value) {
    state.settings.show12HourTimeFormat = value
  },
  setShowTasksInOneList(state, value) {
    state.settings.showTasksInOneList = value
  },
  setSettings(state, value) {
    Object.assign(state.settings, value)
  }
}

const actions = {
  setShow12HourTimeFormat({ commit, dispatch }, value) {
    commit('setShow12HourTimeFormat', value)
    dispatch('updateSettings')
  },
  setShowTasksInOneList({ commit, dispatch }, value) {
    commit('setShowTasksInOneList', value)
    dispatch('updateSettings')
  },
  updateSettings({ state }) {
    LocalStorage.set('settings', state.settings)
  },
  loadSettings({ commit }) {
    let settings = LocalStorage.getItem('settings')
    console.log(settings)
    if (settings != '') commit('setSettings', settings)
  }
}

const getters = {
  settings: state => state.settings
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
