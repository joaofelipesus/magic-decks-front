<template>
  <div class="card-search">
    <card-selected-modal
      :card="cardSelected"
      :show="cardSelected !== undefined"
      @closeSelectedCardModal="cardSelected = undefined"
    />

    <div class="mb-5">
      <div class="card-search__search-fields">
        <input-field
          v-model="cardName"
          label="Card name"
          data-test="card-name"
          class="card-search__search-fields__card-name"
        />

        <select-field
          v-model="cardLanguage"
          label="Language"
          :options="languageOptions"
          data-test="card-language"
          class="card-search__search-fields__card-language"
        />
      </div>

      <div class="card-search__search-fields__search-methods">
        <button
          @click="handleSearchOnCollection"
          class="btn btn-outline-primary"
        >
          Search on collection
        </button>

        <button
          @click="handleSearchOnApi"
          class="btn btn-outline-info"
        >
          Full search
        </button>
      </div>
    </div>

    <div class="card-search__cards-list">
      <card-view
        v-for="card in cardsFound"
        :key="card.id"
        :card="card"
        @cardClick="handleCardClick(card)"
      />
    </div>
  </div>
</template>

<script>
import InputField from '@/components/form/InputField.vue'
import SelectField from '@/components/form/SelectField.vue'
import { mapActions } from 'vuex'
import formErrorHandler from '@/mixins/load-error-handler'
import CardView from '@/components/deck/CardView.vue'
import CardSelectedModal from '@/components/deck/CardSelectedModal.vue'

export default {
  name: 'CardSearch',

  components: {
    CardSelectedModal,
    CardView,
    InputField,
    SelectField
  },

  mixins: [formErrorHandler],

  data () {
    return {
      cardName: '',
      cardLanguage: 'en',
      cardsFound: [],
      cardSelected: undefined
    }
  },

  computed: {
    languageOptions () {
      return [
        { value: 'en', label: 'English' },
        { value: 'pt', label: 'Portuguese' }
      ]
    }
  },

  methods: {
    ...mapActions(['searchCards']),

    handleSearchOnCollection () {
      this.searchCards({
        name: this.cardName,
        language: this.cardLanguage,
        method: 'db'
      })
      .then(response => {
        this.cardsFound = response.data
      })
      .catch(error => this.handleLoadError(error))
    },

    handleSearchOnApi () {
      this.searchCards({
        name: this.cardName,
        language: this.cardLanguage,
        method: 'api'
      })
      .then(response => {
        this.cardsFound = response.data
      })
      .catch(error => {
        console.log(error)
        this.handleLoadError(error)
      })
    },

    handleCardClick (card) {
      this.cardSelected = card
      console.log(card)
    }
  }
}
</script>

<style lang="scss" scoped>
  .card-search {
    &__card-selected-modal {
        position: absolute;
        z-index: 2;
        background-color: rgba(#000000, 0.3);
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
      }

    &__search-fields {
      display: flex;
      flex-direction: row;
      gap: 1rem;

      &__card-name {
        width: 60%;
      }

      &__card-language {
        width: 30%;
      }

      &__search-methods {
        display: flex;
        flex-direction: row;
        gap: 1rem;
      }
    }

    &__cards-list {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 1rem;
    }
  }
</style>
