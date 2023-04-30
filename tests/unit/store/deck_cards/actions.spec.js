import api from '@/lib/api'
import actions from '@/store/deck_cards/actions'

describe('deckCaardsStore', () => {
  describe('#createDeckCard', () => {
    it('calls correct url with name, language and method params', async () => {
      api.post = jest.fn()

      const deckId = 42
      const card = {id: 1}

      await actions.createDeckCard(null, {deckId: 42, card})

      expect(api.post).toHaveBeenCalledWith('/deck_cards', {
        deck_id: 42,
        card
      })
    })
  })
})
