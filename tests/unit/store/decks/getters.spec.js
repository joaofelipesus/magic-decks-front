import getters from '@/store/decks/getters'

describe('decksStore.getters', () => {
  const state = {
    deck: {
      name: 'Test Deck',
      deck_cards: [
        { id: 1, card: { name_en: 'Test Card A'} },
        { id: 2, card: { name_en: 'Test Card B' } }
      ],
      format: 'commander'
    }
  }

  describe('getDeckName', () => {
    it('returns deck name from state', () => {
      expect(getters.getDeckName(state)).toEqual('Test Deck')
    })
  })

  describe('getDeckTotalCards', () => {
    it('returns deck total cards from state', () => {
      expect(getters.getDeckTotalCards(state)).toEqual(2)
    })
  })

  describe('getDeckCards', () => {
    it('returns deck cards from state', () => {
      expect(getters.getDeckCards(state)).toEqual([
        {id: 1, card: { name_en: 'Test Card A' } },
        {id: 2, card: { name_en: 'Test Card B'} }
      ])
    })
  })

  describe('getDeckFormat', () => {
    it('returns deck cards from state', () => {
      expect(getters.getDeckFormat(state)).toEqual('commander')
    })
  })
})
