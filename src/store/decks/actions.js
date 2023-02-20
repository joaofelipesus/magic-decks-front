import api from '@/lib/api'

export default {
  listDecks () {
    return api.get(`/decks`)
  }
}
