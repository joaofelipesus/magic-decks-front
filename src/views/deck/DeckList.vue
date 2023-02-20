<template>
  <div class="container">

  </div>
</template>

<script>
import { mapActions } from 'vuex'
import formErrorHandler from '@/mixins/load-error-handler'

export default {
  name: 'DeckList',

  mixins: [formErrorHandler],

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
