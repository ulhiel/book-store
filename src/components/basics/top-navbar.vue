<template>
  <div class="top-navbar">
      <div class="nav-toggle">
          <button class="btn nav-button"><font-awesome-icon icon="bars" /></button>
      </div>
      <div class="nav-brand">
          <router-link to="/">eKuilibrium</router-link>
      </div>
      <div class="nav-action">
          <div class="nav-search d-none d-lg-flex">
              <form class="form" style="width:100%">
                  <div class="input-group my-0">
                      <input type="text" class="form-control" placeholder='Coba Ketik "Bumi Manusia"' aria-label="Recipient's username" aria-describedby="basic-addon2">
                      <div class="input-group-append">
                          <button class="btn btn-secondary" type="button">Temukan</button>
                      </div>
                  </div>
              </form>
          </div>
          <button class="btn"><font-awesome-icon icon="search" class="nav-icon d-block d-lg-none"/></button>
          <div class="has-dropdown">
            <button class="btn nav-button" @click="toCart()"><font-awesome-icon icon="shopping-cart" class="nav-icon" /></button>
            <div class="card dropdown d-none" style="width:400px">
                <div class="title my-2 mx-2 text-left">
                    Keranjang Buku
                </div>
                <div class="items" style="max-height:250px;overflow:auto">
                    <navbar-cart-item></navbar-cart-item>
                    <navbar-cart-item></navbar-cart-item>
                    <navbar-cart-item></navbar-cart-item>
                </div>
                <div class="total d-flex justify-content-between py-3">
                    <div>Sub Total</div>
                    <div>Rp 142.000</div>
                </div>
                <div class="action">
                    <router-link to="/checkout" class="btn btn-dark btn-block mb-2">Lihat Keranjang</router-link>
                </div>
            </div>
          </div>
          <div class="has-dropdown user-menu">
            <button class="btn nav-button"><font-awesome-icon icon="user" class="nav-icon" /></button>
            <div class="card dropdown d-none" style="padding:0">
                <ul style="width:150px">
                    <button class="btn btn-outline-dark btn-block">Masuk</button>
                    <button class="btn btn-dark btn-block">Daftar</button>
                </ul>
            </div>
          </div>
      </div>
      <!-- <sidebar></sidebar> -->
  </div>
</template>

<script>
export default {
    data(){
        return {
            searchBar: true,
        }
    },
    methods: {
        toCart(){
            this.$router.push('/checkout')
        }
    }
}
</script>

<style scoped>
    .user-menu .dropdown ul {
        list-style: none;
        padding: 0.5rem;
        text-align: left;
    }

    .user-menu .dropdown ul li a {
        text-decoration: none;
        color: #0F2F4C;
        padding: 1rem 2rem 1rem 2rem;
        display: block;
        border-radius: 5px;
    }

    .user-menu .dropdown ul li a:hover {
        background-color: #F5F5F5;
    }

    .dropdown {
        display: none;
        position: absolute;
        right: 2rem;
        padding: 1rem;
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    }

    .nav-action .has-dropdown:hover .dropdown {
        display: block !important;
        align-items: center;
    }
</style>