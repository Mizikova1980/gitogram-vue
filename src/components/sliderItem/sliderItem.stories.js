import SliderItem from './SliderItem.vue'

export default {
  title: 'sliderItem',
  components: { SliderItem }
}

export const defaultVeiw = () => ({
  components: { SliderItem },
  template: `
  <SliderItem>
  
  </SliderItem>
  `
})

defaultVeiw.story = {
  name: 'Стандартный вид'
}
