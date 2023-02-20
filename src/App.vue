<template>
  <div id="app">
    <router-view
      class="app"
    ></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>


<style lang="scss" scoped>
.app {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
}
</style>
