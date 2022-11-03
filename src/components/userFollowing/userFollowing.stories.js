import UserFollowing from './UserFollowing.vue'

export default {
  title: 'UserFollowing',
  components: {
    UserFollowing
  }
}

export const defaultView = () => ({
  components: { UserFollowing },
  template: `
    <UserFollowing/>
    `
})

defaultView.story = {
  name: 'Стандартный вид'
}
