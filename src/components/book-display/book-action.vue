<template>
  <div class="action">
      <form>
            <div class="form-group row align-items-center my-0">
                <label for="filter" class="col-sm-3 col-form-label my-1 action-title">Ambil Sejumlah</label>
                <div class="col my-1">
                    <input type="number" name="jumlah" class="form-control" value="1">
                </div>
                <div class="col my-1">
                    <button class="btn btn-dark btn-block">Tambahkan ke Keranjang</button>
                </div>
            </div>
        </form>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    .action {
        background-color: #FFFFFF;
        width: 100%;
    }
    @media (max-width: 575.98px) {
        .action {
            display: block;
            position: sticky;
            bottom: 0;

            background-color: #FFFFFF;
            padding: 0.5rem 1rem 0.5rem 1rem;
        }

        .action .action-title {
            display: none;
        }
    }
</style>