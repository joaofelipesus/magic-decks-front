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
})
