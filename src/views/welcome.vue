<template>
  <div class="base-container">
      <topMessage></topMessage>
      <topNavbar></topNavbar>
      <topCategory></topCategory>
  </div>
</template>

<script>
import topMessage from '../components/basics/top-message.vue'
import topNavbar from '../components/basics/top-navbar.vue'
import topCategory from '../components/basics/top-category.vue'

export default {
    components: {topMessage,topNavbar,topCategory}
}
</script>

<style>

</style>