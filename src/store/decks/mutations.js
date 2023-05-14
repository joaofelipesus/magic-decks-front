export default {
  setDeck (state, deck) {
    state.deck = deck
  },

  addDeckCard(state, card) {
    const cardsList = state.deck.deck_cards
    cardsList.push(card)
    state.deck.deck_cards = cardsList
  }
}
