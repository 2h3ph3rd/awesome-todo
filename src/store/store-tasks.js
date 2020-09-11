import Vue from 'vue'
import { uid } from 'quasar'

const state = {
  tasks: {
    '1': {
      name: 'Go to shop',
      dueDate: '2020/09/02',
      dueTime: '10:30',
      completed: false
    },
    '2': {
      name: 'Buy bananas',
      dueDate: '2020/09/01',
      dueTime: '12:30',
      completed: false
    },
    '3': {
      name: 'Buy apples',
      dueDate: '2020/09/04',
      dueTime: '18:30',
      completed: false
    }
  }
}

const mutations = {
  updateTask(state, payload) {
    Object.assign(state.tasks[payload.id], payload.updates)
  },
  deleteTask(state, id) {
    Vue.delete(state.tasks, id)
  },
  addTask(state, payload) {
    Vue.set(state.tasks, payload.id, payload.task)
  }
}

const actions = {
  updateTask: ({ commit }, payload) => {
    commit('updateTask', payload)
  },
  deleteTask: ({ commit }, id) => {
    commit('deleteTask', id)
  },
  addTask: ({ commit }, task) => {
    let taskId = uid()
    let payload = {
      id: taskId,
      task: task
    }
    commit('addTask', payload)
  }
}

const getters = {
  tasks: state => {
    return state.tasks
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
