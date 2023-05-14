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
})
