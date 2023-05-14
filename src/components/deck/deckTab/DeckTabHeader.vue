<template>
  <div class="deck-tab-header">
    <h3
      class="deck-tab__header"
      data-test="deck-name"
    >
      {{ deckName }}
    </h3>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'DeckTabHeader',

  computed: {
    deckName () {
      return this.getDeckName()
    }
  },

  methods: {
    ...mapGetters(['getDeckName'])
  }

}
</script>

<style lang="scss" scoped>
.deck-tab-header {
  text-align: center;
  font-size: 1.8rem;
  font-weight: 500;
  margin-bottom: 1rem;
}
</style>
