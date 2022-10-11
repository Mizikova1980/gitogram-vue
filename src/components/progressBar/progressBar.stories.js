import ProgressBar from './ProgressBar.vue'

export default {
  title: 'progressBar',
  components: { ProgressBar },
  argTypes: {
    onFinish: {
      action: 'onFinish',
      description: 'When progress loaded'
    }
  }
}

const template = (args) => ({
  components: { xProgress: ProgressBar },
  data () {
    return { args }
  },
  template: '<x-progress @onFinish="args.onFinish" />'
})

export const Default = template.bind({})
