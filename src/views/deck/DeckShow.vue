<template>
  <main class="deck-show">
    <home-navbar class="mb-4"/>

    <div class="deck-show__main">
      <div class="container deck-show__main__card-search">
        <card-search />
      </div>

      <deck-tab class="deck-show__main__deck-tab"/>
    </div>
  </main>
</template>

<script>
import HomeNavbar from '@/components/HomeNavbar.vue'
import CardSearch from '@/components/deck/CardSearch.vue'
import { mapActions, mapMutations } from 'vuex'
import formErrorHandler from '@/mixins/load-error-handler'
import DeckTab from '@/components/deck/deckTab/DeckTab.vue'

export default {
  name: 'DeckShow',

  components: {
    CardSearch,
    DeckTab,
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

<style lang="scss" scoped>
@import 'bootstrap/dist/css/bootstrap';

  .deck-show {
    &__main {
      display: flex;
      flex-direction: row;

      &__card-search {
        @extend .col-8;
      }

      &__deck-tab {
        @extend .col-4;
        height: 90vh;
        border-left: 4px solid #08121c;
      }
    }
  }
</style>
