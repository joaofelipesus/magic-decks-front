<template>
  <main class="deck-tab">
    <div>
      <h3 class="deck-tab__header">
        {{ deckName }}
      </h3>
    </div>

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
import { mapGetters } from 'vuex'

export default {
  name: 'DeckTab',

  computed: {
    deckName () {
      return this.getDeckName()
    },

    deckCards () {
      return this.getDeckCards()
    }
  },

  methods: {
    ...mapGetters(['getDeckName', 'getDeckCards'])
  }
}
</script>

<style lang="scss" scoped>
  .deck-tab {
    &__header {
      text-align: center;
      font-size: 1.8rem;
      font-weight: 500;
      margin-bottom: 1rem;
    }
  }
</style>
