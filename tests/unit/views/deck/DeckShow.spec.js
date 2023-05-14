import DeckShow from '@/views/deck/DeckShow'
import factoryBuilder from '../../factory-builder'
import flushPromises from 'flush-promises'
import mutations from '@/store/decks/mutations'
import state from '@/store/decks/state'
import getters from '@/store/decks/getters'

const stubs = ['router-link']

const mocks = { $route: { params: { id: '1' } } }

const store = {
  actions: {
    findDeck: jest.fn(() => {
      return Promise.resolve({
        data: {
          id: '1',
          name: 'Deck 1',
          format: 'commander',
          description: 'This is a deck'
        }
      })
    })
  },
  mutations,
  getters,
  state
}

describe('DeckShow', () => {
  it('persists deck on decksStore', async () => {
    factoryBuilder(DeckShow, { store, stubs, mocks })

    await flushPromises()

    expect(getters.getDeckName(store.state)).toMatch('Deck 1')
  })

  it('renders CardSearch component', async () => {
    const wrapper = factoryBuilder(DeckShow, { store, stubs, mocks })

    await flushPromises()

    expect(wrapper.findComponent({ name: 'CardSearch' }).exists()).toBe(true)
  })

  it('renders DeckTab component', async () => {
    const wrapper = factoryBuilder(DeckShow, { store, stubs, mocks })

    await flushPromises()

    expect(wrapper.findComponent({ name: 'DeckTab' }).exists()).toBe(true)
  })
})
