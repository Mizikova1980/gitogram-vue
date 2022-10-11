import RepositoryList from './RepositoryList.vue'

export default {
  title: 'RepositoryList',
  components: { RepositoryList }
}

export const defaultVeiw = () => ({
  components: { RepositoryList },
  template: `
    <RepositoryList/>
    `
})

defaultVeiw.story = {
  name: 'Стандартный вид'
}
