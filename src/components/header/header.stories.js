import Header from './Header.vue'

export default {
  title: 'Header',
  components: {
    Header
  }
}

export const defaultView = () => ({
  components: { Header },
  template: `
    <Header/>
    `
})

defaultView.story = {
  name: 'Стандартный вид'
}
