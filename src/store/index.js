import { createStore } from 'vuex'

export default createStore({
  state: {
    users: [
      { id: 0, name: 'marcel' },
      { id: 1, name: 'roger' },
      { id: 2, name: 'Florent' }
    ],
    notifDisplay: false,
    notifMessage: ''
  },
  getters: {
    getUser(state) {
      return state.users[2].name
    },
    getUsers: (state) => (id) => {
      return state.users[id].name
    },
    getNotif: (state) => {
      return state.notifDisplay
    },
    getNotifMessage: (state) => {
      return state.notifMessage
    }
  },
  mutations: {
    changeUser(state, payload) {
      state.users[2].name = payload.name
    },
    displayNotif(state, payload) {
      state.notifDisplay = payload.d
      state.notifMessage = payload.mess
    }
  },
  actions: {
    modify(context, payload) {

      context.commit('changeUser', { name: payload.name })
    }
  },
  modules: {
  }
})
