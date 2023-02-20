<template>
  <main>
    <home-navbar />

    <div class="container">
      AKI!
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
        console.log(response)
      })
      .catch(e => this.handleLoadError(e))
  },

  methods: {
    ...mapActions(['listDecks'])
  }
}
</script>
