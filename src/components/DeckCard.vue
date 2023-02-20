<template>
  <div class="card col-3 me-2">
    <div class="card-body">
      <h3
        class="mb-2 text-center"
        data-test="name"
      >
        {{deck.name}}
      </h3>
      <div class="mb-3 d-flex justify-content-center">
        <h6
          class="badge rounded-pill text-center"
          :class="formatCollor(deck.format)"
          data-test="format"
        >
          {{deck.format}}
        </h6>
      </div>

      <router-link
        :to="{ name: 'deck-show', params: { id: deck.id } }"
        class="btn btn-outline-info w-100"
      >
        More info
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DeckCard',

  props: {
    deck: {
      type: Object,
      required: true
    }
  },

  methods: {
    formatCollor (format) {
      if (format === 'standard') { return 'bg-primary' }
      if (format === 'modern') { return 'bg-success' }
      if (format === 'commander') { return 'bg-secondary' }
      return ''
    }
  }
}
</script>

<style>

</style>
