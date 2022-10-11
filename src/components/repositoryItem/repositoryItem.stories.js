import RepositoryItem from './RepositoryItem.vue'

export default {
  title: 'RepositoryItem',
  components: { RepositoryItem }
}

export const defaultVeiw = () => ({
  components: { RepositoryItem },
  template: `
    <RepositoryItem/>
    `
})

defaultVeiw.story = {
  name: 'Стандартный вид'
}
