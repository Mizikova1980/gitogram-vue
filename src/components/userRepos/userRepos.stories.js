import UserRepos from './UserFollowing.vue'

export default {
  title: 'UserRepos',
  components: {
    UserRepos
  }
}

export const defaultView = () => ({
  components: { UserRepos },
  template: `
    <UserRepos/>
    `
})

defaultView.story = {
  name: 'Стандартный вид'
}
