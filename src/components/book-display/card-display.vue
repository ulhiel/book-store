<template>
  <div class="card-display" @click="showBook()">
      <div class="main-picture">
          <img src="../../../public/img/image-1.png" alt="" style="width:100%;height:auto;">
      </div>
      <div class="book-title">
          Guru Aini
      </div>
      <div class="book-author">
          Andrea Hirata
      </div>
      <div class="book-price">
          Rp 72.000
      </div>
  </div>
</template>

<script>
export default {
    methods: {
        showBook(){
            this.$router.push('/book');
        }
    }
}
</script>

<style>
    
</style>