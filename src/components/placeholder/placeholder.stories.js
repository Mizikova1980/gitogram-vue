import Placeholder from './Placeholder.vue'

export default {
  title: 'Placeholder',
  components: {
    Placeholder
  }
}

export const defaultView = () => ({
  components: { Placeholder },
  template: `
    <Placeholder/>
    `
})

defaultView.story = {
  name: 'Стандартный вид'
}
