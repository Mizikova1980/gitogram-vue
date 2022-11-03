import User from './User.vue'

export default {
  title: 'User',
  components: {
    User
  }
}

export const defaultView = () => ({
  components: { User },
  template: `
    <User/>
    `
})

defaultView.story = {
  name: 'Стандартный вид'
}
