import Topline from './Topline.vue'

export default {
  title: 'Topline',
  components: { Topline }
}

export const defaultVeiw = () => ({
  components: { Topline },
  template: `
    <Topline/>
    `
})

defaultVeiw.story = {
  name: 'Стандартный вид'
}
