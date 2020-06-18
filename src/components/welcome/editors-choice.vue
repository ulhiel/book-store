<template>
  <div class="editors-choice">
      <div class="title">EDITOR'S CHOICE</div>
      <div class="items">
        <bookCard></bookCard>
        <bookCard></bookCard>
        <bookCard></bookCard>
        <bookCard></bookCard>
        <bookCard></bookCard>
        <bookCard></bookCard>
        <bookCard></bookCard>
        <bookCard></bookCard>
      </div>
      <div class="mt-3"><button class="btn btn-outline-dark">Lihat Semuanya</button></div>
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