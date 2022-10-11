import RepositoryInfo from './RepositoryInfo.vue'

export default {
  title: 'RepositoryInfo',
  components: { RepositoryInfo }
}

export const defaultVeiw = () => ({
  components: { RepositoryInfo },
  template: `
    <RepositoryInfo likesCount="156k" followers="4"/>
    `
})

defaultVeiw.story = {
  name: 'Стандартный вид'
}
