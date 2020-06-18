<template>
  <div class="best-selling">
      <div class="title">Terlaris di Toko Kami</div>
      <div class="items">
        <bookCard></bookCard>
        <bookCard></bookCard>
        <bookCard></bookCard>
        <bookCard></bookCard>
        <bookCard></bookCard>
        <bookCard></bookCard>
        <bookCard></bookCard>
      </div>
      <div class="mt-3"><button class="btn btn-outline-dark">Lihat Buku Laris yang Lain</button></div>
  </div>
</template>

<script>
import bookCard from '../book-display/card-display.vue'
export default {
    components: {bookCard}
}
</script>

<style>

</style>