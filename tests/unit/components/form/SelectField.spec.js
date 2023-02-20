import { shallowMount } from '@vue/test-utils'
import SelectField from '@/components/form/SelectField'

describe('SelectField', () => {
  const label = 'What is the best language'
  const options = [{ label: 'Ruby', value: '42' }, { label: 'Elixir', value: '1' }]

  it('renders label received as prop', () => {
    const wrapper = shallowMount(SelectField, { propsData: { label, options } })
    expect(wrapper.find('[data-test="select-field-label"]').text()).toMatch('What is the best language')
  })

  it('emit an select event on select', async () => {
    const wrapper = await shallowMount(SelectField, { propsData: { label, options } })
    wrapper.find('[data-test="select-field"]').trigger('input')
    await wrapper.vm.$nextTick()
    expect(wrapper.emitted('input')).toBeTruthy()
  })

  it('emit an select event on change', async () => {
    const wrapper = await shallowMount(SelectField, { propsData: { label, options } })
    wrapper.find('[data-test="select-field"]').trigger('change')
    await wrapper.vm.$nextTick()
    expect(wrapper.emitted('change')).toBeTruthy()
  })

  describe('errorMessage', () => {
    it('renders error message when errorMessage prop has a value', () => {
      const errorMessage = 'Field name can\'t be blank.'
      const wrapper = shallowMount(SelectField, { propsData: { label, errorMessage, options } })
      expect(wrapper.find('[data-test="select-field-error-message"]').exists()).toBeTruthy()
      expect(wrapper.find('[data-test="select-field-error-message"]').text()).toBe(errorMessage)
    })

    it('don\'t render error message when errorMessage prop is undefined', () => {
      const wrapper = shallowMount(SelectField, { propsData: { label, options } })
      expect(wrapper.find('[data-test="select-field-error-message"]').exists()).toBeFalsy()
    })
  })
})
