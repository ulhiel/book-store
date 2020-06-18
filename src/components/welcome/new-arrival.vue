<template>
  <div class="new-arrival">
      <div class="title">Barang Baru</div>
      <div class="items">
        <bookCard></bookCard>
        <bookCard></bookCard>
        <bookCard></bookCard>
        <bookCard></bookCard>
        <bookCard></bookCard>
        <bookCard></bookCard>
        <bookCard></bookCard>
      </div>
      <div class="mt-3"><button class="btn btn-outline-dark">Lihat Buku Baru yang Lain</button></div>
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