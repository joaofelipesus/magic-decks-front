import api from '@/lib/api'
import actions from '@/store/cards/actions'

describe('cardsStore', () => {
  describe('#searchCards', () => {
    it('calls correct url with name, language and method params', async () => {
      api.get = jest.fn()

      const params = {name: 'Akroma', language: 'en', method: 'db'}

      await actions.searchCards(null, params)

      expect(api.get).toHaveBeenCalledWith('/cards/search?name=Akroma&lang=en&method=db')
    })
  })

  describe('#addToCollection', () => {
    it('calls correct url with name, language and method params', async () => {
      api.post = jest.fn()

      const card = {id: 1}

      await actions.addToCollection(null, card)

      expect(api.post).toHaveBeenCalledWith('/cards', card)
    })
  })
})
