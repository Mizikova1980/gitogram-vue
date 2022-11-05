import { mount } from '@vue/test-utils'
import RepositoryItem from '@/components/repositoryItem/RepositoryItem.vue'

describe('issues', () => {
  it('выполняет emit события loadContent', async () => {
    const wrapper = mount(RepositoryItem)

    await wrapper.find('.toggler button').trigger('click')
    expect(wrapper.emitted().loadContent.length).toBe(1)
  })

  it('отрисует список элементов', async () => {
    const issue = {
      title: 'test-title',
      user: {
        login: 'test-name'
      }
    }

    const wrapper = mount(RepositoryItem, {
      propsData: {
        issues: Array.from({ length: 6 }).map(x => issue)
      }
    })
    expect(wrapper.find('.issues-container').exists()).toBe(false)
    await wrapper.find('.toggler button').trigger('click')
    expect(wrapper.findAll('.issues-item').loadContent.length).toBe(6)
  })

  it('не вызывает повторное событие contentLoaded', async () => {
    const issue = {
      title: 'test-title',
      user: {
        login: 'test-name'
      }
    }

    const wrapper = mount(RepositoryItem, {
      propsData: {
        issues: Array.from({ length: 6 }).map(x => issue)
      }
    })

    await wrapper.find('.toggler button').trigger('click')
    expect(wrapper.emitted().loadContent).toBeUndefined()
  })
})
