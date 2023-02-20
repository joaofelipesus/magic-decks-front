import DeckList from '@/views/deck/DeckList'
import factoryBuilder from '../../factory-builder'
import flushPromises from 'flush-promises'

describe('DeckList', () => {
  it('renders a list with all decks', async () => {
    const stubs = ['router-link']

    const store = {
      actions: {
        listDecks: jest.fn(() => {
          return Promise.resolve({
            data: [
              {
                id: '1',
                name: 'Deck 1',
                format: 'commander',
                description: 'This is a deck'
              },
              {
                id: '2',
                name: 'Deck 2',
                format: 'standard',
                description: 'This is other a deck'
              }
            ]
          })
        })
      }
    }

    const wrapper = factoryBuilder(DeckList, { store, stubs })
    await flushPromises()

    expect(wrapper.findAll('[data-test="deck-card"]').length).toBe(2)
  })
})
