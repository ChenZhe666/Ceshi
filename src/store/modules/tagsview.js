export default {
  namespaced: true,
  state: {
    tagsView: localStorage.getItem('tagsview') || []
  },
  mutations: {
    removeTagItem(state, index) {
      state.tagsView.splice(index, 1)
      localStorage.setItem('tagsview', state.tagsView)
    },
    setTagsView(state, tagsView) {
      const tagsViewStatus = state.tagsView.find(item => item.path === tagsView.path)
      if (!tagsViewStatus) {
        state.tagsView.push(tagsView)
        localStorage.setItem('tagsview', state.tagsView)
      }
    }
  },
  actions: {

  }
}
