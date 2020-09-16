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
  },
  search: ''
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
  },
  setSearch(state, value) {
    state.search = value
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
  },
  setSearch({ commit }, value) {
    commit('setSearch', value)
  }
}

const getters = {
  tasksFiltered: state => {
    let tasksFiltered = {}
    if (state.search) {
      Object.keys(state.tasks).forEach(key => {
        let task = state.tasks[key]
        if (task.name.toLowerCase().includes(state.search.toLowerCase())) {
          tasksFiltered[key] = task
        }
      })
      return tasksFiltered
    }
    return state.tasks
  },
  tasksTodo: (state, getters) => {
    let tasksFiltered = getters.tasksFiltered
    let tasks = {}
    Object.keys(tasksFiltered).forEach(key => {
      let task = tasksFiltered[key]
      if (!task.completed) {
        tasks[key] = task
      }
    })
    return tasks
  },
  tasksCompleted: (state, getters) => {
    let tasksFiltered = getters.tasksFiltered
    let tasks = {}
    Object.keys(tasksFiltered).forEach(key => {
      let task = tasksFiltered[key]
      if (task.completed) {
        tasks[key] = task
      }
    })
    return tasks
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
