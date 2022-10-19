import SliderList from './SliderList.vue'

export default {
  title: 'SliderList',
  components: { SliderList }
}

export const defaultVeiw = () => ({
  components: { SliderList },
  template: `
    <SliderList/>
    `
})

defaultVeiw.story = {
  name: 'Стандартный вид'
}
