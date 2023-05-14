<template>
  <div
    v-if="show"
    class="card-selected-modal"
    @click="$emit('closeSelectedCardModal')"
    data-test="card-selected-modal"
  >
    <div class="card-selected-modal__card" @click.stop>
      <div class="card-header">
        <h3
          class="text-center"
          data-test="card-name"
        >
          {{cardName}}
        </h3>
      </div>
      <div class="card-selected-modal__card-body">
        <div class="d-flex flex-row">
          <div class="me-5">
            <img
              :src="card.image_url"
              data-test="card-image"
            >
          </div>

          <div class="w-75">
            <section class="d-flex flex-column mb-5">
              <span data-test="name-en">Name en: {{card.name_en}}</span>
              <span data-test="name-pt">Name pt: {{card.name_pt}}</span>
              <span data-test="colors">Colors: {{card.colors}}</span>
              <span data-test="rarity">Rairty: {{card.rarity}}</span>
              <span data-test="set">Set: {{card.set}}</span>
              <span data-test="set-number">Set number: {{card.set_number}}</span>
              <span data-test="power">Power: {{card.power}}</span>
              <span data-test="toughness">Toughness: {{card.toughness}}</span>
            </section>

            <section class="d-flex justify-content-between">
              <button
                v-if="!card.id"
                @click="handleAddToCollection"
                class="btn btn btn-outline-primary"
                data-test="add-to-collection"
              >
                Add to collection
              </button>

              <button
                @click="handleCreateDeckCard"
                class="btn btn btn-outline-success"
              >
                Add to deck
              </button>
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'
import formErrorHandler from '@/mixins/form-error-handler'

export default {
  name: 'CardSelectedModal',

  mixins: [formErrorHandler],

  props: {
    card: {
      type: Object,
      default: undefined
    },

    show: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    cardName () {
      if (this.card.name_pt) { return this.card.name_pt }

      return this.card.name_en
    },

    deckId () {
      return this.$route.params.id
    }
  },

  methods: {
    ...mapActions(['addToCollection', 'createDeckCard']),
    ...mapMutations(['addDeckCard']),

    handleAddToCollection () {
      this.addToCollection(this.card)
        .then(_response => {
          this.$toast.success('Card added to collection.')
          this.$emit('closeSelectedCardModal')
        })
        .catch(error => this.handleResponseError(error))
    },

    handleCreateDeckCard () {
      this.createDeckCard({deckId: this.deckId, card: this.card})
        .then(response => {
          this.$toast.success('Card added to deck.')
          this.$emit('closeSelectedCardModal')
          this.addDeckCard(response.data)
        })
        .catch(error => this.handleResponseError(error))
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'bootstrap/dist/css/bootstrap';

  .card-selected-modal {
    position: absolute;
    z-index: 2;
    background-color: rgba(#000000, 0.5);
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    &__card {
      @extend .card, .col-6, .offset-3;
      margin-top: 10%;
    }

    &__card-body {
      @extend .card-body;
    }
  }
</style>
