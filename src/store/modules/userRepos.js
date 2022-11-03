import * as api from './../../api'

export default {
  namespaced: true,
  state: {
    data: []
  },
  mutations: {
    SET_USERREPOS (state, payload) {
      state.data = payload
    }
  },
  actions: {
    async getUserRepos ({ commit }) {
      try {
        const { data } = await api.user.getUserRepos()
        commit('SET_USERREPOS', data)
      } catch (error) {
        console.log(error)
        throw error
      }
    }

  }
}
