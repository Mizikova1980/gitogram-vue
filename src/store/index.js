import { createStore } from 'vuex'
import userRepos from './modules/userRepos'
import user from './modules/user'
import trendings from './modules/trendings'
import starred from './modules/starred'
import auth from './modules/auth'

export default createStore({
  getters: {
    getUnStarredOnly (state) {
      return state.trendings.data.filter((trendingsRepo) => {
        return !state.starred.data.some((starredRepo) => {
          return trendingsRepo.id === starredRepo.id
        })
      })
    }
  },
  modules: {
    userRepos,
    trendings,
    auth,
    user,
    starred
  }
})
