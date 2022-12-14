import * as api from './../../api'

export default {
  namespaced: true,
  state: {
    data: []
  },
  mutations: {
    SET_TRENDINGS: (state, trendings) => {
      state.data = trendings.map(item => {
        item.following = {
          status: false,
          loading: false,
          error: ' '
        }
        return item
      })
    },
    SET_README: (state, payload) => {
      state.data = state.data.map((repo) => {
        if (payload.id === repo.id) {
          repo.readme = payload.content
        }
        return repo
      })
    }

  },
  getters: {
    getRepoById: (state) => (id) => state.data.find((trendingRepo) => trendingRepo.id === id)

  },
  actions: {
    async fetchTrendings ({ state, commit, rootState }) {
      if (state.data.length > 0) return

      try {
        const { data } = await api.trendings.getTrendings()

        commit('SET_TRENDINGS', data.items)
      } catch (error) {
        console.log(error)
        throw error
      }
    },

    async fetchReadme ({ state, commit, getters }, { id, owner, repo }) {
      const curRepo = getters.getRepoById(id)
      if (curRepo.readme !== undefined) return
      try {
        const { data } = await api.readme.getReadme({ owner, repo })
        commit('SET_README', { id, content: data })
      } catch (error) {
        console.log(error)
        throw error
      }
    }

  }
}
