import api from '@/lib/api'

export default {
  listDecks () {
    return api.get(`/decks`)
  },

  createDeck (_, deck) {
    return api.post(`/decks`, {
      name: deck.name,
      format: deck.format,
      description: deck.description
    })
  }
}
