<template>
  <div class="base-container">
      <top-message></top-message>
      <top-navbar></top-navbar>
      <top-category></top-category>
      <div class="container my-3">
          <div class="row">
              <div class="col-md-12 text-left">
                <div class="breadcrumb">Keranjang Belanja</div>
                <div class="category-title">
                    Keranjang Belanja
                </div>
                <div class="cart-items row">
                  <div class="col-md-6">
                    <cart-page-item class="my-3"></cart-page-item>
                  </div>
                  <div class="col-md-6">
                    <cart-page-item class="my-3"></cart-page-item>
                  </div>
                  <div class="col-md-6">
                    <cart-page-item class="my-3"></cart-page-item>
                  </div>
                </div>
              </div>
          </div>
      </div>
      <footer-bottom></footer-bottom>
      <checkout-summary></checkout-summary>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>