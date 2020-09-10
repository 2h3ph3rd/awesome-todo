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

const mutations = {}

const actions = {}

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
