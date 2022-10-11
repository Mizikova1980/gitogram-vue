import xButton from './button.vue'

export default {
  title: 'Button',
  components: { xButton }
}

export const defaultView = () => ({
  components: { xButton },
  template: `
    <xButton/>`
})

defaultView.story = {
  name: 'Стандартный вид'
}
