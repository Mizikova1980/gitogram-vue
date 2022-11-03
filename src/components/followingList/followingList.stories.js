import FollowingList from './FollowingList.vue'

export default {
  title: 'FollowingList',
  components: {
    FollowingList
  }
}

export const defaultView = () => ({
  components: { FollowingList },
  template: `
    <FollowingList/>
    `
})

defaultView.story = {
  name: 'Стандартный вид'
}
