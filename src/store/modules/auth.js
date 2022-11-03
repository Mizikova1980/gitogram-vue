import * as api from './../../api'
import user from './user'

export default {
  namespaced: true,
  state: {
    user: null
  },
  mutations: {
    SET_USER (state, user) {
      state.user = user
    }
  },
  actions: {
    async getUser (context) {
      try {
        const { data: user } = await api.user.getUserData()
        context.commit('SET_USER', user)
        return true
      } catch (error) {
        console.log(error)
        return false
      }
    },

    async logout () {
      localStorage.removeItem('token')
      window.location.replace('/')
    }
  },
  getters: {
    isLogged (state) {
      return state.user !== null && Object.keys(state.user).length
    },
    getUserAvatar (state) {
      return user
    }
  }
}
