<template>
  <div class="top-navbar">
      <div class="nav-toggle">
          <button class="btn"><font-awesome-icon icon="bars" /></button>
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
          <button class="btn"><font-awesome-icon icon="shopping-cart" class="nav-icon" /></button>
          <button class="btn"><font-awesome-icon icon="user" class="nav-icon" /></button>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            searchBar: true,
        }
    }
}
</script>

<style>

</style>