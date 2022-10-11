import MessageItem from './MessageItem.vue'

export default {
  title: 'MessageItem',
  components: { MessageItem }
}

export const defaultVeiw = () => ({
  components: { MessageItem },
  template: `
    <MessageItem/>
    `
})

defaultVeiw.story = {
  name: 'Стандартный вид'
}
