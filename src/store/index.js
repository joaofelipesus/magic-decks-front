import Vue from 'vue'
import Vuex from 'vuex'
import decksStore from './decks'
import cardsStore from './cards'

Vue.use(Vuex)

const actions = {
  ...decksStore.actions,
  ...cardsStore.actions
}

export default new Vuex.Store({
  actions,
  getters: {},
  modules: {},
  mutations: {},
  state: {}
})
