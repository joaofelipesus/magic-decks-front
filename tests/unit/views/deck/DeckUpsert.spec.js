import DeckUpsert from '@/views/deck/DeckUpsert.vue'
import factoryBuilder from '../../factory-builder'
import flushPromises from 'flush-promises'

describe('DeckUpsert', () => {

  const mocks = {
    $toast: {
      success: jest.fn(),
      error: jest.fn()
    },
    $router: { push: jest.fn() }
  }

  const stubs = ['router-link']

  describe('create', () => {
    it('redirects to DeckShow and render a success Toast, when params are valid', async () => {
      const store = {
        actions: {
          createDeck: jest.fn(() => {
            return Promise.resolve({ data: { id: 1 } })
          })
        }
      }

      const wrapper = factoryBuilder(DeckUpsert, { store, mocks, stubs })
      await flushPromises()

      wrapper.find('[data-test="deck-name"]').setValue('Fractius')
      wrapper.find('[data-test="deck-description"]').setValue('Some fun deck')
      wrapper.setData({ format: 'commander' })

      wrapper.find('[data-test="deck-form"]').trigger('submit')

      await flushPromises()

      expect(store.actions.createDeck).toHaveBeenCalledWith(expect.anything(), {
        name: 'Fractius',
        description: 'Some fun deck',
        format: 'commander'
      })
      expect(mocks.$router.push).toHaveBeenCalledWith({ name: 'deck-show', params: { id: 1 } })
      expect(mocks.$toast.success).toHaveBeenCalledWith('Deck created successfully')
    })

    it('render a toast with error message, when params are invalid', async () => {
      const store = {
        actions: {
          createDeck: jest.fn(() => {
            return Promise.reject({ response: { data: { errors: { name: ['Name is required'] } } } })
          })
        }
      }

      const wrapper = factoryBuilder(DeckUpsert, { store, mocks, stubs })
      await flushPromises()

      wrapper.find('[data-test="deck-form"]').trigger('submit')

      await flushPromises()

      expect(mocks.$toast.error).toHaveBeenCalledWith('name Name is required')
    })
  })
})
