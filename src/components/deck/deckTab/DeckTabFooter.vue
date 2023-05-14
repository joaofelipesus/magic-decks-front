<template>
  <div class="deck-tab-footer">
    <h2 class="deck-tab-footer__header">
      {{ deckFormat }}
    </h2>

    <h3 :class="cardsCountColor">
      {{ deckTotalCards }} / {{ formatTotalCards }}
    </h3>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'DeckTabFooter',

  computed: {
    deckTotalCards () {
      return this.getDeckTotalCards()
    },

    deckFormat () {
      return this.getDeckFormat()
    },

    formatTotalCards () {
      if (this.deckFormat === 'commander') { return 100 }

      return 60
    },

    cardsCountColor () {
      if (this.deckTotalCards > this.formatTotalCards) {
        return 'text-danger'
      }

      return 'text-success'
    }
  },

  methods: {
    ...mapGetters(['getDeckTotalCards', 'getDeckFormat'])
  }
}
</script>

<style lang="scss" scoped>
.deck-tab-footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &__header {
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;
  }
}
</style>
