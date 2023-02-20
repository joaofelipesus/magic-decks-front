<template>
  <div id="app">

    <home-navbar />

    <router-view class="app"></router-view>
  </div>
</template>

<script>
import HomeNavbar from '@/components/HomeNavbar.vue'

export default {
  name: 'App',

  components: {
    HomeNavbar
  }
}
</script>


<style lang="scss" scoped>
.app {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
}
</style>
