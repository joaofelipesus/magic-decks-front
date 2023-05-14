export default {
  getDeckName(state) {
    return state.deck?.name
  },

  getDeckTotalCards(state) {
    return state.deck.deck_cards.length
  },

  getDeckCards (state) {
    return state.deck?.deck_cards
  }
}
