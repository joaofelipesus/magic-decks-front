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
          {{ deckCard.card.name_pt }}
        </li>
      </ul>
    </div>

  </main>
</template>

<script>
import DeckTabHeader from './DeckTabHeader.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'DeckTab',

  components: {
    DeckTabHeader
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
