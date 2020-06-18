<template>
  <div class="base-container">
      <topMessage></topMessage>
      <topNavbar></topNavbar>
      <topCategory></topCategory>
      <welcomeBanner></welcomeBanner>
      <editorsChoice></editorsChoice>
      <newArrival></newArrival>
      <bestSelling></bestSelling>
      <bottomBanner></bottomBanner>
      <footerBottom></footerBottom>
  </div>
</template>

<script>
import topMessage from '../components/basics/top-message.vue'
import topNavbar from '../components/basics/top-navbar.vue'
import topCategory from '../components/basics/top-category.vue'
import welcomeBanner from '../components/welcome/top-banner.vue'
import editorsChoice from '../components/welcome/editors-choice.vue'
import footerBottom from '../components/basics/footer.vue'
import newArrival from '../components/welcome/new-arrival.vue'
import bestSelling from '../components/welcome/best-selling.vue'
import bottomBanner from '../components/welcome/bottom-banner.vue'

export default {
    components: {topMessage,topNavbar,topCategory,welcomeBanner,editorsChoice,footerBottom,newArrival,bestSelling,bottomBanner}
}
</script>

<style>

</style>