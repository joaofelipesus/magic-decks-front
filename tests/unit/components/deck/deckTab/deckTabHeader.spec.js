import DeckTabHeader from '@/components/deck/deckTab/DeckTabHeader.vue'
import factoryBuilder from '../../../factory-builder'

describe('DeckTabHeader.vue', () => {
  it('renders deck name', () => {
    const store = {
      getters: {
        getDeckName: () => 'Deck 1'
      }
    }

    const wrapper = factoryBuilder(DeckTabHeader, { store })

    expect(wrapper.find('[data-test="deck-name"]').text()).toMatch('Deck 1')
  })
})
