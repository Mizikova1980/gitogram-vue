import RepositoryDescription from './RepositoryDescription.vue'

export default {
  title: 'RepositoryDescription',
  components: { RepositoryDescription }
}

export const defaultVeiw = () => ({
  components: { RepositoryDescription },
  template: `
    <RepositoryDescription/>
    `
})

defaultVeiw.story = {
  name: 'Стандартный вид'
}
