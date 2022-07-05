import { createStore } from 'vuex'
import PersistedState from 'vuex-persistedstate'

export default createStore({
  state: {
    token: localStorage.getItem('token') || ''
  },
  getters: {},
  mutations: {
    rawValue(state, token) {
      state.token = token
    }
  },
  actions: {},
  modules: {},
  plugins: [PersistedState()]
})
