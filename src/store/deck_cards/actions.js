import api from '@/lib/api'

export default {
  createDeckCard (_, {deckId, card}) {
    return api.post('/deck_cards', {
      deck_id: deckId,
      card
    })
  }
}
