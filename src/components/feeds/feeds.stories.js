import Feeds from './Feeds.vue'

export default {
  title: 'Feeds',
  components: {
    Feeds
  }
}

export const defaultView = () => ({
  components: { Feeds },
  template: `
    <Feeds/>
    `
})

defaultView.story = {
  name: 'Стандартный вид'
}
