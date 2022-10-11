
import Avatar from './Avatar.vue'

export default {
  title: 'Avatar',
  components: { Avatar }
}

export const defaultView = () => ({
  components: { Avatar },
  template: `
  <Avatar
  avatar="https://www.fillmurray.com/300/300"
  username="joshua_l"
  />
    `
})

defaultView.story = {
  name: 'Стандартный вид'
}
