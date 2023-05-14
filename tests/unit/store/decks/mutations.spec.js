import mutations from '@/store/decks/mutations'

describe('decksStore.mutations', () => {
  describe('setDeck', () => {
    it('sets the deck', () => {
      const state = {
        deck: {}
      }

      mutations.setDeck(state, {name: 'Test Deck'})

      expect(state.deck).toEqual({name: 'Test Deck'})
    })
  })

  describe('addDeckCard', () => {
    it('adds a card to the deck', () => {
      const state = {
        deck: {
          deck_cards: []
        }
      }

      mutations.addDeckCard(state, {name: 'Test Card'})

      expect(state.deck.deck_cards).toEqual([{name: 'Test Card'}])
    })
  })
})
