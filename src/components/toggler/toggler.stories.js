import Toggler from './Toggler.vue'

export default {
  title: 'Toggler',
  components: { Toggler }
}

export const defaultVeiw = () => ({
  components: { Toggler },
  template: `
    <Toggler/>
    `
})

defaultVeiw.story = {
  name: 'Стандартный вид'
}
