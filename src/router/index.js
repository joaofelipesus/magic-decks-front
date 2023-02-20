import Vue from 'vue'
import VueRouter from 'vue-router'
import DeckList from '@/views/deck/DeckList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/decks',
    name: 'deck-list',
    component: DeckList
  },
  {
    path: '/',
    redirect: '/decks'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
