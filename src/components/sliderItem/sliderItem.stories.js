import SliderItem from './SliderItem.vue'
import Avatar from './../avatar/Avatar.vue'

export default {
  title: 'sliderItem',
  components: { SliderItem, Avatar }
}

export const defaultVeiw = () => ({
  components: { SliderItem, Avatar },
  template: `
  <SliderItem  username="joshua_l">
    <Avatar avatar="https://www.fillmurray.com/300/300"
    />
  
  </SliderItem>
  `
})

defaultVeiw.story = {
  name: 'Стандартный вид'
}
