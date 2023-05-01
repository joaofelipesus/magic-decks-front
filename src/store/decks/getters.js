export default {
  deckName(state) {
    return state.deck.name
  },

  deckTotalCards(state) {
    return state.deck.deck_cards.length
  }
}
