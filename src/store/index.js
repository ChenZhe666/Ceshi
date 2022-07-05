import { createStore } from 'vuex'

export default createStore({
  state: {
    goods: []
  },
  mutations: {
    rawValue(state, list) {
      state.goods = list
    }
  },
  actions: {
  },
  modules: {
  }
})
