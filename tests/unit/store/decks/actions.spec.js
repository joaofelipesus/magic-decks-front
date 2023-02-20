import actions from '@/store/decks/actions'
import api from '@/lib/api'

describe('decksStore', () => {
  describe('#listDecks', () => {
    it('calls the correct URL', async () => {
      api.get = jest.fn()

      await actions.listDecks()

      expect(api.get).toHaveBeenCalledWith('/decks')
    })
  })

  describe('#createDeck', () => {
    it('calls the correct URL', async () => {
      api.post = jest.fn()

      await actions.createDeck(expect.anything(), {
        name: 'Test Deck',
        format: 'commander',
        description: 'Some cool descrition'
      })

      expect(api.post).toHaveBeenCalledWith('/decks', {
        name: 'Test Deck',
        format: 'commander',
        description: 'Some cool descrition'
      })
    })
  })
})
