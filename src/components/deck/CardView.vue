<template>
  <div
    class="card-view"
    @click="$emit('cardClick', card)"
  >
    <img
      :src="card.image_url"
      class="card-view__image"
      data-test="card-image"
    />
  </div>
</template>

<script>
export default {
  name: 'CardView',

  props: {
    card: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
  .card-view {
    &__image {
      width: 15%;
    }
  }
</style>
