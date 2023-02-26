import Vue from 'vue'
import VueRouter from 'vue-router'
import DeckList from '@/views/deck/DeckList.vue'
import DeckUpsert from '@/views/deck/DeckUpsert.vue'
import DeckShow from '@/views/deck/DeckShow.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/decks'
  },
  {
    path: '/decks',
    name: 'deck-list',
    component: DeckList
  },
  {
    path: '/decks/:id',
    name: 'deck-show',
    component: DeckShow
  },
  {
    path: '/decks/new',
    name: 'deck-new',
    component: DeckUpsert
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
