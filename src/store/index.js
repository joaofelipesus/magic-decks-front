import Vue from 'vue'
import Vuex from 'vuex'
import decksStore from './decks'


Vue.use(Vuex)

const actions = {
  ...decksStore.actions
}

export default new Vuex.Store({
  actions,
  getters: {},
  modules: {},
  mutations: {},
  state: {}
})
