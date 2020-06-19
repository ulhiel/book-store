<template>
  <div class="checkout-summary">
      <div class="container d-flex align-items-center justify-content-between py-3" style="height:100%">
          <!-- <div>Total Belanja</div> -->
          <div class="d-block text-left mx-3">
              <small><b>Total Harga</b></small>
              <div class="price" style="font-size:1.5rem">Rp 72.000</div>
          </div>
          <button class="btn btn-success">Checkout Sekarang</button>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    .checkout-summary {
        width: 100%;
        height: 75px;
        background-color: #FFFFFF;

        z-index: 99;

        position: sticky;
        bottom: 0;

        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    }
</style>