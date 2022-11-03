import { createApp } from 'vue'
import store from './store'
import App from './App.vue'
import router from './router'
import * as api from './api'

const token = localStorage.getItem('token')

if (token) {
  api.token.set(token)
}

const app = createApp(App)

app.use(store)
app.use(router)

app.mount('#app')
