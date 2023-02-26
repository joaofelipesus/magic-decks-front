<template>
  <main>
    <home-navbar class="mb-4"/>

    <div class="container">
      <card-search />
    </div>
  </main>
</template>

<script>
import HomeNavbar from '@/components/HomeNavbar.vue'
import CardSearch from '@/components/deck/CardSearch.vue'

export default {
  name: 'DeckShow',

  components: {
    CardSearch,
    HomeNavbar
  },
}
</script>
