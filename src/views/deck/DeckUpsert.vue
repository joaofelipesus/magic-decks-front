<template>
  <main>
    <home-navbar class="mb-5" />

    <div class="container">
      <h2 class="mb-3">New deck</h2>

      <div>
        <form
          @submit.prevent="handleSubmit"
          data-test="deck-form"
        >
          <input-field
            label="Name"
            v-model="name"
            data-test="deck-name"
          />

          <select-field
            label="Format"
            v-model="format"
            :options="formatOptions"
            data-test="deck-format"
          />

          <text-area-field
            label="Description"
            v-model="description"
            data-test="deck-description"
          />

          <button
            class="btn btn-primary"
            type="submit"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  </main>
</template>

<script>
import HomeNavbar from '@/components/HomeNavbar'
import InputField from '@/components/form/InputField'
import SelectField from '@/components/form/SelectField'
import TextAreaField from '@/components/form/TextAreaField'
import { mapActions } from 'vuex'
import formErrorHandler from '@/mixins/form-error-handler'

export default {
  name: 'DeckUpsert',

  mixins: [formErrorHandler],

  components: {
    HomeNavbar,
    InputField,
    SelectField,
    TextAreaField
  },

  props: {
    formatOptions: {
      type: Array,
      default: () => [
        {label: 'Standard', value: 'standard'},
        {label: 'Modern', value: 'modern'},
        {label: 'Commander', value: 'commander'}
      ]
    }
  },

  data () {
    return {
      name: '',
      format: '',
      description: ''
    }
  },

  methods: {
    ...mapActions(['createDeck']),

    handleSubmit() {
      this.createDeck(this.payload())
        .then(response => {
          this.$router.push({ name: 'deck-show', params: { id: response.data.id } })
          this.$toast.success('Deck created successfully')
        })
        .catch(error => { this.handleResponseError(error)})
    },

    payload() {
      return {
        name: this.name,
        format: this.format,
        description: this.description
      }
    }
  }
}
</script>

<style>

</style>
