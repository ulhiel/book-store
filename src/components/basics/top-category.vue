<template>
  <div class="top-category">
      <div class="category-item has-dropdown">
          <router-link to="/category">SEMUA KATEGORI</router-link>
          <div class="dropdown d-none">
            <ul>
              <router-link to="/as"><li>Fiksi Populer</li></router-link>
              <router-link to="/asdg"><li>Filsafat dan Pemikiran</li></router-link>
            </ul>
          </div>
      </div>
      <div class="category-item">
        <a href="">FIKSI</a>
      </div>
      <div class="category-item">
        <a href="">PENGEMBANGAN DIRI</a>
      </div>
      <div class="category-item">
        <a href="">SEJARAH</a>
      </div>
      <div class="category-item">
        <a href="">FILSAFAT &amp; PEMIKIRAN</a>
      </div>
      <div class="category-item">
        <a href="">SAINS</a>
      </div>
      <div class="category-item">
        <a href="">AGAMA</a>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>