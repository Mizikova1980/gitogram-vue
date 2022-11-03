import { createRouter, createWebHashHistory } from 'vue-router'
import Auth from './../components/auth/Auth.vue'
import Feeds from './../components/feeds/Feeds.vue'
import UserProfile from '../components/UserProfile/UserProfile.vue'
import StoriesSlider from './../components/storiesSlider/StoriesSlider.vue'
import UserFollowing from './../components/userFollowing/UserFollowing.vue'
import NotFound from './../components/notFound/NotFound.vue'
import * as api from './../api'

const routes = [
  {
    path: '/',
    component: Feeds,
    name: 'Feeds'
  },
  {
    path: '/auth',
    component: Auth,
    name: 'Auth'
  },
  {
    path: '/stories/:initialSlide',
    component: StoriesSlider,
    name: 'stories'
  },
  {
    path: '/user',
    component: UserProfile,
    name: 'UserProfile'
  },
  {
    path: '/following',
    component: UserFollowing,
    name: 'UserFollowing'

  },
  {
    path: '/:pathMath(.*)',
    component: NotFound,
    name: 'NotFound'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach(async (to, from, next) => {
  const authRoute = to.name === 'Auth'

  try {
    await api.user.getUserData()
    next(authRoute ? { name: 'Feeds' } : null)
  } catch (error) {
    next(authRoute ? null : { name: 'Auth' })
  }
})

export default router
