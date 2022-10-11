import UserItem from './UserItem.vue'

export default {
  title: 'UserItem',
  components: { UserItem }
}

export const defaultVeiw = () => ({
  components: { UserItem },
  template: `
    <UserItem name="joshua_l" avatar="https://www.fillmurray.com/300/300"/>
    `
})

defaultVeiw.story = {
  name: 'Стандартный вид'
}
