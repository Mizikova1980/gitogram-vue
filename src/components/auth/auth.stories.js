import Auth from './Auth.vue'

export default {
  title: 'Auth',
  components: { Auth }
}

export const defaultView = () => ({
  components: { Auth },
  template: `
  <Auth/>
  `
})

defaultView.story = {
  name: 'Стандартный вид'
}
