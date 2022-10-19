import StoriesSlider from './StoriesSlider.vue'

export default {
  title: 'SliderList',
  components: { StoriesSlider }
}

export const defaultVeiw = () => ({
  components: { StoriesSlider },
  template: `
    <SliderList/>
    `
})

defaultVeiw.story = {
  name: 'Стандартный вид'
}
