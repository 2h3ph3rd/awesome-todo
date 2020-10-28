import { firebaseAuth } from 'boot/firebase'

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
    firebaseAuth
      .createUserWithEmailAndPassword(payload.email, payload.password)
      .then(response => {
        console.log('response: ', response)
      })
      .catch(error => {
        console.log('error: ', error.message)
      })
  },
  loginUser({}, payload) {
    firebaseAuth
      .signInWithEmailAndPassword(payload.email, payload.password)
      .then(response => {
        console.log('response: ', response)
      })
      .catch(error => {
        console.log('error: ', error.message)
      })
  },
  handleAuthStateChange({ commit }, payload) {
    firebaseAuth.onAuthStateChanged(user => {
      if (user) {
        commit('setLoggedIn', true)
        this.$router.push('/')
      } else {
        commit('setLoggedIn', false)
        this.$router.replace('/auth')
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
