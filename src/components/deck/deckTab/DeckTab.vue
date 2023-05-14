<template>
  <main class="deck-tab">
    <deck-tab-header />

    <hr>

    <div>
      <ul>
        <li
          v-for="deckCard in deckCards"
          :key="deckCard.id"
        >
          {{ deckCard.card.name_pt || deckCard.card.name_en }}
        </li>
      </ul>
    </div>

    <hr>

    <deck-tab-footer />

  </main>
</template>

<script>
import DeckTabHeader from './DeckTabHeader.vue'
import DeckTabFooter from './DeckTabFooter.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'DeckTab',

  components: {
    DeckTabHeader,
    DeckTabFooter
  },

  computed: {
    deckCards () {
      return this.getDeckCards()
    }
  },

  methods: {
    ...mapGetters(['getDeckCards'])
  }
}
</script>

<style lang="scss" scoped>
</style>
