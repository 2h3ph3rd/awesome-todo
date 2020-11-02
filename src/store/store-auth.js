import { firebaseAuth } from 'boot/firebase'
import { LocalStorage, Loading } from 'quasar'
import { showErrorMessage } from 'src/functions/function-show-error-message'

const state = {
  loggedIn: false
}

const mutations = {
  setLoggedIn(state, value) {
    state.loggedIn = value
  }
}

const actions = {
  registerUser({}, payload) {
    Loading.show()
    firebaseAuth
      .createUserWithEmailAndPassword(payload.email, payload.password)
      .then(_ => {
        Loading.hide()
      })
      .catch(error => {
        Loading.hide()
        showErrorMessage(error.message)
      })
  },
  loginUser({}, payload) {
    Loading.show()
    firebaseAuth
      .signInWithEmailAndPassword(payload.email, payload.password)
      .then(_ => {
        Loading.hide()
      })
      .catch(error => {
        Loading.hide()
        showErrorMessage(error.message)
      })
  },
  handleAuthStateChange({ commit, dispatch }, payload) {
    firebaseAuth.onAuthStateChanged(user => {
      if (user) {
        commit('setLoggedIn', true)
        LocalStorage.set('loggedIn', true)
        this.$router.push('/').catch(_ => {})
        dispatch('tasks/firebaseReadData', null, { root: true })
      } else {
        commit('tasks/setTasksDownloaded', false, { root: true })
        commit('setLoggedIn', false)
        LocalStorage.set('loggedIn', false)
        this.$router.replace('/auth').catch(_ => {})
      }
    })
  },
  logoutUser() {
    firebaseAuth.signOut()
  }
}

const getters = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
