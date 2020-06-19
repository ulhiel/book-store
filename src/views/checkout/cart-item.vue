<template>
  <div class="cart-item d-block align-items-center justify-content-between">
    <div class="item d-flex align-items-center">
        <img src="../../../public/img/image-1.png" alt="" class="checkout-item-image" style="width:200px;height:auto">
        <div class="detail" style="flex-grow:1">
            <div class="category">
                Fiksi Populer
            </div>
            <div class="dropdown-divider"></div>
            <div class="book-title">
                Guru Aini
            </div>
            <div class="book-author">
                Andrea Hirata
            </div>
            <div class="dropdown-divider"></div>
            <div class="price">
                Rp 72.000
            </div>
        </div>
    </div>
    <div class="cart-action d-flex justify-content-between mt-2">
        <button class="btn nav-button"><font-awesome-icon icon="trash" /></button>
        <div class="input-group mb-2" style="width:125px">
            <div class="input-group-prepend">
                <button class="btn btn-dark" type="button">-</button>
            </div>
            <input type="text" class="form-control text-center" placeholder="" aria-label="" aria-describedby="basic-addon1">
            <div class="input-group-append">
                <button class="btn btn-dark" type="button">+</button>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    .cart-item {
        border-radius: 5px;
        border: 1px solid #D1D1D1;

        padding: 1rem;
    }

    .category {
        font-size: 0.90rem;
    }

    .book-title {
        font-size: 1.5rem;
        font-weight: bold;
    }

    .price {
        font-weight: bold;
        font-size: 1.5rem;
    }

    @media (max-width: 575.98px) {
        .checkout-item-image {
            width: 100px !important;
        }
    }
</style>