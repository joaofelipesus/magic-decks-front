export default {
  getDeckName(state) {
    return state.deck?.name
  },

  getDeckTotalCards(state) {
    return state.deck?.deck_cards?.length
  },

  getDeckCards (state) {
    return state.deck?.deck_cards?.sort((a, b) =>  {
      const firstCardName = a.card.name_en || a.card.name_pt
      const secondCardName = b.card.name_en || b.card.name_pt

      return (firstCardName > secondCardName) ? 1 : -1
    })
  },

  getDeckFormat(state) {
    return state.deck?.format
  }
}
