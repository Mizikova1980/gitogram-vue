import UserProfile from './UserProfile.vue'

export default {
  title: 'UserFollowing',
  components: {
    UserProfile
  }
}

export const defaultView = () => ({
  components: { UserProfile },
  template: `
    <UserProfile/>
    `
})

defaultView.story = {
  name: 'Стандартный вид'
}
