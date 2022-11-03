import FollowingItem from './followingItem.vue'

export default {
  title: 'FollowingItem',
  components: {
    FollowingItem
  }
}

export const defaultView = () => ({
  components: { FollowingItem },
  template: `
    <FollowingItem/>
    `
})

defaultView.story = {
  name: 'Стандартный вид'
}
