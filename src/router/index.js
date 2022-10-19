import { createRouter, createWebHashHistory } from 'vue-router'
import Feeds from './../components/feeds/Feeds.vue'
import StoriesSlider from './../components/storiesSlider/StoriesSlider.vue'
import NotFound from './../components/notFound/NotFound.vue'

const routes = [
  {
    path: '/',
    component: Feeds,
    name: 'Feeds'
  },
  {
    path: '/stories',
    component: StoriesSlider,
    name: 'stories'
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

export default router
