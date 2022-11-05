import { Toggler } from './../../src/components/toggler/Toggler.vue'
import { shallowMount } from '@vue/test-utils'

describe('toggleк component', () => {
  it('изменяет надпись при клике', async () => {
    const wrapper = shallowMount(Toggler)
    expect(wrapper.find('.text').text()).toBe('View issues')
    await wrapper.find('button').trigger('click')
    expect(wrapper.find('.text').text()).toBe('Hide issues')
  })
})
