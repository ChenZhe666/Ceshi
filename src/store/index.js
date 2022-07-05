import { createStore } from 'vuex'
import PersistedState from 'vuex-persistedstate'
import tagsview from './modules/tagsview'
import getters from './getter'
export default createStore({
  state: {
    token: localStorage.getItem('token') || ''
  },
  getters,
  mutations: {
    rawValue(state, token) {
      state.token = token
    }
  },
  actions: {},
  modules: {
    tagsview
  },
  plugins: [PersistedState()]
})
