<template>
  <main>
    <home-navbar class="mb-4"/>

    <div class="container">
      <card-search />
    </div>
  </main>
</template>

<script>
import HomeNavbar from '@/components/HomeNavbar.vue'
import CardSearch from '@/components/deck/CardSearch.vue'
import { mapActions, mapMutations } from 'vuex'
import formErrorHandler from '@/mixins/load-error-handler'

export default {
  name: 'DeckShow',

  components: {
    CardSearch,
    HomeNavbar
  },

  mixins: [formErrorHandler],

  computed: {
    deckId () {
      return this.$route.params.id
    }
  },

  mounted () {
    this.findDeck(this.deckId)
      .then(response => {
        this.setDeck(response.data)
      })
      .catch(error => {
        this.handleLoadError(error)
      })
  },

  methods: {
    ...mapActions(['findDeck']),
    ...mapMutations(['setDeck'])
  }
}
</script>
