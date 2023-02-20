<template>
  <main>
    <home-navbar />

    <div class="container pt-5 d-flex">
      <deck-card
        v-for="deck in decks"
        :key="deck.id"
        :deck="deck"
        data-test="deck-card"
      />
    </div>
  </main>
</template>

<script>
import { mapActions } from 'vuex'
import formErrorHandler from '@/mixins/load-error-handler'
import HomeNavbar from '@/components/HomeNavbar'
import DeckCard from '@/components/DeckCard'

export default {
  name: 'DeckList',

  mixins: [formErrorHandler],

  components: {
    DeckCard,
    HomeNavbar
  },

  data () {
    return {
      decks: []
    }
  },

  mounted () {
    this.listDecks()
      .then(response => {
        this.decks = response.data.map(deck => {
          return {
            id: deck.id,
            name: deck.name,
            format: deck.format,
            description: deck.description
          }
        })
      })
      .catch(e => this.handleLoadError(e))
  },

  methods: {
    ...mapActions(['listDecks']),
  }
}
</script>
