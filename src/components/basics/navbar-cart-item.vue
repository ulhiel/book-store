<template>
  <div class="navbar-cart-item d-flex text-left mt-3">
      <div class="image">
          <img src="../../../public/img/image-1.png" alt="" style="width:100px;height:auto;">
      </div>
      <div class="detail" style="flex-grow:1">
          <div class="book-title" style="font-size:1rem">
          Guru Aini
        </div>
        <div class="book-author">
            Andrea Hirata
        </div>
        <div class="book-price">
            Rp 72.000
        </div>
        <div class="book-purchase d-flex justify-content-end">
            <button class="btn nav-button"><font-awesome-icon icon="trash" /></button>
        </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    .navbar-cart-item {
        border-bottom: 1px #c5c5c5 solid;
    }
</style>