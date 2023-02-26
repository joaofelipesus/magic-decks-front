import { shallowMount } from '@vue/test-utils'
import CardView from '@/components/deck/CardView.vue'



function cardViewBuilder() {
  const propsData = {
    card: {
      name: 'Akroma',
      image_url: 'https://some/image/path'
    }
  }

  return shallowMount(CardView, { propsData })
}

describe('CardView', () => {
  it('renders correct card image', () => {
    const wrapper = cardViewBuilder()

    expect(wrapper.find("[data-test='card-image']").attributes('src'))
      .toMatch('https://some/image/path')
  })

  it('emits event on click', () => {
    const wrapper = cardViewBuilder()

    wrapper.find("[data-test='card-image']").trigger('click')

    expect(wrapper.emitted('cardClick')).toBeTruthy()
  })
})
