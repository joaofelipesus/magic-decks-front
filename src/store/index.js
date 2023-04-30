import Vue from 'vue'
import Vuex from 'vuex'
import decksStore from './decks'
import cardsStore from './cards'
import deckCardsStore from './deck_cards'

Vue.use(Vuex)

const actions = {
  ...decksStore.actions,
  ...cardsStore.actions,
  ...deckCardsStore.actions
}

export default new Vuex.Store({
  actions,
  getters: {},
  modules: {},
  mutations: {},
  state: {}
})
