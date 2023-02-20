import DeckCard from '@/components/DeckCard'
import { mount } from '@vue/test-utils'

describe('DeckCard', () => {
  it('renders deck informations', () => {
    const deck = {
      id: '1',
      name: 'Deck 1',
      format: 'commander',
      description: 'This is a deck'
    }
    const wrapper = mount(DeckCard, { propsData: { deck }, stubs: ['router-link'] })

    expect(wrapper.find('[data-test="name"]').text()).toBe(deck.name)
    expect(wrapper.find('[data-test="format"]').text()).toBe(deck.format)
  })
})
