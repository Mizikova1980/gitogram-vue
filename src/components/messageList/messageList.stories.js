import MessageList from './MessageList.vue'

export default {
  title: 'MessageList',
  components: { MessageList }
}

export const defaultVeiw = () => ({
  components: { MessageList },
  template: `
    <MessageList/>
    `
})

defaultVeiw.story = {
  name: 'Стандартный вид'
}
