<template>
  <main>
    <home-navbar />

    <div class="container pt-5 d-flex">
      <div
        v-for="deck in decks"
        :key="deck.id"
        class="card col-3 me-2"
      >
        <div class="card-body">
          <h3 class="mb-2 text-center">{{deck.name}}</h3>
          <div class="mb-3 d-flex justify-content-center">
            <h6
              class="badge rounded-pill text-center"
              :class="formatCollor(deck.format)"
            >
              {{deck.format}}
            </h6>
          </div>

          <router-link
            :to="{ name: 'deck-show', params: { id: deck.id } }"
            class="btn btn-outline-info w-100"
          >
            More info
          </router-link>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapActions } from 'vuex'
import formErrorHandler from '@/mixins/load-error-handler'
import HomeNavbar from '@/components/HomeNavbar'

export default {
  name: 'DeckList',

  mixins: [formErrorHandler],

  components: {
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

    formatCollor (format) {
      if (format === 'standard') { return 'bg-primary' }
      if (format === 'modern') { return 'bg-success' }
      if (format === 'commander') { return 'bg-secondary' }
      return ''
    }
  }
}
</script>
